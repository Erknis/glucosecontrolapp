const habits = [
  { id: "water", title: "Agua antes de cada comida", detail: "Mantener hidratación ayuda a sostener una rutina más estable.", icon: "drop" },
  { id: "plate", title: "Plato con fibra y proteína", detail: "Prioriza vegetales, proteína y carbohidratos medidos.", icon: "plate" },
  { id: "walk", title: "Caminata suave después de comer", detail: "Movimiento simple para reforzar sensibilidad y constancia.", icon: "walk" },
  { id: "meal", title: "Registrar comida principal", detail: "Anota qué comiste para cruzar hábitos con tus mediciones.", icon: "note" },
  { id: "activity", title: "Actividad física", detail: "Registra caminata, ejercicio suave o movimiento del día.", icon: "walk" },
  { id: "medication", title: "Recordatorio de medicación", detail: "Marca solo si tu médico ya indicó una rutina de medicación.", icon: "shield" },
  { id: "sleep", title: "Preparar el sueño", detail: "Una noche más ordenada puede apoyar mejores decisiones.", icon: "moon" },
];

const config = window.CONTROLGLUCOSE_SUPABASE || {};
const supabaseClient = window.supabase && config.url && config.publishableKey
  ? window.supabase.createClient(config.url, config.publishableKey)
  : null;

const sessionKey = "controlglucose-current-profile";
const baseProfile = {
  userId: "",
  email: "",
  completed: [],
  checkins: [],
  cravingPauses: 0,
  accessStatus: "local",
};

let state = { ...baseProfile };

const loginScreen = document.querySelector("#loginScreen");
const memberScreen = document.querySelector("#memberScreen");
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const logoutBtn = document.querySelector("#logoutBtn");
const habitList = document.querySelector("#habitList");
const completedCount = document.querySelector("#completedCount");
const totalCount = document.querySelector("#totalCount");
const scoreText = document.querySelector("#scoreText");
const scoreCircle = document.querySelector("#scoreCircle");
const dailyMessage = document.querySelector("#dailyMessage");
const glucoseInput = document.querySelector("#glucoseInput");
const energyInput = document.querySelector("#energyInput");
const saveCheckinBtn = document.querySelector("#saveCheckinBtn");
const cravingBtn = document.querySelector("#cravingBtn");
const habitDate = document.querySelector("#habitDate");
const bars = document.querySelector("#bars");
const trackerCount = document.querySelector("#trackerCount");
const trackerMessage = document.querySelector("#trackerMessage");
const historyList = document.querySelector("#historyList");
const lastEntryCard = document.querySelector("#lastEntryCard");
const greetingText = document.querySelector("#greetingText");
const loginStatus = document.querySelector("#loginStatus");
const accessStatusTitle = document.querySelector("#accessStatusTitle");
const accessStatusCopy = document.querySelector("#accessStatusCopy");

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function profileKey(email) {
  return `controlglucose-profile:${email.trim().toLowerCase()}`;
}

function setLoginStatus(message, type = "") {
  loginStatus.textContent = message;
  loginStatus.dataset.type = type;
}

function localLoadProfile(email) {
  const saved = localStorage.getItem(profileKey(email));
  if (!saved) return { ...baseProfile, email, accessStatus: "local" };
  try {
    return { ...baseProfile, ...JSON.parse(saved), email, accessStatus: "local" };
  } catch {
    return { ...baseProfile, email, accessStatus: "local" };
  }
}

function localSaveProfile() {
  if (!state.email) return;
  localStorage.setItem(sessionKey, state.email);
  localStorage.setItem(profileKey(state.email), JSON.stringify(state));
}

async function signInWithExistingAccount(email, password) {
  const login = await supabaseClient.auth.signInWithPassword({ email, password });
  if (!login.error) return login.data.session;
  throw new Error("Email o contraseña incorrectos. Usa los datos enviados después de tu compra.");
}

async function ensureProfile(user) {
  await supabaseClient
    .from("profiles")
    .upsert({ id: user.id, email: user.email }, { onConflict: "id" });
}

async function getAccessStatus(user) {
  const { data, error } = await supabaseClient
    .from("entitlements")
    .select("status, access_level, product_key")
    .or(`user_id.eq.${user.id},buyer_email.eq.${user.email}`)
    .eq("status", "active")
    .limit(1);

  if (error) return "connected";
  if (data && data.length > 0) return "active";
  return config.requireEntitlement ? "blocked" : "connected";
}

async function loadRemoteState(user) {
  const [glucoseResult, habitResult, accessStatus] = await Promise.all([
    supabaseClient
      .from("glucose_entries")
      .select("id, glucose_mg_dl, energy_level, measured_at")
      .order("measured_at", { ascending: true })
      .limit(50),
    supabaseClient
      .from("habit_logs")
      .select("id, habit_key, completed_on, created_at")
      .order("completed_on", { ascending: false })
      .limit(100),
    getAccessStatus(user),
  ]);

  if (accessStatus === "blocked") {
    throw new Error("Tu email aún no tiene acceso activo. Verifica que sea el mismo email usado en la compra.");
  }

  if (glucoseResult.error) throw glucoseResult.error;
  if (habitResult.error) throw habitResult.error;

  state = {
    ...baseProfile,
    userId: user.id,
    email: user.email,
    accessStatus,
    checkins: glucoseResult.data.map((item) => ({
      id: item.id,
      glucose: item.glucose_mg_dl,
      energy: item.energy_level || "Estable",
      createdAt: item.measured_at,
    })),
    completed: habitResult.data.map((item) => ({
      remoteId: item.id,
      id: item.habit_key,
      date: item.completed_on,
      createdAt: item.created_at,
    })),
  };
}

async function saveRemoteCheckin(glucose, energy) {
  const { data, error } = await supabaseClient
    .from("glucose_entries")
    .insert({
      user_id: state.userId,
      glucose_mg_dl: glucose,
      energy_level: energy,
    })
    .select("id, glucose_mg_dl, energy_level, measured_at")
    .single();

  if (error) throw error;

  state.checkins = [
    ...state.checkins,
    {
      id: data.id,
      glucose: data.glucose_mg_dl,
      energy: data.energy_level || "Estable",
      createdAt: data.measured_at,
    },
  ];
}

async function toggleRemoteHabit(id) {
  const today = todayKey();
  const existing = state.completed.find((item) => item.id === id && item.date === today);

  if (existing) {
    const { error } = await supabaseClient
      .from("habit_logs")
      .delete()
      .eq("id", existing.remoteId);
    if (error) throw error;
    state.completed = state.completed.filter((item) => item.remoteId !== existing.remoteId);
    return;
  }

  const { data, error } = await supabaseClient
    .from("habit_logs")
    .insert({
      user_id: state.userId,
      habit_key: id,
      completed_on: today,
    })
    .select("id, habit_key, completed_on, created_at")
    .single();

  if (error) throw error;

  state.completed = [
    ...state.completed,
    {
      remoteId: data.id,
      id: data.habit_key,
      date: data.completed_on,
      createdAt: data.created_at,
    },
  ];
}

function setScreen() {
  const loggedIn = Boolean(state.email);
  loginScreen.classList.toggle("is-active", !loggedIn);
  memberScreen.classList.toggle("is-active", loggedIn);
}

function iconSvg(type) {
  const icons = {
    drop: '<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" />',
    plate: '<circle cx="12" cy="12" r="8" /><path d="M8 12h8M12 8v8" />',
    walk: '<path d="M13 5.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" /><path d="M10 21l2-7 3 3v4M8 10l4-2 3 2 2 4M5 21l4-5" />',
    note: '<path d="M6 4h9l3 3v13H6z" /><path d="M15 4v4h4M9 12h6M9 16h5" />',
    moon: '<path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />',
    shield: '<path d="M12 3 19 6v5c0 4.7-2.8 8.1-7 10-4.2-1.9-7-5.3-7-10V6z" /><path d="M9 12l2 2 4-4" />',
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[type]}</svg>`;
}

function renderHabits() {
  const today = todayKey();
  const completedToday = state.completed.filter((item) => item.date === today).map((item) => item.id);

  habitList.innerHTML = habits
    .map((habit) => {
      const done = completedToday.includes(habit.id);
      return `
        <article class="habit-card ${done ? "done" : ""}">
          <div class="habit-icon">${iconSvg(habit.icon)}</div>
          <div>
            <h3>${habit.title}</h3>
            <p>${habit.detail}</p>
          </div>
          <button class="habit-toggle" data-habit="${habit.id}" aria-label="Marcar ${habit.title}">
            ${done ? "✓" : ""}
          </button>
        </article>
      `;
    })
    .join("");
}

function updateProgress() {
  const today = todayKey();
  const completedToday = state.completed.filter((item) => item.date === today).length;
  const total = habits.length;
  const percent = Math.round((completedToday / total) * 100);
  const circumference = 302;

  completedCount.textContent = completedToday;
  totalCount.textContent = total;
  scoreText.textContent = `${percent}%`;
  scoreCircle.style.strokeDashoffset = `${circumference - (circumference * percent) / 100}`;

  if (completedToday === 0) {
    dailyMessage.textContent = "Tu perfil empieza vacío. Registra tu primer dato real para comenzar.";
  } else if (percent < 80) {
    dailyMessage.textContent = "Buen ritmo. Completa una acción más para reforzar tu día.";
  } else {
    dailyMessage.textContent = "Excelente constancia. Revisa tus registros para ver patrones.";
  }
}

function renderBars() {
  const recent = state.checkins.slice(-7);
  trackerCount.textContent = recent.length ? `${recent.length} registros` : "Sin datos";

  if (!recent.length) {
    bars.innerHTML = `<div class="empty-chart">Guarda tus mediciones para crear tu gráfico personal.</div>`;
    trackerMessage.textContent = "Cuando guardes tus registros diarios, aquí verás tu evolución real. No usamos datos de ejemplo.";
    return;
  }

  trackerMessage.textContent = "Este gráfico usa solamente los registros guardados en tu perfil.";
  const max = Math.max(...recent.map((item) => item.glucose), 160);
  bars.innerHTML = recent
    .map((item) => {
      const height = Math.max(18, Math.round((item.glucose / max) * 100));
      const label = new Date(item.createdAt).toLocaleDateString("es", { weekday: "short" });
      return `
        <div class="bar">
          <i style="height:${height}%"></i>
          <span>${label}</span>
        </div>
      `;
    })
    .join("");
}

function renderHistory() {
  const recent = state.checkins.slice(-5).reverse();
  if (!recent.length) {
    historyList.innerHTML = `<div class="empty-state">Aún no hay registros. Guarda tu primera medición para construir tu historial.</div>`;
    lastEntryCard.innerHTML = `<strong>Sin registros todavía</strong><p>Tu última medición aparecerá aquí cuando guardes un check-in.</p>`;
    return;
  }

  const latest = recent[0];
  lastEntryCard.innerHTML = `
    <strong>Último registro: ${latest.glucose} mg/dL</strong>
    <p>Energía: ${latest.energy}. Guardado ${new Date(latest.createdAt).toLocaleString("es", { dateStyle: "short", timeStyle: "short" })}.</p>
  `;

  historyList.innerHTML = recent
    .map((item) => `
      <div class="history-row">
        <span>${new Date(item.createdAt).toLocaleDateString("es", { day: "2-digit", month: "short" })}</span>
        <strong>${item.glucose} mg/dL</strong>
        <em>${item.energy}</em>
      </div>
    `)
    .join("");
}

function renderDate() {
  const formatter = new Intl.DateTimeFormat("es", { weekday: "short", day: "numeric", month: "short" });
  habitDate.textContent = formatter.format(new Date());
}

function renderProfile() {
  if (!state.email) return;
  const name = state.email.split("@")[0].slice(0, 2).toUpperCase();
  document.querySelectorAll(".avatar-btn, .avatar-large").forEach((node) => {
    node.textContent = name || "TU";
  });
  greetingText.textContent = `Buenos días, ${state.email.split("@")[0]}`;

  const status = {
    active: ["Acceso Hotmart activo", "Tu compra está confirmada y tu perfil se sincroniza con Supabase."],
    connected: ["Supabase conectado", "Tu perfil ya guarda datos reales. La liberación Hotmart quedará estricta al activar requireEntitlement."],
    local: ["Modo local", "No se pudo conectar con Supabase; los datos se guardan solo en este dispositivo."],
  }[state.accessStatus] || ["Acceso conectado", "Tu perfil se sincroniza con Supabase."];

  accessStatusTitle.textContent = status[0];
  accessStatusCopy.textContent = status[1];
}

function render() {
  setScreen();
  glucoseInput.value = "";
  energyInput.value = "Estable";
  renderProfile();
  renderHabits();
  updateProgress();
  renderBars();
  renderHistory();
  renderDate();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  setLoginStatus("Conectando...", "");

  if (supabaseClient) {
    try {
      const session = await signInWithExistingAccount(email, password);
      await ensureProfile(session.user);
      await loadRemoteState(session.user);
      setLoginStatus("");
      render();
      memberScreen.scrollTop = 0;
      return;
    } catch (error) {
      setLoginStatus(error.message || "No se pudo conectar con Supabase.", "error");
      return;
    }
  }

  state = localLoadProfile(email);
  localSaveProfile();
  setLoginStatus("Modo local activo.", "");
  render();
  memberScreen.scrollTop = 0;
});

logoutBtn.addEventListener("click", async () => {
  if (supabaseClient) await supabaseClient.auth.signOut();
  localStorage.removeItem(sessionKey);
  state = { ...baseProfile };
  render();
});

habitList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-habit]");
  if (!button) return;
  const id = button.dataset.habit;
  button.disabled = true;

  try {
    if (supabaseClient && state.userId) {
      await toggleRemoteHabit(id);
    } else {
      const today = todayKey();
      const exists = state.completed.some((item) => item.id === id && item.date === today);
      state.completed = exists
        ? state.completed.filter((item) => !(item.id === id && item.date === today))
        : [...state.completed, { id, date: today, createdAt: new Date().toISOString() }];
      localSaveProfile();
    }
    render();
  } catch (error) {
    alert(error.message || "No se pudo actualizar el hábito.");
  } finally {
    button.disabled = false;
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.tab}Panel`).classList.add("is-active");
  });
});

saveCheckinBtn.addEventListener("click", async () => {
  const glucose = Number(glucoseInput.value);
  if (!glucose) {
    saveCheckinBtn.textContent = "Ingresa glucosa";
    setTimeout(() => {
      saveCheckinBtn.textContent = "Guardar registro";
    }, 1200);
    return;
  }

  saveCheckinBtn.disabled = true;
  saveCheckinBtn.textContent = "Guardando...";

  try {
    if (supabaseClient && state.userId) {
      await saveRemoteCheckin(glucose, energyInput.value);
    } else {
      state.checkins = [
        ...state.checkins,
        { glucose, energy: energyInput.value, createdAt: new Date().toISOString() },
      ];
      localSaveProfile();
    }
    render();
    saveCheckinBtn.textContent = "Registro guardado";
  } catch (error) {
    saveCheckinBtn.textContent = "Error al guardar";
    alert(error.message || "No se pudo guardar el registro.");
  } finally {
    setTimeout(() => {
      saveCheckinBtn.disabled = false;
      saveCheckinBtn.textContent = "Guardar registro";
    }, 1200);
  }
});

cravingBtn.addEventListener("click", () => {
  state.cravingPauses += 1;
  if (!state.userId) localSaveProfile();
  cravingBtn.textContent = `Pausa ${state.cravingPauses}`;
  setTimeout(() => {
    cravingBtn.textContent = "Iniciar pausa";
  }, 1400);
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./service-worker.js");
}

async function bootstrap() {
  if (!supabaseClient) {
    const email = localStorage.getItem(sessionKey);
    state = email ? localLoadProfile(email) : { ...baseProfile };
    render();
    return;
  }

  try {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session?.user) {
      await ensureProfile(data.session.user);
      await loadRemoteState(data.session.user);
    }
  } catch {
    await supabaseClient.auth.signOut();
    state = { ...baseProfile };
  }

  render();
}

bootstrap();
