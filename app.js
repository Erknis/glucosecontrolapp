const views = ["quiz", "result", "vsl"];
const checkoutUrl = "https://pay.hotmart.com/G106602864M?checkoutMode=10&bid=1783253878027";
const checkoutDelayMs = 5 * 60 * 1000;

const copy = {
  es: {
    htmlLang: "es",
    title: "Control Glucose - Quiz",
    quizTitle: "Quiz metabolico",
    medical: "No reemplaza una consulta medica.",
    prev: "Anterior",
    next: "Siguiente",
    seeResult: "Ver resultado",
    questionCounter: (current, total) => `Pregunta ${current} de ${total}`,
    resultTag: "Resultado educativo",
    resultImportant: "Lo importante ahora",
    transition: "Si este comparativo te incomodo, no lo ignores. Mira ahora la explicacion que muestra como dejar de vivir atrapado en ese ciclo de miedo, cansancio y dudas con la glucosa.",
    learnMore: "Mostrar como romper este ciclo ahora",
    attentionIndex: "indice de atencion",
    vslTag: "Video recomendado",
    vslTitle: "Entiende que puede estar ocurriendo dentro de tu metabolismo",
    vslBody: "Mira la explicacion recomendada para tu perfil. El propio video te mostrara el siguiente paso cuando llegue el momento.",
    reviewKicker: "Relatos ilustrativos",
    reviewTitle: "Personas que empezaron a entender su salud de otra manera",
    reviewNote: "Ejemplos representativos de relatos. Sustituir por testimonios reales cuando esten disponibles.",
    reviews: [
      {
        name: "Marcela R.",
        place: "Buenos Aires, Argentina",
        image: "es-argentina.jpg",
        text: "Yo pensaba que mi cansancio era normal por la edad. Despues de entender mejor mis habitos y mis senales, senti que por fin tenia un camino claro para cuidar mi energia y mi bienestar."
      },
      {
        name: "Javier M.",
        place: "Valencia, Espana",
        image: "es-espana.jpg",
        text: "Me impacto ver que no era solo cuestion de comer menos. Comprender la relacion entre glucosa, sueno y ansiedad me hizo tomar mi salud con mucha mas seriedad."
      },
      {
        name: "Claudia S.",
        place: "Rosario, Argentina",
        image: "pt-brasil-mulher.jpg",
        text: "Lo mas fuerte fue sentirme identificada. Habia senales que llevaba anos ignorando. Ahora miro mi rutina con otra conciencia y mas esperanza."
      }
    ],
    finalResult: {
      title: "{name}, esto no deberia seguir en piloto automatico",
      copy: "Tus respuestas muestran un patron claro: preocupacion, cansancio o dudas sobre la glucosa pueden estar robando tu tranquilidad. Lo peor es seguir intentando cambios sueltos sin entender la causa.",
      focus: "Antes de probar otra cosa, mira la explicacion. En pocos minutos vas a entender por que tantas personas se quedan atrapadas en este ciclo.",
      signals: ["Preocupacion con la glucosa", "Cansancio o antojos", "Falta de claridad"],
      beforeLabel: "Si sigues igual",
      afterLabel: "Con claridad",
      before: ["Mas miedo y confusion", "Mas intentos sin direccion"],
      after: ["Entender que puede estar fallando", "Ver el siguiente paso con mas seguridad"],
      changeTitle: "La diferencia puede empezar con una explicacion correcta",
      changeItems: ["Dejar de adivinar", "Entender el camino antes de seguir intentando"]
    },
    inputPlaceholderName: "Escribe tu nombre",
    inputPlaceholderAge: "Escribe tu edad",
    questions: [
      { type: "text", key: "name", text: "Cual es tu nombre?", placeholder: "Escribe tu nombre", icon: "👤" },
      { type: "choice", key: "gender", visual: "gender", text: "Eres hombre o mujer?", options: [["Hombre", 0, "gender-male.jpg"], ["Mujer", 0, "gender-female.jpg"]] },
      { type: "choice", key: "ageRange", visual: "tiles", text: "Cual es tu rango de edad?", options: [["Menos de 40", 0, "🌱"], ["40 a 54", 0, "💪"], ["55 a 69", 0, "🩺"], ["70 o mas", 0, "⭐"]] },
      { type: "choice", text: "Para comenzar, cual es tu situacion actual?", options: [["Tengo diabetes tipo 2 diagnosticada", 3, "🩸"], ["Tengo prediabetes", 1, "⚠️"], ["Sospecho que mis niveles de glucosa estan altos", 1, "🔎"], ["Quiero prevenir problemas metabolicos", 0, "🛡️"]] },
      { type: "choice", text: "Hace cuanto tiempo estas preocupado por tus niveles de glucosa?", options: [["Menos de 6 meses", 0, "🕊️"], ["Entre 6 meses y 2 anos", 1, "📆"], ["Mas de 2 anos", 3, "⏳"], ["No estoy seguro", 1, "❓"]] },
      { type: "choice", text: "Que es lo que mas te frustra hoy?", options: [["Intento cuidarme, pero mis resultados no cambian", 3, "😣"], ["Siento cansancio o falta de energia", 2, "🔋"], ["Me preocupa depender cada vez mas de medicamentos", 2, "💊"], ["Tengo miedo de complicaciones futuras", 3, "💭"]] },
      { type: "choice", text: "Con que frecuencia sientes antojos de pan, dulces, harinas o snacks?", options: [["Casi todos los dias", 3, "🍰"], ["Varias veces por semana", 2, "🥖"], ["De vez en cuando", 1, "🍪"], ["Casi nunca", 0, "✅"]] },
      { type: "choice", text: "Como describirias tu energia durante el dia?", options: [["Me siento cansado incluso despues de dormir", 3, "😴"], ["Tengo bajones fuertes despues de comer", 3, "📉"], ["Mi energia sube y baja durante el dia", 2, "〽️"], ["Me siento relativamente estable", 0, "⚖️"]] },
      { type: "choice", text: "Como es tu alimentacion la mayor parte de la semana?", options: [["Como muchos ultraprocesados, pan, arroz, pasta o dulces", 3, "🍝"], ["Intento cuidarme, pero no soy constante", 2, "🔁"], ["Como relativamente bien, pero no se que esta fallando", 1, "🥗"], ["Sigo un plan recomendado por un profesional", 0, "📋"]] },
      { type: "choice", text: "Cuanto movimiento haces en una semana normal?", options: [["Casi nada", 3, "🛋️"], ["Camino o me muevo poco", 2, "🚶"], ["Hago ejercicio 2 a 3 veces por semana", 1, "🏃"], ["Soy bastante activo", 0, "⚡"]] },
      { type: "choice", text: "Como esta tu sueno ultimamente?", options: [["Duermo mal casi siempre", 3, "🌙"], ["Me despierto cansado", 2, "🥱"], ["A veces duermo bien, a veces no", 1, "🔄"], ["Duermo bien la mayor parte del tiempo", 0, "🛌"]] },
      { type: "choice", visual: "tiles", text: "Que objetivo te importa mas ahora?", options: [["Bajar mis niveles de glucosa", 2, "📉"], ["Recuperar energia y bienestar", 2, "🌞"], ["Evitar complicaciones futuras", 3, "🛡️"], ["Entender que esta pasando en mi cuerpo", 1, "🧠"]] },
      { type: "choice", text: "Si descubrieras una explicacion simple para entender mejor tu metabolismo, que tan dispuesto estarias a verla hoy?", options: [["Muy dispuesto, quiero empezar ahora", 3, "🚀"], ["Me interesa si es claro y practico", 2, "✨"], ["Tengo dudas, pero quiero entender", 1, "🤔"], ["Solo estoy investigando", 0, "🔍"]] }
    ],
    profiles: [
      {
        max: 10,
        title: "Perfil 1: Resistencia Metabolica Inicial",
        copy: "{name}, tus respuestas muestran que tu cuerpo podria estar enviando senales tempranas que no conviene normalizar. Muchas personas esperan a sentirse peor para actuar, pero esas pequenas alertas pueden ser el inicio de un patron que se acumula con el tiempo.",
        focus: "Este es el momento de entender que esta ocurriendo antes de que la preocupacion se vuelva frustracion diaria. El siguiente video puede ayudarte a unir las piezas.",
        signals: ["Preocupacion reciente", "Senales metabolicas tempranas", "Necesidad de claridad educativa"]
      },
      {
        max: 21,
        title: "Perfil 2: Glucosa Descontrolada por Habitos Acumulados",
        copy: "{name}, tus respuestas muestran un patron muy comun y muy frustrante: intentas cuidarte, pero tu cuerpo parece no responder como esperabas. Eso puede hacerte sentir cansancio, miedo y la sensacion de que cada esfuerzo se queda corto.",
        focus: "No se trata solo de fuerza de voluntad. Si no entiendes como se conectan insulina, picos de glucosa, sueno, estres y alimentacion, puedes seguir repitiendo cambios aislados sin ver claridad.",
        signals: ["Antojos y energia irregular", "Habitos acumulados", "Necesidad de orientacion educativa"]
      },
      {
        max: 99,
        title: "Perfil 3: Metabolismo Bajo Estres y Senales Ignoradas",
        copy: "{name}, tus respuestas sugieren que tu metabolismo podria estar bajo una carga que ya esta afectando energia, descanso, antojos o miedo a complicaciones. Cuando esas senales aparecen juntas, ignorarlas suele aumentar la angustia.",
        focus: "Antes de intentar otro cambio aislado, necesitas entender que puede estar ocurriendo dentro de tu cuerpo. El video fue preparado para que puedas reconocer ese patron con mas claridad.",
        signals: ["Cansancio o mal sueno", "Miedo a complicaciones", "Senales persistentes ignoradas"]
      }
    ]
  },
  pt: {
    htmlLang: "pt-BR",
    title: "Control Glucose - Quiz",
    trust: ["Avaliacao educativa", "Sem diagnostico medico"],
    quizTitle: "Descubra o que esta impedindo seus niveis de glicose de baixarem",
    medical: "Nao substitui uma consulta medica. Se voce tem diabetes diagnosticada ou usa medicacao, consulte sempre seu profissional de saude antes de fazer mudancas importantes.",
    prev: "Anterior",
    next: "Proxima",
    seeResult: "Ver resultado",
    questionCounter: (current, total) => `Pergunta ${current} de ${total}`,
    resultTag: "Resultado educativo",
    resultImportant: "O ponto importante agora",
    transition: "Se esse comparativo mexeu com voce, nao ignore. Veja agora a explicacao que mostra como parar de viver preso nesse ciclo de medo, cansaco e duvidas com a glicose.",
    learnMore: "Mostrar como romper esse ciclo agora",
    attentionIndex: "indice de atencao",
    vslTag: "Video recomendado",
    vslTitle: "Entenda o que pode estar acontecendo dentro do seu metabolismo",
    vslBody: "Assista a explicacao recomendada para o seu perfil. O proprio video mostrara o proximo passo no momento certo.",
    reviewKicker: "Relatos ilustrativos",
    reviewTitle: "Pessoas que comecaram a entender a saude de outro jeito",
    reviewNote: "Exemplos representativos de relatos. Substitua por depoimentos reais quando estiverem disponiveis.",
    reviews: [
      {
        name: "Ana Paula M.",
        place: "Sao Paulo, Brasil",
        image: "pt-brasil-mulher.jpg",
        text: "Eu vivia cansada e achava que era normal. Quando entendi melhor os sinais do meu corpo, comecei a olhar para minha rotina com mais consciencia e vontade de mudar."
      },
      {
        name: "Roberto C.",
        place: "Curitiba, Brasil",
        image: "pt-brasil-homem.jpg",
        text: "O que mais mexeu comigo foi perceber que nao era so cortar comida. Sono, estresse e habitos estavam todos conectados. Isso mudou minha forma de cuidar da saude."
      },
      {
        name: "Mariana L.",
        place: "Lisboa, Portugal",
        image: "es-argentina.jpg",
        text: "Senti que alguem finalmente explicou o que eu estava vivendo. Ganhei clareza para parar de ignorar sinais e buscar mais bem-estar no dia a dia."
      }
    ],
    finalResult: {
      title: "{name}, isso nao deveria continuar no piloto automatico",
      copy: "Suas respostas mostram um padrao claro: preocupacao, cansaco ou duvidas sobre a glicose podem estar roubando sua tranquilidade. O pior e continuar tentando mudancas soltas sem entender a causa.",
      focus: "Antes de tentar outra coisa, veja a explicacao. Em poucos minutos voce vai entender por que tanta gente fica presa nesse ciclo.",
      signals: ["Preocupacao com a glicose", "Cansaco ou vontades", "Falta de clareza"],
      beforeLabel: "Se continuar igual",
      afterLabel: "Com clareza",
      before: ["Mais medo e confusao", "Mais tentativas sem direcao"],
      after: ["Entender o que pode estar falhando", "Ver o proximo passo com mais seguranca"],
      changeTitle: "A diferenca pode comecar com a explicacao certa",
      changeItems: ["Parar de tentar no escuro", "Entender o caminho antes de continuar"]
    },
    questions: [
      { type: "text", key: "name", text: "Qual e o seu nome?", placeholder: "Digite seu nome", icon: "👤" },
      { type: "choice", key: "gender", visual: "gender", text: "Voce e homem ou mulher?", options: [["Homem", 0, "gender-male.jpg"], ["Mulher", 0, "gender-female.jpg"]] },
      { type: "choice", key: "ageRange", visual: "tiles", text: "Qual e a sua faixa etaria?", options: [["Menos de 40", 0, "🌱"], ["40 a 54", 0, "💪"], ["55 a 69", 0, "🩺"], ["70 ou mais", 0, "⭐"]] },
      { type: "choice", text: "Para comecar, qual e a sua situacao atual?", options: [["Tenho diabetes tipo 2 diagnosticada", 3, "🩸"], ["Tenho pre-diabetes", 1, "⚠️"], ["Suspeito que meus niveis de glicose estao altos", 1, "🔎"], ["Quero prevenir problemas metabolicos", 0, "🛡️"]] },
      { type: "choice", text: "Ha quanto tempo voce esta preocupado com seus niveis de glicose?", options: [["Menos de 6 meses", 0, "🕊️"], ["Entre 6 meses e 2 anos", 1, "📆"], ["Mais de 2 anos", 3, "⏳"], ["Nao tenho certeza", 1, "❓"]] },
      { type: "choice", text: "O que mais te frustra hoje?", options: [["Tento me cuidar, mas meus resultados nao mudam", 3, "😣"], ["Sinto cansaco ou falta de energia", 2, "🔋"], ["Tenho medo de depender cada vez mais de medicamentos", 2, "💊"], ["Tenho medo de complicacoes futuras", 3, "💭"]] },
      { type: "choice", text: "Com que frequencia voce sente vontade de comer pao, doces, massas ou snacks?", options: [["Quase todos os dias", 3, "🍰"], ["Varias vezes por semana", 2, "🥖"], ["De vez em quando", 1, "🍪"], ["Quase nunca", 0, "✅"]] },
      { type: "choice", text: "Como voce descreveria sua energia durante o dia?", options: [["Sinto cansaco mesmo depois de dormir", 3, "😴"], ["Tenho quedas fortes depois de comer", 3, "📉"], ["Minha energia sobe e desce durante o dia", 2, "〽️"], ["Sinto-me relativamente estavel", 0, "⚖️"]] },
      { type: "choice", text: "Como e sua alimentacao na maior parte da semana?", options: [["Como muitos ultraprocessados, pao, arroz, massa ou doces", 3, "🍝"], ["Tento me cuidar, mas nao sou constante", 2, "🔁"], ["Como relativamente bem, mas nao sei o que esta falhando", 1, "🥗"], ["Sigo um plano recomendado por um profissional", 0, "📋"]] },
      { type: "choice", text: "Quanto movimento voce faz em uma semana normal?", options: [["Quase nada", 3, "🛋️"], ["Caminho ou me movimento pouco", 2, "🚶"], ["Faco exercicio 2 a 3 vezes por semana", 1, "🏃"], ["Sou bastante ativo", 0, "⚡"]] },
      { type: "choice", text: "Como esta seu sono ultimamente?", options: [["Durmo mal quase sempre", 3, "🌙"], ["Acordo cansado", 2, "🥱"], ["As vezes durmo bem, as vezes nao", 1, "🔄"], ["Durmo bem na maior parte do tempo", 0, "🛌"]] },
      { type: "choice", visual: "tiles", text: "Qual objetivo mais importa agora?", options: [["Baixar meus niveis de glicose", 2, "📉"], ["Recuperar energia e bem-estar", 2, "🌞"], ["Evitar complicacoes futuras", 3, "🛡️"], ["Entender o que esta acontecendo no meu corpo", 1, "🧠"]] },
      { type: "choice", text: "Se voce descobrisse uma explicacao simples para entender melhor seu metabolismo, quanto estaria disposto a ver hoje?", options: [["Muito disposto, quero comecar agora", 3, "🚀"], ["Tenho interesse se for claro e pratico", 2, "✨"], ["Tenho duvidas, mas quero entender", 1, "🤔"], ["Estou apenas pesquisando", 0, "🔍"]] }
    ],
    profiles: [
      {
        max: 10,
        title: "Perfil 1: Resistencia Metabolica Inicial",
        copy: "{name}, suas respostas mostram que seu corpo pode estar dando sinais iniciais que nao deveriam ser tratados como algo normal. Muita gente espera piorar para agir, mas esses sinais pequenos podem se acumular com o tempo.",
        focus: "Este e o momento de entender o que esta acontecendo antes que a preocupacao vire frustracao diaria. O video pode ajudar voce a ligar os pontos.",
        signals: ["Preocupacao recente", "Sinais metabolicos iniciais", "Necessidade de clareza educativa"]
      },
      {
        max: 21,
        title: "Perfil 2: Glicose Descontrolada por Habitos Acumulados",
        copy: "{name}, suas respostas mostram um padrao muito comum e frustrante: voce tenta se cuidar, mas o corpo parece nao responder como esperava. Isso pode trazer cansaco, medo e a sensacao de que todo esforco fica pela metade.",
        focus: "Nao se trata apenas de forca de vontade. Sem entender como insulina, picos de glicose, sono, estresse e alimentacao se conectam, voce pode continuar tentando mudancas isoladas sem clareza.",
        signals: ["Vontades e energia irregular", "Habitos acumulados", "Necessidade de orientacao educativa"]
      },
      {
        max: 99,
        title: "Perfil 3: Metabolismo Sob Estresse e Sinais Ignorados",
        copy: "{name}, suas respostas sugerem que seu metabolismo pode estar sob uma carga que ja afeta energia, sono, vontades por comida ou medo de complicacoes. Quando esses sinais aparecem juntos, ignorar costuma aumentar a angustia.",
        focus: "Antes de tentar outra mudanca isolada, voce precisa entender o que pode estar acontecendo dentro do seu corpo. O video foi preparado para ajudar voce a reconhecer esse padrao com mais clareza.",
        signals: ["Cansaco ou sono ruim", "Medo de complicacoes", "Sinais persistentes ignorados"]
      }
    ]
  },
  en: {
    htmlLang: "en",
    title: "Control Glucose - Quiz",
    trust: ["Educational assessment", "Not a medical diagnosis"],
    quizTitle: "Discover what may be keeping your glucose levels from going down",
    medical: "This does not replace medical care. If you have diagnosed diabetes or use medication, always consult your healthcare professional before making important changes.",
    prev: "Previous",
    next: "Next",
    seeResult: "See result",
    questionCounter: (current, total) => `Question ${current} of ${total}`,
    resultTag: "Educational result",
    resultImportant: "What matters now",
    transition: "If this comparison felt uncomfortable, do not ignore it. Watch the explanation that shows how to stop living stuck in this cycle of fear, fatigue and glucose confusion.",
    learnMore: "Show me how to break this cycle now",
    attentionIndex: "attention index",
    vslTag: "Recommended video",
    vslTitle: "Understand what may be happening inside your metabolism",
    vslBody: "Watch the explanation recommended for your profile. The video itself will show the next step when the time is right.",
    reviewKicker: "Illustrative stories",
    reviewTitle: "People who started seeing their health differently",
    reviewNote: "Representative example stories. Replace with real testimonials when available.",
    reviews: [
      {
        name: "Linda P.",
        place: "Austin, United States",
        image: "en-us.jpg",
        text: "I used to think low energy was just part of getting older. Understanding how my daily habits connected to glucose helped me feel more aware and more hopeful."
      },
      {
        name: "Peter H.",
        place: "Manchester, United Kingdom",
        image: "en-uk.jpg",
        text: "The biggest shift was realizing it was not only about eating less. Sleep, stress and cravings were all part of the picture. That changed how I look at my health."
      },
      {
        name: "Karen W.",
        place: "Toronto, Canada",
        image: "es-espana.jpg",
        text: "I felt seen. The explanation matched things I had been ignoring for years, and it pushed me to take my well-being more seriously."
      }
    ],
    finalResult: {
      title: "{name}, this should not stay on autopilot",
      copy: "Your answers show a clear pattern: worry, fatigue or glucose confusion may be stealing your peace of mind. The worst part is trying random changes without understanding the cause.",
      focus: "Before trying something else, watch the explanation. In a few minutes you will understand why so many people stay stuck in this cycle.",
      signals: ["Glucose concern", "Fatigue or cravings", "Lack of clarity"],
      beforeLabel: "If nothing changes",
      afterLabel: "With clarity",
      before: ["More fear and confusion", "More attempts without direction"],
      after: ["Understand what may be failing", "See the next step with more confidence"],
      changeTitle: "The difference can start with the right explanation",
      changeItems: ["Stop guessing", "Understand the path before trying again"]
    },
    questions: [
      { type: "text", key: "name", text: "What is your name?", placeholder: "Enter your name", icon: "👤" },
      { type: "choice", key: "gender", visual: "gender", text: "Are you a man or a woman?", options: [["Man", 0, "gender-male.jpg"], ["Woman", 0, "gender-female.jpg"]] },
      { type: "choice", key: "ageRange", visual: "tiles", text: "What is your age range?", options: [["Under 40", 0, "🌱"], ["40 to 54", 0, "💪"], ["55 to 69", 0, "🩺"], ["70 or older", 0, "⭐"]] },
      { type: "choice", text: "To begin, what is your current situation?", options: [["I have diagnosed type 2 diabetes", 3, "🩸"], ["I have prediabetes", 1, "⚠️"], ["I suspect my glucose levels are high", 1, "🔎"], ["I want to prevent metabolic problems", 0, "🛡️"]] },
      { type: "choice", text: "How long have you been concerned about your glucose levels?", options: [["Less than 6 months", 0, "🕊️"], ["Between 6 months and 2 years", 1, "📆"], ["More than 2 years", 3, "⏳"], ["I am not sure", 1, "❓"]] },
      { type: "choice", text: "What frustrates you most right now?", options: [["I try to take care of myself, but my results do not change", 3, "😣"], ["I feel tired or low on energy", 2, "🔋"], ["I worry about depending more and more on medication", 2, "💊"], ["I am afraid of future complications", 3, "💭"]] },
      { type: "choice", text: "How often do you crave bread, sweets, flour-based foods or snacks?", options: [["Almost every day", 3, "🍰"], ["Several times a week", 2, "🥖"], ["From time to time", 1, "🍪"], ["Almost never", 0, "✅"]] },
      { type: "choice", text: "How would you describe your energy during the day?", options: [["I feel tired even after sleeping", 3, "😴"], ["I have strong crashes after meals", 3, "📉"], ["My energy goes up and down during the day", 2, "〽️"], ["I feel relatively stable", 0, "⚖️"]] },
      { type: "choice", text: "What is your diet like most of the week?", options: [["I eat many ultra-processed foods, bread, rice, pasta or sweets", 3, "🍝"], ["I try to take care of myself, but I am not consistent", 2, "🔁"], ["I eat relatively well, but I do not know what is failing", 1, "🥗"], ["I follow a plan recommended by a professional", 0, "📋"]] },
      { type: "choice", text: "How much movement do you get in a normal week?", options: [["Almost none", 3, "🛋️"], ["I walk or move a little", 2, "🚶"], ["I exercise 2 to 3 times per week", 1, "🏃"], ["I am fairly active", 0, "⚡"]] },
      { type: "choice", text: "How has your sleep been lately?", options: [["I sleep poorly almost always", 3, "🌙"], ["I wake up tired", 2, "🥱"], ["Sometimes I sleep well, sometimes I do not", 1, "🔄"], ["I sleep well most of the time", 0, "🛌"]] },
      { type: "choice", visual: "tiles", text: "Which goal matters most right now?", options: [["Lower my glucose levels", 2, "📉"], ["Recover energy and well-being", 2, "🌞"], ["Avoid future complications", 3, "🛡️"], ["Understand what is happening in my body", 1, "🧠"]] },
      { type: "choice", text: "If you discovered a simple explanation to better understand your metabolism, how willing would you be to watch it today?", options: [["Very willing, I want to start now", 3, "🚀"], ["I am interested if it is clear and practical", 2, "✨"], ["I have doubts, but I want to understand", 1, "🤔"], ["I am only researching", 0, "🔍"]] }
    ],
    profiles: [
      {
        max: 10,
        title: "Profile 1: Early Metabolic Resistance",
        copy: "{name}, your answers suggest your body may be sending early signals that should not be treated as normal. Many people wait until things feel worse, but small signs can build over time.",
        focus: "This is the moment to understand what may be happening before concern turns into daily frustration. The video can help you connect the dots.",
        signals: ["Recent concern", "Early metabolic signs", "Need for educational clarity"]
      },
      {
        max: 21,
        title: "Profile 2: Uncontrolled Glucose from Accumulated Habits",
        copy: "{name}, your answers show a common and frustrating pattern: you try to take care of yourself, but your body does not seem to respond the way you expected. That can create fatigue, fear and the feeling that every effort falls short.",
        focus: "This is not only about willpower. Without understanding how insulin, glucose spikes, sleep, stress and food work together, isolated changes can keep feeling confusing.",
        signals: ["Cravings and irregular energy", "Accumulated habits", "Need for educational guidance"]
      },
      {
        max: 99,
        title: "Profile 3: Metabolism Under Stress and Ignored Signals",
        copy: "{name}, your answers suggest your metabolism may be under pressure in a way that affects energy, sleep, cravings or fear of future complications. When these signals appear together, ignoring them often increases anxiety.",
        focus: "Before trying another isolated change, you need to understand what may be happening inside your body. The video was prepared to help you recognize that pattern more clearly.",
        signals: ["Fatigue or poor sleep", "Concern about complications", "Persistent ignored signals"]
      }
    ]
  }
};

const state = {
  lang: "es",
  current: 0,
  answers: []
};

function t() {
  return copy[state.lang];
}

function getQuestions() {
  return t().questions;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function applyCopy() {
  const c = t();
  document.documentElement.lang = c.htmlLang;
  document.title = c.title;
  setText("#quiz-title", c.quizTitle);
  setText("#medical-note", c.medical);
  setText("#prevQuestion", c.prev);
  setText("#result-tag", c.resultTag);
  setText("#result-important", c.resultImportant);
  setText("#transition-copy", c.transition);
  setText("#learnMore", c.learnMore);
  setText("#attention-label", c.attentionIndex);
  setText("#vsl-tag", c.vslTag);
  setText("#vsl-title", c.vslTitle);
  setText("#vsl-body", c.vslBody);
  document.querySelectorAll(".lang-option").forEach(button => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function ensureAnswers() {
  const total = getQuestions().length;
  if (state.answers.length !== total) {
    state.answers = Array(total).fill(null);
    state.current = 0;
  }
}

function goTo(view) {
  const safeView = views.includes(view) ? view : "quiz";
  views.forEach(id => {
    document.querySelector(`#${id}`).classList.toggle("is-visible", id === safeView);
  });
  if (safeView === "vsl") renderReviews();
  window.location.hash = safeView;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function leadName() {
  const nameQuestionIndex = getQuestions().findIndex(question => question.key === "name");
  const rawName = nameQuestionIndex >= 0 ? state.answers[nameQuestionIndex] : "";
  return typeof rawName === "string" && rawName ? rawName : " ";
}

function personalize(text) {
  return text.replaceAll("{name}", leadName());
}

function renderQuestion() {
  ensureAnswers();
  const c = t();
  const allQuestions = getQuestions();
  const question = allQuestions[state.current];
  const selected = state.answers[state.current];
  const progress = ((state.current + 1) / allQuestions.length) * 100;
  const answerList = document.querySelector("#answerList");

  setText("#questionText", question.text);
  setText("#questionCounter", c.questionCounter(state.current + 1, allQuestions.length));
  setText("#nextQuestion", state.current === allQuestions.length - 1 ? c.seeResult : c.next);
  document.querySelector("#progressBar").style.width = `${progress}%`;
  document.querySelector("#prevQuestion").disabled = state.current === 0;

  answerList.innerHTML = "";
  if (question.type === "text") {
    const field = document.createElement("label");
    field.className = "lead-field";
    field.innerHTML = `
      <span class="lead-field-icon" aria-hidden="true">${question.icon || "👤"}</span>
      <input id="leadInput" type="text" autocomplete="given-name" placeholder="${question.placeholder || ""}" value="${selected || ""}" />
    `;
    answerList.appendChild(field);
    const input = field.querySelector("input");
    input.addEventListener("input", event => {
      state.answers[state.current] = event.target.value.trim();
    });
    setTimeout(() => input.focus(), 50);
    return;
  }

  question.options.forEach(([label], index) => {
    const icon = question.options[index][2] || "";
    const button = document.createElement("button");
    button.type = "button";
    const visualClass = question.visual === "gender" ? "gender-card" : question.visual === "tiles" ? "tile-card" : "";
    button.className = `answer ${visualClass}${selected === index ? " is-selected" : ""}`;
    if (question.visual === "gender") {
      button.innerHTML = `
        <span class="gender-art"><img src="./assets/quiz/${icon}" alt="" /></span>
        <span class="gender-label">${label}</span>
      `;
    } else {
      button.innerHTML = `${icon ? `<span class="answer-icon">${icon}</span>` : ""}<span>${label}</span>`;
    }
    button.addEventListener("click", () => {
      state.answers[state.current] = index;
      renderQuestion();
    });
    answerList.appendChild(button);
  });
}

function quizScore() {
  const allQuestions = getQuestions();
  return state.answers.reduce((total, answerIndex, questionIndex) => {
    if (answerIndex === null) return total;
    if (allQuestions[questionIndex].type !== "choice") return total;
    return total + allQuestions[questionIndex].options[answerIndex][1];
  }, 0);
}

function currentProfile() {
  return t().finalResult;
}

function renderResult() {
  const profile = currentProfile();
  const score = 87;
  const list = document.querySelector("#profileSignals");
  const beforeList = document.querySelector("#lifeBefore");
  const afterList = document.querySelector("#lifeAfter");
  const changeList = document.querySelector("#changeList");

  setText("#result-title", personalize(profile.title));
  setText("#profileCopy", personalize(profile.copy));
  setText("#profileFocus", personalize(profile.focus));
  setText("#profileScore", score);
  setText("#life-before-label", profile.beforeLabel);
  setText("#life-after-label", profile.afterLabel);
  setText("#change-title", profile.changeTitle);
  document.querySelector(".meter-ring").style.background = `radial-gradient(circle, #ffffff 0 58%, transparent 59%), conic-gradient(var(--coral) 0 ${score}%, #dce9e6 ${score}% 100%)`;

  list.innerHTML = "";
  profile.signals.forEach(signal => {
    const item = document.createElement("li");
    item.innerHTML = `<span></span>${signal}`;
    list.appendChild(item);
  });

  beforeList.innerHTML = "";
  profile.before.forEach(itemText => {
    const item = document.createElement("li");
    item.textContent = itemText;
    beforeList.appendChild(item);
  });

  afterList.innerHTML = "";
  profile.after.forEach(itemText => {
    const item = document.createElement("li");
    item.textContent = itemText;
    afterList.appendChild(item);
  });

  changeList.innerHTML = "";
  profile.changeItems.forEach(itemText => {
    const item = document.createElement("li");
    item.textContent = itemText;
    changeList.appendChild(item);
  });
}

function renderReviews() {
  const c = t();
  const grid = document.querySelector("#reviewGrid");
  setText("#review-kicker", c.reviewKicker);
  setText("#review-title", c.reviewTitle);
  setText("#review-note", c.reviewNote);
  grid.innerHTML = "";
  c.reviews.forEach(review => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <img src="./assets/reviews/${review.image}" alt="${review.name}" />
      <div>
        <strong>${review.name}</strong>
        <span>${review.place}</span>
      </div>
      <p>${review.text}</p>
    `;
    grid.appendChild(card);
  });
}

function setLanguage(lang) {
  const currentView = views.find(id => document.querySelector(`#${id}`).classList.contains("is-visible")) || "quiz";
  state.lang = lang;
  localStorage.setItem("controlGlucoseLang", lang);
  ensureAnswers();
  applyCopy();
  if (currentView === "result") renderResult();
  if (currentView === "vsl") renderReviews();
  renderQuestion();
  goTo(currentView);
}

document.querySelectorAll("[data-lang]").forEach(control => {
  control.addEventListener("click", () => setLanguage(control.dataset.lang));
});

document.querySelector("#prevQuestion").addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

document.querySelector("#nextQuestion").addEventListener("click", () => {
  const answer = state.answers[state.current];
  if (answer === null || answer === "") {
    document.querySelector("#answerList").animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }],
      { duration: 180 }
    );
    return;
  }

  if (state.current < getQuestions().length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }

  renderResult();
  goTo("result");
});

document.querySelector("#learnMore").addEventListener("click", () => {
  goTo("vsl");
});

function revealCheckoutCta() {
  const cta = document.querySelector("#checkoutCta");
  const button = document.querySelector("#checkoutButton");
  if (!cta || !button) return;
  button.href = checkoutUrl;
  cta.hidden = false;
}

setTimeout(revealCheckoutCta, checkoutDelayMs);

ensureAnswers();
applyCopy();
renderQuestion();
goTo("quiz");
