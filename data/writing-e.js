/* Writing, tests 42 a 50 : Writing for an Academic Discussion */

const D = "Writing for an Academic Discussion";

const RUBRIC = [
  "J'ai pris une position claire des la premiere phrase.",
  "J'ai repondu a au moins un camarade en le nommant, pas seulement au professeur.",
  "J'ai donne une raison developpee avec un exemple concret, pas une liste de generalites.",
  "J'ai reconnu une objection et j'y ai repondu.",
  "J'ai utilise un vocabulaire precis plutot que good, bad, interesting.",
];

const PHRASES = [
  "That is the strongest objection here, and I think ... : reconnait puis repond",
  "What the argument overlooks is ... : introduit l'angle mort",
  "If that is right, then the question becomes ... : deplace le debat",
  "I would put it differently: ... : reformule sans agresser",
];

const disc = (id, title, topic, level, professor, posts, model) => ({
  id,
  title,
  topic,
  taskLabel: D,
  type: "discussion",
  level,
  minutes: 10,
  targetWords: 100,
  professor,
  posts,
  rubric: RUBRIC,
  model,
  phrases: PHRASES,
});

export const writingE = [
  disc(
    42,
    "Should medical trials publish all results?",
    "Ethique de la recherche",
    "C1",
    {
      who: "Professor Ibarra",
      text: "A large share of clinical trials are never published, and unpublished trials are disproportionately those with negative results. Should publication of every registered trial be legally required, whatever the outcome?",
    },
    [
      {
        who: "Rania",
        text: "Yes, and the reason is arithmetic. If only positive results reach the literature, every meta-analysis built on it is biased upwards by construction.",
      },
      {
        who: "Kasper",
        text: "Agreed in principle, but mandatory publication of poorly run trials adds noise. A badly designed study with a negative result is not evidence of absence.",
      },
    ],
    "Rania's argument is decisive and Kasper's objection, while reasonable, points to a different remedy than the one he implies.\n\nPublication bias is not one problem among many: it corrupts every synthesis downstream, and no amount of careful meta-analysis can recover data that was never released. So the default must be publication of all registered trials.\n\nKasper is right that quality varies, but the answer to a weak study is appraisal, not suppression. Systematic reviews already weight studies by risk of bias, and a weak negative trial that is visible can be discounted openly. A weak negative trial that is hidden cannot be discounted at all, because nobody knows it existed.",
  ),
  disc(
    43,
    "Is bilingual education worth the cost?",
    "Education",
    "B2",
    {
      who: "Dr Haugen",
      text: "Bilingual schooling requires more staff and more materials. Supporters point to cognitive and cultural benefits; critics argue the same hours could raise literacy in one language instead. Is bilingual education a good use of limited school budgets?",
    },
    [
      {
        who: "Malik",
        text: "The cognitive benefit claims have not replicated well. What remains is a cultural argument, which is real but should be made honestly rather than dressed up as neuroscience.",
      },
      {
        who: "Sunna",
        text: "For minority language communities the benefit is not cultural decoration, it is whether children can talk to their grandparents. That is not a budget line you can compare to literacy hours.",
      },
    ],
    "Malik is right about the evidence and Sunna is right about what the question is, and the two positions are less opposed than they look.\n\nThe executive-function findings did shrink substantially under stricter designs, and programmes should not be sold on claims that a careful reader can check and reject.\n\nBut the case Sunna makes does not depend on those findings. Language transmission across generations either happens in school or it usually stops, and once it stops it is extremely expensive to restart. If that is right, then the question becomes which languages a public system is obliged to sustain, which is a political decision that evidence can inform but not settle.",
  ),
  disc(
    44,
    "Should employers monitor productivity software?",
    "Travail et technologie",
    "B2",
    {
      who: "Professor Ekwueme",
      text: "Some firms track keystrokes, active windows and idle time. Managers argue that remote work requires new visibility; employees describe it as surveillance. Under what conditions, if any, is such monitoring acceptable?",
    },
    [
      {
        who: "Bruno",
        text: "It is acceptable when it is disclosed, proportionate and used for aggregate management rather than individual discipline. The problem is that it almost never stays aggregate.",
      },
      {
        who: "Ada",
        text: "It measures activity, not work. Anyone who thinks can look idle for an hour and produce the most valuable thing that week. The metric selects against the behaviour you want.",
      },
    ],
    "Ada identifies the flaw that makes Bruno's conditions harder to satisfy than they sound, and I would start from her point.\n\nIf a metric measures presence rather than output, then even a disclosed and proportionate system rewards visible busyness. Over time employees learn to produce the signal, and the organisation ends up with accurate data about a behaviour it never valued.\n\nWhere I agree with Bruno is that disclosure is necessary, just not sufficient. A defensible test would be whether the employer can name the decision the data will inform. Monitoring to size a team is a real decision; monitoring in case something turns up is not, and that is the version that drifts into discipline.",
  ),
  disc(
    45,
    "Do cities need more housing or better transport?",
    "Urbanisme",
    "B2",
    {
      who: "Dr Wren",
      text: "Faced with high rents, some argue for building far more housing centrally; others say improving transport lets people live further out affordably. If a city could pursue only one for a decade, which should it choose?",
    },
    [
      {
        who: "Theo",
        text: "Transport. Building in the centre is slow, contested and expensive per unit. A rail line opens up land that is already cheap and already there.",
      },
      {
        who: "Nadine",
        text: "New lines raise land values along them almost immediately. Without building rules attached, you have transferred the problem outwards and made some landowners rich.",
      },
    ],
    "Nadine's objection is the strongest here, and I think it means the two options are not really separable.\n\nTheo is right that central building is slow and contested. But a rail line without a zoning change does not create affordable housing, it creates expensive housing further out, because the value of improved access is captured in land prices before a single home is built.\n\nIf that is right, then the question becomes sequencing rather than choosing. The instrument that does both is upzoning along the corridor, agreed before the route is announced, so that supply expands with access. A city that can only do one thing should do the one that makes the other work.",
  ),
  disc(
    46,
    "Is it ethical to use AI for grading?",
    "Education et technologie",
    "B2",
    {
      who: "Professor Halim",
      text: "Automated systems can now mark written work at scale. Supporters cite consistency and faster feedback; critics worry about opacity and about students writing for the machine. Should universities use automated marking for assessed work?",
    },
    [
      {
        who: "Zoe",
        text: "Consistency is not the same as validity. A system can be perfectly consistent about the wrong features, and students will find those features faster than we can audit them.",
      },
      {
        who: "Idris",
        text: "Human marking is not a clean baseline either. Marks drift over a long pile and vary between markers on the same script. We compare a new tool to an idealised human.",
      },
    ],
    "Idris makes a fair correction to the comparison, and Zoe still identifies the asymmetry that decides it.\n\nHuman marking is noisy, as he says, and marker drift is well documented. But human noise is unsystematic, while an automated system's error is the same error every time, applied to every script, and it is discoverable by students. Once discovered, it stops being noise and becomes a strategy.\n\nI would put it differently: automated marking is acceptable for formative feedback, where speed matters and the stakes are low, and unacceptable as the sole decision for graded work. A defensible middle is machine first pass with human sign-off on the boundaries, which is where the decisions actually bite.",
  ),
  disc(
    47,
    "Should sport be part of the school curriculum?",
    "Education",
    "B1",
    {
      who: "Dr Santos",
      text: "Some argue physical education should be compulsory throughout school; others would make it optional after a certain age and use the hours for academic subjects. What would you recommend, and on what grounds?",
    },
    [
      {
        who: "Emre",
        text: "Compulsory, because it is the only guaranteed physical activity for children who have no club and no garden. Making it optional removes it precisely from those who need it.",
      },
      {
        who: "Lucie",
        text: "Compulsory PE also taught a lot of people to dislike exercise for thirty years. The content matters more than the requirement.",
      },
    ],
    "Emre has the stronger case on access, and Lucie is describing a design failure rather than an argument against the requirement.\n\nIf physical activity is optional, participation will track family resources almost exactly, and the children with no club and no garden are the ones who opt out. That is a distributional argument that a curriculum decision can actually act on.\n\nWhat the argument overlooks, and where Lucie is right, is that competitive team sport is a narrow way to deliver it. Programmes that include walking, swimming and strength work keep participation far higher into the teenage years, especially among girls. Keep the hours compulsory; make the content something a non-athletic fifteen-year-old can succeed at.",
  ),
  disc(
    48,
    "Should scientific papers be free to read?",
    "Communication scientifique",
    "C1",
    {
      who: "Professor Cheng",
      text: "Open access removes paywalls but often shifts the cost to authors through publication charges. Some argue this simply moves the barrier from readers to researchers in less wealthy institutions. How should access be funded?",
    },
    [
      {
        who: "Ravi",
        text: "Author charges are worse than subscriptions. A reader without access can email the author; a researcher without a grant cannot publish at all.",
      },
      {
        who: "Hanne",
        text: "Waivers exist for low-income countries, but the middle is squeezed: institutions too wealthy for a waiver and too poor for a five-thousand-euro fee.",
      },
    ],
    "Ravi frames the asymmetry correctly and Hanne shows where the current fix fails, which points to a funding model neither post names.\n\nA barrier to reading is porous, as Ravi says. A barrier to publishing is absolute, and it removes work from the record entirely rather than delaying access to it. That asymmetry should decide the design.\n\nWaivers are binary and therefore produce Hanne's squeezed middle. The alternative that avoids both failure modes is collective funding: consortia or funders pay a journal to publish everything, with no per-article charge to any author. Several models operate this way already, and they move the cost to the institutions best able to absorb it without making any individual researcher's budget the gatekeeper.",
  ),
  disc(
    49,
    "Is tourism good for small historic towns?",
    "Economie locale",
    "B2",
    {
      who: "Dr Bianchi",
      text: "Tourism brings income to small historic towns but also raises housing costs and reshapes local commerce. Some towns now limit visitor numbers or short-term rentals. Is tourism a net benefit for such places?",
    },
    [
      {
        who: "Paolo",
        text: "The income is real but it is seasonal and low skilled, and it crowds out the businesses residents need. You end up with nine ice cream shops and no hardware store.",
      },
      {
        who: "Jana",
        text: "Without it many of these towns would have emptied thirty years ago. Criticising tourism is easier when there is an alternative employer, and often there is not.",
      },
    ],
    "Jana's counterfactual is the one usually missing from this debate, and it makes me read Paolo's complaint as an argument about regulation rather than about tourism.\n\nMany of these towns had no other path after their agricultural or industrial base went, and the honest comparison is with depopulation, not with a diversified economy that was never on offer.\n\nThat said, Paolo's hardware store point is not nostalgia. Retail mix is a real function of rent, and rent is a function of what short-term letting will pay. Towns that cap rental licences by street, or reserve ground-floor units for resident-serving trades, keep most of the income while preventing the monoculture. The problem is allocation, not visitors.",
  ),
  disc(
    50,
    "Should universities teach public speaking to everyone?",
    "Pedagogie",
    "B2",
    {
      who: "Professor Lange",
      text: "A proposal would make a short public speaking course compulsory for all undergraduates, whatever their subject. Supporters cite employability; critics say curriculum time is already scarce and that the skill is best learned in context. What do you think?",
    },
    [
      {
        who: "Anita",
        text: "It should be embedded, not bolted on. A standalone course teaches generic presentation habits that transfer badly into a lab meeting or a courtroom.",
      },
      {
        who: "Georg",
        text: "Embedded sounds ideal and usually means nobody teaches it. Everyone assumes the other module covers it, and students graduate having presented twice.",
      },
    ],
    "Georg describes what actually happens to embedded skills, and that observation is what settles the question for me, even though Anita is right about transfer.\n\nGeneric presentation training does produce a recognisable, slightly hollow style, and a lab meeting rewards different behaviour from a moot court. But the alternative is not disciplined-specific teaching; it is an assumption of coverage that no one owns.\n\nThe compromise worth defending is a short compulsory core, perhaps eight hours, on the things that are genuinely general: structure, audibility, handling a question you cannot answer. Anything discipline-specific then sits inside the subject modules, with the core as a guaranteed floor rather than a substitute.",
  ),
];
