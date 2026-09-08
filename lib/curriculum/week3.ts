import type { DayLesson } from "@/lib/types";

export const WEEK_3: DayLesson[] = [
  {
    day: 15,
    date: "September 21",
    isoDate: "2026-09-21",
    title: "Pronombres combinados (se lo, se la)",
    week: 3,
    goals: [
      "combine indirect + direct object pronouns in the same sentence",
      "apply the se lo / se la rule (le/les → se before lo/la/los/las)",
      "place double pronouns correctly with conjugated verbs and infinitives",
      "sound significantly more fluent by avoiding repetition entirely",
      "narrate exchanges between people (giving, telling, showing) naturally",
    ],
    duolingoNote:
      "Search for 'double object pronouns'. Whenever you see le/les + lo/la, say the sentence out loud and note the se lo/se la switch.",
    ltNote:
      "This is one of the trickiest patterns in Spanish — go slowly, and don't worry about being fast today. Accuracy first.",
    grammarTitle: "Cuando le/les se convierte en SE",
    grammarIntro:
      "You can't say 'le lo'. When an indirect object pronoun (le/les) is followed by a direct object pronoun (lo/la/los/las), le/les becomes SE.",
    grammarTables: [
      {
        title: "regla",
        cells: ["le/les + lo/la/los/las → se + lo/la/los/las"],
      },
      {
        title: "ejemplo",
        cells: ["Le doy el libro a ella → Se lo doy.", "Les cuento la noticia → Se la cuento."],
      },
    ],
    grammarExamples: [
      "¿Le diste las llaves a Juan? — Sí, se las di.",
      "¿Me puedes prestar tu coche? — Sí, te lo presto.",
      "Le voy a contar la verdad. — Se la voy a contar. / Voy a contársela.",
      "¿Nos vas a enviar los documentos? — Sí, os los envío hoy.",
      "Se lo expliqué varias veces.",
    ],
    translatePractice: [
      {
        en: "Did you give the keys to Juan? Yes, I gave them to him.",
        answers: [
          "¿Le diste las llaves a Juan? Sí, se las di.",
          "¿Le diste las llaves a Juan? Sí, se las di ayer.",
        ],
      },
      {
        en: "Can I lend it to you? Yes, lend it to me.",
        answers: ["¿Te lo presto? Sí, préstamelo.", "¿Puedo prestártelo? Sí, préstamelo."],
      },
      {
        en: "I'm going to tell her the truth — I'm going to tell it to her.",
        answers: [
          "Le voy a contar la verdad. Se la voy a contar.",
          "Voy a contarle la verdad. Voy a contársela.",
        ],
      },
      {
        en: "I explained it to them several times.",
        answers: ["Se lo expliqué varias veces.", "Se lo expliqué varias veces a ellos."],
      },
      {
        en: "Send it to us, please.",
        answers: ["Envíanoslo, por favor.", "Mándanoslo, por favor.", "Envíanoslo por favor."],
      },
    ],
    fillBlankTitle: "Combina los pronombres",
    fillBlank: [
      { prompt: "¿Le diste el regalo a tu madre? — Sí, ____ di ayer.", answers: [["se lo"]] },
      { prompt: "¿Me prestas tu bolígrafo? — Sí, ____ presto.", answers: [["te lo"]] },
      { prompt: "¿Les enviaste la información? — Sí, ____ envié esta mañana.", answers: [["se la"]] },
      {
        prompt: "¿Le contaste el secreto a Ana? — No, no ____ he contado todavía.",
        answers: [["se lo"]],
      },
      {
        prompt: "¿Nos vas a mandar las fotos? — Sí, ____ mando esta noche.",
        answers: [["os las", "se las"]],
      },
      {
        prompt: "¿Le explicaste el problema al profesor? — Sí, ____ expliqué con detalle.",
        answers: [["se lo"]],
      },
    ],
    speakingQuestions: [
      "¿Le prestas cosas a tus amigos fácilmente?",
      "¿Le has contado un secreto a alguien recientemente?",
      "¿Alguien te ha dado un buen consejo? ¿Te lo tomaste en serio?",
      "¿Le regalaste algo a alguien últimamente?",
      "¿Le explicaste algo complicado a alguien esta semana?",
      "¿Sueles devolver las cosas que te prestan?",
      "¿Le enviaste un mensaje importante a alguien hoy?",
      "¿Te han pedido dinero prestado alguna vez? ¿Se lo diste?",
      "¿Le enseñaste algo a alguien recientemente?",
      "¿Le pediste ayuda a alguien esta semana?",
    ],
    dreamingNote:
      "Listen for double-pronoun constructions in conversation-style videos — they're subtle but extremely common in natural speech.",
    sdFocus: "Double object pronouns (se lo, se la, se los, se las).",
    vocab: [
      { es: "prestar", en: "to lend" },
      { es: "regalar", en: "to give (as a gift)" },
      { es: "enviar/mandar", en: "to send" },
      { es: "explicar", en: "to explain" },
      { es: "pedir prestado", en: "to borrow" },
      { es: "devolver", en: "to give back" },
      { es: "confiar en", en: "to trust" },
      { es: "aconsejar", en: "to advise" },
      { es: "advertir", en: "to warn" },
      { es: "negar", en: "to deny" },
    ],
    upgrades: [
      {
        basic: "Se lo di.",
        upgraded: "Se lo di sin pensarlo, aunque después me arrepentí un poco.",
      },
      {
        basic: "Te lo presto.",
        upgraded: "Claro, te lo presto sin problema, solo devuélvemelo la semana que viene.",
      },
      { basic: "Se la conté.", upgraded: "Se la conté porque confío plenamente en ella." },
    ],
    finalTopic: "Historias de dar, prestar y contar cosas a otras personas",
    finalPoints: [
      { prompt: "Algo que le diste a alguien", starter: "Se lo di porque..." },
      { prompt: "Algo que te prestaron", starter: "Me lo prestaron y..." },
      { prompt: "Un secreto que le contaste a alguien", starter: "Se lo conté porque..." },
      { prompt: "Algo que le explicaste a alguien", starter: "Se lo expliqué..." },
      { prompt: "Reflexión: ¿confías fácilmente en la gente?", starter: "Creo que..." },
    ],
  },
  {
    day: 16,
    date: "September 22",
    isoDate: "2026-09-22",
    title: "El futuro (ir a + futuro simple)",
    week: 3,
    goals: [
      "review ir a + infinitivo for near-future plans",
      "conjugate the futuro simple for regular and irregular verbs",
      "know when to use ir a vs futuro simple in natural speech",
      "make predictions and promises",
      "talk about your life 5-10 years from now",
    ],
    duolingoNote:
      "Search for the future tense unit. Contrast ir a + infinitive against the futuro simple for the same idea, and notice the subtle tonal difference.",
    ltNote:
      "Language Transfer typically frames the futuro simple as very regular except for a handful of stem changes — memorize those irregular stems today.",
    grammarTitle: "Futuro simple",
    grammarIntro:
      "The futuro simple adds endings directly onto the infinitive (for regular verbs) and is used for predictions, promises, and probability — not just plans.",
    grammarTables: [
      {
        title: "regular (hablar)",
        cells: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"],
      },
      {
        title: "irregulares comunes",
        cells: [
          "tener → tendré",
          "poder → podré",
          "hacer → haré",
          "decir → diré",
          "salir → saldré",
          "poner → pondré",
          "querer → querré",
          "saber → sabré",
        ],
      },
    ],
    grammarExamples: [
      "Mañana lloverá en toda la región.",
      "El próximo año viviré en otra ciudad.",
      "No te preocupes, todo saldrá bien.",
      "¿Qué harás cuando termines de estudiar?",
      "Serán las diez, más o menos. (probability)",
    ],
    translatePractice: [
      { en: "It will rain tomorrow.", answers: ["Mañana lloverá.", "Lloverá mañana."] },
      {
        en: "I will live abroad next year.",
        answers: [
          "El próximo año viviré en el extranjero.",
          "El año que viene viviré en el extranjero.",
          "Viviré en el extranjero el año que viene.",
        ],
      },
      {
        en: "They will arrive around noon.",
        answers: ["Llegarán hacia el mediodía.", "Llegarán sobre el mediodía.", "Llegarán a mediodía más o menos."],
      },
      {
        en: "What will you do when you finish?",
        answers: ["¿Qué harás cuando termines?", "¿Qué vas a hacer cuando termines?"],
      },
      {
        en: "He's probably 30. (use future for probability)",
        answers: ["Tendrá 30 años.", "Tendrá unos 30 años.", "Será que tiene 30 años."],
      },
    ],
    fillBlankTitle: "Conjuga en futuro simple",
    fillBlank: [
      { prompt: "Yo ____ (hablar) con ella mañana.", answers: [["hablaré"]] },
      { prompt: "Nosotros ____ (tener) que decidir pronto.", answers: [["tendremos"]] },
      { prompt: "Ella ____ (venir) la próxima semana.", answers: [["vendrá"]] },
      { prompt: "¿Tú ____ (poder) ayudarme el sábado?", answers: [["podrás"]] },
      { prompt: "Ellos ____ (hacer) todo lo posible.", answers: [["harán"]] },
      { prompt: "Yo ____ (saber) la respuesta pronto.", answers: [["sabré"]] },
    ],
    speakingQuestions: [
      "¿Dónde vivirás dentro de diez años?",
      "¿Qué harás este fin de semana?",
      "¿Crees que el mundo cambiará mucho en el futuro?",
      "¿Qué hablarás mañana con tus compañeros de trabajo?",
      "¿Cómo será tu vida cuando tengas 60 años?",
      "¿Qué idiomas hablarás con fluidez en el futuro?",
      "¿Crees que tendrás hijos algún día?",
      "¿Qué será lo primero que harás cuando termines este curso de español?",
      "¿Qué crees que pasará con la tecnología en los próximos años?",
      "¿Qué le dirás a tu yo del futuro si pudieras?",
    ],
    dreamingNote:
      "Search for videos about predictions or future plans — notice how often speakers naturally switch between ir a and the futuro simple.",
    sdFocus: "Future tense (futuro simple + irregular stems).",
    vocab: [
      { es: "dentro de X años", en: "in X years" },
      { es: "a largo plazo", en: "in the long term" },
      { es: "a corto plazo", en: "in the short term" },
      { es: "predecir", en: "to predict" },
      { es: "prometer", en: "to promise" },
      { es: "planear", en: "to plan" },
      { es: "con el tiempo", en: "over time" },
      { es: "de aquí a X", en: "X from now" },
      { es: "cumplirse", en: "to come true" },
      { es: "un objetivo", en: "a goal" },
    ],
    upgrades: [
      {
        basic: "Viviré en otra ciudad.",
        upgraded: "Dentro de unos años probablemente viviré en otra ciudad, aunque todavía no sé cuál.",
      },
      {
        basic: "Todo saldrá bien.",
        upgraded: "Estoy seguro de que todo saldrá bien, aunque ahora mismo dé un poco de miedo.",
      },
      {
        basic: "Hablaré mejor español.",
        upgraded: "Estoy convencido de que dentro de un año hablaré español con mucha más fluidez que ahora.",
      },
    ],
    finalTopic: "Tu vida dentro de cinco y diez años",
    finalPoints: [
      { prompt: "Dónde vivirás", starter: "Dentro de cinco años..." },
      { prompt: "A qué te dedicarás", starter: "Probablemente..." },
      { prompt: "Cómo será tu español para entonces", starter: "Para entonces, hablaré..." },
      { prompt: "Una predicción sobre el mundo en general", starter: "Creo que..." },
      { prompt: "Una promesa que te haces a ti mismo/a", starter: "Me prometo que..." },
    ],
  },
  {
    day: 17,
    date: "September 23",
    isoDate: "2026-09-23",
    title: "El condicional",
    week: 3,
    goals: [
      "conjugate the conditional (same irregular stems as future, different endings)",
      "express hypothetical situations and polite requests",
      "give advice using yo que tú / yo en tu lugar",
      "talk about what you would do in different scenarios",
      "sound noticeably more polite and nuanced in requests",
    ],
    duolingoNote:
      "Search for the conditional tense unit. Compare it directly to yesterday's future — same irregular stems, different endings (-ía family).",
    ltNote:
      "The conditional often gets introduced right after the future because they share stems — focus today on the NEW endings, not new stems.",
    grammarTitle: "Condicional simple",
    grammarIntro:
      "Same irregular stems as the future, but with -ía endings. Used for 'would', hypotheticals, politeness, and advice.",
    grammarTables: [
      {
        title: "regular (hablar)",
        cells: ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablaríais", "hablarían"],
      },
      {
        title: "mismos irregulares que el futuro",
        cells: ["tendría, podría, haría, diría, saldría, pondría, querría, sabría"],
      },
    ],
    grammarExamples: [
      "Yo que tú, hablaría con él directamente.",
      "¿Podrías ayudarme con esto?",
      "Me gustaría viajar más este año.",
      "En tu lugar, no diría nada todavía.",
      "¿Qué harías si ganaras la lotería?",
    ],
    translatePractice: [
      {
        en: "Could you help me with this?",
        answers: ["¿Podrías ayudarme con esto?", "¿Me podrías ayudar con esto?"],
      },
      {
        en: "I would love to travel more.",
        answers: ["Me encantaría viajar más.", "Me gustaría viajar más."],
      },
      {
        en: "If I were you, I would talk to her.",
        answers: ["Yo que tú, hablaría con ella.", "En tu lugar, hablaría con ella."],
      },
      {
        en: "What would you do in my situation?",
        answers: ["¿Qué harías en mi situación?", "¿Qué harías tú en mi lugar?"],
      },
      {
        en: "It would be great to see you soon.",
        answers: ["Sería genial verte pronto.", "Estaría genial verte pronto.", "Me encantaría verte pronto."],
      },
    ],
    fillBlankTitle: "Conjuga en condicional",
    fillBlank: [
      { prompt: "Yo ____ (querer) pedirte un favor.", answers: [["querría"]] },
      { prompt: "¿____ (Tú/poder) llamarme más tarde?", answers: [["Podrías", "podrías"]] },
      { prompt: "Nosotros ____ (hacer) lo mismo en tu lugar.", answers: [["haríamos"]] },
      { prompt: "Ella ____ (decir) que sí, seguro.", answers: [["diría"]] },
      { prompt: "¿Qué ____ (vosotros/hacer) en mi situación?", answers: [["haríais"]] },
      { prompt: "Me ____ (gustar) mucho conocer España.", answers: [["gustaría"]] },
    ],
    speakingQuestions: [
      "¿Qué harías si tuvieras un millón de dólares?",
      "¿Qué le dirías a tu yo de hace diez años?",
      "En mi lugar, ¿qué harías?",
      "¿Qué te gustaría cambiar de tu vida actual?",
      "¿Vivirías en otro país si pudieras?",
      "¿Qué trabajo tendrías si pudieras elegir cualquiera?",
      "¿Qué le pedirías a un genio si tuvieras tres deseos?",
      "¿Podrías vivir sin tecnología un mes entero?",
      "¿Qué harías diferente si empezaras de nuevo?",
      "¿Le darías un consejo a alguien que empieza a aprender español?",
    ],
    dreamingNote:
      "Look for hypothetical or advice-style content ('qué harías si...'). Track every conditional verb you hear.",
    sdFocus: "Conditional tense + polite requests.",
    vocab: [
      { es: "en tu/mi lugar", en: "in your/my place" },
      { es: "si pudiera", en: "if I could" },
      { es: "ojalá", en: "I wish / hopefully" },
      { es: "por si acaso", en: "just in case" },
      { es: "lo ideal sería", en: "the ideal thing would be" },
      { es: "no estaría mal", en: "it wouldn't be bad" },
      { es: "valdría la pena", en: "it would be worth it" },
      { es: "convendría", en: "it would be advisable" },
      { es: "supuestamente", en: "supposedly" },
      { es: "hipotéticamente", en: "hypothetically" },
    ],
    upgrades: [
      {
        basic: "Me gustaría viajar.",
        upgraded: "Me encantaría viajar más este año, aunque el presupuesto no siempre lo permite.",
      },
      {
        basic: "Yo que tú hablaría con él.",
        upgraded: "Yo que tú, hablaría con él cuanto antes, antes de que la situación empeore.",
      },
      {
        basic: "¿Podrías ayudarme?",
        upgraded: "¿Te importaría ayudarme con esto cuando tengas un momento?",
      },
    ],
    finalTopic: "Situaciones hipotéticas — qué harías tú",
    finalPoints: [
      { prompt: "Si tuvieras mucho dinero", starter: "Si tuviera..." },
      { prompt: "Si pudieras vivir en cualquier país", starter: "Viviría en..." },
      { prompt: "Si pudieras cambiar una decisión pasada", starter: "Cambiaría..." },
      { prompt: "Un consejo que le darías a alguien", starter: "Yo que tú..." },
      { prompt: "Algo que te gustaría pero que ahora mismo no es posible", starter: "Me encantaría..." },
    ],
  },
  {
    day: 18,
    date: "September 24",
    isoDate: "2026-09-24",
    title: "El imperativo — tú (afirmativo y negativo)",
    week: 3,
    goals: [
      "form affirmative tú commands (mostly = present-tense él/ella form)",
      "form negative tú commands (= present subjunctive tú form)",
      "know the 8 irregular affirmative tú commands by heart",
      "attach/place pronouns correctly with commands",
      "give real instructions, advice and orders naturally",
    ],
    duolingoNote:
      "Search for the imperative/commands unit. Say each command, then immediately say its opposite (affirmative → negative or vice versa).",
    ltNote:
      "Commands often get compressed into one lesson — go slowly, and drill the 8 irregular affirmatives (di, haz, ve, ven, pon, sal, sé, ten) until automatic.",
    grammarTitle: "Imperativo informal (tú)",
    grammarIntro:
      "Affirmative tú commands = the él/ella present-tense form (habla, come, escribe). Negative tú commands = present subjunctive tú (no hables, no comas, no escribas).",
    grammarTables: [
      { title: "afirmativo regular", cells: ["habla (tú)", "come (tú)", "escribe (tú)"] },
      { title: "negativo regular", cells: ["no hables", "no comas", "no escribas"] },
      {
        title: "8 irregulares afirmativos",
        cells: [
          "di (decir)",
          "haz (hacer)",
          "ve (ir)",
          "ven (venir)",
          "pon (poner)",
          "sal (salir)",
          "sé (ser)",
          "ten (tener)",
        ],
      },
    ],
    grammarExamples: [
      "Habla más despacio, por favor.",
      "No comas tan rápido.",
      "Ven aquí un momento.",
      "Ten cuidado con el escalón.",
      "Dime la verdad.",
      "No te preocupes tanto.",
    ],
    translatePractice: [
      { en: "Speak more slowly, please.", answers: ["Habla más despacio, por favor.", "Habla más lento, por favor."] },
      { en: "Don't eat so fast.", answers: ["No comas tan rápido.", "No comas tan deprisa."] },
      { en: "Come here for a moment.", answers: ["Ven aquí un momento.", "Ven aquí un rato."] },
      { en: "Be careful with the step.", answers: ["Ten cuidado con el escalón.", "Ten cuidado con el paso."] },
      { en: "Tell me the truth.", answers: ["Dime la verdad."] },
      { en: "Don't worry so much.", answers: ["No te preocupes tanto.", "No te preocupes tanto."] },
    ],
    fillBlankTitle: "Da la orden correcta",
    fillBlank: [
      { prompt: "(hablar, tú, afirmativo) ____ más alto.", answers: [["Habla", "habla"]] },
      { prompt: "(comer, tú, negativo) No ____ tan tarde.", answers: [["comas"]] },
      { prompt: "(venir, tú, afirmativo) ____ conmigo.", answers: [["Ven", "ven"]] },
      { prompt: "(preocuparse, tú, negativo) No te ____.", answers: [["preocupes"]] },
      { prompt: "(hacer, tú, afirmativo) ____ la cama antes de salir.", answers: [["Haz", "haz"]] },
      { prompt: "(decir, tú, afirmativo) ____ me qué piensas.", answers: [["Di", "di"]] },
    ],
    speakingQuestions: [
      "Dale tres consejos a alguien que empieza a aprender español.",
      "Dale instrucciones a alguien para llegar a tu casa.",
      "¿Qué le dirías a un amigo que está estresado?",
      "Dale una receta sencilla a alguien paso a paso.",
      "¿Qué le pedirías a un compañero de piso que hiciera?",
      "Dale consejos a alguien que va a viajar por primera vez solo/a.",
      "¿Qué le dirías a alguien que no debería hacer algo?",
      "Enséñale a alguien cómo usar una aplicación, paso a paso.",
      "Dale ánimo a alguien que está nervioso por un examen.",
      "¿Qué reglas le pondrías a un niño en tu casa?",
    ],
    dreamingNote:
      "Look for tutorial or recipe-style videos — these are full of commands ('corta', 'añade', 'no olvides').",
    sdFocus: "Informal (tú) commands, affirmative and negative.",
    vocab: [
      { es: "cuidado con", en: "watch out for" },
      { es: "date prisa", en: "hurry up" },
      { es: "tranquilo/a", en: "calm down / relax" },
      { es: "espera", en: "wait" },
      { es: "sigue", en: "continue / keep going" },
      { es: "para", en: "stop" },
      { es: "mira", en: "look" },
      { es: "escucha", en: "listen" },
      { es: "intenta", en: "try" },
      { es: "no te olvides de", en: "don't forget to" },
    ],
    upgrades: [
      {
        basic: "Ven aquí.",
        upgraded: "Ven aquí un momento, tengo que enseñarte algo importante.",
      },
      {
        basic: "No te preocupes.",
        upgraded: "No te preocupes tanto, seguro que todo sale mejor de lo que piensas.",
      },
      {
        basic: "Habla más despacio.",
        upgraded:
          "Habla un poco más despacio, por favor, todavía me cuesta seguir conversaciones rápidas.",
      },
    ],
    finalTopic: "Da instrucciones detalladas para tres tareas distintas",
    finalPoints: [
      { prompt: "Cómo llegar a un sitio", starter: "Primero... luego... después..." },
      { prompt: "Cómo preparar algo sencillo", starter: "Corta... añade... mezcla..." },
      { prompt: "Consejos para alguien estresado", starter: "No te preocupes... intenta..." },
      { prompt: "Instrucciones para usar algo", starter: "Abre... haz clic en... escribe..." },
      { prompt: "Un mandato final y motivador", starter: "¡No te rindas y..." },
    ],
  },
  {
    day: 19,
    date: "September 25",
    isoDate: "2026-09-25",
    title: "Imperativo — usted/ustedes y nosotros",
    week: 3,
    goals: [
      "form usted/ustedes commands (from present subjunctive)",
      "form nosotros commands (let's...)",
      "switch registers between tú and usted appropriately",
      "give formal instructions and suggestions",
      "propose group activities using nosotros commands",
    ],
    duolingoNote:
      "Search for formal commands or 'usted' forms. Practice converting the same sentence from tú command to usted command.",
    ltNote:
      "Formal commands use the subjunctive stem, which you haven't formally studied yet — treat these as memorized chunks for now; the full subjunctive comes in week 4.",
    grammarTitle: "Usted/ustedes y nosotros",
    grammarIntro:
      "Usted/ustedes commands use the same form as the present subjunctive. Nosotros commands mean 'Let's...' and also use the subjunctive form (with one common exception: vamos).",
    grammarTables: [
      { title: "usted (hablar/comer/vivir)", cells: ["hable / coma / viva"] },
      { title: "ustedes", cells: ["hablen / coman / vivan"] },
      {
        title: "nosotros (¡vamos a...!/subjuntivo)",
        cells: ["hablemos / comamos / vivamos", "¡Vamos! (irregular, not vayamos, for 'let's go')"],
      },
    ],
    grammarExamples: [
      "Por favor, siéntense.",
      "No se preocupe, señora.",
      "Hablemos de esto con calma.",
      "Vamos a comer algo.",
      "Tomen asiento, por favor.",
    ],
    translatePractice: [
      {
        en: "Please have a seat. (formal, plural)",
        answers: ["Siéntense, por favor.", "Tomen asiento, por favor.", "Por favor, siéntense."],
      },
      { en: "Don't worry, sir.", answers: ["No se preocupe, señor.", "No se preocupe usted, señor."] },
      {
        en: "Let's talk about this calmly.",
        answers: ["Hablemos de esto con calma.", "Hablemos de esto tranquilamente."],
      },
      { en: "Let's eat something.", answers: ["Vamos a comer algo.", "Comamos algo."] },
      { en: "Please sign here. (formal)", answers: ["Firme aquí, por favor.", "Por favor, firme aquí."] },
    ],
    fillBlankTitle: "Da la orden formal o con nosotros",
    fillBlank: [
      { prompt: "(hablar, usted) ____ más despacio, por favor.", answers: [["Hable", "hable"]] },
      { prompt: "(sentarse, ustedes) ____, por favor.", answers: [["Siéntense", "siéntense"]] },
      { prompt: "(empezar, nosotros) ____ la reunión.", answers: [["Empecemos", "empecemos"]] },
      { prompt: "(no preocuparse, usted) No se ____.", answers: [["preocupe"]] },
      { prompt: "(firmar, usted) ____ aquí, por favor.", answers: [["Firme", "firme"]] },
      { prompt: "(ir, nosotros - irregular) ¡____!", answers: [["Vamos", "vamos"]] },
    ],
    speakingQuestions: [
      "Dale una instrucción formal a un cliente.",
      "Propón un plan usando 'nosotros' para el fin de semana.",
      "¿Qué le dirías formalmente a tu jefe en una reunión?",
      "Sugiere, en forma de 'nosotros', qué hacer en una situación difícil del trabajo.",
      "Da tres instrucciones formales como si fueras un guía turístico.",
      "Propón, con 'nosotros', cómo resolver un problema en equipo.",
      "¿Cómo le pedirías formalmente algo a un desconocido en la calle?",
      "Da instrucciones formales para un examen o proceso oficial.",
      "Sugiere un plan con nosotros para mejorar tu español juntos.",
      "¿Qué diferencias notas entre hablarle a un amigo y a un desconocido?",
    ],
    dreamingNote:
      "Formal commands show up in customer-service, tutorial, and news-style content — listen for usted/ustedes forms specifically.",
    sdFocus: "Formal commands (usted/ustedes) + nosotros commands.",
    vocab: [
      { es: "por favor", en: "please" },
      { es: "tenga la amabilidad de", en: "please be so kind as to (very formal)" },
      { es: "le agradecería que", en: "I would appreciate it if" },
      { es: "con permiso", en: "excuse me (formal, passing by)" },
      { es: "disculpe", en: "excuse me (formal)" },
      { es: "le importaría", en: "would you mind (formal)" },
      { es: "propongo que", en: "I propose that" },
      { es: "sugiero que", en: "I suggest that" },
      { es: "de acuerdo", en: "agreed / alright" },
      { es: "quedamos en", en: "we agree to / we settle on" },
    ],
    upgrades: [
      {
        basic: "Siéntese, por favor.",
        upgraded: "Siéntese, por favor, y tenga la amabilidad de esperar un momento.",
      },
      {
        basic: "Hablemos de esto.",
        upgraded: "Hablemos de esto con calma antes de tomar una decisión final.",
      },
      {
        basic: "No se preocupe.",
        upgraded: "No se preocupe, señor, nos encargamos de todo enseguida.",
      },
    ],
    finalTopic: "Una reunión formal de trabajo (role-play imaginario)",
    finalPoints: [
      { prompt: "Saluda formalmente y abre la reunión", starter: "Buenos días, empecemos..." },
      { prompt: "Propón algo con nosotros", starter: "Propongo que..." },
      { prompt: "Da instrucciones formales a un cliente imaginario", starter: "Por favor,..." },
      { prompt: "Responde a una objeción formalmente", starter: "Entiendo, sin embargo..." },
      { prompt: "Cierra la reunión", starter: "Quedamos en que... Muchas gracias." },
    ],
  },
  {
    day: 20,
    date: "September 26",
    isoDate: "2026-09-26",
    title: "Comparativos y superlativos",
    week: 3,
    goals: [
      "form comparisons of superiority, inferiority and equality",
      "use irregular comparatives (mejor, peor, mayor, menor)",
      "form superlatives (el/la más..., -ísimo)",
      "compare people, places and things naturally",
      "argue why one option is better than another",
    ],
    duolingoNote:
      "Search for comparatives/superlatives. Build comparisons between real things in your life (your two jobs, two cities you know, two friends).",
    ltNote:
      "This tends to be a short grammar point but with a lot of vocabulary — repeat each structure with 3 different examples before moving on.",
    grammarTitle: "Más/menos que, tan... como, el/la más",
    grammarIntro:
      "Comparatives: más/menos + adj/adv + que. Equality: tan + adj + como. Superlatives: el/la/los/las + más/menos + adj, or adj + -ísimo/a for emphasis.",
    grammarTables: [
      { title: "comparativos", cells: ["más alto que", "menos caro que", "tan bueno como"] },
      {
        title: "irregulares",
        cells: ["mejor (better)", "peor (worse)", "mayor (older/bigger)", "menor (younger/smaller)"],
      },
      { title: "superlativos", cells: ["el más rápido de todos", "facilísimo", "carísimo"] },
    ],
    grammarExamples: [
      "Madrid es más grande que Sevilla.",
      "Este trabajo es menos estresante que el anterior.",
      "Ella es tan inteligente como su hermano.",
      "Este es el mejor restaurante de la ciudad.",
      "Es facilísimo una vez que lo entiendes.",
    ],
    translatePractice: [
      {
        en: "This city is bigger than mine.",
        answers: ["Esta ciudad es más grande que la mía.", "Esta ciudad es más grande que mi ciudad."],
      },
      {
        en: "She is as talented as her brother.",
        answers: ["Ella es tan talentosa como su hermano.", "Es tan talentosa como su hermano."],
      },
      {
        en: "This is the best decision I've made this year.",
        answers: [
          "Esta es la mejor decisión que he tomado este año.",
          "Esta es la mejor decisión que he hecho este año.",
        ],
      },
      {
        en: "That option is worse than the first one.",
        answers: ["Esa opción es peor que la primera.", "Esa opción es peor que la primera."],
      },
      {
        en: "It's extremely easy once you understand it.",
        answers: ["Es facilísimo una vez que lo entiendes.", "Es facilísimo cuando lo entiendes."],
      },
    ],
    fillBlankTitle: "Completa la comparación",
    fillBlank: [
      { prompt: "Mi hermano es ____ (mayor) que yo.", answers: [["mayor"]] },
      { prompt: "Este café es ____ caro ____ el otro.", answers: [["más"], ["que"]] },
      { prompt: "Ella habla ____ bien ____ tú.", answers: [["tan"], ["como"]] },
      { prompt: "Este es el ____ (mejor) libro que he leído.", answers: [["mejor"]] },
      { prompt: "Es ____ísimo (fácil) resolver este problema.", answers: [["facil"]] },
      { prompt: "Mi ciudad es ____ (menos) ruidosa ____ la capital.", answers: [["menos"], ["que"]] },
    ],
    speakingQuestions: [
      "Compara tu ciudad con otra que conozcas bien.",
      "¿Quién es mayor, tú o tu mejor amigo/a?",
      "Compara tu trabajo actual con uno anterior.",
      "¿Cuál es el mejor consejo que te han dado nunca?",
      "Compara dos idiomas que conozcas.",
      "¿Qué es más importante para ti, el dinero o el tiempo libre?",
      "Compara cómo eras antes con cómo eres ahora.",
      "¿Cuál ha sido el día más difícil de este mes?",
      "Compara dos comidas típicas de diferentes países.",
      "¿Qué es peor para ti, hablar en público o escribir un examen?",
    ],
    dreamingNote:
      "Comparison content (product reviews, 'ciudad A vs ciudad B') is packed with these structures — look for a 'comparación' video.",
    sdFocus: "Comparatives and superlatives.",
    vocab: [
      { es: "a diferencia de", en: "unlike / in contrast to" },
      { es: "en comparación con", en: "compared to" },
      { es: "por otro lado", en: "on the other hand" },
      { es: "mientras que", en: "whereas" },
      { es: "igual de", en: "equally" },
      { es: "con diferencia", en: "by far" },
      { es: "no tiene comparación", en: "there's no comparison" },
      { es: "superar", en: "to surpass / exceed" },
      { es: "destacar", en: "to stand out" },
      { es: "quedarse corto", en: "to fall short" },
    ],
    upgrades: [
      {
        basic: "Madrid es más grande.",
        upgraded:
          "Madrid es considerablemente más grande que mi ciudad, aunque prefiero la tranquilidad de donde vivo.",
      },
      {
        basic: "Es el mejor restaurante.",
        upgraded: "Sin duda es el mejor restaurante de la zona, aunque también es el más caro.",
      },
      {
        basic: "Es tan bueno como el otro.",
        upgraded: "En realidad es tan bueno como el otro, solo que mucho menos conocido.",
      },
    ],
    finalTopic: "Compara y da tu opinión sobre dos opciones",
    finalPoints: [
      { prompt: "Presenta las dos opciones", starter: "Por un lado... por otro lado..." },
      { prompt: "Compara en al menos 3 aspectos", starter: "En cuanto a..., ... es más..." },
      { prompt: "Da tu opinión con un superlativo", starter: "Para mí, es el/la más..." },
      { prompt: "Reconoce un punto a favor de la opción contraria", starter: "Sin embargo,..." },
      { prompt: "Conclusión final", starter: "En resumen, prefiero..." },
    ],
  },
  {
    day: 21,
    date: "September 27",
    isoDate: "2026-09-27",
    title: "REPASO — Semana 3 + POR vs. PARA",
    week: 3,
    isReview: true,
    goals: [
      "actively recall future, conditional, commands, and comparatives",
      "master the core uses of por vs. para (the classic trouble spot)",
      "combine all week-3 grammar in a persuasive argument",
      "give and receive commands/suggestions naturally",
      "speak for 10-12 minutes without translating from English",
    ],
    duolingoNote:
      "Do a mixed practice session covering future, conditional and imperative units together.",
    ltNote:
      "If Language Transfer covers por/para, listen closely — this is one of the most commonly confused points for English speakers.",
    grammarTitle: "POR vs. PARA — la guía rápida",
    grammarIntro:
      "PARA = destination, purpose, deadline, recipient ('for/to/in order to'). POR = cause, exchange, duration, movement through, means ('because of/for/through/by').",
    grammarTables: [
      {
        title: "PARA",
        cells: [
          "destino: Salgo para Madrid.",
          "propósito: Estudio para aprender.",
          "plazo: Para el lunes.",
          "destinatario: Esto es para ti.",
        ],
      },
      {
        title: "POR",
        cells: [
          "causa: Lo hago por ti.",
          "intercambio: Pagué 20€ por esto.",
          "duración: Viví allí por dos años.",
          "a través de: Caminamos por el parque.",
        ],
      },
    ],
    grammarExamples: [
      "Este regalo es para mi madre.",
      "Lo hice por amor, no por dinero.",
      "Necesito esto para el viernes.",
      "Caminamos por la playa toda la tarde.",
      "Gracias por tu ayuda.",
    ],
    translatePractice: [
      { en: "This is for you.", answers: ["Esto es para ti.", "Esto es para usted."] },
      { en: "I did it because of you.", answers: ["Lo hice por ti.", "Lo hice por usted."] },
      { en: "I need this by Friday.", answers: ["Necesito esto para el viernes.", "Lo necesito para el viernes."] },
      { en: "We walked through the park.", answers: ["Caminamos por el parque.", "Paseamos por el parque."] },
      { en: "Thank you for everything.", answers: ["Gracias por todo.", "Gracias por todo."] },
    ],
    fillBlankTitle: "Por o para",
    fillBlank: [
      { prompt: "Este libro es ____ ti.", answers: [["para"]] },
      { prompt: "Trabajo mucho ____ ganar más dinero.", answers: [["para"]] },
      { prompt: "Necesito el informe ____ mañana.", answers: [["para"]] },
      { prompt: "Pasamos ____ el centro de camino a casa.", answers: [["por"]] },
      { prompt: "Gracias ____ tu paciencia.", answers: [["por"]] },
      { prompt: "Salimos ____ Barcelona mañana temprano.", answers: [["para"]] },
    ],
    speakingQuestions: [
      "¿Qué harías tú por un buen amigo?",
      "¿Para qué estudias/trabajas realmente?",
      "Dale un consejo a alguien usando el imperativo.",
      "Compara tu vida actual con cómo será dentro de cinco años.",
      "¿Qué es más importante para ti, el dinero o el tiempo?",
      "¿Qué sacrificarías por algo que realmente quieres?",
      "Propón, con 'nosotros', un plan para mejorar algo en tu vida.",
      "¿Cuál ha sido tu mejor decisión hasta ahora?",
      "Da instrucciones formales para algo relacionado con tu trabajo.",
      "¿Qué le dirías a alguien que está a punto de rendirse?",
    ],
    dreamingNote:
      "Track every por/para you hear in today's video — this contrast becomes automatic with enough exposure.",
    sdFocus: "Por vs. para, plus review of future/conditional/commands.",
    vocab: [
      { es: "por lo tanto", en: "therefore" },
      { es: "por eso", en: "that's why" },
      { es: "para siempre", en: "forever" },
      { es: "por ahora", en: "for now" },
      { es: "por supuesto", en: "of course" },
      { es: "para nada", en: "not at all" },
      { es: "por casualidad", en: "by chance" },
      { es: "por cierto", en: "by the way" },
      { es: "para colmo", en: "to top it all off" },
      { es: "por si fuera poco", en: "as if that weren't enough" },
    ],
    upgrades: [
      {
        basic: "Es para ti.",
        upgraded: "Este regalo es para ti, por todo lo que has hecho por mí este año.",
      },
      {
        basic: "Trabajo por dinero.",
        upgraded: "No trabajo solo por dinero, sino también porque disfruto lo que hago.",
      },
      {
        basic: "Lo necesito para mañana.",
        upgraded:
          "Lo necesito para mañana por la mañana como muy tarde, así que por favor date prisa.",
      },
    ],
    finalTopic: "10-12 minutos: un argumento persuasivo sobre algo que te importa",
    finalPoints: [
      { prompt: "Presenta tu postura", starter: "Creo que..." },
      { prompt: "Da al menos 3 razones (usa por/para)", starter: "Por un lado..., por eso..." },
      { prompt: "Usa comparativos para reforzar tu punto", starter: "Es mejor que..." },
      { prompt: "Usa un mandato para involucrar al oyente", starter: "Piénsalo así:..." },
      { prompt: "Termina con una predicción de futuro", starter: "Si hacemos esto, dentro de unos años..." },
    ],
  },
];
