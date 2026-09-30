/* Reading, tests 1 a 8 : Read an Academic Passage */

const A = "Read an Academic Passage";

export const readingA = [
  {
    id: 1,
    title: "Light in the deep sea",
    topic: "Biologie marine",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 6,
    passage:
      "Below two hundred metres, sunlight becomes too weak to support photosynthesis, yet the deep ocean is far from dark. Roughly three quarters of the animals living there produce their own light through bioluminescence, a chemical reaction in which a molecule called luciferin is oxidised by an enzyme. The reaction is remarkably efficient: almost all of the released energy becomes light rather than heat, which matters in an environment where every calorie is expensive to obtain.\n\nThe uses of this light are varied. Anglerfish dangle a glowing lure in front of their jaws to attract prey. Some squid release a cloud of luminous mucus that confuses a predator long enough for escape. Perhaps the most counterintuitive strategy is counterillumination, in which an animal lights its own underside to match the faint glow filtering down from the surface, erasing the silhouette that a hunter below would otherwise detect. Because blue light travels furthest in seawater, the overwhelming majority of deep-sea emissions fall in the blue-green range, and most deep-sea eyes have lost the ability to see anything else.",
    questions: [
      {
        q: "What is the main purpose of the passage?",
        options: [
          "To explain how bioluminescence works and what it is used for",
          "To argue that the deep sea is more populated than the surface",
          "To compare the vision of deep-sea fish with that of land animals",
          "To describe how scientists collect deep-sea specimens",
        ],
        answer: 0,
        explanation:
          "Le premier paragraphe explique le mecanisme chimique, le second decrit les usages. L'ensemble repond a la question comment et pourquoi.",
      },
      {
        q: "According to the passage, why is the efficiency of the reaction significant?",
        options: [
          "It allows animals to grow larger than surface species",
          "It means little energy is wasted as heat where food is scarce",
          "It makes the light visible over very long distances",
          "It protects the animal from the cold of deep water",
        ],
        answer: 1,
        explanation:
          "Le texte precise que presque toute l'energie devient lumiere plutot que chaleur, ce qui compte la ou chaque calorie coute cher.",
      },
      {
        q: "The word 'counterintuitive' in the second paragraph is closest in meaning to",
        options: [
          "recently discovered",
          "difficult to reproduce",
          "contrary to what one would expect",
          "used by very few species",
        ],
        answer: 2,
        explanation:
          "Counter signifie contre et intuitive renvoie a l'intuition : ce qui va a l'encontre de l'attente.",
      },
      {
        q: "What can be inferred about a deep-sea predator hunting from below?",
        options: [
          "It relies mainly on detecting shapes against dimmer light from above",
          "It hunts only animals that emit red light",
          "It must surface regularly to recalibrate its vision",
          "It is unable to detect prey that moves slowly",
        ],
        answer: 0,
        explanation:
          "Si la contre-illumination efface la silhouette, c'est que le predateur du dessous reperait justement cette silhouette sur le fond lumineux.",
      },
    ],
    vocabulary: [
      "a lure : un leurre, quelque chose qui attire la proie",
      "to dangle : laisser pendre, balancer",
      "faint : faible, a peine perceptible",
    ],
  },
  {
    id: 2,
    title: "The horse and the steppe",
    topic: "Archeologie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 6,
    passage:
      "For decades, archaeologists dated the domestication of the horse by looking for bones that seemed smaller or more slender than those of wild animals. The method proved unreliable, since body size varies with climate and diet as much as with human management. Two later lines of evidence turned out to be far more convincing. The first was bit wear: horses that carry a metal or bone bit develop a characteristic bevel on their lower premolars, a mark that no natural process produces. The second was chemical residue, since traces of mare's milk survive in the porous walls of ancient pottery long after the vessel itself has been buried.\n\nTogether these clues point to the grasslands north of the Black Sea around 3500 BCE. What followed reshaped the continent. A rider could cover in a single day a distance that took a walking herder a week, which allowed small populations to manage far larger herds and to move goods, languages and diseases across distances that had previously acted as barriers. Some linguists argue that the rapid spread of Indo-European languages is difficult to explain without this change in mobility.",
    questions: [
      {
        q: "Why was bone size considered an unreliable indicator?",
        options: [
          "Ancient bones are rarely preserved on the steppe",
          "Size is influenced by climate and food as well as by human control",
          "Wild and domestic horses were rarely found at the same sites",
          "Measurement techniques were not precise enough at the time",
        ],
        answer: 1,
        explanation:
          "Le texte dit explicitement que la taille varie avec le climat et l'alimentation autant qu'avec la gestion humaine.",
      },
      {
        q: "What makes bit wear a strong piece of evidence?",
        options: [
          "It appears on every tooth of the animal",
          "It can be dated more precisely than pottery",
          "No natural process creates the same mark",
          "It is visible without laboratory equipment",
        ],
        answer: 2,
        explanation:
          "La phrase cle : a mark that no natural process produces.",
      },
      {
        q: "The author mentions Indo-European languages in order to",
        options: [
          "show one large consequence attributed to increased mobility",
          "question the dating of the first domestication",
          "compare horse riding with the use of wheeled carts",
          "explain why pottery was traded so widely",
        ],
        answer: 0,
        explanation:
          "C'est un exemple de portee du changement, introduit apres what followed reshaped the continent.",
      },
      {
        q: "Which of the following is NOT mentioned as a result of horse riding?",
        options: [
          "Larger herds could be managed",
          "Diseases travelled further",
          "Goods moved across former barriers",
          "Settlements became permanently fortified",
        ],
        answer: 3,
        explanation:
          "Les fortifications ne sont jamais evoquees. Les trois autres apparaissent dans le second paragraphe.",
      },
    ],
    vocabulary: [
      "a bit : le mors, la piece placee dans la bouche du cheval",
      "a herder : un eleveur qui conduit un troupeau",
      "residue : residu, trace",
    ],
  },
  {
    id: 3,
    title: "Cities that hold the heat",
    topic: "Climat urbain",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 6,
    passage:
      "A city is often several degrees warmer than the countryside that surrounds it, a difference known as the urban heat island. The effect has three main causes. Dark surfaces such as asphalt absorb a large share of the solar radiation that falls on them. Concrete and brick store that heat during the day and release it slowly at night, so the usual overnight cooling never fully arrives. Finally, the removal of vegetation removes evaporation, the process by which plants convert heat into water vapour rather than into a rise in temperature.\n\nThe consequences are unevenly distributed. Neighbourhoods with fewer trees, which are frequently the poorer ones, can be five to seven degrees hotter than leafy districts in the same city during a heatwave. Measures exist and are cheap by the standards of urban engineering. Painting roofs white reflects incoming radiation, and planting street trees provides both shade and evaporation. Yet trees need years to reach a useful size and require water during exactly the dry periods when they are most needed, which is why some municipalities now treat irrigation of the urban canopy as a public health expense rather than a gardening budget.",
    questions: [
      {
        q: "According to the passage, why do cities cool down poorly at night?",
        options: [
          "Traffic continues to release heat after dark",
          "Building materials release stored heat slowly",
          "Wind speeds are lower between buildings",
          "Street lighting raises the local temperature",
        ],
        answer: 1,
        explanation:
          "Le beton et la brique stockent la chaleur le jour et la relachent lentement la nuit.",
      },
      {
        q: "The role of vegetation described in the passage is mainly to",
        options: [
          "absorb carbon dioxide produced by traffic",
          "reflect radiation away from the ground",
          "turn heat into water vapour instead of higher temperature",
          "block wind from reaching the street",
        ],
        answer: 2,
        explanation:
          "L'evaporation convertit la chaleur en vapeur d'eau plutot qu'en hausse de temperature.",
      },
      {
        q: "What point is made about the distribution of the effect?",
        options: [
          "It affects the city centre more than any other area",
          "It is strongest in districts with the fewest trees",
          "It disappears entirely outside heatwaves",
          "It is the same in every neighbourhood of a given city",
        ],
        answer: 1,
        explanation:
          "Les quartiers avec peu d'arbres, souvent les plus pauvres, sont cinq a sept degres plus chauds.",
      },
      {
        q: "Why does the author describe irrigation as a public health expense?",
        options: [
          "Because watering trees is more expensive than planting them",
          "Because trees need water precisely when heat is most dangerous",
          "Because hospitals are usually located near parks",
          "Because gardening budgets are always the first to be cut",
        ],
        answer: 1,
        explanation:
          "Les arbres ont besoin d'eau pendant les periodes seches, c'est a dire au moment ou la chaleur menace la sante.",
      },
    ],
    vocabulary: [
      "asphalt : le bitume",
      "a canopy : la canopee, l'ensemble des houppiers",
      "unevenly : de facon inegale",
    ],
  },
  {
    id: 4,
    title: "Sleep and the filing of memory",
    topic: "Neurosciences",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 6,
    passage:
      "Learning does not end when study ends. During slow-wave sleep, the hippocampus replays the neural sequences recorded during the day at a compressed speed, sometimes twenty times faster than the original experience. This replay appears to transfer information to the cortex, where it can be stored durably and integrated with what is already known. Researchers describe the process as consolidation, and it explains a familiar observation: a skill practised in the evening is often performed better the next morning without any additional practice.\n\nThe effect is measurable. In one widely cited design, participants learn pairs of words and are then divided into two groups. Those who sleep before recall retain substantially more pairs than those who stay awake for the same number of hours, even when the two groups are tested at the same time of day. Later work showed that a smell or a sound presented during learning and then played again during sleep can bias which memories are strengthened. The finding is striking, but its practical value remains limited, since the technique works only for material that has already been studied attentively while awake.",
    questions: [
      {
        q: "What is consolidation, as described in the passage?",
        options: [
          "The repetition of a skill until it becomes automatic",
          "The transfer of information from the hippocampus to the cortex",
          "The removal of memories that are no longer useful",
          "The slowing of brain activity during deep sleep",
        ],
        answer: 1,
        explanation:
          "Le texte definit la consolidation comme le transfert vers le cortex pour un stockage durable.",
      },
      {
        q: "Why are both groups tested at the same time of day?",
        options: [
          "To make the experiment cheaper to run",
          "To rule out the effect of the hour of testing on performance",
          "Because memory is strongest in the morning",
          "To allow the participants to sleep the same number of hours",
        ],
        answer: 1,
        explanation:
          "C'est un controle experimental : on elimine l'heure de test comme explication alternative.",
      },
      {
        q: "The word 'striking' is closest in meaning to",
        options: ["remarkable", "controversial", "expensive", "recent"],
        answer: 0,
        explanation: "Striking signifie frappant, remarquable.",
      },
      {
        q: "What limits the practical value of the cueing technique?",
        options: [
          "It only works with sounds, not with smells",
          "It requires equipment that laboratories rarely have",
          "It strengthens only material already studied with attention",
          "Its effects disappear within a few hours",
        ],
        answer: 2,
        explanation:
          "La derniere phrase le dit : la technique ne marche que sur du materiel deja etudie attentivement a l'etat de veille.",
      },
    ],
    vocabulary: [
      "to replay : rejouer, repasser",
      "recall : le rappel, la restitution en memoire",
      "to bias : orienter, influencer",
    ],
  },
  {
    id: 5,
    title: "The tulip market of the 1630s",
    topic: "Histoire economique",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 7,
    passage:
      "The Dutch tulip episode of 1636 and 1637 is routinely offered as the first speculative bubble, a cautionary tale in which ordinary people traded houses for flower bulbs. Recent economic history has complicated that picture considerably. The number of traders involved was small, concentrated among merchants who already dealt in luxury goods, and the spectacular prices concerned a handful of rare variegated bulbs whose patterns were in fact caused by a virus and could not be reproduced reliably.\n\nWhat made the market unusual was its structure rather than its mania. Bulbs lie in the ground for most of the year, so buyers and sellers began trading contracts for future delivery, settled in taverns and recorded on slips of paper with no legal force. When confidence broke in February 1637, most of these contracts were simply never honoured, and the Dutch courts declined to enforce them. The wider economy shows little sign of damage: there is no contraction in shipping, no wave of bankruptcies, no fall in tax receipts. The episode survives less as an economic catastrophe than as a moral story that each generation retells for its own purposes.",
    questions: [
      {
        q: "The author's main point about the tulip episode is that",
        options: [
          "it caused a long depression in the Dutch economy",
          "its popular reputation overstates its scale and consequences",
          "it was the direct result of a plant disease",
          "it was deliberately organised by luxury merchants",
        ],
        answer: 1,
        explanation:
          "L'article corrige l'image recue : peu de traders, peu de degats macroeconomiques, une histoire morale plus qu'une catastrophe.",
      },
      {
        q: "Why were the most expensive bulbs difficult to reproduce?",
        options: [
          "Their patterns came from a virus",
          "They grew only in a small region",
          "They required imported soil",
          "Their seeds were destroyed by traders",
        ],
        answer: 0,
        explanation:
          "Le texte indique que les motifs panaches etaient causes par un virus.",
      },
      {
        q: "What does the passage say about the contracts?",
        options: [
          "They were guaranteed by the city authorities",
          "They had no legal force and were mostly not honoured",
          "They were traded only by licensed brokers",
          "They were settled in gold before delivery",
        ],
        answer: 1,
        explanation:
          "Notes sur papier sans valeur juridique, non honorees, et les tribunaux ont refuse de les faire appliquer.",
      },
      {
        q: "Which evidence does the author use to argue that the wider economy was unharmed?",
        options: [
          "The stability of bulb prices after 1637",
          "The absence of any fall in shipping, bankruptcies or tax receipts",
          "The number of new companies founded in Amsterdam",
          "The continuation of tulip exports to France",
        ],
        answer: 1,
        explanation:
          "Trois indicateurs sont cites : navigation, faillites, recettes fiscales.",
      },
    ],
    vocabulary: [
      "a bubble : une bulle speculative",
      "variegated : panache, bigarre",
      "to honour a contract : honorer, executer un contrat",
    ],
  },
  {
    id: 6,
    title: "Antibiotic resistance",
    topic: "Medecine",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 6,
    passage:
      "Resistance is not something an antibiotic creates; it is something an antibiotic reveals. In any large bacterial population, a few individuals already carry mutations that allow them to survive a given drug. When the drug is applied, the susceptible majority dies and the resistant few reproduce without competition. Within days, a population that was almost entirely treatable can become almost entirely untreatable.\n\nTwo features of bacteria accelerate the process. Generation times are measured in minutes rather than years, so natural selection operates on a timescale humans can observe directly. More importantly, bacteria exchange genetic material horizontally, passing plasmids that carry resistance genes between individuals and even between species. A harmless gut bacterium can therefore hand a hospital pathogen the instructions for defeating a drug it has never encountered. This is why the largest single source of pressure is not hospital prescribing but agriculture, where low doses of antibiotics are given continuously to healthy animals. Low doses are the worst possible choice: too weak to eliminate a population, strong enough to select relentlessly within it.",
    questions: [
      {
        q: "The opening sentence makes the point that antibiotics",
        options: [
          "cause mutations in bacterial DNA",
          "expose variation that was already present",
          "work more slowly than is generally believed",
          "should be replaced by other treatments",
        ],
        answer: 1,
        explanation:
          "Reveals et non creates : les mutations preexistent, le medicament ne fait que selectionner.",
      },
      {
        q: "What is horizontal gene transfer, according to the passage?",
        options: [
          "The passing of genes from parent cell to daughter cell",
          "The exchange of genetic material between individuals and species",
          "The mutation of a gene under chemical stress",
          "The loss of genes that are no longer useful",
        ],
        answer: 1,
        explanation:
          "Le texte decrit le passage de plasmides entre individus et meme entre especes.",
      },
      {
        q: "Why does the author call low doses 'the worst possible choice'?",
        options: [
          "They cost more than a full course of treatment",
          "They kill useful bacteria as well as harmful ones",
          "They fail to eliminate the population but select within it",
          "They are difficult to administer to large herds",
        ],
        answer: 2,
        explanation:
          "Trop faibles pour eliminer, assez fortes pour selectionner en continu.",
      },
      {
        q: "Which conclusion is best supported by the passage?",
        options: [
          "Reducing agricultural use would address a major driver of resistance",
          "Hospital prescribing is no longer a concern",
          "New antibiotics will solve the problem within a decade",
          "Resistance genes rarely move between bacterial species",
        ],
        answer: 0,
        explanation:
          "L'agriculture est designee comme la principale source de pression selective.",
      },
    ],
    vocabulary: [
      "susceptible : sensible, vulnerable a",
      "relentlessly : sans relache",
      "a pathogen : un agent pathogene",
    ],
  },
  {
    id: 7,
    title: "What the mycorrhizal network does",
    topic: "Ecologie forestiere",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 7,
    passage:
      "Beneath a temperate forest lies a dense web of fungal filaments that connects the roots of many trees. The relationship is an exchange: the fungus receives sugars produced above ground, and in return delivers phosphorus, nitrogen and water drawn from a volume of soil far larger than any root system could reach alone. Isotope tracing has shown that carbon labelled in one tree can appear days later in a neighbour of a different species, which suggests that the network moves resources and not only nutrients.\n\nThe interpretation of this finding has become contentious. One popular account presents the forest as a cooperative community in which older trees deliberately support seedlings. Critics note that a fungus has no reason to act in the interest of any single tree, and that a simpler explanation fits the data: the fungus allocates carbon wherever its own growth is favoured, and a seedling in shade may happen to benefit. The disagreement matters for forestry policy, because the cooperative account has been used to argue against removing large trees during logging, a recommendation that may well be correct for reasons that have nothing to do with altruism.",
    questions: [
      {
        q: "What does the fungus receive from the trees?",
        options: ["Water", "Sugars", "Phosphorus", "Nitrogen"],
        answer: 1,
        explanation:
          "Le champignon recoit les sucres produits en surface et fournit en retour eau et mineraux.",
      },
      {
        q: "The isotope tracing result is presented as evidence that",
        options: [
          "carbon can move between trees of different species",
          "fungi grow faster in the presence of seedlings",
          "nitrogen is the limiting nutrient in temperate forests",
          "root systems extend further than previously thought",
        ],
        answer: 0,
        explanation:
          "Du carbone marque dans un arbre apparait quelques jours plus tard chez un voisin d'une autre espece.",
      },
      {
        q: "What is the critics' objection to the cooperative account?",
        options: [
          "The isotope measurements are not reproducible",
          "Seedlings in shade do not in fact survive longer",
          "A fungus has no reason to favour any particular tree",
          "The networks are too small to move useful quantities",
        ],
        answer: 2,
        explanation:
          "Les critiques rappellent que le champignon n'a aucun interet a servir un arbre en particulier.",
      },
      {
        q: "The author's attitude towards the logging recommendation is best described as",
        options: [
          "dismissive of the recommendation itself",
          "open to the recommendation but sceptical of the reasoning behind it",
          "convinced that large trees should always be removed",
          "uninterested in the policy implications",
        ],
        answer: 1,
        explanation:
          "La recommandation peut etre juste, mais pour des raisons qui n'ont rien a voir avec l'altruisme.",
      },
    ],
    vocabulary: [
      "a filament : un filament",
      "contentious : controverse, disputer",
      "to allocate : repartir, affecter",
    ],
  },
  {
    id: 8,
    title: "The Antikythera mechanism",
    topic: "Histoire des sciences",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 7,
    passage:
      "In 1901, sponge divers working off a Greek island recovered a corroded lump of bronze from a Roman-era shipwreck. For half a century it attracted little attention. X-ray imaging in the 1970s, and computed tomography three decades later, revealed something no one had expected from the ancient Mediterranean: at least thirty interlocking gears, cut by hand, arranged to model the motions of the sun, the moon and probably the five planets known at the time.\n\nThe device could predict eclipses and track the four-year cycle of the athletic games. One train of gears reproduces the irregular speed of the moon across the sky using a pin-and-slot arrangement, an elegant mechanical solution to a problem of observational astronomy. What remains puzzling is the silence that follows. No comparable object survives from the next thousand years, and no ancient text describes how such instruments were made. Historians are divided between two readings: either the mechanism is the sole survivor of a tradition whose other products were melted down for their metal, or it represents an isolated achievement that had no successors. Bronze was valuable and easily recycled, which makes the first reading difficult to test and hard to dismiss.",
    questions: [
      {
        q: "Why did the object attract little attention at first?",
        options: [
          "It was thought to be a modern forgery",
          "It was a corroded lump whose internal structure was invisible",
          "It was kept in a private collection",
          "Its inscriptions could not be translated",
        ],
        answer: 1,
        explanation:
          "Ce n'est qu'avec la radiographie puis la tomographie que la structure interne apparait.",
      },
      {
        q: "The pin-and-slot arrangement is mentioned as an example of",
        options: [
          "a technique borrowed from Babylonian astronomy",
          "a repair carried out after the shipwreck",
          "a mechanical answer to an astronomical observation",
          "the main cause of the device's failure",
        ],
        answer: 2,
        explanation:
          "Il reproduit mecaniquement la vitesse irreguliere de la lune, un probleme d'astronomie d'observation.",
      },
      {
        q: "What does the author find most puzzling?",
        options: [
          "The accuracy of the eclipse predictions",
          "The absence of any comparable object or text afterwards",
          "The presence of the device on a Roman ship",
          "The number of gears used in the mechanism",
        ],
        answer: 1,
        explanation:
          "What remains puzzling is the silence that follows : ni objet comparable, ni texte.",
      },
      {
        q: "Why is the first reading 'difficult to test and hard to dismiss'?",
        options: [
          "Because bronze was recycled, so absence of evidence proves little",
          "Because the shipwreck has never been fully excavated",
          "Because ancient historians disagreed among themselves",
          "Because tomography cannot date the metal",
        ],
        answer: 0,
        explanation:
          "Le bronze etait precieux et facilement refondu : l'absence d'autres objets ne prouve pas leur inexistence.",
      },
    ],
    vocabulary: [
      "corroded : corrode, ronge",
      "a gear : un engrenage, une roue dentee",
      "to melt down : refondre",
    ],
  },
];
