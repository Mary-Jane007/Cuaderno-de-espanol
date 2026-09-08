import type { DayLesson } from "@/lib/types";

export const WEEK_4: DayLesson[] = [
  {
    day: 22,
    date: "September 28",
    isoDate: "2026-09-28",
    title: "Presente de subjuntivo — introducción (deseo)",
    week: 4,
    goals: [
      "form the present subjunctive for regular and common irregular verbs",
      "understand WHY Spanish has a subjunctive (subjectivity, not fact)",
      "use it after expressions of wish/desire (quiero que, espero que, ojalá)",
      "distinguish when to use infinitive vs subjunctive (same subject vs different subject)",
      "start 'hearing' the subjunctive trigger before the verb even comes",
    ],
    duolingoNote:
      "Search for the subjunctive unit. Whenever you see 'que' + a strange-looking verb form, that's your subjunctive trigger — say the sentence and identify WHY.",
    ltNote:
      "This is a conceptually big day. Don't rush — the mental model (subjunctive = not-yet-real / subjective) matters more than memorizing the conjugation table today.",
    grammarTitle: "¿Por qué existe el subjuntivo?",
    grammarIntro:
      "The subjunctive marks that something is NOT a fact — a wish, doubt, emotion, or command. Formation: take the yo present-tense form, drop the -o, and add 'opposite vowel' endings.",
    grammarTables: [
      {
        title: "formación (-AR → -e)",
        cells: ["hable", "hables", "hable", "hablemos", "habléis", "hablen"],
      },
      {
        title: "formación (-ER/-IR → -a)",
        cells: ["coma", "comas", "coma", "comamos", "comáis", "coman"],
      },
      {
        title: "disparadores de deseo",
        cells: ["quiero que...", "espero que...", "ojalá (que)...", "deseo que..."],
      },
    ],
    grammarExamples: [
      "Quiero que vengas a la fiesta.",
      "Espero que todo salga bien.",
      "Ojalá tengas suerte.",
      "Deseo que seas muy feliz.",
      "Quiero aprender más. (mismo sujeto → infinitivo, no subjuntivo)",
    ],
    translatePractice: [
      { en: "I want you to come with me.", answers: ["Quiero que vengas conmigo.", "Quiero que tú vengas conmigo."] },
      { en: "I hope everything goes well.", answers: ["Espero que todo salga bien.", "Espero que todo vaya bien."] },
      { en: "I hope you have good luck.", answers: ["Ojalá tengas suerte.", "Espero que tengas suerte."] },
      { en: "I want to learn more. (same subject)", answers: ["Quiero aprender más."] },
      {
        en: "I hope she calls me soon.",
        answers: ["Espero que me llame pronto.", "Espero que ella me llame pronto."],
      },
    ],
    fillBlankTitle: "Subjuntivo o infinitivo",
    fillBlank: [
      { prompt: "Quiero que tú ____ (venir) conmigo.", answers: [["vengas"]] },
      { prompt: "Espero ____ (aprobar) el examen. (mismo sujeto)", answers: [["aprobar"]] },
      { prompt: "Ojalá ella ____ (llegar) a tiempo.", answers: [["llegue"]] },
      { prompt: "Deseo que ustedes ____ (tener) un buen viaje.", answers: [["tengan"]] },
      { prompt: "Quiero ____ (aprender) más español. (mismo sujeto)", answers: [["aprender"]] },
      { prompt: "Espero que nosotros ____ (poder) vernos pronto.", answers: [["podamos"]] },
    ],
    speakingQuestions: [
      "¿Qué esperas que pase este año?",
      "¿Qué quieres que hagan tus amigos por ti?",
      "Ojalá... completa la frase con algo real que desees.",
      "¿Qué esperas de tu futuro profesional?",
      "¿Qué quieres que la gente piense de ti?",
      "¿Qué le deseas a alguien que empieza un nuevo trabajo?",
      "¿Esperas que tu español mejore mucho este mes?",
      "¿Qué quieres que cambie en el mundo?",
      "Ojalá pudieras cambiar algo de tu pasado — ¿qué sería?",
      "¿Qué esperas conseguir para fin de año?",
    ],
    dreamingNote:
      "Look specifically for 'espero que' or 'ojalá' in conversational or motivational videos — very common in everyday speech.",
    sdFocus: "Present subjunctive — formation + use after wishing/desire verbs.",
    vocab: [
      { es: "ojalá", en: "I hope / if only" },
      { es: "desear", en: "to wish/desire" },
      { es: "anhelar", en: "to long for" },
      { es: "esperar", en: "to hope" },
      { es: "con suerte", en: "with luck" },
      { es: "que tengas...", en: "may you have... (set phrase)" },
      { es: "que te vaya bien", en: "hope it goes well for you" },
      { es: "crucemos los dedos", en: "let's cross our fingers" },
      { es: "a ver si", en: "let's see if" },
      { es: "cabe la posibilidad de que", en: "there's a chance that" },
    ],
    upgrades: [
      {
        basic: "Espero que estés bien.",
        upgraded: "Espero de verdad que estés bien, aunque hace tiempo que no hablamos.",
      },
      {
        basic: "Quiero que vengas.",
        upgraded: "Me encantaría que vinieras, aunque entiendo si no puedes esta vez.",
      },
      {
        basic: "Ojalá tengas suerte.",
        upgraded: "Ojalá tengas mucha suerte, te lo mereces después de todo el esfuerzo que has hecho.",
      },
    ],
    finalTopic: "Tus deseos y esperanzas para ti mismo/a y para los demás",
    finalPoints: [
      { prompt: "Un deseo para ti mismo/a", starter: "Espero que yo..." },
      { prompt: "Un deseo para un ser querido", starter: "Quiero que..." },
      { prompt: "Un deseo para el mundo", starter: "Ojalá el mundo..." },
      { prompt: "Algo que esperas de este curso de español", starter: "Espero que este mes..." },
      { prompt: "Una despedida usando 'que'", starter: "Que tengas..." },
    ],
  },
  {
    day: 23,
    date: "September 29",
    isoDate: "2026-09-29",
    title: "Subjuntivo — duda y negación",
    week: 4,
    goals: [
      "use the subjunctive after expressions of doubt (dudo que, no creo que)",
      "understand why creo que takes indicative but no creo que takes subjunctive",
      "use the subjunctive after negation (no es cierto que, niego que)",
      "argue both sides of an issue using indicative and subjunctive correctly",
      "debate opinions confidently",
    ],
    duolingoNote:
      "Search for subjunctive + doubt/opinion lessons. For each sentence, ask: is the speaker CERTAIN (indicative) or UNCERTAIN/denying (subjunctive)?",
    ltNote:
      "This flips yesterday's logic in an important way — creer (to believe) is indicative when affirmative but subjunctive when negative. Sit with a few examples before moving fast.",
    grammarTitle: "Creo que (indicativo) vs. no creo que (subjuntivo)",
    grammarIntro:
      "Certainty = indicative. Doubt or denial = subjunctive. The exact same verb can trigger either, depending on affirmative vs. negative.",
    grammarTables: [
      {
        title: "indicativo (certeza)",
        cells: ["Creo que tiene razón.", "Es verdad que llueve.", "Estoy seguro de que viene."],
      },
      {
        title: "subjuntivo (duda/negación)",
        cells: [
          "No creo que tenga razón.",
          "Dudo que llueva.",
          "No es verdad que sea fácil.",
          "Es posible que venga.",
        ],
      },
    ],
    grammarExamples: [
      "Creo que es una buena idea.",
      "No creo que sea tan sencillo.",
      "Dudo que lleguemos a tiempo.",
      "Es posible que cambien de opinión.",
      "No es cierto que él haya dicho eso.",
    ],
    translatePractice: [
      { en: "I think it's a good idea. (indicative)", answers: ["Creo que es una buena idea."] },
      {
        en: "I don't think it's that simple. (subjunctive)",
        answers: ["No creo que sea tan sencillo.", "No creo que sea tan simple."],
      },
      {
        en: "I doubt we'll arrive on time.",
        answers: ["Dudo que lleguemos a tiempo.", "Dudo que lleguemos a la hora."],
      },
      {
        en: "It's possible that things will change.",
        answers: ["Es posible que las cosas cambien.", "Es posible que cambien las cosas."],
      },
      {
        en: "It's not true that he said that.",
        answers: [
          "No es verdad que él haya dicho eso.",
          "No es cierto que él haya dicho eso.",
          "No es verdad que él dijera eso.",
        ],
      },
    ],
    fillBlankTitle: "Indicativo o subjuntivo",
    fillBlank: [
      { prompt: "Creo que ella ____ (tener) razón.", answers: [["tiene"]] },
      { prompt: "No creo que ____ (ser) tan difícil.", answers: [["sea"]] },
      { prompt: "Dudo que ellos ____ (venir) hoy.", answers: [["vengan"]] },
      { prompt: "Es posible que ____ (llover) mañana.", answers: [["llueva"]] },
      { prompt: "Estoy seguro de que él ____ (saber) la respuesta.", answers: [["sabe"]] },
      { prompt: "No es verdad que yo ____ (haber) dicho eso.", answers: [["haya"]] },
    ],
    speakingQuestions: [
      "¿Crees que la inteligencia artificial cambiará el mundo laboral?",
      "¿Dudas de algo que te dijeron recientemente?",
      "¿Crees que hablarás español con fluidez este año?",
      "¿Es posible que te mudes de ciudad en el futuro?",
      "¿Qué opinas: crees o no crees en el destino?",
      "¿Dudas que sea posible aprender un idioma sin vivir en el país?",
      "¿Crees que el dinero da la felicidad?",
      "¿Es posible que hayas cometido un error últimamente? ¿Cuál?",
      "¿Crees que tus amigos piensan igual que tú en todo?",
      "¿No crees que ciertas cosas de la vida moderna son innecesarias?",
    ],
    dreamingNote:
      "Debate or opinion videos are ideal today — notice when speakers switch from creo que (indicative) to no creo que (subjunctive).",
    sdFocus: "Subjunctive after doubt, denial, and possibility expressions.",
    vocab: [
      { es: "dudar", en: "to doubt" },
      { es: "negar", en: "to deny" },
      { es: "no estar seguro/a de que", en: "to not be sure that" },
      { es: "puede que", en: "it could be that" },
      { es: "es dudoso que", en: "it's doubtful that" },
      { es: "no es que", en: "it's not that" },
      { es: "cuestionar", en: "to question" },
      { es: "desconfiar de", en: "to distrust" },
      { es: "dar por hecho", en: "to take for granted" },
      { es: "hasta cierto punto", en: "up to a point" },
    ],
    upgrades: [
      {
        basic: "No creo que sea buena idea.",
        upgraded:
          "Sinceramente, no creo que sea buena idea, aunque respeto que tú lo veas de otra forma.",
      },
      {
        basic: "Dudo que llueva.",
        upgraded: "Dudo bastante que llueva hoy, aunque las nubes no ayudan a confirmarlo.",
      },
      {
        basic: "Es posible que cambie.",
        upgraded: "Es posible que las cosas cambien con el tiempo, pero de momento prefiero ser realista.",
      },
    ],
    finalTopic: "Debate contigo mismo/a: da tu opinión y luego cuestiónala",
    finalPoints: [
      { prompt: "Presenta un tema polémico", starter: "Un tema del que se habla mucho es..." },
      { prompt: "Da tu opinión con 'creo que'", starter: "Yo creo que..." },
      { prompt: "Presenta la duda o el contraargumento", starter: "Sin embargo, no creo que..." },
      { prompt: "Añade una posibilidad", starter: "Es posible que..." },
      { prompt: "Conclusión personal", starter: "Al final, para mí..." },
    ],
  },
  {
    day: 24,
    date: "September 30",
    isoDate: "2026-09-30",
    title: "Subjuntivo — emoción y expresiones impersonales",
    week: 4,
    goals: [
      "use the subjunctive after emotional reactions (me alegra que, es una lástima que)",
      "use it after impersonal expressions (es importante que, es necesario que)",
      "combine emotion + subjunctive fluently in reactions to news",
      "react naturally to things people tell you",
      "close out the core subjunctive triggers (WEIRDO: wish, emotion, impersonal, doubt, denial, ojalá)",
    ],
    duolingoNote:
      "Search for subjunctive + emotions/reactions. Practice reacting to made-up 'news' with me alegra que / es una pena que.",
    ltNote:
      "This closes the subjunctive arc from this week — connect today's material back to the wishes (Day 22) and doubt (Day 23) triggers you already know.",
    grammarTitle: "Emoción + expresiones impersonales",
    grammarIntro:
      "Any strong emotional reaction, and most impersonal 'es + adjective + que' expressions, trigger the subjunctive when there's a different subject in the second clause.",
    grammarTables: [
      {
        title: "emoción",
        cells: [
          "me alegra que...",
          "me sorprende que...",
          "es una lástima que...",
          "siento que...",
          "me molesta que...",
        ],
      },
      {
        title: "impersonales",
        cells: [
          "es importante que...",
          "es necesario que...",
          "es mejor que...",
          "es raro que...",
          "más vale que...",
        ],
      },
    ],
    grammarExamples: [
      "Me alegra que hayas venido.",
      "Es una lástima que no puedas quedarte.",
      "Es importante que llegues a tiempo.",
      "Me sorprende que no lo sepas.",
      "Es necesario que hablemos de esto.",
    ],
    translatePractice: [
      { en: "I'm glad you came.", answers: ["Me alegra que hayas venido.", "Me alegra que vinieras."] },
      {
        en: "It's a shame you can't stay.",
        answers: ["Es una lástima que no puedas quedarte.", "Es una pena que no puedas quedarte."],
      },
      {
        en: "It's important that you arrive on time.",
        answers: ["Es importante que llegues a tiempo.", "Es importante que llegues puntual."],
      },
      {
        en: "I'm surprised you don't know that.",
        answers: ["Me sorprende que no lo sepas.", "Me sorprende que no sepas eso."],
      },
      {
        en: "It's necessary that we talk about this.",
        answers: ["Es necesario que hablemos de esto.", "Es necesario que hablemos de esto."],
      },
    ],
    fillBlankTitle: "Completa con subjuntivo",
    fillBlank: [
      { prompt: "Me alegra que ____ (tú/estar) aquí.", answers: [["estés"]] },
      { prompt: "Es una lástima que no ____ (poder) venir.", answers: [["puedas", "pueda", "puedan"]] },
      { prompt: "Es importante que nosotros ____ (hablar) claro.", answers: [["hablemos"]] },
      { prompt: "Me sorprende que ella no ____ (saber) nada.", answers: [["sepa"]] },
      { prompt: "Es necesario que ____ (ustedes/llegar) temprano.", answers: [["lleguen"]] },
      { prompt: "Más vale que ____ (nosotros/empezar) ya.", answers: [["empecemos"]] },
    ],
    speakingQuestions: [
      "¿Qué te alegra de tu vida ahora mismo?",
      "¿Qué es una lástima de la situación actual del mundo?",
      "¿Qué es importante que hagas esta semana?",
      "¿Qué te sorprende de la cultura de otro país?",
      "¿Qué es necesario cambiar en tu rutina?",
      "¿Qué te molesta que la gente haga en general?",
      "¿Qué es esencial que un buen amigo tenga?",
      "¿Te sorprende algo que has aprendido este mes de español?",
      "¿Qué esperas que sea diferente el próximo mes?",
      "¿Qué te alegra de haber empezado a estudiar español?",
    ],
    dreamingNote:
      "React out loud to what you hear using 'me sorprende que' / 'me alegra que' — practice generating the subjunctive spontaneously, not just recognizing it.",
    sdFocus: "Subjunctive after emotion + impersonal expressions.",
    vocab: [
      { es: "alegrarse de que", en: "to be glad that" },
      { es: "sentir que", en: "to be sorry that / feel that" },
      { es: "es una pena/lástima que", en: "it's a shame that" },
      { es: "qué raro que", en: "how strange that" },
      { es: "qué bueno que", en: "how great that" },
      { es: "más vale que", en: "it's better that / you'd better" },
      { es: "conviene que", en: "it's advisable that" },
      { es: "es fundamental que", en: "it's essential that" },
      { es: "no hace falta que", en: "there's no need for" },
      { es: "qué pena", en: "what a shame" },
    ],
    upgrades: [
      {
        basic: "Me alegra que vengas.",
        upgraded: "Me alegra muchísimo que puedas venir, hacía tiempo que no nos veíamos.",
      },
      {
        basic: "Es importante que hables claro.",
        upgraded: "Es importante que hables claro desde el principio para evitar malentendidos después.",
      },
      {
        basic: "Es una lástima.",
        upgraded:
          "Es una lástima que las cosas no hayan salido como esperábamos, pero se puede aprender de esto.",
      },
    ],
    finalTopic: "Reacciona a cinco noticias/situaciones imaginarias",
    finalPoints: [
      { prompt: "Una buena noticia — reacciona con alegría", starter: "Me alegra que..." },
      { prompt: "Una mala noticia — reacciona con pena", starter: "Es una lástima que..." },
      { prompt: "Algo sorprendente — reacciona con sorpresa", starter: "Me sorprende que..." },
      { prompt: "Un consejo usando 'es importante que'", starter: "Es importante que..." },
      { prompt: "Cierra con una reflexión general", starter: "En general, creo que es fundamental que..." },
    ],
  },
  {
    day: 25,
    date: "October 1",
    isoDate: "2026-10-01",
    title: "Pronombres relativos (que, quien, lo que, el cual)",
    week: 4,
    goals: [
      "connect two sentences into one fluid sentence using que",
      "use quien(es) correctly after prepositions when referring to people",
      "use lo que to refer to abstract ideas ('what/that which')",
      "use el/la cual for more formal or clarity-needed contexts",
      "build longer, more sophisticated sentences without run-ons",
    ],
    duolingoNote:
      "Search for relative pronouns / complex sentences. Take two short sentences from earlier lessons and combine them with que/quien/lo que.",
    ltNote:
      "Relative pronouns are more about SENTENCE-BUILDING than a new tense — focus on combining ideas smoothly rather than memorizing a table.",
    grammarTitle: "Conectando ideas",
    grammarIntro:
      "Que is the all-purpose relative pronoun (that/which/who). Quien(es) is used mainly after a preposition, for people. Lo que refers to an abstract idea, not a specific noun.",
    grammarTables: [
      { title: "que", cells: ["El libro que compré es genial."] },
      { title: "quien(es) (tras preposición, personas)", cells: ["La persona con quien hablé ayer."] },
      { title: "lo que", cells: ["No entiendo lo que dices.", "Lo que más me gusta es..."] },
      { title: "el/la cual (formal)", cells: ["La razón por la cual me fui..."] },
    ],
    grammarExamples: [
      "El trabajo que tengo ahora es más flexible.",
      "La persona con quien vivo es muy ordenada.",
      "Lo que más me molesta es la impuntualidad.",
      "No sé lo que quieres decir.",
      "Es un tema del cual hablamos mucho.",
    ],
    translatePractice: [
      {
        en: "The book that I'm reading is fascinating.",
        answers: ["El libro que estoy leyendo es fascinante.", "El libro que leo es fascinante."],
      },
      {
        en: "The person with whom I work is very kind.",
        answers: [
          "La persona con quien trabajo es muy amable.",
          "La persona con la que trabajo es muy amable.",
        ],
      },
      {
        en: "What bothers me most is dishonesty.",
        answers: ["Lo que más me molesta es la deshonestidad.", "Lo que más me molesta es la falta de honestidad."],
      },
      {
        en: "I don't understand what you mean.",
        answers: ["No entiendo lo que quieres decir.", "No entiendo lo que dices."],
      },
      {
        en: "It's a topic about which we talk often.",
        answers: [
          "Es un tema del cual hablamos mucho.",
          "Es un tema del que hablamos a menudo.",
          "Es un tema sobre el cual hablamos a menudo.",
        ],
      },
    ],
    fillBlankTitle: "Elige el pronombre relativo",
    fillBlank: [
      { prompt: "El coche ____ compré es nuevo.", answers: [["que"]] },
      { prompt: "La mujer con ____ hablé es mi jefa.", answers: [["quien", "la que"]] },
      { prompt: "____ más me gusta de mi trabajo es la flexibilidad.", answers: [["Lo que"]] },
      { prompt: "No entiendo ____ pasó ayer.", answers: [["lo que", "qué"]] },
      { prompt: "Este es el motivo por el ____ decidí quedarme.", answers: [["cual"]] },
      { prompt: "Las personas ____ conocí ayer son muy amables.", answers: [["que", "a quienes"]] },
    ],
    speakingQuestions: [
      "Describe algo que te gusta usando 'que' varias veces.",
      "Habla de una persona con quien tienes una relación especial.",
      "¿Qué es lo que más valoras en la vida?",
      "¿Qué es lo que menos te gusta de tu trabajo/estudios?",
      "Describe un lugar que te marcó, usando 'que' y 'donde'.",
      "¿Cuál es la razón por la cual empezaste a aprender español?",
      "Habla de algo que aprendiste recientemente que te sorprendió.",
      "Describe a alguien con quien te gustaría hablar más.",
      "¿Qué es lo que definitivamente cambiarías de tu vida?",
      "Cuenta una historia larga conectando varias ideas con pronombres relativos.",
    ],
    dreamingNote:
      "Notice how speakers link ideas together with que/lo que instead of using short, choppy sentences — try to mimic that flow.",
    sdFocus: "Relative pronouns (que, quien, lo que, el cual).",
    vocab: [
      { es: "es decir", en: "that is to say" },
      { es: "dicho de otra forma", en: "put another way" },
      { es: "en otras palabras", en: "in other words" },
      { es: "lo cual", en: "which (referring to a whole idea)" },
      { es: "cuyo/a", en: "whose" },
      { es: "aquello que", en: "that which" },
      { es: "todo lo que", en: "everything that" },
      { es: "nada de lo que", en: "nothing that" },
      { es: "algo que", en: "something that" },
      { es: "la manera en que", en: "the way in which" },
    ],
    upgrades: [
      {
        basic: "Me gusta el trabajo.",
        upgraded: "Lo que más me gusta del trabajo que tengo ahora es la libertad que me da.",
      },
      {
        basic: "Hablé con una persona.",
        upgraded: "La persona con quien hablé ayer resultó ser alguien que conocía a un amigo mío.",
      },
      {
        basic: "No entiendo esto.",
        upgraded: "Hay algo en todo esto que no termino de entender, y me gustaría que me lo explicaras.",
      },
    ],
    finalTopic: "Describe tu vida usando frases largas y conectadas",
    finalPoints: [
      { prompt: "Tu trabajo/estudios (usa 'que')", starter: "Tengo un trabajo que..." },
      { prompt: "Una persona importante (usa 'con quien')", starter: "Vivo/trabajo con alguien con quien..." },
      { prompt: "Lo que más valoras (usa 'lo que')", starter: "Lo que más valoro es..." },
      { prompt: "Un lugar especial (usa 'donde')", starter: "Hay un lugar donde..." },
      { prompt: "Resume todo en una frase larga y conectada", starter: "En resumen,..." },
    ],
  },
  {
    day: 26,
    date: "October 2",
    isoDate: "2026-10-02",
    title: "Oraciones condicionales con SI",
    week: 4,
    goals: [
      "form real/likely conditions (si + presente, futuro/presente)",
      "form hypothetical conditions (si + imperfecto de subjuntivo, condicional)",
      "recognize the imperfect subjunctive by its -ra endings",
      "express regrets and hypotheticals about the present and future",
      "hold a full conversation weighing real vs. imaginary scenarios",
    ],
    duolingoNote:
      "Search for conditional sentences / si clauses. Build both a real and a hypothetical version of the same idea (Si tengo tiempo... / Si tuviera tiempo...).",
    ltNote:
      "The imperfect subjunctive is new today — don't panic at the -ra endings, they follow a very predictable pattern from the ellos preterite form.",
    grammarTitle: "Si real vs. si hipotético",
    grammarIntro:
      "Real/likely: Si + present indicative, + future or present (Si tengo tiempo, iré). Hypothetical/contrary-to-fact: Si + imperfect subjunctive, + conditional (Si tuviera tiempo, iría).",
    grammarTables: [
      {
        title: "real (probable)",
        cells: ["Si tengo tiempo, iré.", "Si llueve, nos quedamos en casa."],
      },
      {
        title: "imperfecto de subjuntivo (-ra)",
        cells: [
          "hablara, hablaras, hablara, habláramos, hablarais, hablaran",
          "tuviera, tuvieras, tuviera, tuviéramos...",
        ],
      },
      {
        title: "hipotético (poco probable/imposible)",
        cells: ["Si tuviera más tiempo, viajaría más.", "Si fuera rico, no trabajaría."],
      },
    ],
    grammarExamples: [
      "Si estudio esta noche, aprobaré el examen.",
      "Si tuviera más dinero, compraría una casa.",
      "Si pudiera vivir en cualquier país, elegiría España.",
      "Si supiera la respuesta, te la diría.",
      "Si hubiera hecho ejercicio, me sentiría mejor. (avanzado — opcional)",
    ],
    translatePractice: [
      {
        en: "If I study tonight, I'll pass the exam.",
        answers: ["Si estudio esta noche, aprobaré el examen.", "Si estudio esta noche, voy a aprobar el examen."],
      },
      {
        en: "If I had more money, I would buy a house.",
        answers: ["Si tuviera más dinero, compraría una casa.", "Si tuviese más dinero, compraría una casa."],
      },
      {
        en: "If I could live anywhere, I'd choose Spain.",
        answers: [
          "Si pudiera vivir en cualquier sitio, elegiría España.",
          "Si pudiera vivir en cualquier lugar, elegiría España.",
        ],
      },
      {
        en: "If I knew the answer, I would tell you.",
        answers: ["Si supiera la respuesta, te la diría.", "Si supiese la respuesta, te la diría."],
      },
      {
        en: "If it rains tomorrow, we'll stay home.",
        answers: ["Si llueve mañana, nos quedamos en casa.", "Si llueve mañana, nos quedaremos en casa."],
      },
    ],
    fillBlankTitle: "Completa la condición",
    fillBlank: [
      {
        prompt: "Si ____ (yo/tener) tiempo, te ____ (llamar). (real)",
        answers: [["tengo"], ["llamo", "llamaré"]],
      },
      {
        prompt: "Si ____ (yo/tener) más dinero, ____ (viajar) más. (hipotético)",
        answers: [["tuviera", "tuviese"], ["viajaría"]],
      },
      {
        prompt: "Si ____ (llover) mañana, nos ____ (quedar) en casa. (real)",
        answers: [["llueve"], ["quedamos", "quedaremos"]],
      },
      {
        prompt: "Si ____ (yo/poder) elegir, ____ (vivir) en la costa. (hipotético)",
        answers: [["pudiera", "pudiese"], ["viviría"]],
      },
      {
        prompt: "Si ____ (tú/saber) la verdad, ¿qué ____ (hacer)? (hipotético)",
        answers: [["supieras", "supieses"], ["harías"]],
      },
      {
        prompt: "Si ____ (nosotros/estudiar) más, ____ (aprobar). (real)",
        answers: [["estudiamos"], ["aprobamos", "aprobaremos"]],
      },
    ],
    speakingQuestions: [
      "Si pudieras vivir en cualquier ciudad del mundo, ¿dónde vivirías?",
      "Si ganaras la lotería mañana, ¿qué harías primero?",
      "Si tuvieras que mudarte a otro país, ¿cuál elegirías?",
      "Si pudieras hablar con cualquier persona famosa, ¿con quién hablarías?",
      "Si no hubieras empezado a aprender español, ¿qué estarías haciendo con ese tiempo?",
      "Si mañana lloviera, ¿qué harías en su lugar?",
      "Si pudieras cambiar una cosa de tu personalidad, ¿qué cambiarías?",
      "Si tienes tiempo libre este fin de semana, ¿qué vas a hacer?",
      "Si tuvieras que enseñarle español a alguien, ¿por dónde empezarías?",
      "Si pudieras volver atrás en el tiempo un día, ¿a qué día volverías?",
    ],
    dreamingNote:
      "Look for a video discussing hypothetical scenarios ('qué pasaría si') — the imperfect subjunctive appears constantly in this kind of content.",
    sdFocus: "Conditional sentences with si (real and hypothetical).",
    vocab: [
      { es: "en caso de que", en: "in case" },
      { es: "a menos que", en: "unless" },
      { es: "con tal de que", en: "as long as / provided that" },
      { es: "siempre y cuando", en: "as long as" },
      { es: "suponiendo que", en: "supposing that" },
      { es: "de ser así", en: "if that's the case" },
      { es: "en tal caso", en: "in that case" },
      { es: "de lo contrario", en: "otherwise" },
      { es: "bajo esas circunstancias", en: "under those circumstances" },
      { es: "como mucho / como poco", en: "at most / at least" },
    ],
    upgrades: [
      {
        basic: "Si tengo tiempo, voy.",
        upgraded:
          "Si tengo tiempo esta semana, definitivamente voy a intentar ir, aunque no puedo prometerlo.",
      },
      {
        basic: "Si tuviera dinero, viajaría.",
        upgraded: "Si tuviera más dinero ahorrado, viajaría por Sudamérica durante varios meses.",
      },
      {
        basic: "Si pudiera, cambiaría esto.",
        upgraded:
          "Si pudiera cambiar una sola cosa de mi rutina, sin duda cambiaría la hora a la que me despierto.",
      },
    ],
    finalTopic: "Escenarios reales e hipotéticos sobre tu vida",
    finalPoints: [
      { prompt: "Un plan real para esta semana", starter: "Si tengo tiempo,..." },
      { prompt: "Un sueño hipotético", starter: "Si pudiera,..." },
      { prompt: "Algo que cambiarías del pasado (opcional/avanzado)", starter: "Si hubiera..." },
      { prompt: "Una condición para algo que quieres", starter: "Con tal de que..., estoy dispuesto/a a..." },
      { prompt: "Conclusión", starter: "En cualquier caso,..." },
    ],
  },
  {
    day: 27,
    date: "October 3",
    isoDate: "2026-10-03",
    title: "Conectores avanzados y argumentación",
    week: 4,
    goals: [
      "use advanced discourse connectors (sin embargo, no obstante, por lo tanto, a pesar de)",
      "structure a persuasive argument with clear logical flow",
      "concede a counterpoint before reinforcing your own view",
      "sound significantly more sophisticated and less choppy",
      "give a structured opinion on a complex topic for several minutes",
    ],
    duolingoNote:
      "Search for opinion/debate-related lessons if available, or a 'connectors' unit. Rebuild simple sentences from earlier days using today's connectors.",
    ltNote:
      "Language Transfer may not cover discourse connectors directly — treat today's custom lesson as the main event, and use your Language Transfer time to review anything from the subjunctive week that still feels shaky.",
    grammarTitle: "Conectores de argumentación",
    grammarIntro:
      "These words organize an argument logically: contrast, consequence, addition, concession. Native speakers use them constantly to sound coherent and persuasive.",
    grammarTables: [
      {
        title: "contraste",
        cells: ["sin embargo", "no obstante", "en cambio", "por el contrario", "a pesar de (que)"],
      },
      {
        title: "consecuencia",
        cells: ["por lo tanto", "por consiguiente", "así que", "de ahí que"],
      },
      { title: "añadir", cells: ["además", "es más", "asimismo", "por si fuera poco"] },
      { title: "concesión", cells: ["aunque", "si bien", "aun así", "de todas formas"] },
    ],
    grammarExamples: [
      "Es caro; sin embargo, merece la pena.",
      "No tenía experiencia, y aun así consiguió el trabajo.",
      "Estudió mucho; por lo tanto, aprobó fácilmente.",
      "A pesar de las dificultades, siguió adelante.",
      "Además, hay que tener en cuenta el factor tiempo.",
    ],
    translatePractice: [
      {
        en: "It's expensive; however, it's worth it.",
        answers: ["Es caro; sin embargo, merece la pena.", "Es caro; sin embargo, vale la pena."],
      },
      {
        en: "Despite the difficulties, he kept going.",
        answers: [
          "A pesar de las dificultades, siguió adelante.",
          "A pesar de las dificultades, continuó.",
        ],
      },
      {
        en: "She studied a lot; therefore, she passed easily.",
        answers: [
          "Estudió mucho; por lo tanto, aprobó fácilmente.",
          "Estudió mucho; por consiguiente, aprobó fácilmente.",
        ],
      },
      {
        en: "Moreover, we have to consider the time factor.",
        answers: [
          "Además, hay que tener en cuenta el factor tiempo.",
          "Es más, hay que considerar el factor tiempo.",
        ],
      },
      {
        en: "Even though it was hard, I don't regret it.",
        answers: [
          "Aunque fue difícil, no me arrepiento.",
          "Aunque fue duro, no me arrepiento.",
        ],
      },
    ],
    fillBlankTitle: "Elige el conector adecuado",
    fillBlank: [
      { prompt: "Es un buen plan; ____, tiene algunos riesgos. (sin embargo)", answers: [["sin embargo"]] },
      { prompt: "Trabajó muchísimo, ____ consiguió el ascenso. (por lo tanto)", answers: [["por lo tanto"]] },
      { prompt: "____ las dificultades, terminó el proyecto a tiempo. (a pesar de)", answers: [["A pesar de", "a pesar de"]] },
      { prompt: "No tenía ganas; ____ fue a la reunión. (aun así)", answers: [["aun así"]] },
      { prompt: "Es caro. ____, es de muy buena calidad. (además)", answers: [["Además", "además"]] },
      { prompt: "____ estudió poco, aprobó el examen. (aunque)", answers: [["Aunque", "aunque"]] },
    ],
    speakingQuestions: [
      "Da tu opinión sobre el teletrabajo, usando al menos tres conectores.",
      "Argumenta a favor y en contra de vivir en una gran ciudad.",
      "¿Crees que la tecnología nos hace más o menos felices? Argumenta.",
      "Da tu opinión sobre aprender idiomas de adulto, usando conectores de concesión.",
      "Argumenta por qué (o por qué no) el dinero da la felicidad.",
      "¿Es mejor tener pocos amigos cercanos o muchos conocidos?",
      "Argumenta sobre las ventajas y desventajas de las redes sociales.",
      "¿Vale la pena mudarte de país por trabajo? Da tu opinión estructurada.",
      "¿Es mejor especializarse en una cosa o saber un poco de todo?",
      "Resume tu filosofía de vida en un argumento breve pero estructurado.",
    ],
    dreamingNote:
      "News analysis or opinion-style videos are ideal today — track connectors and notice how they organize the speaker's argument.",
    sdFocus: "Advanced connectors and argumentative structure.",
    vocab: [
      { es: "desde mi punto de vista", en: "from my point of view" },
      { es: "no cabe duda de que", en: "there's no doubt that" },
      { es: "hay que tener en cuenta que", en: "one must take into account that" },
      { es: "en definitiva", en: "ultimately / in short" },
      { es: "dicho esto", en: "that said" },
      { es: "cabe destacar que", en: "it's worth noting that" },
      { es: "en última instancia", en: "ultimately" },
      { es: "teniendo esto en cuenta", en: "bearing this in mind" },
      { es: "en cuanto a", en: "regarding" },
      { es: "al fin y al cabo", en: "at the end of the day" },
    ],
    upgrades: [
      {
        basic: "Es caro pero vale la pena.",
        upgraded:
          "Es bastante caro; sin embargo, teniendo en cuenta la calidad, considero que vale la pena.",
      },
      {
        basic: "Trabajó mucho y consiguió el trabajo.",
        upgraded:
          "Trabajó muchísimo durante meses y, por lo tanto, no fue ninguna sorpresa que consiguiera el puesto.",
      },
      {
        basic: "A pesar de las dificultades, siguió.",
        upgraded:
          "A pesar de las numerosas dificultades que encontró por el camino, decidió seguir adelante sin rendirse.",
      },
    ],
    finalTopic: "Un argumento estructurado sobre un tema que te importa",
    finalPoints: [
      { prompt: "Introduce el tema", starter: "Hoy en día se habla mucho de..." },
      { prompt: "Da tu postura con 'desde mi punto de vista'", starter: "Desde mi punto de vista,..." },
      { prompt: "Presenta un contraargumento y respóndelo", starter: "Es cierto que..., sin embargo,..." },
      { prompt: "Añade otro punto con 'además'", starter: "Además,..." },
      { prompt: "Cierra con 'en definitiva' o 'al fin y al cabo'", starter: "En definitiva,..." },
    ],
  },
  {
    day: 28,
    date: "October 4",
    isoDate: "2026-10-04",
    title: "Modismos, matices de SER/ESTAR y falsos amigos",
    week: 4,
    goals: [
      "use common Spanish idioms naturally in conversation",
      "handle advanced/nuanced uses of ser and estar",
      "recognize and avoid common false friends (falsos amigos)",
      "sound noticeably more colloquial and native",
      "tell a joke or use humor/idiom naturally in Spanish",
    ],
    duolingoNote:
      "Search for idioms or colloquial expressions if available. Otherwise use today's Duolingo time as flexible review of anything from weeks 3-4 that still feels shaky.",
    ltNote:
      "If Language Transfer's course is finishing up, use today to relisten to your favorite/most useful lesson and try to summarize its whole grammar point out loud in your own words.",
    grammarTitle: "Modismos y falsos amigos",
    grammarIntro:
      "Idioms don't translate literally — learn them as fixed chunks. False friends look like English words but mean something completely different.",
    grammarTables: [
      {
        title: "modismos útiles",
        cells: [
          "costar un ojo de la cara (to cost an arm and a leg)",
          "ponerse las pilas (to get one's act together)",
          "no tener pelos en la lengua (to be very direct/blunt)",
          "estar en las nubes (to be daydreaming)",
          "meter la pata (to mess up)",
        ],
      },
      {
        title: "falsos amigos",
        cells: [
          "embarazada ≠ embarrassed (= pregnant)",
          "actualmente ≠ actually (= currently)",
          "realizar ≠ to realize (= to carry out/achieve)",
          "sensible ≠ sensible (= sensitive)",
          "éxito ≠ exit (= success)",
        ],
      },
    ],
    grammarExamples: [
      "Esa cena nos costó un ojo de la cara.",
      "Tienes que ponerte las pilas con el proyecto.",
      "Metí la pata al mencionar eso.",
      "Estaba en las nubes y no te oí.",
      "Actualmente vivo en otra ciudad. (currently, not 'actually')",
    ],
    translatePractice: [
      {
        en: "That dinner cost us an arm and a leg.",
        answers: ["Esa cena nos costó un ojo de la cara.", "Esa cena costó un ojo de la cara."],
      },
      {
        en: "I messed up by mentioning that.",
        answers: ["Metí la pata al mencionar eso.", "Metí la pata mencionando eso."],
      },
      {
        en: "I'm currently learning Spanish. (careful with 'actualmente')",
        answers: ["Actualmente estoy aprendiendo español.", "Actualmente aprendo español."],
      },
      {
        en: "She's very direct — she doesn't hold back.",
        answers: [
          "Ella no tiene pelos en la lengua.",
          "No tiene pelos en la lengua, es muy directa.",
        ],
      },
      {
        en: "I was daydreaming and didn't hear you.",
        answers: ["Estaba en las nubes y no te oí.", "Estaba en las nubes y no te escuché."],
      },
    ],
    fillBlankTitle: "Completa con el modismo correcto",
    fillBlank: [
      { prompt: "Ese coche ____ un ojo de la cara. (costar)", answers: [["cuesta", "costó", "costó"]] },
      { prompt: "Necesitas ____ las pilas si quieres terminar a tiempo.", answers: [["ponerte"]] },
      { prompt: "Perdona, creo que ____ la pata con ese comentario.", answers: [["metí", "he metido"]] },
      { prompt: "Siempre está ____ las nubes, nunca presta atención.", answers: [["en"]] },
      { prompt: "Ella no tiene ____ en la lengua, dice todo lo que piensa.", answers: [["pelos"]] },
    ],
    speakingQuestions: [
      "Cuenta una vez que 'metiste la pata'.",
      "¿Alguna vez algo te costó 'un ojo de la cara'?",
      "¿Conoces a alguien que 'no tenga pelos en la lengua'?",
      "¿Te 'pones las pilas' fácilmente cuando algo es urgente?",
      "¿Sueles estar 'en las nubes' o eres una persona muy presente?",
      "Cuenta un chiste o una anécdota graciosa en español.",
      "¿Qué modismo de tu idioma no tiene traducción exacta al español?",
      "Usa al menos tres modismos de hoy en una historia corta.",
      "¿Qué palabra en español te ha confundido por parecerse al inglés?",
      "¿Qué es lo más 'español' que has aprendido este mes?",
    ],
    dreamingNote:
      "Look for casual, colloquial content (podcasts, vlogs) rather than formal videos — idioms live in casual speech.",
    sdFocus: "Idioms, false friends, and colloquial expressions.",
    vocab: [
      { es: "dar en el clavo", en: "to hit the nail on the head" },
      { es: "estar hasta las narices", en: "to be fed up" },
      { es: "tomar el pelo", en: "to pull someone's leg / tease" },
      { es: "no dar pie con bola", en: "to not get anything right" },
      { es: "írsele la olla", en: "to lose it / go off track (colloquial)" },
      { es: "ser pan comido", en: "to be a piece of cake" },
      { es: "estar como una cabra", en: "to be crazy (affectionately)" },
      { es: "tirar la toalla", en: "to throw in the towel" },
      { es: "dorar la píldora", en: "to sugarcoat something" },
      { es: "hablar por los codos", en: "to talk a lot / chatter nonstop" },
    ],
    upgrades: [
      {
        basic: "Ese coche es caro.",
        upgraded: "Ese coche cuesta un ojo de la cara, la verdad, pero dicen que dura toda la vida.",
      },
      {
        basic: "Me equivoqué al decir eso.",
        upgraded: "Metí la pata bastante al mencionar eso delante de todos, la verdad.",
      },
      {
        basic: "No me rindo.",
        upgraded: "No pienso tirar la toalla, aunque a veces cueste ponerse las pilas.",
      },
    ],
    finalTopic: "Cuenta una historia usando al menos cinco modismos de hoy",
    finalPoints: [
      { prompt: "Situación inicial", starter: "Un día..." },
      { prompt: "Algo que costó un ojo de la cara o salió mal", starter: "..." },
      { prompt: "Cómo reaccionaste", starter: "Tuve que ponerme las pilas..." },
      { prompt: "Un momento gracioso o de 'meter la pata'", starter: "..." },
      { prompt: "Cómo terminó (usa otro modismo)", starter: "Al final,..." },
    ],
  },
  {
    day: 29,
    date: "October 5",
    isoDate: "2026-10-05",
    title: "REPASO TOTAL — todos los tiempos y estructuras",
    week: 4,
    isReview: true,
    goals: [
      "actively recall every major grammar point from the whole month",
      "correctly choose between present, past (both), future, conditional and subjunctive in one conversation",
      "self-correct errors from all four weeks",
      "speak for 15 minutes without a single pause to translate from English",
      "identify your single biggest remaining weakness before tomorrow's final challenge",
    ],
    duolingoNote:
      "Do the longest mixed practice session you can today — let the algorithm throw everything at you. Don't skip a single wrong answer without understanding why it was wrong.",
    ltNote:
      "If you've finished the course, do a full relisten of the final lesson today with zero pauses, narrating your own answers confidently and quickly.",
    grammarTitle: "Todo junto",
    grammarIntro:
      "No new grammar — today is pure retrieval and error correction across everything from Day 2 to Day 28.",
    grammarTables: [
      {
        title: "el mes en un vistazo",
        cells: [
          "presente (regular/irregular)",
          "gustar",
          "reflexivos",
          "pretérito e imperfecto",
          "pronombres (directo, indirecto, combinados)",
          "futuro y condicional",
          "imperativo (tú, usted, nosotros)",
          "subjuntivo (deseo, duda, emoción, impersonal)",
          "si + subjuntivo",
          "conectores avanzados",
        ],
      },
    ],
    grammarExamples: [
      "Cuando era niño, no me imaginaba que algún día hablaría otro idioma.",
      "Si hubiera empezado antes, ahora hablaría con más soltura.",
      "Espero que este mes de esfuerzo se note en cómo hablo a partir de ahora.",
      "Aunque todavía cometo errores, creo que he mejorado muchísimo.",
      "Ojalá pueda seguir practicando con la misma disciplina.",
    ],
    translatePractice: [
      {
        en: "When I was a kid, I never imagined I'd speak another language someday.",
        answers: [
          "Cuando era niño, no me imaginaba que algún día hablaría otro idioma.",
          "Cuando era niña, no me imaginaba que algún día hablaría otro idioma.",
        ],
      },
      {
        en: "If I had started earlier, I'd speak more fluently now.",
        answers: [
          "Si hubiera empezado antes, ahora hablaría con más fluidez.",
          "Si hubiera empezado antes, ahora hablaría con más soltura.",
        ],
      },
      {
        en: "I hope this month of effort shows in how I speak from now on.",
        answers: [
          "Espero que este mes de esfuerzo se note en cómo hablo a partir de ahora.",
          "Espero que este mes de esfuerzo se note en mi forma de hablar a partir de ahora.",
        ],
      },
      {
        en: "Even though I still make mistakes, I think I've improved a lot.",
        answers: [
          "Aunque todavía cometo errores, creo que he mejorado mucho.",
          "Aunque todavía cometo errores, creo que he mejorado muchísimo.",
        ],
      },
      {
        en: "I hope I can keep practicing with the same discipline.",
        answers: [
          "Espero poder seguir practicando con la misma disciplina.",
          "Ojalá pueda seguir practicando con la misma disciplina.",
          "Espero que pueda seguir practicando con la misma disciplina.",
        ],
      },
    ],
    fillBlankTitle: "Repaso final — mezcla de todo",
    fillBlank: [
      {
        prompt: "Cuando ____ (ser) niño, ____ (soler) jugar fuera todo el día.",
        answers: [["era"], ["solía"]],
      },
      {
        prompt: "Si ____ (yo/tener) más tiempo, ____ (practicar) todos los días.",
        answers: [["tuviera", "tuviese"], ["practicaría"]],
      },
      { prompt: "Espero que ____ (tú/poder) venir a visitarme pronto.", answers: [["puedas"]] },
      {
        prompt: "____ (tú/imperativo, tú, afirmativo) más despacio, por favor.",
        answers: [["Habla", "habla"]],
      },
      {
        prompt: "____ los libros que compré ayer, ya ____ los ____ (leer).",
        answers: [["Tengo", "Vi", "Compré"], ["me"], ["he leído", "leí"]],
      },
      {
        prompt: "Aunque ____ (yo/cometer) errores, ____ (seguir) practicando cada día.",
        answers: [["cometa", "cometo"], ["sigo", "seguiré"]],
      },
    ],
    speakingQuestions: [
      "Preséntate completamente como si fuera la primera vez.",
      "Cuenta la historia de este mes de aprendizaje de español.",
      "Da tu opinión sobre algo, con al menos un contraargumento.",
      "Describe cómo era tu español al principio del mes y cómo es ahora.",
      "Da instrucciones a alguien que empieza a aprender español hoy.",
      "Habla de tus planes con el idioma para el mes que viene.",
      "Cuenta una anécdota usando pretérito e imperfecto correctamente.",
      "Expresa un deseo, una duda y una emoción sobre tu progreso.",
      "Usa al menos tres modismos en una historia corta.",
      "Cierra con una reflexión personal sobre todo lo aprendido.",
    ],
    dreamingNote:
      "Pick the hardest video you can find today and see how much you understand compared to Day 2 — that gap IS your progress.",
    sdFocus: "Do a full cumulative review/quiz across everything covered this month.",
    vocab: [
      { es: "recapitular", en: "to recap" },
      { es: "consolidar", en: "to consolidate" },
      { es: "sacar conclusiones", en: "to draw conclusions" },
      { es: "balance", en: "assessment / overview" },
      { es: "logro", en: "achievement" },
      { es: "esfuerzo", en: "effort" },
      { es: "constancia", en: "consistency" },
      { es: "superarse", en: "to better oneself" },
      { es: "dar sus frutos", en: "to pay off / bear fruit" },
      { es: "estar orgulloso/a de", en: "to be proud of" },
    ],
    upgrades: [
      {
        basic: "He mejorado mucho.",
        upgraded:
          "Sinceramente, creo que he mejorado muchísimo este mes, aunque todavía me queda un largo camino por recorrer.",
      },
      {
        basic: "Quiero seguir aprendiendo.",
        upgraded:
          "Quiero seguir aprendiendo con la misma constancia, porque estoy empezando a ver que el esfuerzo da sus frutos.",
      },
      {
        basic: "Estoy orgulloso de mi progreso.",
        upgraded:
          "Estoy bastante orgulloso/a de mi progreso, sobre todo teniendo en cuenta de dónde partí hace un mes.",
      },
    ],
    finalTopic: "15 minutos: un repaso hablado de todo el mes",
    finalPoints: [
      { prompt: "Cómo empezaste (imperfecto)", starter: "Al principio del mes,..." },
      { prompt: "Lo que aprendiste, tema por tema (pretérito)", starter: "Aprendí a..." },
      { prompt: "Un desafío que superaste (pretérito + conectores)", starter: "Al principio me costaba..., pero..." },
      { prompt: "Tus planes futuros (futuro/condicional)", starter: "A partir de ahora,..." },
      { prompt: "Un deseo final (subjuntivo)", starter: "Espero que..." },
    ],
  },
  {
    day: 30,
    date: "October 6",
    isoDate: "2026-10-06",
    title: "EXAMEN FINAL — evaluación completa",
    week: 4,
    isReview: true,
    isFinal: true,
    goals: [
      "demonstrate accurate use of every tense covered this month under time pressure",
      "speak for 20 uninterrupted minutes on varied topics with no preparation",
      "self-assess honestly using the checklist below",
      "identify a concrete plan for continued study beyond this month",
      "finish the month able to hold a real, unscripted conversation in Spanish",
    ],
    duolingoNote:
      "Do the hardest practice set the app offers you today. Treat every mistake as data, not failure — note exactly which pattern tripped you up.",
    ltNote:
      "If the course is complete, spend this time simply speaking about the course itself in Spanish: what worked, what you'd do differently, what surprised you.",
    grammarTitle: "Autoevaluación",
    grammarIntro:
      "No new grammar — today is a checkpoint. Go through the checklist honestly; whatever you rate lowest becomes your focus for month two.",
    grammarTables: [
      {
        title: "evalúate del 1 al 5 en cada área",
        cells: [
          "presente (regular e irregular)",
          "pretérito vs. imperfecto",
          "pronombres (directo, indirecto, combinados)",
          "futuro y condicional",
          "imperativo (tú, usted, nosotros)",
          "subjuntivo (deseo, duda, emoción)",
          "si + subjuntivo",
          "fluidez al hablar sin traducir del inglés",
        ],
      },
    ],
    grammarExamples: [
      "Este mes he aprendido muchísimo, aunque todavía necesito practicar el subjuntivo con más soltura.",
      "Si sigo practicando todos los días, dentro de unos meses hablaré con mucha más confianza.",
      "Lo que más me ha costado ha sido el pretérito y el imperfecto juntos.",
      "Espero seguir mejorando y algún día poder mantener una conversación completamente fluida.",
      "Estoy orgulloso/a de lo lejos que he llegado en solo un mes.",
    ],
    translatePractice: [
      {
        en: "This month I've learned a lot, though I still need to practice the subjunctive more.",
        answers: [
          "Este mes he aprendido mucho, aunque todavía necesito practicar más el subjuntivo.",
          "Este mes he aprendido muchísimo, aunque todavía necesito practicar el subjuntivo con más soltura.",
        ],
      },
      {
        en: "If I keep practicing every day, in a few months I'll speak much more confidently.",
        answers: [
          "Si sigo practicando todos los días, dentro de unos meses hablaré con mucha más confianza.",
          "Si continúo practicando todos los días, en unos meses hablaré con más confianza.",
        ],
      },
      {
        en: "What was hardest for me was the preterite and imperfect together.",
        answers: [
          "Lo que más me costó fue el pretérito y el imperfecto juntos.",
          "Lo que más me ha costado ha sido el pretérito y el imperfecto juntos.",
        ],
      },
      {
        en: "I hope to keep improving and someday hold a fully fluent conversation.",
        answers: [
          "Espero seguir mejorando y algún día poder mantener una conversación completamente fluida.",
          "Espero seguir mejorando y algún día mantener una conversación totalmente fluida.",
        ],
      },
      {
        en: "I'm proud of how far I've come in just one month.",
        answers: [
          "Estoy orgulloso de lo lejos que he llegado en solo un mes.",
          "Estoy orgullosa de lo lejos que he llegado en solo un mes.",
        ],
      },
    ],
    fillBlankTitle: "Examen — completa cada frase",
    fillBlank: [
      {
        prompt: "Si ____ (yo/practicar) todos los días, mi español ____ (mejorar) mucho más rápido.",
        answers: [
          ["practico", "practicara", "practicase"],
          ["mejorará", "mejoraría", "mejorará mucho"],
        ],
      },
      {
        prompt: "Cuando ____ (empezar) este mes, no ____ (poder) mantener una conversación básica.",
        answers: [["empecé"], ["podía", "pude"]],
      },
      { prompt: "Espero que ____ (yo/seguir) practicando después de hoy.", answers: [["siga"]] },
      {
        prompt: "____ (tú/imperativo formal) no dude en corregirme si me equivoco.",
        answers: [["Por favor,", "Por favor", "Usted"]],
      },
      {
        prompt: "Lo que más ____ (costarme) fue el subjuntivo, pero ____ (mejorar) con la práctica.",
        answers: [["me costó", "costó"], ["mejoré", "he mejorado", "mejoré"]],
      },
      {
        prompt: "Estoy seguro/a de que ____ (yo/poder) tener una conversación real en español ahora.",
        answers: [["puedo", "podré"]],
      },
    ],
    speakingQuestions: [
      "Preséntate en español como si fuera una entrevista de trabajo.",
      "Cuenta la historia completa de tu mes aprendiendo español, de principio a fin.",
      "Da tu opinión sobre un tema de actualidad, con argumentos y contraargumentos.",
      "Describe una situación hipotética y qué harías en ella.",
      "Da instrucciones detalladas para algo, formal e informalmente.",
      "Expresa un deseo, una duda, una emoción y una certeza en un solo monólogo.",
      "Cuenta una anécdota real usando pretérito, imperfecto y al menos un modismo.",
      "Habla de tus planes de estudio para el próximo mes.",
      "Responde: ¿qué le dirías a la persona que eras hace un mes?",
      "Cierra con una reflexión libre y honesta sobre este proceso.",
    ],
    dreamingNote:
      "Watch whatever you want today, at whatever level feels right — notice, without judgment, how different your listening comprehension feels compared to Day 2.",
    sdFocus:
      "Take any level-check or review quiz the site offers; otherwise redo your single hardest lesson from the month one final time.",
    vocab: [
      { es: "un mes después", en: "a month later" },
      { es: "el camino recorrido", en: "the path traveled / progress made" },
      { es: "seguir adelante", en: "to keep going" },
      { es: "no hay atajos", en: "there are no shortcuts" },
      { es: "la práctica hace al maestro", en: "practice makes perfect" },
      { es: "paso a paso", en: "step by step" },
      { es: "marcar la diferencia", en: "to make a difference" },
      { es: "valió la pena", en: "it was worth it" },
      { es: "con constancia todo se consigue", en: "with consistency, anything is achievable" },
      { es: "esto es solo el principio", en: "this is only the beginning" },
    ],
    upgrades: [
      {
        basic: "Aprendí mucho este mes.",
        upgraded:
          "Sinceramente, en un mes he aprendido más de lo que esperaba, y sé que esto es solo el principio.",
      },
      {
        basic: "Quiero seguir practicando.",
        upgraded:
          "Pienso seguir practicando cada día, porque ahora sé, sin ninguna duda, que la constancia funciona.",
      },
      {
        basic: "Estoy orgulloso de mi progreso.",
        upgraded:
          "Estoy realmente orgulloso/a del camino recorrido este mes, y no pienso parar aquí.",
      },
    ],
    finalTopic: "EXAMEN ORAL — 20 minutos, sin preparación, sin pausas para traducir",
    finalPoints: [
      { prompt: "Preséntate y cuenta quién eres (5 tiempos distintos)", starter: "..." },
      { prompt: "Cuenta tu mes de aprendizaje entero, con anécdotas", starter: "..." },
      { prompt: "Da una opinión estructurada sobre un tema con conectores avanzados", starter: "..." },
      { prompt: "Describe una situación hipotética con si + subjuntivo", starter: "..." },
      { prompt: "Cierra con tus planes de futuro y un deseo final", starter: "..." },
    ],
  },
];
