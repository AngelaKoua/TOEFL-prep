/* Reading, tests 25 a 32 */

const A = "Read an Academic Passage";
const D = "Read in Daily Life";

export const readingD = [
  {
    id: 25,
    title: "Arctic terns and the longest commute",
    topic: "Ornithologie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "The Arctic tern breeds in the far north and winters in Antarctic waters, a round trip that tracking devices have measured at more than seventy thousand kilometres a year. The route is not a straight line. Birds leaving Greenland cross to the coast of Africa and then follow whichever side of the Atlantic offers favourable winds, adding distance but saving energy.\n\nMiniature geolocators made these measurements possible. Weighing about a gram, they record light levels, from which position can be reconstructed within a hundred kilometres or so. The precision is poor by satellite standards but sufficient for ocean-scale questions, and the devices are light enough not to affect the bird. The main drawback is that the tag stores rather than transmits data, so the bird must be recaptured at the same colony a year later, which means results come only from individuals that survive and return.",
    questions: [
      {
        q: "Why do terns not fly in a straight line?",
        options: [
          "To avoid predators along the coast",
          "To use winds that reduce the energy cost",
          "To feed at a fixed series of stopovers",
          "To stay within sight of land",
        ],
        answer: 1,
        explanation:
          "Le detour ajoute de la distance mais economise de l'energie grace aux vents.",
      },
      {
        q: "How do geolocators determine position?",
        options: [
          "By contacting satellites directly",
          "By recording light levels",
          "By measuring the bird's wingbeats",
          "By detecting magnetic field strength",
        ],
        answer: 1,
        explanation:
          "Ils enregistrent la lumiere, d'ou l'on reconstruit la position.",
      },
      {
        q: "What bias does the recapture requirement introduce?",
        options: [
          "Data come only from birds that survive and return",
          "Only large colonies can be studied",
          "Positions are recorded only in summer",
          "The tags stop working after six months",
        ],
        answer: 0,
        explanation:
          "Il faut recapturer l'oiseau, donc les donnees ne concernent que les survivants revenus.",
      },
    ],
    vocabulary: [
      "to breed : se reproduire, nicher",
      "a stopover : une escale",
      "to recapture : recapturer",
    ],
  },
  {
    id: 26,
    title: "Volcanoes in the tree rings",
    topic: "Paleoclimatologie",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "A large tropical eruption injects sulphur into the stratosphere, where it forms an aerosol veil that reflects sunlight and cools the surface for two or three years. Because the effect is global and abrupt, it leaves a signature in several independent archives, and the agreement between them is what makes volcanic dating useful.\n\nIce cores record the sulphur itself as an acidity spike; tree rings record the cold summer that follows as an unusually narrow or frost-damaged ring. Matching the two allowed researchers to correct the ice-core chronology by several years for the first millennium, which in turn changed the dates assigned to a number of historical events. The 536 event is the best known: written sources from the Mediterranean to China describe a dimmed sun and failed harvests, and the archives place a major eruption immediately before, followed by a second within four years.",
    questions: [
      {
        q: "What causes the cooling after a tropical eruption?",
        options: [
          "Ash blocking rivers and lakes",
          "A sulphur aerosol veil reflecting sunlight",
          "Carbon dioxide released by the magma",
          "The destruction of surrounding forests",
        ],
        answer: 1,
        explanation:
          "Le soufre forme un voile d'aerosols qui reflechit la lumiere solaire.",
      },
      {
        q: "Why is agreement between archives important?",
        options: [
          "It reduces the cost of sampling",
          "It allows one chronology to correct another",
          "It proves that eruptions are becoming more frequent",
          "It replaces the need for written sources",
        ],
        answer: 1,
        explanation:
          "Le croisement a permis de corriger la chronologie des carottes de glace.",
      },
      {
        q: "What do written sources add to the 536 case?",
        options: [
          "A precise measurement of the sulphur released",
          "Descriptions of a dimmed sun and failed harvests",
          "The exact location of the volcano",
          "Evidence that tree rings are unreliable",
        ],
        answer: 1,
        explanation:
          "Les sources decrivent un soleil obscurci et des recoltes perdues.",
      },
    ],
    vocabulary: [
      "a veil : un voile",
      "a spike : un pic, une pointe",
      "a harvest : une recolte",
    ],
  },
  {
    id: 27,
    title: "The printing press and what followed",
    topic: "Histoire culturelle",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "Movable type did not create literacy, and the fashionable claim that printing caused the Reformation is too neat. Manuscript culture was already expanding, universities were multiplying, and a market for texts existed before Gutenberg. What printing changed was unit cost and, more subtly, the stability of a text.\n\nA scribal copy introduces errors that accumulate through successive generations; a printed edition fixes a text and allows thousands of readers to consult identical pages. That stability made cross-referencing possible, gave page numbers a meaning beyond a single volume, and turned the correction of an error into a public event rather than a private annotation. Historians who emphasise this argue that the deepest effect of printing was not the spread of any particular idea but the creation of conditions in which claims could be systematically compared, which is the precondition for cumulative knowledge.",
    questions: [
      {
        q: "What does the author say about the claim that printing caused the Reformation?",
        options: [
          "It is broadly correct",
          "It is too simple",
          "It has never been made seriously",
          "It applies only to Germany",
        ],
        answer: 1,
        explanation: "Too neat signifie trop simple, trop commode.",
      },
      {
        q: "Why does textual stability matter?",
        options: [
          "It reduced the price of paper",
          "It let many readers consult identical pages",
          "It made manuscripts more valuable",
          "It allowed books to be printed faster",
        ],
        answer: 1,
        explanation:
          "Des milliers de lecteurs consultent des pages identiques, d'ou le renvoi croise.",
      },
      {
        q: "According to the passage, the deepest effect of printing was",
        options: [
          "the spread of religious ideas",
          "the decline of universities",
          "the conditions for systematically comparing claims",
          "the standardisation of spelling",
        ],
        answer: 2,
        explanation:
          "Condition prealable a la connaissance cumulative : la comparaison systematique.",
      },
    ],
    vocabulary: [
      "scribal : relatif aux copistes",
      "an annotation : une annotation",
      "cumulative : cumulatif",
    ],
  },
  {
    id: 28,
    title: "Coral bleaching and recovery",
    topic: "Biologie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "A coral is an animal that houses photosynthetic algae in its tissues. The algae supply most of the coral's energy and give the reef its colour. When water stays a degree or two above the summer maximum for several weeks, the partnership breaks down and the coral expels the algae, turning white.\n\nBleaching is not death. A colony that regains algae within a few weeks can recover, though it will usually grow and reproduce less that year. What determines the outcome is the interval between events. Recovery of a damaged reef takes ten to fifteen years, so bleaching every five years leaves no time for the slow-growing branching species that build the reef's structure. The reefs that persist under repeated stress are increasingly dominated by flat, robust corals that shelter far fewer fish, which is a change in kind rather than simply a reduction in quantity.",
    questions: [
      {
        q: "What triggers bleaching?",
        options: [
          "Several weeks of water above the usual summer maximum",
          "A sudden drop in salinity",
          "The arrival of a new predator",
          "A reduction in available light",
        ],
        answer: 0,
        explanation:
          "Un ou deux degres au-dessus du maximum estival pendant plusieurs semaines.",
      },
      {
        q: "What determines whether a reef recovers?",
        options: [
          "The depth of the water",
          "The interval between bleaching events",
          "The number of fish species present",
          "The time of year the event occurs",
        ],
        answer: 1,
        explanation:
          "La recuperation prend dix a quinze ans, d'ou l'importance de l'intervalle.",
      },
      {
        q: "Why is the shift towards robust corals significant?",
        options: [
          "Those corals grow more slowly",
          "They shelter far fewer fish",
          "They cannot photosynthesise",
          "They are more vulnerable to storms",
        ],
        answer: 1,
        explanation:
          "Un changement de nature : des recifs plats abritant beaucoup moins de poissons.",
      },
    ],
    vocabulary: [
      "to expel : expulser",
      "a colony : une colonie de coraux",
      "branching : ramifie, arborescent",
    ],
  },
  {
    id: 29,
    title: "Concrete, ancient and modern",
    topic: "Materiaux",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "Roman marine concrete has survived two thousand years in seawater, while modern reinforced concrete in the same conditions often shows serious damage within fifty. The comparison is frequently drawn and frequently misused, because the two materials are asked to do different jobs.\n\nRoman mixes combined lime with volcanic ash, and seawater reacting with the ash produced interlocking crystals that actually strengthened the material over time. Modern concrete gains its strength quickly and does not continue to react in the same way. More importantly, Roman structures carry load only in compression, while modern designs use steel reinforcement to carry tension, which allows thin slabs and long spans but introduces the failure mode that dominates modern decay: chloride reaches the steel, the steel rusts, rust expands, and the concrete cracks from within. A material that lasts longer but cannot span a motorway is not straightforwardly better.",
    questions: [
      {
        q: "Why does Roman concrete strengthen over time?",
        options: [
          "Seawater reacts with volcanic ash to form crystals",
          "The lime absorbs carbon dioxide from the air",
          "Salt crystallises in the surface pores",
          "The material dries out very slowly",
        ],
        answer: 0,
        explanation:
          "L'eau de mer reagit avec la cendre volcanique et produit des cristaux enchevetres.",
      },
      {
        q: "What is the dominant failure mode of modern reinforced concrete?",
        options: [
          "Erosion of the surface by waves",
          "Corrosion of the steel, which expands and cracks the concrete",
          "Chemical breakdown of the cement",
          "Compression beyond the design load",
        ],
        answer: 1,
        explanation:
          "Chlorure, rouille, expansion, fissuration depuis l'interieur.",
      },
      {
        q: "What is the author's conclusion?",
        options: [
          "Modern builders should copy Roman recipes exactly",
          "Durability alone does not make a material better",
          "Steel reinforcement should be abandoned",
          "Roman concrete was stronger in tension",
        ],
        answer: 1,
        explanation:
          "Un materiau plus durable mais incapable de franchir une autoroute n'est pas superieur.",
      },
    ],
    vocabulary: [
      "compression : la compression",
      "tension : la traction",
      "a span : une portee, une travee",
    ],
  },
  {
    id: 30,
    title: "How a habit forms",
    topic: "Psychologie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "A habit is behaviour that has become linked to a context rather than to a goal. Early in learning, an action is performed because of the outcome it produces. With repetition in a stable setting, control shifts to the cue itself, and the behaviour can persist even when the outcome is no longer valued, which is why people find themselves eating popcorn they do not enjoy simply because they are in a cinema.\n\nThe practical implication runs against most advice. Because cues do the work, changing the environment tends to be more effective than increasing motivation. Studies of people who move house find that established routines are unusually easy to break in the weeks after a move, when the old cues are absent. Interventions timed to such disruptions succeed more often than the same interventions offered at an arbitrary moment, which is a useful argument for acting during a period of change rather than waiting for one to settle.",
    questions: [
      {
        q: "What distinguishes a habit from a goal-directed action?",
        options: [
          "It is linked to a context rather than to an outcome",
          "It is always harmful to the person",
          "It requires conscious attention",
          "It is learned in a single trial",
        ],
        answer: 0,
        explanation:
          "Le controle passe du resultat au signal contextuel.",
      },
      {
        q: "Why is the popcorn example given?",
        options: [
          "To show that habits persist without an enjoyed outcome",
          "To illustrate the role of hunger in habit formation",
          "To show that cinemas encourage overeating",
          "To explain why habits form faster in public",
        ],
        answer: 0,
        explanation:
          "Le comportement continue alors que le resultat n'est plus valorise.",
      },
      {
        q: "What advice follows from the research?",
        options: [
          "Increase motivation before changing behaviour",
          "Wait until life is stable before making changes",
          "Act during periods of disruption, when cues are absent",
          "Repeat the new behaviour in a new setting each day",
        ],
        answer: 2,
        explanation:
          "Les interventions calees sur une rupture reussissent plus souvent.",
      },
    ],
    vocabulary: [
      "a cue : un signal declencheur",
      "to persist : persister",
      "arbitrary : arbitraire",
    ],
  },
  {
    id: 31,
    title: "Library loan policy",
    topic: "Vie universitaire",
    taskLabel: D,
    type: "passage",
    level: "B1",
    minutes: 4,
    passage:
      "University Library, borrowing rules from September\n\nUndergraduate members may borrow up to twelve items at a time. Standard loans run for four weeks and renew automatically twice, provided no one else has requested the item. Once a request is placed, the loan ends seven days later and cannot be renewed again.\n\nShort loan titles, marked with a red band on the spine, are lent for three days only and do not renew. They may be taken out again immediately if no request is waiting.\n\nThere is no charge for returning an item late, but borrowing is suspended once three items are overdue and stays suspended until every one of them is back. Items lost or damaged are charged at replacement cost plus a fixed handling fee of eight pounds. Reading room copies never leave the building. If you need a title the library does not hold, use the interlibrary form; delivery takes about ten working days and the first four requests each year are free.",
    questions: [
      {
        q: "What happens to a standard loan when another reader requests the item?",
        options: [
          "It ends in seven days and cannot be renewed",
          "It is cancelled immediately",
          "It renews once more, then ends",
          "It becomes a short loan",
        ],
        answer: 0,
        explanation:
          "Une demande met fin au pret sept jours plus tard, sans renouvellement.",
      },
      {
        q: "A student has three overdue books. What is the consequence?",
        options: [
          "A daily fine until they are returned",
          "Borrowing is suspended until all three are back",
          "The library account is closed for a term",
          "Only short loans are blocked",
        ],
        answer: 1,
        explanation:
          "Pas d'amende, mais suspension jusqu'au retour de la totalite.",
      },
      {
        q: "What is true about interlibrary requests?",
        options: [
          "They are limited to four per year in total",
          "The first four each year cost nothing",
          "They arrive within three working days",
          "They are open to staff only",
        ],
        answer: 1,
        explanation:
          "Les quatre premieres demandes de l'annee sont gratuites, pas limitees a quatre.",
      },
    ],
    vocabulary: [
      "to renew : renouveler, prolonger",
      "overdue : en retard",
      "a handling fee : des frais de dossier",
    ],
  },
  {
    id: 32,
    title: "Laboratory safety notice",
    topic: "Vie universitaire",
    taskLabel: D,
    type: "passage",
    level: "B1",
    minutes: 4,
    passage:
      "Chemistry Building, Level 2, rules for all users\n\nEye protection is required from the moment you pass the door, whether or not you are working. Lab coats must be fastened and are not to be worn in the cafeteria or the library. Open shoes are not permitted anywhere on the level.\n\nBefore starting any procedure, read the risk assessment attached to the bench and confirm that the fume cupboard sash is below the marked line. If the airflow alarm sounds, stop work, close the sash and report to the technician on duty. Do not attempt to reset the alarm yourself.\n\nWaste is separated at source: halogenated solvents in the red containers, non-halogenated in the blue, aqueous heavy metal solutions in the white. Nothing goes down the sink except water and dilute soap. Broken glass goes in the rigid bin by the door, never in the general waste bag. Anyone who arrives after the safety briefing has begun will be asked to attend the following session instead.",
    questions: [
      {
        q: "When must eye protection be worn?",
        options: [
          "Only while handling chemicals",
          "From the moment you enter the level",
          "Only when the fume cupboard is open",
          "Only during the safety briefing",
        ],
        answer: 1,
        explanation:
          "Des le passage de la porte, que l'on travaille ou non.",
      },
      {
        q: "What should you do if the airflow alarm sounds?",
        options: [
          "Reset the alarm and continue",
          "Open the sash fully to increase airflow",
          "Stop, close the sash and tell the technician",
          "Leave the building immediately",
        ],
        answer: 2,
        explanation:
          "Arreter, fermer la vitre et prevenir le technicien, sans reinitialiser soi-meme.",
      },
      {
        q: "Where does broken glass go?",
        options: [
          "In the general waste bag",
          "In the white container",
          "In the rigid bin by the door",
          "In the red container",
        ],
        answer: 2,
        explanation:
          "Bac rigide pres de la porte, jamais dans le sac de dechets generaux.",
      },
    ],
    vocabulary: [
      "a fume cupboard : une hotte aspirante",
      "a sash : la vitre coulissante de la hotte",
      "aqueous : aqueux",
    ],
  },
];
