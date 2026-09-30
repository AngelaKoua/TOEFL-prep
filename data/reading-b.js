/* Reading, tests 9 a 16 : Read an Academic Passage */

const A = "Read an Academic Passage";

export const readingB = [
  {
    id: 9,
    title: "The waggle dance",
    topic: "Ethologie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "A honeybee that has found a rich source of nectar returns to the hive and performs a figure-of-eight movement on the vertical comb. The straight portion of the run encodes two quantities at once. Its angle relative to vertical gives the direction of the food relative to the sun, and its duration gives the distance, at roughly one second per kilometre.\n\nThe system has a built-in correction. A bee that dances for several hours slowly rotates the angle of its run to compensate for the movement of the sun across the sky, so that recruits leaving later still fly in the correct direction. Experiments using artificial feeders confirmed that recruits arrive where the dance indicates rather than simply following the scent of the dancer, though scent does play a secondary role in the final approach.",
    questions: [
      {
        q: "What two pieces of information does the straight run encode?",
        options: [
          "Direction and distance",
          "Quantity and quality of nectar",
          "Distance and wind speed",
          "Direction and the number of foragers needed",
        ],
        answer: 0,
        explanation: "L'angle donne la direction, la duree donne la distance.",
      },
      {
        q: "Why does a bee gradually change the angle of its dance?",
        options: [
          "Because the comb shifts during the day",
          "To compensate for the sun's movement",
          "To indicate that the source is becoming poorer",
          "To attract a larger number of recruits",
        ],
        answer: 1,
        explanation:
          "La rotation compense le deplacement du soleil, pour que les recrues partant plus tard volent juste.",
      },
      {
        q: "What did the artificial feeder experiments show?",
        options: [
          "Recruits ignore the dance in windy conditions",
          "Scent is the only cue recruits use",
          "Recruits fly to the location the dance indicates",
          "Dances are performed only at dawn",
        ],
        answer: 2,
        explanation:
          "Les recrues arrivent la ou la danse indique, et non en suivant simplement l'odeur.",
      },
    ],
    vocabulary: [
      "a hive : une ruche",
      "a comb : un rayon de cire",
      "a recruit : une abeille recrutee par la danse",
    ],
  },
  {
    id: 10,
    title: "Why desalination is still expensive",
    topic: "Ingenierie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "Removing salt from seawater is no longer technically difficult. Reverse osmosis forces water through a membrane whose pores admit water molecules but block dissolved ions, and modern plants recover much of the pressure energy from the rejected stream. The cost per cubic metre has fallen sharply since the 1990s.\n\nTwo problems remain stubborn. The first is energy: thermodynamics sets a floor below which no process can go, and the best plants already operate close to twice that theoretical minimum, so further gains will be modest. The second is brine. Every litre of fresh water produced leaves behind a concentrated salt solution that is denser than seawater and sinks when discharged, forming a layer that can smother bottom-dwelling organisms near the outflow. Diluting brine before release solves the ecological problem but adds pumping costs, which is why siting a plant near a strong current is often worth more than any improvement in membrane design.",
    questions: [
      {
        q: "How does reverse osmosis separate salt from water?",
        options: [
          "By boiling the water and condensing the vapour",
          "By freezing the solution in stages",
          "By forcing water through a membrane that blocks ions",
          "By adding chemicals that bind to the salt",
        ],
        answer: 2,
        explanation:
          "La membrane laisse passer l'eau et bloque les ions dissous.",
      },
      {
        q: "Why are further energy savings expected to be modest?",
        options: [
          "Membranes wear out too quickly",
          "Plants already run near twice the thermodynamic minimum",
          "Electricity prices are rising faster than efficiency",
          "Pumping brine consumes most of the energy",
        ],
        answer: 1,
        explanation:
          "La thermodynamique impose un plancher et les meilleures usines en sont deja proches.",
      },
      {
        q: "Why does brine damage the seabed?",
        options: [
          "It is denser than seawater and settles at the bottom",
          "It contains residues from the membranes",
          "It raises the temperature of the water",
          "It removes oxygen from the surface layer",
        ],
        answer: 0,
        explanation:
          "Plus dense que l'eau de mer, la saumure coule et forme une couche qui etouffe la faune benthique.",
      },
    ],
    vocabulary: [
      "brine : la saumure",
      "to smother : etouffer",
      "an outflow : un rejet, une sortie d'eau",
    ],
  },
  {
    id: 11,
    title: "Dating cave art",
    topic: "Prehistoire",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "Radiocarbon dating transformed the study of cave painting, but it can only date organic material, which means charcoal pigment. Ochre, the red mineral used for many of the oldest images, contains no carbon at all, so a whole category of art remained undatable for decades.\n\nUranium-thorium dating changed that. Water seeping over a painted wall slowly deposits a thin crust of calcite, and that crust contains uranium which decays at a known rate. Dating the crust gives a minimum age for whatever lies beneath it. Applied to Spanish caves, the method produced ages older than any accepted date for the arrival of modern humans in the region, raising the possibility that Neanderthals made some of the marks. The claim remains disputed. Critics argue that calcite can be contaminated by older carbonate dissolved in the seeping water, which would push the calculated age too far back, and that a handful of samples cannot yet support so large a reinterpretation.",
    questions: [
      {
        q: "Why could radiocarbon not date ochre paintings?",
        options: [
          "Ochre fades too quickly to be sampled",
          "Ochre contains no carbon",
          "Ochre was applied over older charcoal",
          "Ochre reacts with calcite crusts",
        ],
        answer: 1,
        explanation: "L'ocre est un mineral sans carbone.",
      },
      {
        q: "What does dating the calcite crust provide?",
        options: [
          "An exact age for the painting",
          "A maximum age for the painting",
          "A minimum age for what lies beneath it",
          "The age of the pigment itself",
        ],
        answer: 2,
        explanation:
          "La croute s'est formee apres la peinture, donc elle donne un age minimal.",
      },
      {
        q: "Which objection do critics raise?",
        options: [
          "Older dissolved carbonate may make the crust seem too old",
          "Uranium decays too slowly to be measured",
          "Neanderthals are known never to have entered caves",
          "The Spanish caves were painted in the modern era",
        ],
        answer: 0,
        explanation:
          "La contamination par du carbonate ancien fausserait l'age vers le passe.",
      },
    ],
    vocabulary: [
      "ochre : l'ocre",
      "to seep : suinter, s'infiltrer",
      "disputed : conteste",
    ],
  },
  {
    id: 12,
    title: "The limits of a solar cell",
    topic: "Physique appliquee",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "A single-junction silicon cell cannot convert more than about thirty-three per cent of incoming sunlight into electricity. The limit follows from a simple mismatch. Photons with less energy than the band gap pass through without being absorbed, while photons with more energy than the band gap lose the excess as heat almost immediately. Only a narrow band of the spectrum is converted efficiently.\n\nTwo strategies attack the limit rather than accept it. Tandem cells stack materials with different band gaps so that each layer harvests the part of the spectrum it handles best; a perovskite layer on top of silicon has already exceeded the single-junction ceiling in the laboratory. Concentrator systems use mirrors to focus light on a small high-quality cell, which raises efficiency but requires tracking the sun and cooling the cell. Both approaches add cost and complexity, and the industry has repeatedly found that a cheaper panel at lower efficiency beats an expensive panel at higher efficiency wherever land is not scarce.",
    questions: [
      {
        q: "What happens to photons with more energy than the band gap?",
        options: [
          "They pass through the cell unabsorbed",
          "They lose the excess energy as heat",
          "They are reflected back into the atmosphere",
          "They generate two electrons each",
        ],
        answer: 1,
        explanation: "L'exces est perdu sous forme de chaleur.",
      },
      {
        q: "How do tandem cells raise efficiency?",
        options: [
          "By cooling the silicon layer",
          "By concentrating light with mirrors",
          "By stacking layers with different band gaps",
          "By increasing the thickness of the silicon",
        ],
        answer: 2,
        explanation:
          "Chaque couche exploite la partie du spectre qu'elle traite le mieux.",
      },
      {
        q: "What does the final sentence suggest about industry choices?",
        options: [
          "Efficiency always matters more than price",
          "Cheap low-efficiency panels usually win when land is available",
          "Concentrator systems have replaced flat panels",
          "Perovskite panels are already the market standard",
        ],
        answer: 1,
        explanation:
          "Le panneau moins cher l'emporte partout ou la surface n'est pas rare.",
      },
    ],
    vocabulary: [
      "a band gap : une bande interdite",
      "to harvest : recolter, capter",
      "scarce : rare, en quantite limitee",
    ],
  },
  {
    id: 13,
    title: "Languages at the edge",
    topic: "Linguistique",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "A language is usually described as endangered when children stop learning it at home. Official statistics count speakers, but the number that predicts survival is the age of the youngest fluent speaker. A community of ten thousand adults with no child speakers is closer to loss than a community of three hundred in which toddlers are learning.\n\nRevitalisation programmes have had uneven results. Immersion schooling, where the whole day is conducted in the target language, has produced new generations of speakers in Hawaii and New Zealand. Programmes that teach the language as a subject for a few hours a week almost never produce fluency, though they may sustain literacy and pride. The difference is exposure: fluency requires thousands of hours, and no timetable that treats the language as one subject among many can supply them.",
    questions: [
      {
        q: "Which measure best predicts whether a language will survive?",
        options: [
          "The total number of speakers",
          "The age of the youngest fluent speaker",
          "The number of published books",
          "Whether the language has official status",
        ],
        answer: 1,
        explanation:
          "Le texte oppose explicitement le comptage brut a l'age du plus jeune locuteur.",
      },
      {
        q: "Why do weekly lessons rarely produce fluent speakers?",
        options: [
          "Teachers are not native speakers",
          "The materials are usually outdated",
          "The hours of exposure are far too few",
          "Students prefer the dominant language",
        ],
        answer: 2,
        explanation:
          "La fluidite demande des milliers d'heures, impossible en quelques heures par semaine.",
      },
      {
        q: "What does the author concede about weekly programmes?",
        options: [
          "They may maintain literacy and pride",
          "They are cheaper than immersion",
          "They work well for adult learners",
          "They are the only option in cities",
        ],
        answer: 0,
        explanation:
          "Though they may sustain literacy and pride : c'est la concession.",
      },
    ],
    vocabulary: [
      "fluent : qui parle couramment",
      "immersion : l'immersion",
      "uneven : inegal",
    ],
  },
  {
    id: 14,
    title: "Carbon locked in frozen ground",
    topic: "Sciences de la terre",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "Permafrost is ground that has stayed below freezing for at least two consecutive years. Across the northern hemisphere it holds an estimated one and a half trillion tonnes of organic carbon, roughly twice the amount currently in the atmosphere, most of it plant material that froze before it could decompose.\n\nWarming releases this store, but the pathway matters more than the total. Where thawed ground stays dry and oxygenated, microbes produce carbon dioxide. Where it collapses into waterlogged hollows, decomposition proceeds without oxygen and produces methane, a gas with far greater warming effect over twenty years. Models that assume gradual, uniform thaw therefore understate the near-term impact, because abrupt thaw affects a small fraction of the area but a disproportionate share of the emissions. Field measurement remains difficult: the regions are vast, instruments must survive winter, and a single collapsing hillside can dominate a season's readings.",
    questions: [
      {
        q: "How much carbon does permafrost hold, according to the passage?",
        options: [
          "The same amount as the atmosphere",
          "About twice the amount in the atmosphere",
          "Half the amount in the atmosphere",
          "Ten times the amount in the atmosphere",
        ],
        answer: 1,
        explanation: "Environ deux fois la quantite presente dans l'atmosphere.",
      },
      {
        q: "Why does waterlogged thaw matter more in the short term?",
        options: [
          "It releases methane rather than carbon dioxide",
          "It affects a larger surface area",
          "It destroys measuring instruments",
          "It prevents plants from regrowing",
        ],
        answer: 0,
        explanation:
          "Sans oxygene, la decomposition produit du methane, bien plus rechauffant sur vingt ans.",
      },
      {
        q: "What is the weakness of models assuming uniform thaw?",
        options: [
          "They overestimate the total carbon stored",
          "They understate near-term emissions from abrupt thaw",
          "They ignore the effect of snow cover",
          "They rely on satellite data only",
        ],
        answer: 1,
        explanation:
          "Le degel abrupt touche peu de surface mais pese lourd dans les emissions.",
      },
    ],
    vocabulary: [
      "to thaw : degeler",
      "waterlogged : gorge d'eau",
      "abrupt : brusque, soudain",
    ],
  },
  {
    id: 15,
    title: "Roman water engineering",
    topic: "Histoire des techniques",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "Roman aqueducts are remembered for their arches, but the arcades represent a small fraction of the total length. Most of an aqueduct ran underground, where the channel was cheaper to build, protected from frost and from an enemy, and easier to keep clean. Arches appeared only where a valley had to be crossed at a constant gradient.\n\nThat gradient is the real achievement. The Aqua Marcia fell about one metre every four hundred, a slope surveyors maintained over ninety kilometres using a water level and a sighting frame. Too steep and the flow would erode the lining; too shallow and sediment would settle and block the channel. Maintenance was continuous: gangs removed the calcium deposit that built up on the walls, and the thickness of that deposit now allows archaeologists to estimate how many years a given section stayed in service.",
    questions: [
      {
        q: "Why did most of an aqueduct run underground?",
        options: [
          "Because arches were not yet a known technique",
          "It was cheaper, safer and easier to maintain",
          "To avoid disturbing farmland",
          "Because the water needed to stay cold",
        ],
        answer: 1,
        explanation:
          "Moins cher, protege du gel et de l'ennemi, plus facile a nettoyer.",
      },
      {
        q: "What problem arose if the gradient was too shallow?",
        options: [
          "Sediment settled and blocked the channel",
          "The lining eroded",
          "The water froze in winter",
          "The arches became unstable",
        ],
        answer: 0,
        explanation:
          "Trop faible, le sediment se depose et bouche le conduit.",
      },
      {
        q: "How does calcium deposit help archaeologists today?",
        options: [
          "It preserves inscriptions on the walls",
          "It indicates the source of the water",
          "Its thickness suggests how long a section was used",
          "It shows where repairs were made",
        ],
        answer: 2,
        explanation:
          "L'epaisseur du depot permet d'estimer la duree de service.",
      },
    ],
    vocabulary: [
      "a gradient : une pente",
      "to erode : eroder",
      "a lining : un revetement interieur",
    ],
  },
  {
    id: 16,
    title: "Reading the placebo response",
    topic: "Recherche clinique",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "A placebo response is often described as improvement caused by belief. The description is too generous. Part of what a trial records as a placebo effect is simply regression to the mean: patients enrol when symptoms are at their worst, and symptoms that fluctuate tend to improve afterwards whatever is done. Another part is reporting bias, since a patient who wants to please a kind researcher may describe a milder week than they had.\n\nWhat remains after these are subtracted is nonetheless real. Open-label studies, in which patients are told outright that the pill contains no active ingredient, still find measurable relief in conditions such as irritable bowel syndrome and chronic back pain. The effect is largest for symptoms reported by the patient and close to absent for outcomes measured by an instrument: a placebo can reduce the experience of pain, but it does not shrink a tumour.",
    questions: [
      {
        q: "What is regression to the mean, as used here?",
        options: [
          "The tendency of researchers to round their results",
          "The natural improvement of fluctuating symptoms after a peak",
          "The averaging of results across several trials",
          "The gradual loss of the placebo effect over time",
        ],
        answer: 1,
        explanation:
          "Les patients s'inscrivent au pire moment, et les symptomes fluctuants s'ameliorent ensuite.",
      },
      {
        q: "Why are open-label studies significant?",
        options: [
          "They show relief even when patients know the pill is inert",
          "They remove the need for a control group",
          "They are cheaper than blinded trials",
          "They measure tumour size directly",
        ],
        answer: 0,
        explanation:
          "Meme informe, le patient rapporte un soulagement mesurable.",
      },
      {
        q: "Which conclusion does the passage support?",
        options: [
          "Placebos work equally well on all medical outcomes",
          "Placebos affect reported symptoms far more than measured ones",
          "Placebo effects are entirely explained by reporting bias",
          "Placebos should replace treatment for chronic pain",
        ],
        answer: 1,
        explanation:
          "Fort sur les symptomes rapportes, quasi nul sur les mesures instrumentales.",
      },
    ],
    vocabulary: [
      "outright : franchement, sans detour",
      "relief : le soulagement",
      "to shrink : reduire, faire diminuer",
    ],
  },
];
