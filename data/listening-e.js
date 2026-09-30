/* Listening, tests 34 a 40 : Listen to an Academic Talk */

const T = "Listen to an Academic Talk";

export const listeningE = [
  {
    id: 34,
    title: "What a map leaves out",
    topic: "Cartographie",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Every map is a claim about what matters, because every map is a selection. Projection is the obvious example: you cannot flatten a sphere without distorting area, shape, distance or direction, and choosing which to preserve is choosing what the map is for. A navigator wants straight lines of constant bearing, which is Mercator, and accepts that Greenland looks absurd. A demographer wants area preserved and accepts that shapes look wrong. Less obvious is the selection in what gets a label. A map that names every settlement above a thousand people and no smaller one is making a decision that looks technical and is political, because it determines what appears to exist. When you read a historical map, read the legend first and the territory second.",
    questions: [
      {
        q: "Why is projection described as a choice?",
        options: [
          "Because different countries use different systems",
          "Because you must decide what to preserve and what to distort",
          "Because it depends on the printing method",
          "Because satellites cannot measure shape",
        ],
        answer: 1,
        explanation:
          "Impossible d'aplatir une sphere sans deformer : on choisit ce que l'on conserve.",
      },
      {
        q: "What does the Mercator projection preserve?",
        options: ["Area", "Population density", "Constant bearing", "Relative distance"],
        answer: 2,
        explanation:
          "Le navigateur veut des lignes droites de cap constant.",
      },
      {
        q: "Why does the speaker call labelling political?",
        options: [
          "Labels are chosen by governments",
          "It decides what appears to exist",
          "Labels are expensive to print",
          "It affects the projection used",
        ],
        answer: 1,
        explanation:
          "Un seuil apparemment technique determine ce qui semble exister.",
      },
    ],
  },
  {
    id: 35,
    title: "Enzymes and temperature",
    topic: "Biochimie",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Raise the temperature and a reaction speeds up, because molecules collide more often and with more energy. For an enzyme-catalysed reaction that holds, but only up to a point. Beyond an optimum, the rate falls, and it falls sharply. The reason is that the enzyme's function depends on a three-dimensional shape held together by weak interactions, and heat disrupts those interactions faster than it increases collision energy. The protein unfolds, the active site no longer fits the substrate, and the catalyst stops being a catalyst. Note the asymmetry, because students get this wrong in exams. Cooling slows an enzyme but does not usually destroy it, and activity returns on warming. Heating past the optimum is typically irreversible. Slow is recoverable; unfolded is not.",
    questions: [
      {
        q: "Why does the rate fall beyond the optimum temperature?",
        options: [
          "Molecules collide less often",
          "The enzyme's shape is disrupted",
          "The substrate evaporates",
          "The reaction runs backwards",
        ],
        answer: 1,
        explanation:
          "La chaleur rompt les interactions faibles qui maintiennent la forme.",
      },
      {
        q: "What is the asymmetry the speaker stresses?",
        options: [
          "Cooling is reversible, overheating usually is not",
          "Heating affects only some enzymes",
          "Cold destroys the active site permanently",
          "Optimum temperature varies by species",
        ],
        answer: 0,
        explanation: "Slow is recoverable; unfolded is not.",
      },
      {
        q: "What happens to the active site when the protein unfolds?",
        options: [
          "It binds more substrates",
          "It no longer fits the substrate",
          "It becomes more stable",
          "It changes into a different enzyme",
        ],
        answer: 1,
        explanation: "Le site actif ne correspond plus au substrat.",
      },
    ],
  },
  {
    id: 36,
    title: "Why cities specialise",
    topic: "Geographie economique",
    taskLabel: T,
    type: "audio",
    level: "C1",
    script:
      "Why does one industry cluster in one city rather than spreading evenly? Marshall gave three reasons over a century ago and they have held up. First, a thick labour market: workers with a specialised skill move to where many employers need it, and employers locate where such workers already are, which is self-reinforcing once it starts. Second, specialised suppliers, who can only survive where there is enough local demand for a narrow product. Third, knowledge spillovers, the informal transfer of technique that happens when people who do similar work meet. The third is the hardest to measure and the most often invoked. Note what the theory does not explain: why a cluster starts in one place and not another. The honest answer is often an accident that became self-sustaining, which is uncomfortable for policy, because you cannot legislate an accident.",
    questions: [
      {
        q: "Why is a thick labour market self-reinforcing?",
        options: [
          "Wages rise continuously",
          "Workers and employers each attract the other",
          "Training is provided free",
          "Rents fall as the city grows",
        ],
        answer: 1,
        explanation:
          "Les travailleurs vont ou sont les employeurs et reciproquement.",
      },
      {
        q: "What does the speaker say about knowledge spillovers?",
        options: [
          "They are the easiest factor to measure",
          "They are hardest to measure but most often cited",
          "They occur only in formal training",
          "They have been disproved",
        ],
        answer: 1,
        explanation: "Le plus difficile a mesurer et le plus souvent invoque.",
      },
      {
        q: "Why is the theory uncomfortable for policy?",
        options: [
          "It suggests clusters begin by accident",
          "It requires very large subsidies",
          "It applies only to manufacturing",
          "It predicts clusters will disperse",
        ],
        answer: 0,
        explanation: "On ne legifere pas un accident.",
      },
    ],
  },
  {
    id: 37,
    title: "Perspective and the picture plane",
    topic: "Histoire de l'art",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Linear perspective is a construction, not a discovery about how we see. It assumes a single fixed eye, a flat picture plane, and a viewer standing at one precise distance, which is almost never where anyone actually stands in a gallery. Within those assumptions it is rigorous, and fifteenth-century Florence used it to make painted space feel continuous with real space. What interests me is what it costs. Everything in a perspectival painting is subordinated to a single viewpoint, which suits a scene organised around one moment, and suits badly a narrative that unfolds over time. Earlier painting often showed several episodes in one frame, with size indicating importance rather than distance. That was not a failure of technique. It was a different job, and perspective could not do it.",
    questions: [
      {
        q: "What assumptions does linear perspective make?",
        options: [
          "Two moving eyes and a curved surface",
          "A single fixed eye and a precise viewing distance",
          "Natural light from one direction",
          "A viewer moving through the space",
        ],
        answer: 1,
        explanation: "Oeil unique fixe, plan de l'image plat, distance precise.",
      },
      {
        q: "What does perspective handle badly?",
        options: [
          "Scenes organised around one moment",
          "Narratives unfolding over time",
          "Architectural interiors",
          "Portraits",
        ],
        answer: 1,
        explanation:
          "Tout est subordonne a un point de vue unique, mal adapte a un recit etale.",
      },
      {
        q: "How does the speaker view earlier painting?",
        options: [
          "As technically incompetent",
          "As doing a different job that perspective cannot do",
          "As an early attempt at perspective",
          "As purely decorative",
        ],
        answer: 1,
        explanation: "That was not a failure of technique. It was a different job.",
      },
    ],
  },
  {
    id: 38,
    title: "Tides and why there are two",
    topic: "Oceanographie",
    taskLabel: T,
    type: "audio",
    level: "C1",
    script:
      "Most people can tell you the moon causes tides. Far fewer can say why there are two high tides a day rather than one, and the usual explanation, that the moon pulls water towards it, gives you only one bulge. The second bulge is on the far side, and it exists because the tide is produced by a difference in gravitational pull across the Earth, not by the pull itself. The near side is pulled more strongly than the centre of the Earth, and the centre is pulled more strongly than the far side, so relative to the Earth as a whole, water moves outward at both ends. The sun contributes about forty-five per cent as much as the moon despite being vastly more massive, because the tidal effect depends on the cube of distance rather than the square.",
    questions: [
      {
        q: "What produces tides, according to the talk?",
        options: [
          "The moon's gravitational pull itself",
          "The difference in pull across the Earth",
          "The rotation of the Earth alone",
          "The combined mass of sun and moon",
        ],
        answer: 1,
        explanation: "C'est le gradient de l'attraction, non l'attraction elle-meme.",
      },
      {
        q: "Why is there a bulge on the far side?",
        options: [
          "Water is pushed there by the near bulge",
          "The far side is pulled less than the Earth's centre",
          "The Earth's rotation throws it outward",
          "The sun pulls it in that direction",
        ],
        answer: 1,
        explanation:
          "Moins attiree que le centre, l'eau du cote oppose s'ecarte vers l'exterieur.",
      },
      {
        q: "Why is the sun's tidal effect smaller than the moon's?",
        options: [
          "The sun has less mass",
          "The effect depends on the cube of the distance",
          "Sunlight heats the water",
          "The sun is aligned differently",
        ],
        answer: 1,
        explanation:
          "La dependance en cube de la distance l'emporte sur la masse.",
      },
    ],
  },
  {
    id: 39,
    title: "Translating idiom",
    topic: "Traductologie",
    taskLabel: T,
    type: "audio",
    level: "C1",
    script:
      "The hardest thing to translate is rarely a rare word. It is an ordinary phrase whose meaning is carried by something other than its parts. When a character says it is not my cup of tea, no dictionary entry fails you, and yet a literal rendering imports a register and a culture that were not in the original sentence. Translators talk about three options. You can domesticate, replacing the idiom with a target-language equivalent, which reads smoothly and quietly deletes the fact that the speaker is English. You can foreignise, keeping the strangeness and trusting the reader, which preserves distance at the cost of fluency. Or you can paraphrase the meaning and lose the figure entirely, which is the safest and the flattest. There is no correct answer; there is only a decision you should be able to defend.",
    questions: [
      {
        q: "What is hardest to translate, according to the speaker?",
        options: [
          "Rare technical vocabulary",
          "Ordinary phrases whose meaning is not in their parts",
          "Proper names",
          "Long sentences",
        ],
        answer: 1,
        explanation:
          "L'expression courante dont le sens ne tient pas a ses composants.",
      },
      {
        q: "What is the cost of domesticating an idiom?",
        options: [
          "The text becomes harder to read",
          "It quietly removes the speaker's cultural marking",
          "It lengthens the sentence",
          "It changes the plot",
        ],
        answer: 1,
        explanation:
          "La lecture est fluide mais le fait que le locuteur soit anglais disparait.",
      },
      {
        q: "What is the speaker's conclusion?",
        options: [
          "Foreignising is always preferable",
          "Paraphrase should be avoided",
          "There is no correct answer, only a defensible decision",
          "Idioms should be footnoted",
        ],
        answer: 2,
        explanation: "There is only a decision you should be able to defend.",
      },
    ],
  },
  {
    id: 40,
    title: "The economics of a repair",
    topic: "Ingenierie et societe",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Why is it often cheaper to replace an appliance than to fix it? Three forces, and only one of them is about greed. The first is labour: an hour of a skilled technician now costs more, in real terms, than an hour did in 1970, while the manufactured object costs dramatically less, because manufacturing productivity rose and service productivity did not. That gap is structural. The second is design: products assembled with adhesive and ultrasonic welding are faster and cheaper to make, and they are also genuinely hard to open without damage. The third is information: schematics and spare parts are often unavailable, which is a choice rather than a consequence. Policy can address the second and third. It cannot do much about the first, which is why repair will stay expensive even where it is made possible.",
    questions: [
      {
        q: "What is the structural reason repair is expensive?",
        options: [
          "Spare parts are rare",
          "Skilled labour has become costly relative to manufactured goods",
          "Technicians are badly trained",
          "Transport costs have risen",
        ],
        answer: 1,
        explanation:
          "La productivite industrielle a progresse, celle des services non.",
      },
      {
        q: "Which factor does the speaker describe as a choice?",
        options: [
          "Labour costs",
          "Adhesive assembly",
          "Withholding schematics and parts",
          "Consumer preference",
        ],
        answer: 2,
        explanation: "Which is a choice rather than a consequence.",
      },
      {
        q: "What is the speaker's conclusion about policy?",
        options: [
          "It can solve all three problems",
          "It can address design and information but not the labour gap",
          "It has no useful role",
          "It should focus on labour costs first",
        ],
        answer: 1,
        explanation:
          "La reparation restera chere meme rendue possible.",
      },
    ],
  },
];
