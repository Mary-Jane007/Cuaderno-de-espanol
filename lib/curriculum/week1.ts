import type { DayLesson } from "@/lib/types";

export const WEEK_1: DayLesson[] = [
  {
    day: 2,
    date: "September 8",
    isoDate: "2026-09-08",
    title: "El presente — rutina y verbos regulares",
    week: 1,
    goals: [
      "conjugate regular -AR, -ER and -IR verbs in the present tense without hesitating",
      "describe a full daily routine in Spanish",
      "use time expressions (a las..., por la mañana, todos los días)",
      "combine several present-tense verbs in one paragraph",
      "speak for 5 minutes about your day using only present tense",
    ],
    duolingoNote:
      "Find the unit on daily routines / regular verbs. As always: say every sentence out loud, then change the subject (yo → tú → nosotros) before moving on.",
    ltNote:
      "Continue from wherever you paused yesterday. Today's episodes will start layering in more verb forms — keep pausing and answering out loud before the narrator does.",
    grammarTitle: "El presente regular",
    grammarIntro:
      "Spanish verbs fall into three families: -AR, -ER, -IR. Once you know the pattern, you can conjugate thousands of verbs.",
    grammarTables: [
      {
        title: "-AR (hablar)",
        cells: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
      },
      {
        title: "-ER (comer)",
        cells: ["como", "comes", "come", "comemos", "coméis", "comen"],
      },
      {
        title: "-IR (vivir)",
        cells: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
      },
    ],
    grammarExamples: [
      "Trabajo de lunes a viernes.",
      "Como a las dos de la tarde.",
      "Vivimos cerca del centro.",
      "¿A qué hora empiezas a trabajar?",
      "Mis padres comen temprano.",
    ],
    translatePractice: [
      { en: "I work from home.", answers: ["Trabajo desde casa.", "Trabajo en casa."] },
      {
        en: "We eat at eight at night.",
        answers: ["Comemos a las ocho de la noche.", "Comemos a las ocho de la tarde."],
      },
      { en: "She lives near the beach.", answers: ["Ella vive cerca de la playa.", "Vive cerca de la playa."] },
      {
        en: "Do you (tú) study in the morning or the afternoon?",
        answers: [
          "¿Estudias por la mañana o por la tarde?",
          "¿Tú estudias por la mañana o por la tarde?",
        ],
      },
      {
        en: "They don't answer the phone.",
        answers: [
          "Ellos no contestan el teléfono.",
          "No contestan el teléfono.",
          "No contestan al teléfono.",
          "Ellos no contestan al teléfono.",
        ],
      },
    ],
    fillBlankTitle: "Conjuga el verbo correcto",
    fillBlank: [
      { prompt: "Yo ____ (trabajar) en una oficina.", answers: [["trabajo"]] },
      { prompt: "Nosotros ____ (comer) juntos los domingos.", answers: [["comemos"]] },
      { prompt: "¿Tú ____ (vivir) sola?", answers: [["vives"]] },
      { prompt: "Ella ____ (estudiar) por la noche.", answers: [["estudia"]] },
      { prompt: "Ellos ____ (escribir) muchos correos.", answers: [["escriben"]] },
      { prompt: "Vosotros ____ (leer) el periódico.", answers: [["leéis"]] },
    ],
    speakingQuestions: [
      "¿A qué hora te levantas normalmente?",
      "¿Qué desayunas?",
      "¿Cómo vas al trabajo?",
      "¿A qué hora empiezas a trabajar?",
      "¿Dónde comes al mediodía?",
      "¿Qué haces por la tarde?",
      "¿A qué hora terminas de trabajar?",
      "¿Qué cenas normalmente?",
      "¿A qué hora te acuestas?",
      "¿Tu rutina cambia los fines de semana?",
    ],
    dreamingNote:
      "Pick a video tagged 'daily life' or 'routine'. Watch for the recurring present-tense verbs — you'll recognise most of them today.",
    sdFocus: "Present tense (regular verbs) + time expressions.",
    vocab: [
      { es: "madrugar", en: "to get up early" },
      { es: "soler", en: "to usually (do something)" },
      { es: "de vez en cuando", en: "once in a while" },
      { es: "apenas", en: "hardly / barely" },
      { es: "enseguida", en: "right away" },
      { es: "a diario", en: "daily" },
      { es: "de camino a", en: "on the way to" },
      { es: "descansar", en: "to rest" },
      { es: "madrugada", en: "early morning / dawn" },
      { es: "agotado/a", en: "exhausted" },
    ],
    upgrades: [
      {
        basic: "Trabajo mucho.",
        upgraded: "Trabajo mucho, aunque intento no llevarme trabajo a casa.",
      },
      {
        basic: "Como a las dos.",
        upgraded: "Normalmente como a las dos, pero a veces como más tarde si tengo reuniones.",
      },
      {
        basic: "Me levanto temprano.",
        upgraded: "Suelo madrugar, aunque los fines de semana duermo hasta tarde.",
      },
    ],
    finalTopic: "Mi rutina diaria (de la mañana a la noche)",
    finalPoints: [
      { prompt: "A qué hora te levantas", starter: "Me levanto a las..." },
      { prompt: "Qué haces por la mañana", starter: "Por la mañana..." },
      { prompt: "Dónde y con quién comes", starter: "Como con..." },
      { prompt: "Qué haces por la tarde", starter: "Por la tarde..." },
      { prompt: "Cómo terminas el día", starter: "Antes de dormir..." },
    ],
  },
  {
    day: 3,
    date: "September 9",
    isoDate: "2026-09-09",
    title: "Verbos irregulares en presente",
    week: 1,
    goals: [
      "conjugate the most common irregular yo-form verbs (tengo, hago, salgo, pongo...)",
      "handle stem-changing verbs (e→ie, o→ue, e→i)",
      "use ser, estar, ir and tener fluently together",
      "talk about ability and obligation (poder, deber, tener que)",
      "correct yourself mid-sentence without switching to English",
    ],
    duolingoNote:
      "Look for lessons on irregular verbs (tener, hacer, poder, querer, ir). Say each conjugated form out loud, then build one extra sentence with it.",
    ltNote:
      "Language Transfer introduces irregulars gradually — resist the urge to look ahead. Answer, pause, then check.",
    grammarTitle: "Irregulares comunes",
    grammarIntro:
      "Two patterns cover most of what trips people up: (1) irregular yo-forms, (2) stem-changing verbs in all forms except nosotros/vosotros.",
    grammarTables: [
      {
        title: "yo-irregulares",
        cells: [
          "tener → tengo",
          "hacer → hago",
          "salir → salgo",
          "poner → pongo",
          "traer → traigo",
          "conocer → conozco",
        ],
      },
      {
        title: "e→ie (querer)",
        cells: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
      },
      {
        title: "o→ue (poder)",
        cells: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
      },
    ],
    grammarExamples: [
      "Tengo que salir temprano hoy.",
      "No puedo ir a la reunión.",
      "Quiero aprender más rápido.",
      "Hago ejercicio tres veces por semana.",
      "Conozco a mucha gente aquí.",
    ],
    translatePractice: [
      { en: "I have to work tomorrow.", answers: ["Tengo que trabajar mañana."] },
      {
        en: "Can you (tú) come with me?",
        answers: ["¿Puedes venir conmigo?", "¿Tú puedes venir conmigo?", "¿Puedes venir con mí?"],
      },
      { en: "We want to eat now.", answers: ["Queremos comer ahora.", "Queremos comer ya."] },
      {
        en: "I do the shopping on Saturdays.",
        answers: [
          "Hago la compra los sábados.",
          "Hago las compras los sábados.",
          "Yo hago la compra los sábados.",
        ],
      },
      {
        en: "She doesn't know anyone here.",
        answers: ["Ella no conoce a nadie aquí.", "No conoce a nadie aquí."],
      },
    ],
    fillBlankTitle: "Elige la forma correcta",
    fillBlank: [
      { prompt: "Yo ____ (tener) mucho trabajo hoy.", answers: [["tengo"]] },
      { prompt: "¿Tú ____ (poder) ayudarme?", answers: [["puedes"]] },
      { prompt: "Nosotros ____ (querer) salir esta noche.", answers: [["queremos"]] },
      { prompt: "Ella ____ (hacer) la cena todos los días.", answers: [["hace"]] },
      { prompt: "Yo no ____ (conocer) esa ciudad.", answers: [["conozco"]] },
      { prompt: "Ellos ____ (salir) a las siete.", answers: [["salen"]] },
    ],
    speakingQuestions: [
      "¿Qué tienes que hacer hoy?",
      "¿Puedes hablar español una hora seguida?",
      "¿Qué quieres hacer este fin de semana?",
      "¿Haces ejercicio? ¿Cuántas veces por semana?",
      "¿Conoces a alguien que hable español?",
      "¿A qué hora sales normalmente de casa?",
      "¿Qué pones en tu mochila/bolso cada día?",
      "¿Qué prefieres, el café o el té?",
      "¿Puedes cocinar bien?",
      "¿Qué debes mejorar en tu español?",
    ],
    dreamingNote:
      "Choose a video where the speaker talks about plans or obligations — you'll hear 'tengo que', 'puedo', 'quiero' repeatedly. Notice them without pausing the video.",
    sdFocus: "Irregular verbs + stem-changing verbs.",
    vocab: [
      { es: "lograr", en: "to manage to / achieve" },
      { es: "intentar", en: "to try" },
      { es: "evitar", en: "to avoid" },
      { es: "conseguir", en: "to get / manage to" },
      { es: "darse cuenta de", en: "to realize" },
      { es: "resultar", en: "to turn out (to be)" },
      { es: "de repente", en: "suddenly" },
      { es: "sin embargo", en: "however" },
      { es: "por lo general", en: "generally" },
      { es: "cada vez más", en: "more and more" },
    ],
    upgrades: [
      {
        basic: "Tengo que trabajar.",
        upgraded: "Tengo que trabajar hoy, aunque preferiría quedarme en casa.",
      },
      {
        basic: "No puedo ir.",
        upgraded: "No puedo ir porque tengo otro compromiso a esa hora.",
      },
      {
        basic: "Quiero aprender español.",
        upgraded: "Quiero aprender español porque quiero poder viajar sin depender del inglés.",
      },
    ],
    finalTopic: "Lo que quiero, puedo y tengo que hacer esta semana",
    finalPoints: [
      { prompt: "Obligaciones (tengo que...)", starter: "Tengo que..." },
      { prompt: "Cosas que puedes hacer bien", starter: "Puedo..." },
      { prompt: "Cosas que quieres pero no puedes", starter: "Quiero..., pero no puedo porque..." },
      { prompt: "Algo que evitas", starter: "Evito... porque..." },
      { prompt: "Un objetivo de la semana", starter: "Esta semana intento..." },
    ],
  },
  {
    day: 4,
    date: "September 10",
    isoDate: "2026-09-10",
    title: "Gustar y verbos similares",
    week: 1,
    goals: [
      "use gustar correctly with singular and plural nouns",
      "use encantar, interesar, molestar, doler, importar the same way",
      "use indirect object pronouns (me, te, le, nos, os, les) automatically",
      "express strong likes/dislikes with nuance",
      "ask someone about their tastes and react naturally",
    ],
    duolingoNote:
      "Search for the 'gustar' or 'preferences' unit. Every time a sentence uses gustar, rebuild it with a different subject (me gusta → te gusta → le gusta...).",
    ltNote:
      "Pay close attention to how the instructor frames gustar — it does NOT work like 'like' in English. Pause and really think before answering.",
    grammarTitle: "Gustar no funciona como 'to like'",
    grammarIntro:
      "Gustar literally means 'to be pleasing to'. The person is an indirect object, and the verb agrees with the THING that pleases, not with the person.",
    grammarTables: [
      {
        title: "me gusta / me gustan",
        cells: ["me gusta el café (singular)", "me gustan los perros (plural)"],
      },
      { title: "pronombres", cells: ["me", "te", "le", "nos", "os", "les"] },
      {
        title: "otros verbos así",
        cells: ["encantar", "interesar", "molestar", "doler", "importar", "faltar"],
      },
    ],
    grammarExamples: [
      "Me gusta el chocolate.",
      "Me gustan las películas de terror.",
      "Le encanta viajar.",
      "Nos interesa la política.",
      "Me duele la cabeza.",
      "¿Te molesta si abro la ventana?",
    ],
    translatePractice: [
      { en: "I love this song.", answers: ["Me encanta esta canción.", "Me encanta esta canción."] },
      {
        en: "Does your back hurt?",
        answers: ["¿Te duele la espalda?", "¿Te duele la espalda a ti?"],
      },
      {
        en: "We're not interested in that.",
        answers: ["No nos interesa eso.", "Eso no nos interesa."],
      },
      {
        en: "It bothers me when people are late.",
        answers: [
          "Me molesta cuando la gente llega tarde.",
          "Me molesta que la gente llegue tarde.",
        ],
      },
      {
        en: "Do you (tú) like spicy food?",
        answers: ["¿Te gusta la comida picante?", "¿Te gusta la comida especiada?"],
      },
    ],
    fillBlankTitle: "Completa con el pronombre correcto",
    fillBlank: [
      { prompt: "A mí ____ gusta el cine.", answers: [["me"]] },
      { prompt: "A ella ____ encantan los gatos.", answers: [["le"]] },
      { prompt: "A nosotros ____ interesa la historia.", answers: [["nos"]] },
      { prompt: "¿A ti ____ molesta el ruido?", answers: [["te"]] },
      { prompt: "A ellos ____ duelen los pies.", answers: [["les"]] },
      { prompt: "A vosotros ____ falta tiempo.", answers: [["os"]] },
    ],
    speakingQuestions: [
      "¿Qué tipo de música te gusta?",
      "¿Qué comida te encanta?",
      "¿Qué te molesta de la gente?",
      "¿Te interesa la política?",
      "¿Qué te duele cuando estás estresado/a?",
      "¿Qué te importa más, el dinero o el tiempo libre?",
      "¿Qué le gusta hacer a tu mejor amigo/a?",
      "¿Qué películas te encantan?",
      "¿Qué te falta para ser feliz?",
      "¿Qué cosas no te gustan nada?",
    ],
    dreamingNote:
      "Find a video about hobbies or opinions. Every time you hear 'me gusta' / 'me encanta', repeat the sentence out loud immediately.",
    sdFocus: "Gustar and similar verbs + indirect object pronouns.",
    vocab: [
      { es: "odiar", en: "to hate" },
      { es: "preferir", en: "to prefer" },
      { es: "apasionar", en: "to be passionate about (X apasiona a alguien)" },
      { es: "aburrir", en: "to bore" },
      { es: "sorprender", en: "to surprise" },
      { es: "dar igual", en: "to not matter / be all the same" },
      { es: "caer bien/mal", en: "to like/dislike a person" },
      { es: "tener ganas de", en: "to feel like (doing something)" },
      { es: "estar harto/a de", en: "to be fed up with" },
      { es: "valer la pena", en: "to be worth it" },
    ],
    upgrades: [
      {
        basic: "Me gusta el café.",
        upgraded: "Me encanta el café, aunque intento no tomar demasiado por la noche.",
      },
      {
        basic: "Me molesta el ruido.",
        upgraded: "Me molesta bastante el ruido, sobre todo cuando intento concentrarme.",
      },
      {
        basic: "Le gusta viajar.",
        upgraded: "Le apasiona viajar, así que siempre está planeando el próximo viaje.",
      },
    ],
    finalTopic: "Mis gustos y lo que me molesta",
    finalPoints: [
      { prompt: "Algo que te encanta", starter: "Me encanta..." },
      { prompt: "Algo que odias", starter: "Odio..." },
      { prompt: "Algo que te aburre", starter: "Me aburre..." },
      { prompt: "Algo que te da igual", starter: "Me da igual..." },
      { prompt: "Algo que vale la pena", starter: "Creo que vale la pena..." },
    ],
  },
  {
    day: 5,
    date: "September 11",
    isoDate: "2026-09-11",
    title: "Preguntas y expresiones con TENER",
    week: 1,
    goals: [
      "form every type of question (qué, quién, cuándo, dónde, cómo, cuánto, por qué, cuál)",
      "distinguish qué vs cuál correctly",
      "use idiomatic tener expressions (tener hambre, sueño, prisa, razón, miedo...)",
      "hold a full question-and-answer conversation",
      "interview someone in Spanish for 5 minutes straight",
    ],
    duolingoNote:
      "Look for the questions unit. For every question Duolingo shows you, answer it about YOURSELF out loud before selecting the answer.",
    ltNote:
      "Today's episodes focus heavily on question formation — this is exactly the pause-and-answer method Language Transfer is built for. Don't skip the pause.",
    grammarTitle: "Palabras interrogativas + TENER idiomático",
    grammarIntro:
      "Spanish question words all carry accent marks (qué, quién, cómo...). Separately, tener is used in many expressions where English uses 'to be'.",
    grammarTables: [
      {
        title: "interrogativos",
        cells: ["qué", "quién(es)", "cuándo", "dónde", "cómo", "cuánto/a", "por qué", "cuál(es)"],
      },
      {
        title: "tener + sustantivo",
        cells: [
          "tener hambre",
          "tener sed",
          "tener sueño",
          "tener prisa",
          "tener razón",
          "tener miedo",
          "tener frío/calor",
          "tener... años",
        ],
      },
    ],
    grammarExamples: [
      "¿Qué haces los fines de semana?",
      "¿Cuál es tu comida favorita?",
      "¿Por qué estudias español?",
      "Tengo mucha hambre.",
      "Tienes razón.",
      "Tengo 28 años.",
    ],
    translatePractice: [
      { en: "What time is it?", answers: ["¿Qué hora es?", "¿Qué hora tienes?"] },
      {
        en: "Which one do you prefer?",
        answers: ["¿Cuál prefieres?", "¿Cuál de ellos prefieres?", "¿Cuál de los dos prefieres?"],
      },
      {
        en: "Why are you learning Spanish?",
        answers: ["¿Por qué estudias español?", "¿Por qué estás aprendiendo español?", "¿Por qué aprendes español?"],
      },
      { en: "I'm in a hurry.", answers: ["Tengo prisa.", "Tengo mucha prisa."] },
      { en: "Are you (tú) cold?", answers: ["¿Tienes frío?", "¿Tú tienes frío?"] },
    ],
    fillBlankTitle: "Qué o cuál — elige bien",
    fillBlank: [
      { prompt: "¿____ es tu nombre?", answers: [["Cuál", "Qué"]] },
      { prompt: "¿____ es tu color favorito?", answers: [["Cuál"]] },
      { prompt: "¿____ quieres comer?", answers: [["Qué"]] },
      { prompt: "¿____ de los dos prefieres?", answers: [["Cuál"]] },
      { prompt: "¿____ significa esta palabra?", answers: [["Qué"]] },
      { prompt: "¿____ es la capital de España?", answers: [["Cuál", "Qué"]] },
    ],
    speakingQuestions: [
      "¿Qué haces cuando tienes mucha prisa?",
      "¿Cuándo tienes más hambre, por la mañana o por la noche?",
      "¿A qué le tienes miedo?",
      "¿Cuál es tu mayor logro hasta ahora?",
      "¿Por qué elegiste tu trabajo/estudios?",
      "¿Con quién hablas español normalmente?",
      "¿Dónde te gustaría vivir en el futuro?",
      "¿Cómo describirías tu personalidad en tres palabras?",
      "¿Cuánto tiempo llevas aprendiendo español?",
      "¿Qué tienes ganas de hacer este fin de semana?",
    ],
    dreamingNote:
      "Pick an interview-style video. Notice how the interviewer forms questions — try to predict the question word before it's said.",
    sdFocus: "Question formation + tener idioms.",
    vocab: [
      { es: "tener suerte", en: "to be lucky" },
      { es: "tener la culpa", en: "to be at fault" },
      { es: "tener en cuenta", en: "to take into account" },
      { es: "tener claro", en: "to be clear about (something)" },
      { es: "tener que ver con", en: "to have to do with" },
      { es: "de vez en cuando", en: "sometimes" },
      { es: "a menudo", en: "often" },
      { es: "rara vez", en: "rarely" },
      { es: "sin duda", en: "without a doubt" },
      { es: "por cierto", en: "by the way" },
    ],
    upgrades: [
      {
        basic: "Tengo hambre.",
        upgraded: "Tengo bastante hambre, así que voy a comer algo antes de seguir.",
      },
      {
        basic: "Tengo miedo.",
        upgraded: "Tengo un poco de miedo, pero creo que vale la pena intentarlo.",
      },
      { basic: "¿Cuál prefieres?", upgraded: "De los dos, ¿cuál prefieres y por qué?" },
    ],
    finalTopic: "Entrevista: hazme preguntas y yo te las hago a ti",
    finalPoints: [
      { prompt: "Pregunta sobre su rutina", starter: "¿A qué hora...?" },
      { prompt: "Pregunta sobre gustos", starter: "¿Qué te gusta...?" },
      { prompt: "Pregunta con por qué", starter: "¿Por qué...?" },
      { prompt: "Pregunta con cuál", starter: "¿Cuál es...?" },
      { prompt: "Cierra con una expresión de tener", starter: "Bueno, tengo que..." },
    ],
  },
  {
    day: 6,
    date: "September 12",
    isoDate: "2026-09-12",
    title: "Adjetivos y SER vs. ESTAR (a fondo)",
    week: 1,
    goals: [
      "make adjectives agree in gender and number automatically",
      "place adjectives correctly (before/after the noun, meaning changes)",
      "distinguish ser vs estar with the SAME adjective (aburrido, listo, rico...)",
      "describe people physically and psychologically",
      "give a rich, layered description of a person for several minutes",
    ],
    duolingoNote:
      "Search for the adjectives / descriptions unit. Practice flipping masculine↔feminine and singular↔plural on every adjective you see.",
    ltNote:
      "Language Transfer will likely revisit ser/estar today with new nuance — pay attention to any adjective that changes meaning depending on which verb you use.",
    grammarTitle: "Adjetivos que cambian de significado con SER/ESTAR",
    grammarIntro:
      "Some adjectives mean something different depending on whether you pair them with ser (permanent/identity) or estar (temporary/state).",
    grammarTables: [
      {
        title: "ser + adj = identidad",
        cells: [
          "es aburrido (he's boring)",
          "es listo (he's clever)",
          "es rico (he's rich)",
          "es malo (he's bad/evil)",
        ],
      },
      {
        title: "estar + adj = estado",
        cells: [
          "está aburrido (he's bored)",
          "está listo (he's ready)",
          "está rico (it's tasty)",
          "está malo (he's sick/it's bad quality)",
        ],
      },
    ],
    grammarExamples: [
      "Mi hermano es muy alto y delgado.",
      "Ella está cansada hoy.",
      "Es una persona muy generosa.",
      "La comida está riquísima.",
      "Estamos listos para salir.",
      "Es un poco tímido, pero está más abierto últimamente.",
    ],
    translatePractice: [
      {
        en: "She's tall and has curly hair.",
        answers: [
          "Ella es alta y tiene el pelo rizado.",
          "Es alta y tiene el pelo rizado.",
          "Es alta y tiene pelo rizado.",
        ],
      },
      { en: "He's bored in class.", answers: ["Está aburrido en clase.", "Él está aburrido en clase."] },
      {
        en: "This soup is delicious.",
        answers: ["Esta sopa está deliciosa.", "Esta sopa está rica.", "Esta sopa está riquísima."],
      },
      {
        en: "They're ready to leave.",
        answers: ["Están listos para salir.", "Están listos para irse."],
      },
      {
        en: "My grandmother is a very kind person.",
        answers: [
          "Mi abuela es una persona muy amable.",
          "Mi abuela es una persona muy buena.",
          "Mi abuela es muy amable.",
        ],
      },
    ],
    fillBlankTitle: "Ser o estar",
    fillBlank: [
      { prompt: "Mi jefe ____ muy exigente.", answers: [["es"]] },
      { prompt: "Hoy ____ muy cansado/a.", answers: [["estoy"]] },
      { prompt: "La película ____ aburrida.", answers: [["es", "está"]] },
      { prompt: "Nosotros ____ listos.", answers: [["estamos"]] },
      { prompt: "Esta fruta ____ verde todavía.", answers: [["está"]] },
      { prompt: "Él ____ una persona muy alegre.", answers: [["es"]] },
    ],
    speakingQuestions: [
      "Describe físicamente a un familiar.",
      "Describe la personalidad de tu mejor amigo/a.",
      "¿Eres una persona más tímida o más extrovertida?",
      "¿Cómo estás hoy, y por qué?",
      "Describe a alguien que admiras.",
      "¿Qué características buscas en un amigo/a?",
      "¿Cómo era tu mejor amigo/a de la infancia? (usa 'era' si puedes)",
      "¿Qué tipo de persona te resulta difícil de tratar?",
      "Describe tu propia personalidad en detalle.",
      "¿Qué adjetivos usarían tus amigos para describirte?",
    ],
    dreamingNote:
      "Find a video where someone describes a person (family member, celebrity, character). Note every adjective and whether it's used with ser or estar.",
    sdFocus: "Adjective agreement, position, and ser/estar with adjectives.",
    vocab: [
      { es: "cariñoso/a", en: "affectionate" },
      { es: "testarudo/a", en: "stubborn" },
      { es: "cotilla", en: "gossipy" },
      { es: "presumido/a", en: "vain / show-off" },
      { es: "sensato/a", en: "sensible" },
      { es: "despistado/a", en: "absent-minded" },
      { es: "encantador/a", en: "charming" },
      { es: "gruñón/gruñona", en: "grumpy" },
      { es: "de fiar", en: "trustworthy" },
      { es: "insoportable", en: "unbearable" },
    ],
    upgrades: [
      { basic: "Es simpático.", upgraded: "Es una de las personas más simpáticas que conozco." },
      {
        basic: "Está cansada.",
        upgraded: "Está agotada porque lleva toda la semana durmiendo mal.",
      },
      {
        basic: "Es inteligente.",
        upgraded: "Es muy inteligente, aunque a veces le cuesta expresarse.",
      },
    ],
    finalTopic: "Describe a tres personas importantes en tu vida",
    finalPoints: [
      { prompt: "Persona 1: aspecto físico", starter: "Es..." },
      { prompt: "Persona 1: personalidad", starter: "Tiene un carácter..." },
      { prompt: "Persona 2: cómo la conociste", starter: "La conocí cuando..." },
      { prompt: "Persona 3: por qué es importante", starter: "Es importante porque..." },
      { prompt: "Comparación entre ellas", starter: "A diferencia de..., ... es más..." },
    ],
  },
  {
    day: 7,
    date: "September 13",
    isoDate: "2026-09-13",
    title: "REPASO — Semana 1",
    week: 1,
    isReview: true,
    goals: [
      "actively recall everything from Days 2-6 without notes",
      "combine present tense, gustar, questions, tener idioms and adjectives in ONE conversation",
      "identify your own weak points from this week",
      "speak for a full 10 minutes with no preparation",
      "self-correct mistakes in real time",
    ],
    duolingoNote:
      "Do a full practice session using the 'Practice' button — let Duolingo mix old and new material for you today instead of a fixed unit.",
    ltNote:
      "Relisten to ONE earlier lesson from this week that felt hardest. This time you should answer faster and with fewer mistakes.",
    grammarTitle: "Repaso acumulativo",
    grammarIntro:
      "No new grammar today — the goal is retrieval. Everything below mixes the five topics from this week.",
    grammarTables: [
      {
        title: "Esta semana cubrimos",
        cells: [
          "presente regular",
          "presente irregular",
          "gustar + pronombres",
          "preguntas + tener",
          "adjetivos + ser/estar",
        ],
      },
    ],
    grammarExamples: [
      "Normalmente me levanto temprano, pero hoy estoy cansado.",
      "¿Qué te gusta hacer cuando tienes tiempo libre?",
      "Tengo que trabajar, aunque prefiero quedarme en casa.",
      "Es una persona muy simpática, aunque hoy está un poco seria.",
      "¿Cuál es la diferencia entre estos dos platos?",
    ],
    translatePractice: [
      {
        en: "I usually get up early, but today I'm exhausted.",
        answers: [
          "Suelo levantarme temprano, pero hoy estoy agotado.",
          "Suelo levantarme temprano, pero hoy estoy agotada.",
          "Normalmente me levanto temprano, pero hoy estoy agotado.",
          "Normalmente me levanto temprano, pero hoy estoy agotada.",
        ],
      },
      {
        en: "What do you like to do in your free time?",
        answers: [
          "¿Qué te gusta hacer en tu tiempo libre?",
          "¿Qué te gusta hacer cuando tienes tiempo libre?",
        ],
      },
      {
        en: "She's very kind, but today she seems a bit stressed.",
        answers: [
          "Es muy amable, pero hoy parece un poco estresada.",
          "Ella es muy amable, pero hoy está un poco estresada.",
        ],
      },
      {
        en: "Why do you have to leave so early?",
        answers: ["¿Por qué tienes que salir tan temprano?", "¿Por qué tienes que irte tan temprano?"],
      },
      {
        en: "Which one do you prefer, and why?",
        answers: ["¿Cuál prefieres, y por qué?", "¿Cuál de los dos prefieres, y por qué?"],
      },
    ],
    fillBlankTitle: "Repaso mixto",
    fillBlank: [
      { prompt: "Yo ____ (soler) levantarme a las siete.", answers: [["suelo"]] },
      { prompt: "A mí ____ (gustar) mucho el cine.", answers: [["me gusta", "gusta"]] },
      { prompt: "¿____ (tú/tener) hambre?", answers: [["Tienes"], ["tienes"]] },
      { prompt: "Ella ____ (ser) muy inteligente.", answers: [["es"]] },
      { prompt: "Nosotros ____ (querer) salir esta noche.", answers: [["queremos"]] },
      { prompt: "¿____ es tu color favorito?", answers: [["Cuál"]] },
    ],
    speakingQuestions: [
      "Preséntate como si no te conociera nadie.",
      "Describe tu semana típica.",
      "¿Qué te gusta y qué no te gusta de tu rutina?",
      "Describe a alguien cercano a ti.",
      "¿Qué tienes que hacer mañana?",
      "¿Qué preguntas me harías a mí?",
      "¿Cuál ha sido la parte más difícil de esta semana de español?",
      "¿Qué palabra nueva usas más esta semana?",
      "Habla de tus planes para el fin de semana.",
      "¿Cómo te sientes con tu progreso hasta ahora?",
    ],
    dreamingNote:
      "Pick ANY video this week from a topic you haven't tried yet — measure how much more you understand compared to Day 2.",
    sdFocus: "Do the week's quiz/review section if available, or redo the hardest lesson from the week.",
    vocab: [
      { es: "repasar", en: "to review" },
      { es: "mejorar", en: "to improve" },
      { es: "equivocarse", en: "to make a mistake" },
      { es: "acostumbrarse a", en: "to get used to" },
      { es: "avanzar", en: "to advance / progress" },
      { es: "dominar", en: "to master" },
      { es: "fluidez", en: "fluency" },
      { es: "cometer un error", en: "to make a mistake" },
      { es: "perfeccionar", en: "to perfect" },
      { es: "progreso", en: "progress" },
    ],
    upgrades: [
      {
        basic: "He mejorado esta semana.",
        upgraded:
          "Creo que he mejorado bastante esta semana, aunque todavía cometo muchos errores con los verbos irregulares.",
      },
      {
        basic: "Es difícil.",
        upgraded: "Es difícil, pero cada día me resulta un poco más natural.",
      },
      {
        basic: "Quiero seguir practicando.",
        upgraded: "Quiero seguir practicando todos los días porque noto que estoy avanzando.",
      },
    ],
    finalTopic: "10 minutos: resume tu semana entera en español",
    finalPoints: [
      { prompt: "Qué aprendiste esta semana", starter: "Esta semana aprendí a..." },
      { prompt: "Qué te costó más", starter: "Lo que más me costó fue..." },
      { prompt: "Un ejemplo de cada tema (5 frases)", starter: "Por ejemplo..." },
      { prompt: "Cómo te sientes con tu progreso", starter: "Creo que..." },
      { prompt: "Un objetivo para la semana 2", starter: "La semana que viene quiero..." },
    ],
  },
];
