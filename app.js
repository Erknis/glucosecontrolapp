const habits = [
  { id: "water", titleKey: "habitWaterTitle", detailKey: "habitWaterDetail", icon: "drop" },
  { id: "plate", titleKey: "habitPlateTitle", detailKey: "habitPlateDetail", icon: "plate" },
  { id: "walk", titleKey: "habitWalkTitle", detailKey: "habitWalkDetail", icon: "walk" },
  { id: "meal", titleKey: "habitMealTitle", detailKey: "habitMealDetail", icon: "note" },
  { id: "activity", titleKey: "habitActivityTitle", detailKey: "habitActivityDetail", icon: "walk" },
  { id: "medication", titleKey: "habitMedicationTitle", detailKey: "habitMedicationDetail", icon: "shield" },
  { id: "sleep", titleKey: "habitSleepTitle", detailKey: "habitSleepDetail", icon: "moon" },
];

const translations = {
  es: {
    loginIntro: "Accede con los datos enviados después de tu compra.",
    emailLabel: "Email",
    passwordLabel: "Contraseña",
    loginButton: "Entrar",
    medicalNotice: "Herramienta educativa de organización. No sustituye consejo, diagnóstico, tratamiento ni medicación.",
    homeTitle: "Tu rutina de hoy",
    ofText: "de",
    habitsCompleted: "hábitos completados",
    quickCheckin: "Check-in rápido",
    glucoseLabel: "Glucosa",
    energyLabel: "Energía",
    saveRecord: "Guardar registro",
    cravingTitle: "Antes de comer por impulso",
    cravingCopy: "Haz una pausa de 2 minutos, toma agua y registra qué sientes. El objetivo es reconocer patrones, no castigarte.",
    startPause: "Iniciar pausa",
    recommendedHabits: "Hábitos recomendados",
    weeklyControl: "Control semanal",
    recentHistory: "Historial reciente",
    yourProfile: "Tu perfil",
    earlySigns: "Señales tempranas",
    routineSupport: "Apoyo de rutina",
    microguides: "Microguías",
    profileAccessTitle: "Tu acceso está activo",
    profileAccessCopy: "Área de miembros enfocada en seguimiento personal, no en lectura de PDFs.",
    languageLabel: "Idioma del app",
    changePasswordTitle: "Cambiar contraseña",
    newPasswordLabel: "Nueva contraseña",
    confirmPasswordLabel: "Confirmar contraseña",
    updatePasswordButton: "Actualizar contraseña",
    firstPasswordTitle: "Crea tu contraseña personal",
    firstPasswordCopy: "Por seguridad, cambia la contraseña temporal antes de usar tu panel.",
    saveNewPasswordButton: "Guardar y entrar",
    footerNotice: "App educativo de apoyo. Consulta a tu profesional de salud antes de cambiar medicación, dieta o rutina clínica.",
    tabToday: "Hoy",
    tabControl: "Control",
    tabGuides: "Guías",
    tabProfile: "Perfil",
    emptyStart: "Tu perfil empieza vacío. Registra tu primer dato real para comenzar.",
    goodRhythm: "Buen ritmo. Completa una acción más para reforzar tu día.",
    excellentRhythm: "Excelente constancia. Revisa tus registros para ver patrones.",
    trackerEmpty: "Cuando guardes tus registros diarios, aquí verás tu evolución real. No usamos datos de ejemplo.",
    trackerReal: "Este gráfico usa solamente los registros guardados en tu perfil.",
    noRecordsChart: "Guarda tus mediciones para crear tu gráfico personal.",
    noRecords: "Aún no hay registros. Guarda tu primera medición para construir tu historial.",
    noLastEntry: "Sin registros todavía",
    noLastEntryCopy: "Tu última medición aparecerá aquí cuando guardes un check-in.",
    lastEntry: "Último registro",
    energyText: "Energía",
    savedText: "Guardado",
    connectedText: "Conectando...",
    loginError: "Email o contraseña incorrectos. Usa los datos enviados después de tu compra.",
    supabaseError: "No se pudo conectar con Supabase.",
    blockedAccess: "Tu email aún no tiene acceso activo. Verifica que sea el mismo email usado en la compra.",
    passwordMin: "Usa una contraseña de al menos 8 caracteres.",
    passwordMismatch: "Las contraseñas no coinciden.",
    passwordSaving: "Guardando contraseña...",
    passwordSaved: "Contraseña actualizada.",
    passwordError: "No se pudo actualizar la contraseña.",
    enterGlucose: "Ingresa glucosa",
    saving: "Guardando...",
    recordSaved: "Registro guardado",
    saveError: "Error al guardar",
    habitUpdateError: "No se pudo actualizar el hábito.",
    activeStatusTitle: "Acceso Hotmart activo",
    activeStatusCopy: "Tu compra está confirmada y tu perfil se sincroniza con Supabase.",
    connectedStatusTitle: "Supabase conectado",
    connectedStatusCopy: "Tu perfil ya guarda datos reales. La liberación Hotmart quedará estricta al activar requireEntitlement.",
    localStatusTitle: "Modo local",
    localStatusCopy: "No se pudo conectar con Supabase; los datos se guardan solo en este dispositivo.",
    habitWaterTitle: "Agua antes de cada comida",
    habitWaterDetail: "Mantener hidratación ayuda a sostener una rutina más estable.",
    habitPlateTitle: "Plato con fibra y proteína",
    habitPlateDetail: "Prioriza vegetales, proteína y carbohidratos medidos.",
    habitWalkTitle: "Caminata suave después de comer",
    habitWalkDetail: "Movimiento simple para reforzar sensibilidad y constancia.",
    habitMealTitle: "Registrar comida principal",
    habitMealDetail: "Anota qué comiste para cruzar hábitos con tus mediciones.",
    habitActivityTitle: "Actividad física",
    habitActivityDetail: "Registra caminata, ejercicio suave o movimiento del día.",
    habitMedicationTitle: "Recordatorio de medicación",
    habitMedicationDetail: "Marca solo si tu médico ya indicó una rutina de medicación.",
    habitSleepTitle: "Preparar el sueño",
    habitSleepDetail: "Una noche más ordenada puede apoyar mejores decisiones.",
  },
  pt: {
    loginIntro: "Acesse com os dados enviados depois da sua compra.",
    emailLabel: "Email",
    passwordLabel: "Senha",
    loginButton: "Entrar",
    medicalNotice: "Ferramenta educativa de organização. Não substitui conselho, diagnóstico, tratamento nem medicação.",
    homeTitle: "Sua rotina de hoje",
    ofText: "de",
    habitsCompleted: "hábitos concluídos",
    quickCheckin: "Check-in rápido",
    glucoseLabel: "Glicose",
    energyLabel: "Energia",
    saveRecord: "Salvar registro",
    cravingTitle: "Antes de comer por impulso",
    cravingCopy: "Faça uma pausa de 2 minutos, tome água e registre o que sente. O objetivo é reconhecer padrões, não se punir.",
    startPause: "Iniciar pausa",
    recommendedHabits: "Hábitos recomendados",
    weeklyControl: "Controle semanal",
    recentHistory: "Histórico recente",
    yourProfile: "Seu perfil",
    earlySigns: "Sinais iniciais",
    routineSupport: "Apoio de rotina",
    microguides: "Microguias",
    profileAccessTitle: "Seu acesso está ativo",
    profileAccessCopy: "Área de membros focada em acompanhamento pessoal, não em leitura de PDFs.",
    languageLabel: "Idioma do app",
    changePasswordTitle: "Trocar senha",
    newPasswordLabel: "Nova senha",
    confirmPasswordLabel: "Confirmar senha",
    updatePasswordButton: "Atualizar senha",
    firstPasswordTitle: "Crie sua senha pessoal",
    firstPasswordCopy: "Por segurança, troque a senha temporária antes de usar seu painel.",
    saveNewPasswordButton: "Salvar e entrar",
    footerNotice: "App educativo de apoio. Consulte seu profissional de saúde antes de mudar medicação, dieta ou rotina clínica.",
    tabToday: "Hoje",
    tabControl: "Controle",
    tabGuides: "Guias",
    tabProfile: "Perfil",
    emptyStart: "Seu perfil começa vazio. Registre seu primeiro dado real para começar.",
    goodRhythm: "Bom ritmo. Complete mais uma ação para reforçar seu dia.",
    excellentRhythm: "Excelente constância. Revise seus registros para ver padrões.",
    trackerEmpty: "Quando salvar seus registros diários, aqui você verá sua evolução real. Não usamos dados de exemplo.",
    trackerReal: "Este gráfico usa somente os registros salvos no seu perfil.",
    noRecordsChart: "Salve suas medições para criar seu gráfico pessoal.",
    noRecords: "Ainda não há registros. Salve sua primeira medição para construir seu histórico.",
    noLastEntry: "Sem registros ainda",
    noLastEntryCopy: "Sua última medição aparecerá aqui quando você salvar um check-in.",
    lastEntry: "Último registro",
    energyText: "Energia",
    savedText: "Salvo",
    connectedText: "Conectando...",
    loginError: "Email ou senha incorretos. Use os dados enviados depois da sua compra.",
    supabaseError: "Não foi possível conectar com o Supabase.",
    blockedAccess: "Seu email ainda não tem acesso ativo. Verifique se é o mesmo email usado na compra.",
    passwordMin: "Use uma senha com pelo menos 8 caracteres.",
    passwordMismatch: "As senhas não coincidem.",
    passwordSaving: "Salvando senha...",
    passwordSaved: "Senha atualizada.",
    passwordError: "Não foi possível atualizar a senha.",
    enterGlucose: "Informe a glicose",
    saving: "Salvando...",
    recordSaved: "Registro salvo",
    saveError: "Erro ao salvar",
    habitUpdateError: "Não foi possível atualizar o hábito.",
    activeStatusTitle: "Acesso Hotmart ativo",
    activeStatusCopy: "Sua compra está confirmada e seu perfil sincroniza com o Supabase.",
    connectedStatusTitle: "Supabase conectado",
    connectedStatusCopy: "Seu perfil já salva dados reais. A liberação Hotmart ficará rígida ao ativar requireEntitlement.",
    localStatusTitle: "Modo local",
    localStatusCopy: "Não foi possível conectar com o Supabase; os dados ficam só neste dispositivo.",
    habitWaterTitle: "Água antes de cada refeição",
    habitWaterDetail: "Manter hidratação ajuda a sustentar uma rotina mais estável.",
    habitPlateTitle: "Prato com fibra e proteína",
    habitPlateDetail: "Priorize vegetais, proteína e carboidratos medidos.",
    habitWalkTitle: "Caminhada leve após comer",
    habitWalkDetail: "Movimento simples para reforçar sensibilidade e constância.",
    habitMealTitle: "Registrar refeição principal",
    habitMealDetail: "Anote o que comeu para cruzar hábitos com suas medições.",
    habitActivityTitle: "Atividade física",
    habitActivityDetail: "Registre caminhada, exercício leve ou movimento do dia.",
    habitMedicationTitle: "Lembrete de medicação",
    habitMedicationDetail: "Marque apenas se seu médico já indicou uma rotina de medicação.",
    habitSleepTitle: "Preparar o sono",
    habitSleepDetail: "Uma noite mais organizada pode apoiar melhores decisões.",
  },
  en: {
    loginIntro: "Sign in with the credentials sent after your purchase.",
    emailLabel: "Email",
    passwordLabel: "Password",
    loginButton: "Sign in",
    medicalNotice: "Educational organization tool. It does not replace medical advice, diagnosis, treatment, or medication.",
    homeTitle: "Today's routine",
    ofText: "of",
    habitsCompleted: "habits completed",
    quickCheckin: "Quick check-in",
    glucoseLabel: "Glucose",
    energyLabel: "Energy",
    saveRecord: "Save record",
    cravingTitle: "Before eating on impulse",
    cravingCopy: "Pause for 2 minutes, drink water, and log how you feel. The goal is recognizing patterns, not punishment.",
    startPause: "Start pause",
    recommendedHabits: "Recommended habits",
    weeklyControl: "Weekly control",
    recentHistory: "Recent history",
    yourProfile: "Your profile",
    earlySigns: "Early signs",
    routineSupport: "Routine support",
    microguides: "Microguides",
    profileAccessTitle: "Your access is active",
    profileAccessCopy: "Member area focused on personal tracking, not PDF reading.",
    languageLabel: "App language",
    changePasswordTitle: "Change password",
    newPasswordLabel: "New password",
    confirmPasswordLabel: "Confirm password",
    updatePasswordButton: "Update password",
    firstPasswordTitle: "Create your personal password",
    firstPasswordCopy: "For security, change the temporary password before using your dashboard.",
    saveNewPasswordButton: "Save and enter",
    footerNotice: "Educational support app. Consult your health professional before changing medication, diet, or clinical routine.",
    tabToday: "Today",
    tabControl: "Control",
    tabGuides: "Guides",
    tabProfile: "Profile",
    emptyStart: "Your profile starts empty. Save your first real entry to begin.",
    goodRhythm: "Good pace. Complete one more action to strengthen your day.",
    excellentRhythm: "Excellent consistency. Review your records to see patterns.",
    trackerEmpty: "When you save daily records, your real progress will appear here. We do not use sample data.",
    trackerReal: "This chart only uses records saved in your profile.",
    noRecordsChart: "Save your measurements to create your personal chart.",
    noRecords: "No records yet. Save your first measurement to build your history.",
    noLastEntry: "No records yet",
    noLastEntryCopy: "Your latest measurement will appear here after a check-in.",
    lastEntry: "Latest record",
    energyText: "Energy",
    savedText: "Saved",
    connectedText: "Connecting...",
    loginError: "Incorrect email or password. Use the credentials sent after your purchase.",
    supabaseError: "Could not connect to Supabase.",
    blockedAccess: "Your email does not have active access yet. Check that it matches the purchase email.",
    passwordMin: "Use a password with at least 8 characters.",
    passwordMismatch: "Passwords do not match.",
    passwordSaving: "Saving password...",
    passwordSaved: "Password updated.",
    passwordError: "Could not update password.",
    enterGlucose: "Enter glucose",
    saving: "Saving...",
    recordSaved: "Record saved",
    saveError: "Save error",
    habitUpdateError: "Could not update the habit.",
    activeStatusTitle: "Active Hotmart access",
    activeStatusCopy: "Your purchase is confirmed and your profile syncs with Supabase.",
    connectedStatusTitle: "Supabase connected",
    connectedStatusCopy: "Your profile already saves real data. Hotmart access becomes strict when requireEntitlement is enabled.",
    localStatusTitle: "Local mode",
    localStatusCopy: "Could not connect to Supabase; data is stored only on this device.",
    habitWaterTitle: "Water before each meal",
    habitWaterDetail: "Staying hydrated helps maintain a more stable routine.",
    habitPlateTitle: "Fiber and protein plate",
    habitPlateDetail: "Prioritize vegetables, protein, and measured carbohydrates.",
    habitWalkTitle: "Gentle walk after eating",
    habitWalkDetail: "Simple movement to reinforce sensitivity and consistency.",
    habitMealTitle: "Log main meal",
    habitMealDetail: "Write down what you ate to compare habits with measurements.",
    habitActivityTitle: "Physical activity",
    habitActivityDetail: "Log walking, gentle exercise, or movement for the day.",
    habitMedicationTitle: "Medication reminder",
    habitMedicationDetail: "Mark only if your doctor has already prescribed a medication routine.",
    habitSleepTitle: "Prepare for sleep",
    habitSleepDetail: "A more organized night can support better decisions.",
  },
};

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
  language: "es",
  mustChangePassword: false,
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
const languageSelect = document.querySelector("#languageSelect");
const passwordModal = document.querySelector("#passwordModal");
const firstPasswordForm = document.querySelector("#firstPasswordForm");
const firstNewPassword = document.querySelector("#firstNewPassword");
const firstConfirmPassword = document.querySelector("#firstConfirmPassword");
const firstPasswordStatus = document.querySelector("#firstPasswordStatus");
const profilePasswordForm = document.querySelector("#profilePasswordForm");
const profileNewPassword = document.querySelector("#profileNewPassword");
const profileConfirmPassword = document.querySelector("#profileConfirmPassword");
const profilePasswordStatus = document.querySelector("#profilePasswordStatus");

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function profileKey(email) {
  return `controlglucose-profile:${email.trim().toLowerCase()}`;
}

function currentLanguage() {
  return translations[state.language] ? state.language : "es";
}

function t(key) {
  return translations[currentLanguage()][key] || translations.es[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage();
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  if (languageSelect) languageSelect.value = currentLanguage();
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
  throw new Error(t("loginError"));
}

async function ensureProfile(user) {
  await supabaseClient
    .from("profiles")
    .upsert({ id: user.id, email: user.email }, { onConflict: "id" });
}

async function loadProfileSettings(user) {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("must_change_password, preferred_language")
    .eq("id", user.id)
    .maybeSingle();

  if (error) return { mustChangePassword: false, language: currentLanguage() };

  return {
    mustChangePassword: Boolean(data?.must_change_password),
    language: translations[data?.preferred_language] ? data.preferred_language : currentLanguage(),
  };
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
    throw new Error(t("blockedAccess"));
  }

  if (glucoseResult.error) throw glucoseResult.error;
  if (habitResult.error) throw habitResult.error;

  const profileSettings = await loadProfileSettings(user);

  state = {
    ...baseProfile,
    userId: user.id,
    email: user.email,
    accessStatus,
    language: profileSettings.language,
    mustChangePassword: profileSettings.mustChangePassword,
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

async function saveProfileSettings(updates) {
  if (!supabaseClient || !state.userId) {
    state = { ...state, ...updates };
    localSaveProfile();
    return;
  }

  const payload = {};
  if ("language" in updates) payload.preferred_language = updates.language;
  if ("mustChangePassword" in updates) payload.must_change_password = updates.mustChangePassword;

  const { error } = await supabaseClient
    .from("profiles")
    .update(payload)
    .eq("id", state.userId);

  if (error) throw error;
  state = { ...state, ...updates };
}

function setPasswordModal(open) {
  passwordModal.classList.toggle("is-active", open);
  passwordModal.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("modal-open", open);
  if (open) setTimeout(() => firstNewPassword.focus(), 80);
}

function validatePasswordPair(password, confirmation) {
  if (!password || password.length < 8) return t("passwordMin");
  if (password !== confirmation) return t("passwordMismatch");
  return "";
}

function setFormStatus(node, message, type = "") {
  node.textContent = message;
  node.dataset.type = type;
}

async function updateAccountPassword(password) {
  if (!supabaseClient) {
    await saveProfileSettings({ mustChangePassword: false });
    return;
  }

  const { error } = await supabaseClient.auth.updateUser({ password });
  if (error) throw error;
  await saveProfileSettings({ mustChangePassword: false });
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
      const title = t(habit.titleKey);
      return `
        <article class="habit-card ${done ? "done" : ""}">
          <div class="habit-icon">${iconSvg(habit.icon)}</div>
          <div>
            <h3>${title}</h3>
            <p>${t(habit.detailKey)}</p>
          </div>
          <button class="habit-toggle" data-habit="${habit.id}" aria-label="${title}">
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
    dailyMessage.textContent = t("emptyStart");
  } else if (percent < 80) {
    dailyMessage.textContent = t("goodRhythm");
  } else {
    dailyMessage.textContent = t("excellentRhythm");
  }
}

function renderBars() {
  const recent = state.checkins.slice(-7);
  trackerCount.textContent = recent.length ? `${recent.length} registros` : "Sin datos";

  if (!recent.length) {
    bars.innerHTML = `<div class="empty-chart">${t("noRecordsChart")}</div>`;
    trackerMessage.textContent = t("trackerEmpty");
    return;
  }

  trackerMessage.textContent = t("trackerReal");
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
    historyList.innerHTML = `<div class="empty-state">${t("noRecords")}</div>`;
    lastEntryCard.innerHTML = `<strong>${t("noLastEntry")}</strong><p>${t("noLastEntryCopy")}</p>`;
    return;
  }

  const latest = recent[0];
  lastEntryCard.innerHTML = `
    <strong>${t("lastEntry")}: ${latest.glucose} mg/dL</strong>
    <p>${t("energyText")}: ${latest.energy}. ${t("savedText")} ${new Date(latest.createdAt).toLocaleString(currentLanguage(), { dateStyle: "short", timeStyle: "short" })}.</p>
  `;

  historyList.innerHTML = recent
    .map((item) => `
      <div class="history-row">
        <span>${new Date(item.createdAt).toLocaleDateString(currentLanguage(), { day: "2-digit", month: "short" })}</span>
        <strong>${item.glucose} mg/dL</strong>
        <em>${item.energy}</em>
      </div>
    `)
    .join("");
}

function renderDate() {
  const formatter = new Intl.DateTimeFormat(currentLanguage(), { weekday: "short", day: "numeric", month: "short" });
  habitDate.textContent = formatter.format(new Date());
}

function renderProfile() {
  if (!state.email) return;
  const name = state.email.split("@")[0].slice(0, 2).toUpperCase();
  document.querySelectorAll(".avatar-btn, .avatar-large").forEach((node) => {
    node.textContent = name || "TU";
  });
  greetingText.textContent = `${currentLanguage() === "pt" ? "Bom dia" : currentLanguage() === "en" ? "Good morning" : "Buenos días"}, ${state.email.split("@")[0]}`;

  const status = {
    active: [t("activeStatusTitle"), t("activeStatusCopy")],
    connected: [t("connectedStatusTitle"), t("connectedStatusCopy")],
    local: [t("localStatusTitle"), t("localStatusCopy")],
  }[state.accessStatus] || [t("connectedStatusTitle"), t("activeStatusCopy")];

  accessStatusTitle.textContent = status[0];
  accessStatusCopy.textContent = status[1];
}

function render() {
  applyLanguage();
  setScreen();
  glucoseInput.value = "";
  energyInput.value = "Estable";
  renderProfile();
  renderHabits();
  updateProgress();
  renderBars();
  renderHistory();
  renderDate();
  setPasswordModal(Boolean(state.email && state.mustChangePassword));
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  setLoginStatus(t("connectedText"), "");

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
      setLoginStatus(error.message || t("supabaseError"), "error");
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
  setPasswordModal(false);
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
    alert(error.message || t("habitUpdateError"));
  } finally {
    button.disabled = false;
  }
});

languageSelect.addEventListener("change", async () => {
  const language = languageSelect.value;
  if (!translations[language]) return;

  try {
    await saveProfileSettings({ language });
    render();
  } catch (error) {
    alert(error.message || t("supabaseError"));
    languageSelect.value = currentLanguage();
  }
});

async function handlePasswordSubmit(event, fields) {
  event.preventDefault();
  const error = validatePasswordPair(fields.password.value, fields.confirmation.value);
  if (error) {
    setFormStatus(fields.status, error, "error");
    return;
  }

  fields.button.disabled = true;
  setFormStatus(fields.status, t("passwordSaving"));

  try {
    await updateAccountPassword(fields.password.value);
    fields.password.value = "";
    fields.confirmation.value = "";
    setFormStatus(fields.status, t("passwordSaved"), "success");
    setPasswordModal(false);
    render();
  } catch (error) {
    setFormStatus(fields.status, error.message || t("passwordError"), "error");
  } finally {
    fields.button.disabled = false;
  }
}

firstPasswordForm.addEventListener("submit", (event) => handlePasswordSubmit(event, {
  password: firstNewPassword,
  confirmation: firstConfirmPassword,
  status: firstPasswordStatus,
  button: firstPasswordForm.querySelector("button"),
}));

profilePasswordForm.addEventListener("submit", (event) => handlePasswordSubmit(event, {
  password: profileNewPassword,
  confirmation: profileConfirmPassword,
  status: profilePasswordStatus,
  button: profilePasswordForm.querySelector("button"),
}));

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
    saveCheckinBtn.textContent = t("enterGlucose");
    setTimeout(() => {
      saveCheckinBtn.textContent = t("saveRecord");
    }, 1200);
    return;
  }

  saveCheckinBtn.disabled = true;
  saveCheckinBtn.textContent = t("saving");

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
    saveCheckinBtn.textContent = t("recordSaved");
  } catch (error) {
    saveCheckinBtn.textContent = t("saveError");
    alert(error.message || "No se pudo guardar el registro.");
  } finally {
    setTimeout(() => {
      saveCheckinBtn.disabled = false;
      saveCheckinBtn.textContent = t("saveRecord");
    }, 1200);
  }
});

cravingBtn.addEventListener("click", () => {
  state.cravingPauses += 1;
  if (!state.userId) localSaveProfile();
  cravingBtn.textContent = `Pausa ${state.cravingPauses}`;
  setTimeout(() => {
    cravingBtn.textContent = t("startPause");
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
