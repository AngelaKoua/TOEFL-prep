/* Listening, tests 26 a 33 : Listen to an Academic Talk */

const T = "Listen to an Academic Talk";

export const listeningD = [
  {
    id: 26,
    title: "Why markets fail on public goods",
    topic: "Economie",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "A public good has two properties. It is non-rival, meaning my use does not reduce yours, and non-excludable, meaning I cannot stop you using it once it exists. A lighthouse is the classic illustration. Now, why does that matter? Because a private firm cannot charge for something it cannot withhold. Everyone has a reason to wait for someone else to pay, and if everyone waits, the good is never built. That is the free rider problem, and notice that it is not caused by selfishness. It follows from the structure of the incentives even among perfectly decent people. The usual solutions are three: provide the good through taxation, make it artificially excludable, or rely on a group small enough that contributions can be observed. Each has costs, and the third one scales badly.",
    questions: [
      {
        q: "What does non-excludable mean?",
        options: [
          "Using it reduces what is left for others",
          "You cannot prevent others from using it",
          "It must be provided by the state",
          "It has no production cost",
        ],
        answer: 1,
        explanation: "Impossible d'empecher l'usage une fois le bien cree.",
      },
      {
        q: "What point does the speaker make about the free rider problem?",
        options: [
          "It is caused by selfish individuals",
          "It arises from incentives even among decent people",
          "It disappears in large groups",
          "It applies only to lighthouses",
        ],
        answer: 1,
        explanation: "It follows from the structure of the incentives.",
      },
      {
        q: "What does the speaker say about the third solution?",
        options: [
          "It is the cheapest",
          "It works poorly as the group grows",
          "It requires taxation",
          "It has no costs",
        ],
        answer: 1,
        explanation: "The third one scales badly.",
      },
    ],
  },
  {
    id: 27,
    title: "How vaccines train the immune system",
    topic: "Immunologie",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "The immune system has two arms. The innate response is fast, general, and the same every time. The adaptive response is slow the first time, highly specific, and it remembers. A vaccine exists to give the adaptive arm that first encounter without the disease. What is presented varies: a weakened virus, an inactivated one, a single protein, or a set of instructions for making that protein. The outcome sought is the same, a population of memory cells that recognise the pathogen years later. Two things follow. First, protection is not instant; it takes roughly two weeks to develop, which is why vaccinating during an outbreak helps less than vaccinating before one. Second, a vaccine that reduces severe disease but not transmission is still doing most of the work we care about clinically, even if it disappoints epidemiologically.",
    questions: [
      {
        q: "What distinguishes the adaptive response?",
        options: [
          "It is fast and general",
          "It is specific and it remembers",
          "It works only against bacteria",
          "It is present only after infection",
        ],
        answer: 1,
        explanation: "Lente au premier contact, tres specifique, et dotee de memoire.",
      },
      {
        q: "Why is vaccinating during an outbreak less useful?",
        options: [
          "Vaccines are in short supply",
          "Protection takes about two weeks to develop",
          "The virus mutates too fast",
          "People are already immune",
        ],
        answer: 1,
        explanation: "Il faut environ deux semaines pour developper la protection.",
      },
      {
        q: "What does the speaker say about a vaccine that does not stop transmission?",
        options: [
          "It should not be used",
          "It still achieves most of what matters clinically",
          "It is useful only for children",
          "It gives no lasting memory",
        ],
        answer: 1,
        explanation:
          "Decevant sur le plan epidemiologique, mais l'essentiel clinique est atteint.",
      },
    ],
  },
  {
    id: 28,
    title: "Reading a landscape",
    topic: "Geographie",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "When you stand in a valley, you are reading a record of erosion, and the shape tells you the agent. A V-shaped profile with a narrow floor is the work of a river cutting downwards. A U-shaped profile with steep walls and a broad flat floor is glacial: ice occupies the whole cross-section and erodes sideways as well as down. Now, complications. Many valleys are V-shaped near the coast and U-shaped inland, which records a glacier that reached only so far. Others show a V cut into the floor of a U, meaning a river has been working on the valley since the ice retreated. That last case is important because it gives you a sequence, and sequence is the closest thing geomorphology has to a date.",
    questions: [
      {
        q: "What does a U-shaped valley indicate?",
        options: ["River erosion", "Glacial erosion", "Wind erosion", "Tectonic uplift"],
        answer: 1,
        explanation: "La glace occupe toute la section et erode lateralement.",
      },
      {
        q: "What does a V cut into the floor of a U show?",
        options: [
          "That a river worked after the ice retreated",
          "That the valley was never glaciated",
          "That the glacier is still present",
          "That the rock is unusually hard",
        ],
        answer: 0,
        explanation: "La riviere a repris le travail apres le retrait glaciaire.",
      },
      {
        q: "Why does the speaker value that case?",
        options: [
          "It is visually striking",
          "It gives a sequence of events",
          "It is rare",
          "It allows radiocarbon dating",
        ],
        answer: 1,
        explanation:
          "La sequence est ce qui se rapproche le plus d'une datation en geomorphologie.",
      },
    ],
  },
  {
    id: 29,
    title: "Memory and the eyewitness",
    topic: "Psychologie legale",
    taskLabel: T,
    type: "audio",
    level: "C1",
    script:
      "We tend to treat memory as a recording, and juries treat confidence as a proxy for accuracy. Both assumptions are wrong in ways that matter. Retrieval is reconstruction: each time a witness recalls an event, the memory is rebuilt from fragments and is vulnerable to anything encountered since, including the phrasing of a question. Ask whether the cars hit or smashed and you change the reported speed, and later the reported presence of broken glass that was never there. Confidence, meanwhile, is not fixed. At the first identification, before any feedback, confidence does correlate with accuracy reasonably well. The correlation collapses afterwards, because a witness told that they picked the suspect becomes more certain without becoming more correct. This is why the first statement, recorded immediately and without comment, carries evidential weight that later testimony cannot recover.",
    questions: [
      {
        q: "What does the speaker mean by retrieval as reconstruction?",
        options: [
          "Memories are replayed exactly as recorded",
          "Memories are rebuilt and can be altered by later input",
          "Memories fade at a constant rate",
          "Memories are stored in one location",
        ],
        answer: 1,
        explanation:
          "Reconstruite a partir de fragments, sensible a ce qui est survenu depuis.",
      },
      {
        q: "What does the hit or smashed example illustrate?",
        options: [
          "That question wording changes what is reported",
          "That witnesses lie under pressure",
          "That speed is hard to estimate",
          "That glass is often present in collisions",
        ],
        answer: 0,
        explanation:
          "La formulation modifie la vitesse rapportee et fait apparaitre du verre inexistant.",
      },
      {
        q: "Why is the first statement especially valuable?",
        options: [
          "It is usually more detailed",
          "It is made before feedback inflates confidence",
          "It is given under oath",
          "It is easier to record",
        ],
        answer: 1,
        explanation:
          "Apres un retour, la confiance augmente sans que l'exactitude suive.",
      },
    ],
  },
  {
    id: 30,
    title: "What architects mean by circulation",
    topic: "Architecture",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Circulation is the term for how people move through a building, and it is where most design decisions are actually made. Consider a hospital. Patients, staff, visitors, supplies and waste all need routes, and the design problem is that some of these must never meet. A clean instrument and a bag of clinical waste cannot share a corridor at the same moment, so either you build two corridors, which is expensive, or you separate them in time, which is a management problem rather than an architectural one. Most hospitals do both, imperfectly. Notice that circulation also determines how much of the floor area earns nothing. Corridors are unbillable space, yet cutting them produces the bottleneck you see in older buildings where a trolley cannot pass a wheelchair.",
    questions: [
      {
        q: "Why is circulation central to hospital design?",
        options: [
          "It decides the height of each floor",
          "Some flows must never meet",
          "It sets the number of beds",
          "It determines the facade",
        ],
        answer: 1,
        explanation:
          "Instruments propres et dechets ne peuvent partager le meme couloir au meme moment.",
      },
      {
        q: "What is the alternative to building two corridors?",
        options: [
          "Separating the flows in time",
          "Widening a single corridor",
          "Using lifts for waste only",
          "Moving supplies at night only",
        ],
        answer: 0,
        explanation:
          "Separation temporelle, qui releve de l'organisation plus que de l'architecture.",
      },
      {
        q: "What problem arises from cutting corridor space?",
        options: [
          "Higher heating costs",
          "Bottlenecks where trolleys cannot pass",
          "Loss of natural light",
          "Longer walking distances",
        ],
        answer: 1,
        explanation:
          "Un chariot ne peut plus croiser un fauteuil roulant.",
      },
    ],
  },
  {
    id: 31,
    title: "Salt, preservation and trade",
    topic: "Histoire",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Before refrigeration, salt was not a seasoning, it was infrastructure. Salting draws water out of tissue, and bacteria cannot grow without it, so salt converted a seasonal surplus into food that could be stored and, crucially, moved. Every long-distance fishing industry in Europe depended on it. Follow the consequences. Communities near a salt source acquired an income that had nothing to do with their soil. States taxed salt because demand barely falls when the price rises, which is exactly what makes a tax lucrative and exactly what makes it resented. The French gabelle and the salt march in colonial India are separated by centuries and continents, but they are the same economic fact producing the same political reaction: a necessity, a monopoly, and a population with no way to opt out.",
    questions: [
      {
        q: "How does salt preserve food?",
        options: [
          "It kills bacteria directly with heat",
          "It removes the water bacteria need",
          "It seals the surface against air",
          "It lowers the freezing point",
        ],
        answer: 1,
        explanation: "Le sel extrait l'eau des tissus, sans laquelle les bacteries ne croissent pas.",
      },
      {
        q: "Why was salt attractive to tax?",
        options: [
          "It was produced in few places",
          "Demand changes little when the price rises",
          "It was easy to transport",
          "It was used mainly by the wealthy",
        ],
        answer: 1,
        explanation: "Demande peu elastique, donc taxe lucrative.",
      },
      {
        q: "What link does the speaker draw between the gabelle and the salt march?",
        options: [
          "They occurred in the same century",
          "They involved the same colonial power",
          "They show one economic pattern producing one political reaction",
          "They both failed to change policy",
        ],
        answer: 2,
        explanation:
          "Necessite, monopole, population sans echappatoire.",
      },
    ],
  },
  {
    id: 32,
    title: "Why sample size is not everything",
    topic: "Statistiques",
    taskLabel: T,
    type: "audio",
    level: "C1",
    script:
      "There is a persistent belief that a bigger sample is always a better sample. It is not. A large sample reduces random error, the noise that makes an estimate wobble. It does nothing at all about systematic error, the bias that makes an estimate wrong in a consistent direction. The famous case is the 1936 American election poll that surveyed over two million people and got the result badly wrong, because the list of names came from telephone directories and car registrations during a depression. The sample was enormous and it was not the population. And there is a trap: a large biased sample produces a narrow confidence interval around the wrong number, so it looks more trustworthy than a small honest one. Precision and accuracy are different properties, and only one of them improves with size.",
    questions: [
      {
        q: "What does a larger sample reduce?",
        options: ["Bias", "Random error", "Cost", "Both bias and random error"],
        answer: 1,
        explanation: "Elle reduit l'erreur aleatoire, pas l'erreur systematique.",
      },
      {
        q: "What went wrong with the 1936 poll?",
        options: [
          "Too few people responded",
          "The sampling frame excluded much of the population",
          "The questions were ambiguous",
          "The results were miscounted",
        ],
        answer: 1,
        explanation:
          "Annuaires telephoniques et cartes grises pendant une depression.",
      },
      {
        q: "Why is a large biased sample particularly dangerous?",
        options: [
          "It costs more to collect",
          "It gives a narrow interval around the wrong value",
          "It cannot be analysed statistically",
          "It takes longer to process",
        ],
        answer: 1,
        explanation: "Elle parait plus fiable qu'un petit echantillon honnete.",
      },
    ],
  },
  {
    id: 33,
    title: "Colour in animal signalling",
    topic: "Biologie",
    taskLabel: T,
    type: "audio",
    level: "B2",
    script:
      "Colour in animals comes from two sources, and the difference matters for what a colour can honestly signal. Pigments are chemicals, often obtained from the diet, so a bright red bill may be a direct advertisement of foraging success and of the ability to spare carotenoids that could otherwise support the immune system. That cost is what makes the signal hard to fake. Structural colour is different. It comes from microscopic layers that interfere with light, which is why a jay's blue feather has no blue pigment in it at all and turns brown if you grind it. Structural colours are cheap to maintain, so they tend to signal species identity rather than individual quality. When you see an iridescent patch, ask which kind it is before deciding what it advertises.",
    questions: [
      {
        q: "Why can a pigment colour signal quality honestly?",
        options: [
          "It cannot be seen by predators",
          "It uses resources the immune system could have used",
          "It changes with the seasons",
          "It is visible only in bright light",
        ],
        answer: 1,
        explanation:
          "Le cout, ici en carotenoides, rend le signal difficile a falsifier.",
      },
      {
        q: "What happens to a ground-up jay feather?",
        options: [
          "It stays blue",
          "It turns brown",
          "It becomes iridescent",
          "It loses its structure but keeps the pigment",
        ],
        answer: 1,
        explanation:
          "La couleur venait de la structure, pas d'un pigment bleu.",
      },
      {
        q: "What do structural colours tend to signal?",
        options: [
          "Individual health",
          "Species identity",
          "Age",
          "Recent diet",
        ],
        answer: 1,
        explanation:
          "Peu couteuses a maintenir, elles signalent l'appartenance a l'espece.",
      },
    ],
  },
];
