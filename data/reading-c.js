/* Reading, tests 17 a 24 : Read an Academic Passage */

const A = "Read an Academic Passage";

export const readingC = [
  {
    id: 17,
    title: "The economics of a coffee cooperative",
    topic: "Economie du developpement",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "A smallholder who sells unprocessed coffee cherries captures a tiny share of the final retail price. Most of the value is added later, in washing, drying, grading, roasting and branding, and each of those stages happens somewhere else. Cooperatives exist to move some of those stages closer to the farm.\n\nThe results depend on which stage is captured. Owning a washing station gives a cooperative control over quality, which is where price premiums are decided, and the equipment pays for itself within a few seasons. Roasting is a different matter: it requires expensive machinery, a distribution network and a brand, and roasted coffee loses quality within weeks, so a cooperative that roasts for export takes on risks a farmer group is poorly placed to carry. The evidence suggests that ambitions should stop at the point where the product stops being perishable.",
    questions: [
      {
        q: "Why does a farmer capture so little of the retail price?",
        options: [
          "Most value is added at later stages elsewhere",
          "Cherries are sold below their production cost",
          "Transport costs consume the margin",
          "Retailers refuse to buy directly from farms",
        ],
        answer: 0,
        explanation:
          "Lavage, sechage, triage, torrefaction et marque ajoutent la valeur ailleurs.",
      },
      {
        q: "Why is owning a washing station described as a good investment?",
        options: [
          "It requires no trained staff",
          "It controls quality, where premiums are decided",
          "It allows coffee to be stored for years",
          "It removes the need for a cooperative structure",
        ],
        answer: 1,
        explanation:
          "La station de lavage donne la main sur la qualite, donc sur la prime de prix.",
      },
      {
        q: "What is the author's main reservation about roasting?",
        options: [
          "It reduces the quantity of coffee available",
          "It is illegal in some producing countries",
          "It carries risks a farmer group is ill placed to bear",
          "It lowers the quality of the green beans",
        ],
        answer: 2,
        explanation:
          "Machines couteuses, reseau de distribution, marque, et un produit qui se degrade vite.",
      },
    ],
    vocabulary: [
      "a smallholder : un petit exploitant",
      "a premium : une prime, un supplement de prix",
      "perishable : perissable",
    ],
  },
  {
    id: 18,
    title: "Noise under water",
    topic: "Ecologie marine",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "Sound travels roughly five times faster in water than in air and carries much further, which is why marine mammals rely on it for almost everything: navigation, hunting, and contact between mother and calf across tens of kilometres. Shipping has raised background noise in the low frequencies that large whales use by an estimated tenfold since the middle of the twentieth century.\n\nThe response is not simply that whales fall silent. Recordings show them calling louder, repeating themselves and shifting to higher frequencies, all of which cost energy and reduce range. A study of the weeks after shipping stopped in one bay found a measurable drop in stress hormones in the resident population. Quieting ships is technically undemanding, since most of the noise comes from propeller cavitation and can be reduced by modest design changes, but the benefit falls on a public good while the cost falls on individual operators.",
    questions: [
      {
        q: "Why is sound so important to marine mammals?",
        options: [
          "It is the only sense they possess",
          "It travels fast and far in water",
          "It works better at night than during the day",
          "It cannot be detected by predators",
        ],
        answer: 1,
        explanation:
          "Cinq fois plus rapide dans l'eau et portant beaucoup plus loin.",
      },
      {
        q: "How do whales respond to increased background noise?",
        options: [
          "They stop calling entirely",
          "They move to deeper water permanently",
          "They call louder, repeat and shift frequency",
          "They rely on vision instead",
        ],
        answer: 2,
        explanation:
          "Trois adaptations couteuses sont citees, et aucune n'est le silence.",
      },
      {
        q: "Why is ship noise not reduced more widely?",
        options: [
          "The technology does not yet exist",
          "The benefit is collective while the cost is individual",
          "Quieter propellers consume more fuel",
          "International law forbids design changes",
        ],
        answer: 1,
        explanation:
          "Bien public d'un cote, cout prive de l'autre : le classique probleme d'incitation.",
      },
    ],
    vocabulary: [
      "a calf : un baleineau, un petit",
      "cavitation : la cavitation",
      "undemanding : peu exigeant, facile",
    ],
  },
  {
    id: 19,
    title: "How paper money began",
    topic: "Histoire monetaire",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "Paper money did not begin as a government project. In Tang and Song China, merchants carrying heavy strings of bronze coins over long distances left them with a trusted agent and took a receipt, which could be presented for coin at the other end of the journey. Once these receipts began circulating in payment without being redeemed, the receipt had become money.\n\nThe state entered later, first by licensing the issuers and then by replacing them. That shift changed the constraint. A private issuer who printed more receipts than it held coin would be found out and ruined; a government that did the same could compel acceptance by law. Song and later Yuan administrations issued heavily to finance military campaigns, and the resulting inflation eventually made the notes worthless, a pattern repeated so often that some later dynasties abandoned paper entirely and returned to silver by weight.",
    questions: [
      {
        q: "How did receipts become money?",
        options: [
          "The government declared them legal tender",
          "They began circulating in payment without being redeemed",
          "Merchants printed them in standard denominations",
          "Banks agreed to accept them for deposits",
        ],
        answer: 1,
        explanation:
          "C'est la circulation sans remboursement qui transforme le recu en monnaie.",
      },
      {
        q: "What changed when the state took over issuance?",
        options: [
          "The notes became harder to counterfeit",
          "Overissue could no longer be punished by the market",
          "Merchants stopped travelling with coin",
          "Notes were redeemed in silver rather than bronze",
        ],
        answer: 1,
        explanation:
          "Un emetteur prive fait faillite, un Etat peut imposer l'acceptation par la loi.",
      },
      {
        q: "Why did some later dynasties return to silver by weight?",
        options: [
          "Silver was easier to transport than paper",
          "Repeated inflation had destroyed confidence in notes",
          "Bronze coin had become unavailable",
          "Merchants demanded a single currency",
        ],
        answer: 1,
        explanation:
          "Le schema inflationniste s'est repete au point de faire abandonner le papier.",
      },
    ],
    vocabulary: [
      "a receipt : un recu",
      "to redeem : rembourser, convertir en especes",
      "to compel : contraindre",
    ],
  },
  {
    id: 20,
    title: "Soil as an ecosystem",
    topic: "Agronomie",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "A teaspoon of healthy topsoil contains more organisms than there are people on Earth. Bacteria, fungi, protozoa and nematodes form a food web that releases nutrients from organic matter at a rate plants can use, and that builds the crumb structure which lets water infiltrate rather than run off.\n\nConventional tillage disrupts this web twice over. It physically breaks fungal networks, and it exposes organic matter to oxygen, accelerating its decomposition and releasing carbon that took decades to accumulate. Fields that are ploughed every year typically lose organic matter steadily, which reduces water-holding capacity and increases fertiliser requirements. No-till systems reverse the trend slowly, over five to ten years, and the transition period often brings lower yields and higher weed pressure. That gap between immediate cost and delayed benefit explains the slow uptake far better than any lack of information among farmers.",
    questions: [
      {
        q: "What does the soil food web provide to plants?",
        options: [
          "Protection from wind erosion",
          "Nutrients released at a usable rate",
          "A source of nitrogen from the air only",
          "Resistance to all soil-borne diseases",
        ],
        answer: 1,
        explanation:
          "Le reseau libere les nutriments a un rythme utilisable par les plantes.",
      },
      {
        q: "How does ploughing release carbon?",
        options: [
          "By exposing organic matter to oxygen",
          "By burning crop residues",
          "By compacting the lower soil layers",
          "By removing the roots of weeds",
        ],
        answer: 0,
        explanation:
          "L'exposition a l'oxygene accelere la decomposition de la matiere organique.",
      },
      {
        q: "According to the author, why is no-till adopted slowly?",
        options: [
          "Farmers lack access to information",
          "The equipment is not commercially available",
          "Costs come first and benefits come years later",
          "Yields never recover after the transition",
        ],
        answer: 2,
        explanation:
          "L'ecart entre cout immediat et benefice differe explique mieux que l'ignorance.",
      },
    ],
    vocabulary: [
      "tillage : le labour",
      "to infiltrate : s'infiltrer",
      "uptake : l'adoption, la diffusion",
    ],
  },
  {
    id: 21,
    title: "Fast fashion and the textile stream",
    topic: "Industrie et environnement",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "The average garment is now worn far fewer times before disposal than it was twenty years ago, while the number of garments produced each year has roughly doubled. The two trends together mean that collection schemes cannot absorb the volume, and a large share of donated clothing is baled and exported to countries where it competes with local producers.\n\nRecycling offers less relief than it appears. Mechanical recycling shreds fabric into shorter fibres, so recycled cotton is usually blended with virgin fibre and the quality falls with each cycle. Chemical recycling can recover polyester close to its original quality, but it struggles with blended fabrics, and blends dominate the market precisely because they are cheap and comfortable. Designing garments from a single fibre would make recycling far easier, which is why some regulators are considering rules on composition rather than on collection targets.",
    questions: [
      {
        q: "What has happened over the past twenty years?",
        options: [
          "Garments are worn less often and produced in greater numbers",
          "Production has fallen while use has risen",
          "Collection schemes have kept pace with volume",
          "Exports of used clothing have stopped",
        ],
        answer: 0,
        explanation:
          "Moins de portes par vetement, environ deux fois plus de vetements produits.",
      },
      {
        q: "What is the drawback of mechanical recycling?",
        options: [
          "It can only process polyester",
          "Fibres become shorter and quality declines",
          "It requires solvents that are banned",
          "It cannot handle cotton at all",
        ],
        answer: 1,
        explanation:
          "Le broyage raccourcit les fibres, d'ou le melange avec de la fibre vierge.",
      },
      {
        q: "Why might regulators focus on composition?",
        options: [
          "Single-fibre garments are far easier to recycle",
          "Blended fabrics are more expensive to produce",
          "Composition rules are cheaper to enforce",
          "Collection targets have already been met",
        ],
        answer: 0,
        explanation:
          "Concevoir en fibre unique facilite le recyclage, d'ou des regles sur la composition.",
      },
    ],
    vocabulary: [
      "a garment : un vetement",
      "to shred : dechiqueter",
      "a blend : un melange de fibres",
    ],
  },
  {
    id: 22,
    title: "Vertical farming in practice",
    topic: "Innovation agricole",
    taskLabel: A,
    type: "passage",
    level: "B2",
    minutes: 5,
    passage:
      "Growing crops in stacked indoor trays under artificial light removes weather, pests and seasons from the equation and can use ninety per cent less water than a field, since water lost to transpiration is condensed and returned. The catch is light. Outdoors it is free; indoors every photon must be paid for, and lighting typically accounts for the largest share of operating cost.\n\nThat single fact determines what is worth growing. Leafy greens and herbs have short cycles, sell at a high price per kilo and are mostly water, so they suit the model. Wheat and rice need months of light to produce a low-value, storable grain, and no plausible fall in electricity prices closes that gap. Vertical farming is therefore best understood not as a replacement for agriculture but as a way of moving a narrow band of fresh produce closer to the city that eats it.",
    questions: [
      {
        q: "How does indoor growing save water?",
        options: [
          "Plants are watered less frequently",
          "Transpired water is condensed and reused",
          "Crops are chosen for low water needs",
          "Rainwater is collected on the roof",
        ],
        answer: 1,
        explanation:
          "L'eau perdue par transpiration est condensee et renvoyee dans le circuit.",
      },
      {
        q: "Why are leafy greens suited to vertical farming?",
        options: [
          "They store well for months",
          "They tolerate very low light levels",
          "They have short cycles and a high price per kilo",
          "They require no nutrients in the water",
        ],
        answer: 2,
        explanation:
          "Cycles courts, prix eleve au kilo, forte teneur en eau.",
      },
      {
        q: "What is the author's overall view of vertical farming?",
        options: [
          "It will replace field agriculture within a decade",
          "It suits a narrow range of fresh produce near cities",
          "It is unlikely ever to be profitable",
          "It should be reserved for staple grains",
        ],
        answer: 1,
        explanation:
          "La derniere phrase le formule directement.",
      },
    ],
    vocabulary: [
      "a tray : un plateau, un bac",
      "transpiration : la transpiration vegetale",
      "a catch : un inconvenient cache",
    ],
  },
  {
    id: 23,
    title: "How plate tectonics was accepted",
    topic: "Histoire des sciences",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "When Alfred Wegener proposed in 1912 that continents move, he assembled a genuinely impressive case: matching coastlines, identical fossils on both sides of the Atlantic, and glacial deposits in places now tropical. Geologists nonetheless rejected the idea for half a century, and their reason was not prejudice. Wegener could not name a force capable of pushing continental rock through oceanic rock, and his own suggestions were demonstrably too weak.\n\nThe missing element arrived from an unexpected direction. Wartime mapping of the seafloor revealed a mid-ocean ridge system, and magnetic surveys found symmetrical stripes of alternating polarity on either side of it, recording reversals of the Earth's field as new crust cooled. The continents were not ploughing through the ocean floor; the ocean floor itself was spreading, carrying the continents with it. The episode is often cited as evidence that a correct theory needs a mechanism, not only a pattern of coincidences.",
    questions: [
      {
        q: "Why did geologists reject Wegener's proposal?",
        options: [
          "His fossil evidence was later shown to be false",
          "He could not propose an adequate driving force",
          "The matching coastlines were a coincidence",
          "He was not trained as a geologist",
        ],
        answer: 1,
        explanation:
          "Aucune force plausible pour pousser la roche continentale a travers la roche oceanique.",
      },
      {
        q: "What did the magnetic stripes record?",
        options: [
          "The age of the continents",
          "Reversals of the Earth's magnetic field in cooling crust",
          "The temperature of the mantle",
          "The depth of the ocean floor",
        ],
        answer: 1,
        explanation:
          "Des bandes symetriques de polarite alternee enregistrent les inversions du champ.",
      },
      {
        q: "What lesson does the author draw from the episode?",
        options: [
          "Scientific consensus is usually wrong",
          "Patterns alone are not enough without a mechanism",
          "Military research produces the best science",
          "Fossil evidence should be treated with suspicion",
        ],
        answer: 1,
        explanation:
          "Une theorie correcte a besoin d'un mecanisme, pas seulement de coincidences.",
      },
    ],
    vocabulary: [
      "a ridge : une dorsale, une crete",
      "to plough through : labourer, se frayer un passage",
      "prejudice : le prejuge",
    ],
  },
  {
    id: 24,
    title: "Measuring platform work",
    topic: "Sociologie du travail",
    taskLabel: A,
    type: "passage",
    level: "C1",
    minutes: 6,
    passage:
      "Estimates of how many people work through digital platforms vary by a factor of five, and the disagreement is mostly about definitions rather than data quality. A survey that asks whether a respondent earned any income through an app in the past year captures occasional sellers alongside full-time drivers. One that asks about the main source of income in the past week produces a figure an order of magnitude smaller.\n\nBoth numbers can be defended, but they answer different policy questions. If the concern is social protection, the relevant population is those who depend on platform income, which the narrow definition approximates. If the concern is tax compliance, the broad definition is closer to the point. Studies that report a single headline figure without stating the question behind it are of little use, and the practice is common enough that some statistical agencies now publish two figures side by side.",
    questions: [
      {
        q: "What mainly explains the wide range of estimates?",
        options: [
          "Poor survey response rates",
          "Differences in how the population is defined",
          "Platforms refusing to share data",
          "Rapid growth between survey years",
        ],
        answer: 1,
        explanation:
          "Le desaccord porte sur les definitions plutot que sur la qualite des donnees.",
      },
      {
        q: "Which definition suits a question about social protection?",
        options: [
          "Any income through an app in the past year",
          "Main source of income in the past week",
          "Registration with a tax authority",
          "Ownership of a delivery vehicle",
        ],
        answer: 1,
        explanation:
          "La definition etroite approche la population qui depend de ce revenu.",
      },
      {
        q: "What practice does the author criticise?",
        options: [
          "Publishing two figures side by side",
          "Reporting a single figure without the underlying question",
          "Surveying workers rather than platforms",
          "Comparing figures across countries",
        ],
        answer: 1,
        explanation:
          "Un chiffre unique sans la question qui le sous-tend n'apprend rien.",
      },
    ],
    vocabulary: [
      "a respondent : un repondant a une enquete",
      "an order of magnitude : un ordre de grandeur",
      "headline figure : le chiffre mis en avant",
    ],
  },
];
