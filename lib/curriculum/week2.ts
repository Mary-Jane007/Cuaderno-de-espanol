import type { DayLesson } from "@/lib/types";

export const WEEK_2: DayLesson[] = [
  {
    day: 8,
    date: "September 14",
    isoDate: "2026-09-14",
    title: "Verbos reflexivos",
    week: 2,
    goals: [
      "conjugate reflexive verbs correctly (levantarse, ducharse, vestirse...)",
      "place reflexive pronouns correctly (before conjugated verb / attached to infinitive)",
      "describe a full morning/night routine using only reflexives",
      "distinguish reflexive vs non-reflexive use of the same verb (lavar vs lavarse)",
      "speak fluidly about routine without pausing on pronoun placement",
    ],
    duolingoNote:
      "Look for the reflexive verbs unit. Say the full sentence with the pronoun attached correctly, then try moving the pronoun (voy a levantarme / me voy a levantar) to practice both positions.",
    ltNote:
      "Reflexive verbs often confuse English speakers because English doesn't mark them the same way — really slow down and pause before answering today.",
    grammarTitle: "Pronombres reflexivos",
    grammarIntro:
      "Reflexive verbs show the subject doing the action to themselves. The pronoun goes before the conjugated verb, or attached to an infinitive/gerund.",
    grammarTables: [
      { title: "pronombres", cells: ["me", "te", "se", "nos", "os", "se"] },
      {
        title: "levantarse",
        cells: ["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"],
      },
      {
        title: "con infinitivo",
        cells: ["voy a ducharme / me voy a duchar", "quiero vestirme / me quiero vestir"],
      },
    ],
    grammarExamples: [
      "Me levanto a las siete.",
      "Se ducha antes de desayunar.",
      "Nos vestimos rápido por la mañana.",
      "¿A qué hora te acuestas?",
      "Voy a peinarme antes de salir.",
    ],
    translatePractice: [
      { en: "I wake up at six.", answers: ["Me despierto a las seis.", "Me levanto a las seis."] },
      {
        en: "He shaves every morning.",
        answers: ["Se afeita todas las mañanas.", "Él se afeita todas las mañanas.", "Se afeita cada mañana."],
      },
      { en: "We get dressed quickly.", answers: ["Nos vestimos rápido.", "Nos vestimos rápidamente."] },
      {
        en: "Do you (tú) brush your teeth after breakfast?",
        answers: [
          "¿Te cepillas los dientes después del desayuno?",
          "¿Tú te cepillas los dientes después del desayuno?",
        ],
      },
      {
        en: "I'm going to take a shower.",
        answers: ["Voy a ducharme.", "Me voy a duchar.", "Voy a darme una ducha."],
      },
    ],
    fillBlankTitle: "Añade el pronombre reflexivo",
    fillBlank: [
      { prompt: "Yo ____ despierto a las seis.", answers: [["me"]] },
      { prompt: "Ella ____ maquilla antes de salir.", answers: [["se"]] },
      { prompt: "Nosotros ____ acostamos tarde.", answers: [["nos"]] },
      { prompt: "¿Tú ____ cepillas los dientes dos veces al día?", answers: [["te"]] },
      { prompt: "Ellos ____ duchan por la noche.", answers: [["se"]] },
      { prompt: "Voy a ____ vestir en cinco minutos.", answers: [["me"]] },
    ],
    speakingQuestions: [
      "¿A qué hora te despiertas los días laborables?",
      "¿Te duchas por la mañana o por la noche?",
      "¿Cuánto tiempo tardas en arreglarte?",
      "¿A qué hora te acuestas normalmente?",
      "¿Te cuesta levantarte los lunes?",
      "¿Qué haces justo antes de dormir?",
      "¿Te preocupas mucho por las cosas pequeñas?",
      "¿Te enfadas fácilmente?",
      "¿Te acuerdas de tus sueños?",
      "¿Te sientes más productivo/a por la mañana o por la noche?",
    ],
    dreamingNote: "Search for a morning-routine or 'rutina' video — reflexive verbs will appear constantly.",
    sdFocus: "Reflexive verbs (pronoun placement in particular).",
    vocab: [
      { es: "despertarse", en: "to wake up" },
      { es: "arreglarse", en: "to get ready" },
      { es: "quejarse", en: "to complain" },
      { es: "preocuparse", en: "to worry" },
      { es: "enfadarse", en: "to get angry" },
      { es: "darse prisa", en: "to hurry" },
      { es: "olvidarse de", en: "to forget" },
      { es: "acordarse de", en: "to remember" },
      { es: "relajarse", en: "to relax" },
      { es: "quedarse", en: "to stay" },
    ],
    upgrades: [
      {
        basic: "Me levanto temprano.",
        upgraded:
          "Me levanto temprano entre semana, aunque los fines de semana me quedo en la cama hasta tarde.",
      },
      {
        basic: "Me preocupo mucho.",
        upgraded: "Tiendo a preocuparme por cosas pequeñas, aunque intento no darle tantas vueltas.",
      },
      {
        basic: "Me acuesto tarde.",
        upgraded: "Suelo acostarme tarde porque es cuando más concentrado/a estoy.",
      },
    ],
    finalTopic: "Un día completo, de que te despiertas a que te acuestas",
    finalPoints: [
      { prompt: "Despertarte y arreglarte", starter: "Me despierto..." },
      { prompt: "El resto de la mañana", starter: "Después..." },
      { prompt: "Cómo te sientes durante el día", starter: "Suelo sentirme..." },
      { prompt: "La noche", starter: "Por la noche..." },
      { prompt: "Algo que te gustaría cambiar de tu rutina", starter: "Me gustaría..." },
    ],
  },
  {
    day: 9,
    date: "September 15",
    isoDate: "2026-09-15",
    title: "Pretérito — verbos regulares",
    week: 2,
    goals: [
      "conjugate regular -AR, -ER, -IR verbs in the preterite",
      "talk about completed actions in the past",
      "use common past time markers (ayer, la semana pasada, anoche...)",
      "narrate a simple sequence of past events",
      "start thinking in the past tense without translating from English",
    ],
    duolingoNote:
      "Find the past tense / preterite unit. Say each sentence, then change the time marker (ayer, la semana pasada, hace dos días) to build variety.",
    ltNote:
      "This is a big turning point — the preterite unlocks storytelling. Really commit to the pause-and-answer method today; don't rush.",
    grammarTitle: "Pretérito regular",
    grammarIntro:
      "The preterite describes a completed, finished action at a specific point in the past — 'I ate', 'we worked', 'she left'.",
    grammarTables: [
      {
        title: "-AR (trabajar)",
        cells: ["trabajé", "trabajaste", "trabajó", "trabajamos", "trabajasteis", "trabajaron"],
      },
      {
        title: "-ER (comer)",
        cells: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
      },
      {
        title: "-IR (escribir)",
        cells: ["escribí", "escribiste", "escribió", "escribimos", "escribisteis", "escribieron"],
      },
    ],
    grammarExamples: [
      "Ayer trabajé todo el día.",
      "Comimos en un restaurante nuevo.",
      "¿Qué hiciste... espera, eso es irregular. Escribió una carta larga.",
      "La semana pasada viajaron a Madrid.",
      "Anoche no dormí bien.",
    ],
    translatePractice: [
      {
        en: "I worked until nine last night.",
        answers: ["Trabajé hasta las nueve anoche.", "Anoche trabajé hasta las nueve."],
      },
      {
        en: "We ate at a new restaurant.",
        answers: ["Comimos en un restaurante nuevo.", "Comimos en un restaurante nuevo."],
      },
      {
        en: "She wrote three emails yesterday.",
        answers: [
          "Ella escribió tres correos ayer.",
          "Escribió tres correos electrónicos ayer.",
          "Ayer escribió tres correos.",
        ],
      },
      {
        en: "They traveled to Spain last month.",
        answers: [
          "Ellos viajaron a España el mes pasado.",
          "Viajaron a España el mes pasado.",
        ],
      },
      {
        en: "Did you (tú) study for the exam?",
        answers: ["¿Estudiaste para el examen?", "¿Tú estudiaste para el examen?"],
      },
    ],
    fillBlankTitle: "Conjuga en pretérito",
    fillBlank: [
      { prompt: "Ayer yo ____ (trabajar) hasta tarde.", answers: [["trabajé"]] },
      { prompt: "Nosotros ____ (comer) en casa de mis padres.", answers: [["comimos"]] },
      { prompt: "Ella ____ (escribir) un correo importante.", answers: [["escribió"]] },
      { prompt: "¿Tú ____ (estudiar) anoche?", answers: [["estudiaste"]] },
      { prompt: "Ellos ____ (viajar) el mes pasado.", answers: [["viajaron"]] },
      { prompt: "Vosotros ____ (vivir) allí dos años.", answers: [["vivisteis"]] },
    ],
    speakingQuestions: [
      "¿Qué hiciste ayer por la mañana?",
      "¿Dónde comiste ayer?",
      "¿A qué hora te acostaste anoche?",
      "¿Qué compraste la última vez que fuiste de compras?",
      "¿Viajaste a algún sitio el año pasado?",
      "¿Qué estudiaste o trabajaste la semana pasada?",
      "¿Hablaste con algún amigo ayer?",
      "¿Qué viste en la televisión últimamente?",
      "¿Cocinaste algo esta semana?",
      "¿Qué fue lo más interesante que hiciste el mes pasado?",
    ],
    dreamingNote:
      "Look for a video where someone tells a personal story ('lo que me pasó...'). Listen for -é, -aste, -ó, -amos, -aron endings.",
    sdFocus: "Preterite tense (regular verbs) + past time expressions.",
    vocab: [
      { es: "ayer", en: "yesterday" },
      { es: "anoche", en: "last night" },
      { es: "la semana pasada", en: "last week" },
      { es: "el mes pasado", en: "last month" },
      { es: "hace dos días", en: "two days ago" },
      { es: "de repente", en: "suddenly" },
      { es: "al final", en: "in the end" },
      { es: "finalmente", en: "finally" },
      { es: "en aquel momento", en: "at that moment" },
      { es: "nada más llegar", en: "as soon as I/he/she arrived" },
    ],
    upgrades: [
      {
        basic: "Trabajé mucho ayer.",
        upgraded: "Ayer trabajé más de lo normal porque tuve una entrega urgente.",
      },
      {
        basic: "Comimos en un restaurante.",
        upgraded: "Comimos en un restaurante nuevo que abrió la semana pasada, y estuvo genial.",
      },
      {
        basic: "Viajé a España.",
        upgraded: "El año pasado viajé a España y fue una de las mejores experiencias que he tenido.",
      },
    ],
    finalTopic: "Cuenta lo que hiciste ayer, paso a paso",
    finalPoints: [
      { prompt: "La mañana de ayer", starter: "Ayer por la mañana..." },
      { prompt: "El mediodía", starter: "A mediodía..." },
      { prompt: "La tarde", starter: "Por la tarde..." },
      { prompt: "La noche", starter: "Por la noche..." },
      { prompt: "Algo inesperado que pasó", starter: "De repente..." },
    ],
  },
  {
    day: 10,
    date: "September 16",
    isoDate: "2026-09-16",
    title: "Pretérito — verbos irregulares",
    week: 2,
    goals: [
      "conjugate the most-used irregular preterites (ir, ser, hacer, tener, estar, poder, poner, decir, dar, ver)",
      "distinguish ir vs ser in the preterite (identical forms, context tells you which)",
      "combine regular and irregular preterites in one story",
      "narrate a full past event with obstacles/twists",
      "recognize irregular preterite endings by ear",
    ],
    duolingoNote:
      "Search specifically for irregular past-tense verbs. These don't follow the pattern from yesterday — drill each one individually out loud.",
    ltNote:
      "Today is genuinely harder — irregular preterites need repetition. It's fine to feel slower; that struggle is exactly what builds retention.",
    grammarTitle: "Pretérito irregular (los más comunes)",
    grammarIntro:
      "These don't take the regular endings and often have a stem change. Memorize them as chunks, not rules.",
    grammarTables: [
      {
        title: "ir / ser (idénticos)",
        cells: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
      },
      {
        title: "hacer",
        cells: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
      },
      {
        title: "tener / estar / poder / poner",
        cells: [
          "tuve / estuve / pude / puse",
          "tuviste / estuviste / pudiste / pusiste",
          "tuvo / estuvo / pudo / puso",
          "tuvimos / estuvimos / pudimos / pusimos",
        ],
      },
      {
        title: "decir / dar / ver",
        cells: ["dije, di, vi", "dijiste, diste, viste", "dijo, dio, vio"],
      },
    ],
    grammarExamples: [
      "Fui al médico ayer.",
      "Fue muy divertido.",
      "Hice la cena para todos.",
      "Tuve que salir temprano.",
      "Estuvimos en la playa todo el día.",
      "Dije la verdad.",
    ],
    translatePractice: [
      { en: "I went to the doctor yesterday.", answers: ["Fui al médico ayer.", "Ayer fui al médico."] },
      {
        en: "It was a great trip.",
        answers: ["Fue un viaje genial.", "Fue un gran viaje.", "Fue un viaje increíble."],
      },
      {
        en: "We had to leave early.",
        answers: ["Tuvimos que salir temprano.", "Tuvimos que irnos temprano."],
      },
      {
        en: "She made dinner for everyone.",
        answers: ["Ella hizo la cena para todos.", "Hizo la cena para todos."],
      },
      {
        en: "They said they couldn't come.",
        answers: [
          "Dijeron que no podían venir.",
          "Ellos dijeron que no podían venir.",
          "Dijeron que no pudieron venir.",
        ],
      },
    ],
    fillBlankTitle: "Conjuga el irregular",
    fillBlank: [
      { prompt: "Ayer yo ____ (ir) al gimnasio.", answers: [["fui"]] },
      { prompt: "La fiesta ____ (ser) increíble.", answers: [["fue"]] },
      { prompt: "Nosotros ____ (tener) que esperar una hora.", answers: [["tuvimos"]] },
      { prompt: "Ella ____ (hacer) todo el trabajo sola.", answers: [["hizo"]] },
      { prompt: "Yo no ____ (poder) dormir anoche.", answers: [["pude"]] },
      { prompt: "Ellos ____ (decir) que llegarían tarde.", answers: [["dijeron"]] },
    ],
    speakingQuestions: [
      "¿Adónde fuiste el fin de semana pasado?",
      "¿Qué hiciste para celebrar tu último cumpleaños?",
      "¿Tuviste algún problema esta semana?",
      "¿Pudiste terminar todo lo que planeaste ayer?",
      "¿Qué le dijiste a alguien importante recientemente?",
      "¿Estuviste alguna vez en un lugar que te sorprendió?",
      "¿Diste algún consejo importante últimamente?",
      "¿Viste alguna película o serie interesante últimamente?",
      "¿Qué fue lo mejor que te pasó este año?",
      "¿Qué fue lo más difícil que tuviste que hacer recientemente?",
    ],
    dreamingNote:
      "Look for storytelling videos ('anécdotas'). These are packed with irregular preterites — try to catch fui, hice, tuve, pude as you listen.",
    sdFocus: "Irregular preterite verbs.",
    vocab: [
      { es: "darse cuenta", en: "to realize" },
      { es: "tener lugar", en: "to take place" },
      { es: "suceder", en: "to happen" },
      { es: "ocurrir", en: "to occur" },
      { es: "acabar de", en: "to have just (done something)" },
      { es: "por fin", en: "finally / at last" },
      { es: "al principio", en: "at the beginning" },
      { es: "a mitad de camino", en: "halfway through" },
      { es: "sin querer", en: "unintentionally" },
      { es: "a propósito", en: "on purpose" },
    ],
    upgrades: [
      {
        basic: "Fui a la playa.",
        upgraded: "El fin de semana pasado fui a la playa con unos amigos y estuvimos allí todo el día.",
      },
      {
        basic: "Tuve un problema.",
        upgraded: "Tuve un problema bastante grande en el trabajo, pero al final conseguí resolverlo.",
      },
      {
        basic: "Hice la cena.",
        upgraded: "Hice la cena para toda la familia, aunque no salió exactamente como esperaba.",
      },
    ],
    finalTopic: "Cuenta una anécdota real (algo que realmente te pasó)",
    finalPoints: [
      { prompt: "Cuándo y dónde pasó", starter: "Esto pasó..." },
      { prompt: "Qué estabas haciendo", starter: "Yo estaba..." },
      { prompt: "Qué pasó exactamente", starter: "De repente..." },
      { prompt: "Cómo reaccionaste", starter: "Yo..." },
      { prompt: "Cómo terminó", starter: "Al final..." },
    ],
  },
  {
    day: 11,
    date: "September 17",
    isoDate: "2026-09-17",
    title: "El imperfecto",
    week: 2,
    goals: [
      "conjugate the imperfect for -AR and -ER/-IR verbs",
      "know the only three irregulars (ser, ir, ver)",
      "describe repeated past habits and background situations",
      "describe how things used to be (childhood, past life)",
      "set the scene for a story using only imperfect",
    ],
    duolingoNote:
      "Search for 'imperfect tense'. Contrast every sentence against yesterday's preterite: was it a single completed action, or an ongoing/repeated one?",
    ltNote:
      "Language Transfer will likely contrast imperfect with preterite directly — this contrast is the whole point, so listen carefully to WHY one is chosen over the other.",
    grammarTitle: "El imperfecto — describir, no contar sucesos puntuales",
    grammarIntro:
      "The imperfect describes ongoing states, habits, background description, and repeated past actions — 'I used to...', 'it was...', 'I was ...ing'.",
    grammarTables: [
      {
        title: "-AR (hablar)",
        cells: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
      },
      {
        title: "-ER/-IR (comer/vivir)",
        cells: ["comía / vivía", "comías / vivías", "comía / vivía", "comíamos / vivíamos", "comíais / vivíais", "comían / vivían"],
      },
      {
        title: "irregulares (solo 3)",
        cells: ["ser → era, eras, era...", "ir → iba, ibas, iba...", "ver → veía, veías, veía..."],
      },
    ],
    grammarExamples: [
      "Cuando era niño, vivía en el campo.",
      "Íbamos a la playa todos los veranos.",
      "Mi abuela cocinaba todos los domingos.",
      "Antes trabajaba en una fábrica.",
      "Veíamos mucho la televisión de pequeños.",
    ],
    translatePractice: [
      {
        en: "When I was young, I used to play outside every day.",
        answers: [
          "Cuando era joven, jugaba fuera todos los días.",
          "Cuando era pequeño, jugaba fuera todos los días.",
          "Cuando era pequeña, jugaba fuera todos los días.",
          "De pequeño, jugaba fuera todos los días.",
          "De pequeña, jugaba fuera todos los días.",
        ],
      },
      {
        en: "We used to go to my grandparents' house on Sundays.",
        answers: [
          "Íbamos a casa de mis abuelos los domingos.",
          "Solíamos ir a casa de mis abuelos los domingos.",
        ],
      },
      {
        en: "She used to work as a teacher.",
        answers: ["Ella trabajaba como profesora.", "Trabajaba de profesora.", "Solía trabajar como profesora."],
      },
      {
        en: "It was raining a lot that year.",
        answers: ["Llovía mucho ese año.", "Ese año llovía mucho."],
      },
      {
        en: "They used to live in the countryside.",
        answers: ["Vivían en el campo.", "Ellos vivían en el campo.", "Solían vivir en el campo."],
      },
    ],
    fillBlankTitle: "Conjuga en imperfecto",
    fillBlank: [
      { prompt: "Cuando ____ (ser) niño, ____ (vivir) en Madrid.", answers: [["era"], ["vivía"]] },
      { prompt: "Nosotros ____ (ir) a la playa cada verano.", answers: [["íbamos"]] },
      { prompt: "Mi madre ____ (cocinar) todos los días.", answers: [["cocinaba"]] },
      { prompt: "Yo ____ (jugar) al fútbol de pequeño.", answers: [["jugaba"]] },
      { prompt: "Ellos ____ (tener) un perro precioso.", answers: [["tenían"]] },
      { prompt: "¿Tú ____ (ver) mucho la televisión de niño/a?", answers: [["veías"]] },
    ],
    speakingQuestions: [
      "¿Cómo era tu vida cuando eras niño/a?",
      "¿Dónde vivías hace diez años?",
      "¿Qué hacías los veranos cuando eras pequeño/a?",
      "¿Cómo era tu mejor amigo/a de la infancia?",
      "¿Qué te gustaba hacer que ya no haces?",
      "¿Cómo era tu casa de la infancia?",
      "¿Qué programas veías de pequeño/a?",
      "¿Tenías alguna mascota? ¿Cómo era?",
      "¿A qué jugabas en el colegio?",
      "¿Cómo era la relación con tus hermanos/padres de pequeño/a?",
    ],
    dreamingNote:
      "Search for a video about childhood or 'cuando era niño'. Notice the -aba/-ía endings repeating throughout.",
    sdFocus: "Imperfect tense.",
    vocab: [
      { es: "de pequeño/a", en: "as a child" },
      { es: "de joven", en: "as a young person" },
      { es: "solía", en: "I/he/she used to (soler + infinitive, imperfect)" },
      { es: "en aquella época", en: "back then" },
      { es: "por aquel entonces", en: "at that time" },
      { es: "crecer", en: "to grow up" },
      { es: "la infancia", en: "childhood" },
      { es: "recordar", en: "to remember" },
      { es: "echar de menos", en: "to miss (someone/something)" },
      { es: "cambiar", en: "to change" },
    ],
    upgrades: [
      {
        basic: "Vivía en el campo.",
        upgraded: "De pequeño vivía en el campo, y todavía echo de menos esa tranquilidad.",
      },
      {
        basic: "Íbamos a la playa.",
        upgraded: "Solíamos ir a la playa cada verano; eran algunos de mis mejores recuerdos de infancia.",
      },
      {
        basic: "Era muy tímido.",
        upgraded: "Era muy tímido de niño, aunque con el tiempo eso ha cambiado bastante.",
      },
    ],
    finalTopic: "Cómo era tu vida hace diez o veinte años",
    finalPoints: [
      { prompt: "Dónde vivías", starter: "Vivía en..." },
      { prompt: "Cómo era tu día a día", starter: "Solía..." },
      { prompt: "Cómo eras tú", starter: "Era una persona..." },
      { prompt: "Qué te gustaba hacer", starter: "Me encantaba..." },
      { prompt: "Qué ha cambiado desde entonces", starter: "Ahora, en cambio,..." },
    ],
  },
  {
    day: 12,
    date: "September 18",
    isoDate: "2026-09-18",
    title: "Pretérito vs. Imperfecto (juntos)",
    week: 2,
    goals: [
      "choose correctly between preterite and imperfect in context",
      "combine both tenses in the same story (background + event)",
      "understand how the same verb changes meaning by tense (sabía vs supe, conocía vs conocí)",
      "narrate a complete story with proper scene-setting and action",
      "interrupt an ongoing action with a sudden event grammatically",
    ],
    duolingoNote:
      "Look for mixed past-tense practice or 'stories' section. For each sentence, ask: is this the background (imperfect) or the main event (preterite)?",
    ltNote:
      "This is the payoff lesson — Language Transfer should now combine both tenses. Really try to explain to yourself WHY each one is used before checking.",
    grammarTitle: "La regla práctica",
    grammarIntro:
      "Imperfect = the scenery/background. Preterite = what happened/interrupted the scenery. A classic structure: 'Estaba [imperfecto] cuando [pretérito] pasó algo.'",
    grammarTables: [
      {
        title: "cambia de significado",
        cells: [
          "sabía (I knew) vs supe (I found out)",
          "conocía (I knew/was familiar) vs conocí (I met)",
          "quería (I wanted) vs quise (I tried/decided)",
          "podía (I was able, general) vs pude (I managed to, specific)",
        ],
      },
    ],
    grammarExamples: [
      "Estaba durmiendo cuando sonó el teléfono.",
      "Hacía mucho frío cuando salimos de casa.",
      "No sabía que te habías mudado. — Lo supe ayer.",
      "Conocía a mucha gente allí, pero conocí a mi mejor amiga ese día.",
      "Quería llamarte, pero al final no pude.",
    ],
    translatePractice: [
      {
        en: "I was watching TV when you called.",
        answers: [
          "Estaba viendo la televisión cuando llamaste.",
          "Estaba viendo la tele cuando me llamaste.",
        ],
      },
      {
        en: "It was raining when we left the house.",
        answers: ["Llovía cuando salimos de casa.", "Estaba lloviendo cuando salimos de casa."],
      },
      {
        en: "I found out yesterday that she moved.",
        answers: [
          "Supe ayer que se mudó.",
          "Ayer supe que se había mudado.",
          "Supe ayer que ella se mudó.",
        ],
      },
      {
        en: "I met my best friend in college.",
        answers: [
          "Conocí a mi mejor amigo en la universidad.",
          "Conocí a mi mejor amiga en la universidad.",
        ],
      },
      {
        en: "I wanted to go, but I couldn't in the end.",
        answers: ["Quería ir, pero al final no pude.", "Quería ir, pero no pude al final."],
      },
    ],
    fillBlankTitle: "Elige pretérito o imperfecto",
    fillBlank: [
      { prompt: "Yo ____ (dormir) cuando ____ (llamar) mi hermano.", answers: [["dormía"], ["llamó"]] },
      { prompt: "____ (Hacer) mucho calor ese día.", answers: [["Hacía", "hacía"]] },
      {
        prompt: "Nosotros ____ (estar) en el parque cuando ____ (empezar) a llover.",
        answers: [["estábamos"], ["empezó"]],
      },
      { prompt: "Ella no ____ (saber) la verdad hasta ayer.", answers: [["supo", "sabía"]] },
      { prompt: "Yo ____ (conocer) a Marta en la universidad.", answers: [["conocí"]] },
      { prompt: "Ellos ____ (querer) venir, pero no ____ (poder).", answers: [["querían"], ["pudieron", "podían"]] },
    ],
    speakingQuestions: [
      "Cuenta algo que pasó mientras hacías otra cosa.",
      "¿Dónde estabas y qué hacías cuando pasó algo importante en tu vida?",
      "¿Cómo era el momento en que conociste a tu mejor amigo/a?",
      "¿Qué tiempo hacía el día de un evento importante en tu vida?",
      "¿Qué querías hacer de pequeño/a que nunca hiciste?",
      "Cuenta una historia con al menos dos interrupciones inesperadas.",
      "¿Cuándo te diste cuenta de algo importante sobre ti mismo/a?",
      "Describe el ambiente de un lugar y luego cuenta qué pasó allí.",
      "¿Qué estabas haciendo cuando empezó este mes?",
      "Cuenta la historia de cómo empezaste a aprender español.",
    ],
    dreamingNote:
      "Find a storytelling video and specifically track: which sentences describe the scene (imperfect) vs which describe what happened (preterite)?",
    sdFocus: "Preterite vs. imperfect contrast.",
    vocab: [
      { es: "mientras", en: "while" },
      { es: "de repente", en: "suddenly" },
      { es: "en ese momento", en: "at that moment" },
      { es: "justo cuando", en: "right when" },
      { es: "sin darme cuenta", en: "without realizing" },
      { es: "al mismo tiempo", en: "at the same time" },
      { es: "todo iba bien hasta que", en: "everything was fine until" },
      { es: "resulta que", en: "it turns out that" },
      { es: "desde entonces", en: "since then" },
      { es: "hasta ese momento", en: "up until that moment" },
    ],
    upgrades: [
      {
        basic: "Estaba durmiendo cuando llamaste.",
        upgraded: "Estaba profundamente dormido cuando sonó el teléfono y me asusté muchísimo.",
      },
      {
        basic: "Conocí a mi mejor amiga en la universidad.",
        upgraded: "Conocí a mi mejor amiga el primer día de universidad, y desde entonces somos inseparables.",
      },
      {
        basic: "No sabía la verdad.",
        upgraded: "No sabía la verdad hasta que alguien me lo contó todo ayer por la noche.",
      },
    ],
    finalTopic: "Cuenta una historia real usando pretérito e imperfecto juntos",
    finalPoints: [
      { prompt: "Escena/contexto (imperfecto)", starter: "Era un día..., yo estaba..." },
      { prompt: "El evento principal (pretérito)", starter: "De repente..." },
      { prompt: "Cómo te sentías (imperfecto)", starter: "Me sentía..." },
      { prompt: "Qué hiciste (pretérito)", starter: "Entonces yo..." },
      { prompt: "Cómo terminó todo", starter: "Al final..." },
    ],
  },
  {
    day: 13,
    date: "September 19",
    isoDate: "2026-09-19",
    title: "Pronombres de objeto directo",
    week: 2,
    goals: [
      "use lo, la, los, las to avoid repeating nouns",
      "place direct object pronouns correctly with conjugated verbs and infinitives",
      "combine direct object pronouns with past tenses",
      "answer questions naturally using pronouns instead of full nouns",
      "sound less repetitive and more native in conversation",
    ],
    duolingoNote:
      "Search for 'direct object pronouns'. For every sentence with a repeated noun, practice shortening it with lo/la/los/las out loud.",
    ltNote:
      "Pay close attention to WHERE the pronoun goes — before the verb, or attached to an infinitive. Pause before answering each time.",
    grammarTitle: "Lo, la, los, las",
    grammarIntro:
      "Direct object pronouns replace the THING or PERSON receiving the action directly, avoiding repetition.",
    grammarTables: [
      {
        title: "pronombres",
        cells: ["lo (him/it, masc.)", "la (her/it, fem.)", "los (them, masc./mixed)", "las (them, fem.)"],
      },
      {
        title: "posición",
        cells: [
          "Lo veo. (before conjugated verb)",
          "Voy a verlo. / Lo voy a ver. (with infinitive, both OK)",
        ],
      },
    ],
    grammarExamples: [
      "¿Tienes las llaves? — Sí, las tengo.",
      "¿Compraste el pan? — Sí, lo compré.",
      "No la conozco.",
      "Voy a llamarlo mañana. / Lo voy a llamar mañana.",
      "¿Ya viste esa película? — Sí, ya la vi.",
    ],
    translatePractice: [
      {
        en: "Do you have the tickets? Yes, I have them.",
        answers: [
          "¿Tienes las entradas? Sí, las tengo.",
          "¿Tienes los billetes? Sí, los tengo.",
          "¿Tienes los tickets? Sí, los tengo.",
        ],
      },
      { en: "I already saw it (the movie).", answers: ["Ya la vi.", "Ya la he visto."] },
      {
        en: "I'm going to call her tomorrow.",
        answers: ["La voy a llamar mañana.", "Voy a llamarla mañana."],
      },
      { en: "We don't know him.", answers: ["No lo conocemos.", "Nosotros no lo conocemos."] },
      {
        en: "Did you (tú) buy them (the apples)?",
        answers: ["¿Las compraste?", "¿Compraste las manzanas? ¿Las compraste?"],
      },
    ],
    fillBlankTitle: "Sustituye con el pronombre correcto",
    fillBlank: [
      { prompt: "¿Tienes mi número? — Sí, ____ tengo.", answers: [["lo"]] },
      { prompt: "¿Viste la serie nueva? — No, no ____ he visto.", answers: [["la"]] },
      { prompt: "¿Compraste los billetes? — Sí, ____ compré ayer.", answers: [["los"]] },
      { prompt: "¿Conoces a Marta? — No, no ____ conozco.", answers: [["la"]] },
      {
        prompt: "Voy a hacer la tarea. — Voy a hacer____. / ____ voy a hacer.",
        answers: [["la"], ["La", "la"]],
      },
      { prompt: "¿Escribiste el correo? — Sí, ____ escribí esta mañana.", answers: [["lo"]] },
    ],
    speakingQuestions: [
      "¿Tienes tu teléfono contigo ahora? ¿Lo usas mucho?",
      "¿Ya hiciste la compra esta semana?",
      "¿Conoces bien a tus vecinos?",
      "¿Viste las noticias hoy?",
      "¿Terminaste el trabajo que tenías pendiente?",
      "¿Cuándo fue la última vez que llamaste a tus padres?",
      "¿Compraste algo interesante últimamente?",
      "¿Leíste algún libro bueno recientemente?",
      "¿Escribiste algún mensaje importante hoy?",
      "¿Encontraste algo que habías perdido?",
    ],
    dreamingNote:
      "Notice every time a speaker avoids repeating a noun with lo/la/los/las — it happens constantly in natural speech.",
    sdFocus: "Direct object pronouns.",
    vocab: [
      { es: "recoger", en: "to pick up / collect" },
      { es: "dejar", en: "to leave (something) / to let" },
      { es: "prestar", en: "to lend" },
      { es: "devolver", en: "to return (something)" },
      { es: "perder", en: "to lose" },
      { es: "encontrar", en: "to find" },
      { es: "guardar", en: "to keep / put away" },
      { es: "compartir", en: "to share" },
      { es: "entregar", en: "to hand in / deliver" },
      { es: "revisar", en: "to check / review" },
    ],
    upgrades: [
      {
        basic: "Lo compré ayer.",
        upgraded: "Lo compré ayer porque lo necesitaba urgentemente para el trabajo.",
      },
      {
        basic: "La conozco bien.",
        upgraded: "La conozco desde hace años, así que sé exactamente cómo piensa.",
      },
      {
        basic: "Los vi la semana pasada.",
        upgraded: "Los vi la semana pasada por primera vez en mucho tiempo, y fue genial.",
      },
    ],
    finalTopic: "Responde una serie de preguntas usando SOLO pronombres",
    finalPoints: [
      { prompt: "Objetos personales", starter: "¿Tienes...? Sí/No, lo/la..." },
      { prompt: "Personas que conoces", starter: "¿Conoces a...? Sí/No, ..." },
      { prompt: "Cosas que hiciste", starter: "¿Hiciste...? Sí, ... / No, todavía no..." },
      { prompt: "Cosas que compraste", starter: "¿Compraste...?" },
      { prompt: "Resumen final sin repetir ningún sustantivo dos veces", starter: "..." },
    ],
  },
  {
    day: 14,
    date: "September 20",
    isoDate: "2026-09-20",
    title: "REPASO — Semana 2",
    week: 2,
    isReview: true,
    goals: [
      "actively recall reflexives, preterite, imperfect and direct object pronouns",
      "tell a complete, well-structured story in the past",
      "use pronouns to avoid repetition throughout your story",
      "identify remaining weak points before Week 3",
      "speak for 10-12 minutes combining everything from weeks 1-2",
    ],
    duolingoNote:
      "Do a mixed practice session covering past tense units. Focus especially on whichever verb forms still make you hesitate.",
    ltNote:
      "Re-listen to the hardest lesson from this week (probably preterite irregulars or the preterite/imperfect contrast) and answer faster this time.",
    grammarTitle: "Repaso acumulativo — semana 2",
    grammarIntro:
      "This week: reflexive verbs, preterite (regular + irregular), imperfect, preterite vs. imperfect, and direct object pronouns.",
    grammarTables: [
      {
        title: "Esta semana cubrimos",
        cells: [
          "reflexivos",
          "pretérito regular",
          "pretérito irregular",
          "imperfecto",
          "pretérito vs imperfecto",
          "pronombres de objeto directo",
        ],
      },
    ],
    grammarExamples: [
      "Me desperté tarde y no pude ducharme con calma.",
      "Cuando era niño, iba al colegio a pie todos los días.",
      "Ayer conocí a alguien muy interesante en el trabajo.",
      "¿Los billetes? Ya los compré la semana pasada.",
      "Estaba cocinando cuando se fue la luz.",
    ],
    translatePractice: [
      {
        en: "I woke up late and couldn't get ready calmly.",
        answers: [
          "Me desperté tarde y no pude arreglarme con calma.",
          "Me levanté tarde y no pude arreglarme con calma.",
        ],
      },
      {
        en: "When I was a child, I used to walk to school every day.",
        answers: [
          "Cuando era niño, iba al colegio a pie todos los días.",
          "Cuando era niña, iba al colegio a pie todos los días.",
          "De pequeño iba andando al colegio todos los días.",
          "De pequeña iba andando al colegio todos los días.",
        ],
      },
      {
        en: "I met someone interesting at work yesterday.",
        answers: [
          "Ayer conocí a alguien interesante en el trabajo.",
          "Conocí a alguien interesante en el trabajo ayer.",
        ],
      },
      {
        en: "I already bought them (the tickets) last week.",
        answers: [
          "Ya los compré la semana pasada.",
          "Ya las compré la semana pasada.",
        ],
      },
      {
        en: "I was cooking when the power went out.",
        answers: [
          "Estaba cocinando cuando se fue la luz.",
          "Estaba cocinando cuando se cortó la luz.",
        ],
      },
    ],
    fillBlankTitle: "Repaso mixto",
    fillBlank: [
      { prompt: "Yo ____ (levantarse) tarde esta mañana.", answers: [["me levanté"]] },
      { prompt: "Cuando ____ (ser) niño, ____ (jugar) en la calle.", answers: [["era"], ["jugaba"]] },
      { prompt: "Ayer ____ (yo/conocer) a un compañero nuevo.", answers: [["conocí"]] },
      { prompt: "¿Las llaves? Ya ____ tengo.", answers: [["las"]] },
      {
        prompt: "Nosotros ____ (estar) durmiendo cuando ____ (sonar) la alarma.",
        answers: [["estábamos"], ["sonó"]],
      },
      { prompt: "Ella ____ (tener) que salir corriendo.", answers: [["tuvo"]] },
    ],
    speakingQuestions: [
      "Cuenta tu rutina de esta mañana con detalle.",
      "¿Qué hacías en un verano típico de tu infancia?",
      "Cuenta una anécdota completa de la semana pasada.",
      "¿Qué cosas hiciste que no habías planeado?",
      "Describe un cambio importante entre cómo eras antes y cómo eres ahora.",
      "¿Qué fue lo más difícil de esta semana de español?",
      "Cuenta una historia usando al menos 3 pronombres de objeto directo.",
      "¿Qué palabras nuevas usas más ahora que hace dos semanas?",
      "¿Notas alguna mejora en tu fluidez?",
      "¿Qué quieres enfocar en la semana 3?",
    ],
    dreamingNote:
      "Rewatch or pick a new storytelling video and see how much more of the past-tense narration you now follow compared to Day 9.",
    sdFocus: "Do the week's review/quiz, or redo whichever lesson felt hardest.",
    vocab: [
      { es: "narrar", en: "to narrate" },
      { es: "encadenar ideas", en: "to chain ideas together" },
      { es: "resumir", en: "to summarize" },
      { es: "con detalle", en: "in detail" },
      { es: "a grandes rasgos", en: "roughly / broadly" },
      { es: "en resumen", en: "in summary" },
      { es: "como decía", en: "as I was saying" },
      { es: "volviendo al tema", en: "getting back to the topic" },
      { es: "en fin", en: "anyway / in short" },
      { es: "total, que...", en: "so, anyway... (colloquial narrative connector)" },
    ],
    upgrades: [
      {
        basic: "Cuento una historia.",
        upgraded:
          "Te voy a contar una historia que me pasó la semana pasada, aunque todavía no me lo creo del todo.",
      },
      {
        basic: "He mejorado en pretérito.",
        upgraded:
          "Creo que he mejorado bastante con el pretérito, aunque el imperfecto todavía me cuesta un poco más.",
      },
      {
        basic: "Quiero seguir así.",
        upgraded:
          "Quiero seguir así la semana que viene, aunque me gustaría enfocarme más en hablar sin pausas.",
      },
    ],
    finalTopic: "10-12 minutos: cuenta una historia larga y completa de tu vida",
    finalPoints: [
      { prompt: "Contexto — cómo era todo antes", starter: "Antes..." },
      { prompt: "El evento principal — qué pasó", starter: "Un día..." },
      { prompt: "Detalles — qué hacías, cómo te sentías", starter: "Mientras tanto..." },
      { prompt: "Usa al menos 3 pronombres de objeto directo", starter: "..." },
      { prompt: "Cómo terminó y qué aprendiste", starter: "Al final... / Desde entonces..." },
    ],
  },
];
