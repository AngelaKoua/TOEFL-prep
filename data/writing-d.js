/* Writing, tests 33 a 41 : Writing for an Academic Discussion */

const D = "Writing for an Academic Discussion";

const RUBRIC = [
  "J'ai pris une position claire des la premiere phrase.",
  "J'ai repondu a au moins un camarade en le nommant, pas seulement au professeur.",
  "J'ai donne une raison developpee avec un exemple concret, pas une liste de generalites.",
  "J'ai reconnu une objection et j'y ai repondu.",
  "J'ai utilise un vocabulaire precis plutot que good, bad, interesting.",
];

const PHRASES = [
  "I would go further than Marco and say that ... : prolonge un post",
  "Where I part company with ... is ... : desaccord precis et poli",
  "The usual objection is that ... but ... : anticipe la critique",
  "A concrete case makes this clearer: ... : annonce l'exemple",
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

export const writingD = [
  disc(
    33,
    "Should cities charge for driving?",
    "Politiques publiques",
    "B2",
    {
      who: "Dr Reyes",
      text: "Several cities now charge drivers to enter the centre. Supporters point to cleaner air and faster buses; critics say the charge falls hardest on people who cannot choose when or how they travel. Do you think congestion charging is a fair instrument? Explain your reasoning.",
    },
    [
      {
        who: "Marco",
        text: "I support it. Road space is scarce and we price every other scarce thing. Free access just means it is rationed by queueing instead, which wastes everyone's time equally.",
      },
      {
        who: "Priya",
        text: "It is fair only if the alternative exists. A night cleaner starting at five has no bus. Charging her is not a nudge, it is a tax on having no options.",
      },
    ],
    "I agree with Marco that pricing scarce road space is defensible, but Priya identifies the condition that makes it fair, and I would make that condition explicit rather than treat it as a caveat.\n\nA charge changes behaviour only where behaviour can change. For a commuter with a train option, the charge is a genuine choice. For a worker travelling at five in the morning, it is simply a cost, and the scheme collects money without reducing a single journey.\n\nThe practical answer is to tie the charge to service coverage: no charge in a zone or a time band until an alternative runs. London's early exemptions worked roughly this way, and they made the scheme survivable politically as well as fairer.",
  ),
  disc(
    34,
    "Is remote work good for junior employees?",
    "Travail",
    "B2",
    {
      who: "Professor Adeyemi",
      text: "Many organisations have kept remote or hybrid working. Studies report higher satisfaction overall, but some managers argue that employees in their first job learn far less at home. What is your view on remote work for people early in their careers?",
    },
    [
      {
        who: "Lena",
        text: "Juniors lose the most. You learn a job by overhearing it, by seeing how someone handles a difficult call. None of that survives a calendar full of scheduled meetings.",
      },
      {
        who: "Tom",
        text: "That assumes offices were good at teaching. Most juniors I know sat silently in an open plan room. Remote work at least forces managers to make guidance explicit.",
      },
    ],
    "Tom is right that the office was never automatically a school, but I think Lena describes something real that his point does not remove.\n\nWhat juniors lose is not instruction, it is exposure to unfinished work. In an office you see a draft being argued over, a client being calmed, a decision being reversed. Remote work shows you outputs and hides the process that produced them, and process is precisely what a beginner does not yet have.\n\nSo the question is not office against home but whether the messy stage is made visible. Teams that record the reasoning behind a decision, or invite juniors to listen in on calls with no task attached, appear to close most of the gap.",
  ),
  disc(
    35,
    "Should universities drop entrance exams?",
    "Education",
    "B2",
    {
      who: "Dr Fournier",
      text: "Some universities have replaced entrance examinations with continuous assessment and interviews. Supporters argue that exams measure preparation rather than ability. Others say alternatives are easier to influence through family resources. Which approach would you defend?",
    },
    [
      {
        who: "Sami",
        text: "Exams are the least unfair option we have. They are anonymous and they happen on one day. Everything else rewards whoever has a parent who knows how the system works.",
      },
      {
        who: "Grace",
        text: "One day is exactly the problem. A single morning cannot capture three years, and illness or anxiety decides outcomes that should depend on capability.",
      },
    ],
    "Grace is describing a real cost, but I side with Sami, for a reason neither post states directly: the question is not which method measures best, it is which method is hardest to buy.\n\nContinuous assessment relies on coursework, and coursework quality tracks how much help is available at home. Interviews reward a way of speaking that is taught in some schools and not in others. An anonymous exam has a narrow view of a candidate, but that narrowness is also its protection.\n\nThe sensible middle is to keep the exam as the main instrument and add a contextual adjustment for school background, which corrects for the preparation Sami mentions without opening the door to the influence Grace would still face.",
  ),
  disc(
    36,
    "Does social media harm public debate?",
    "Societe",
    "B2",
    {
      who: "Professor Olsen",
      text: "It is often claimed that social platforms damage public debate by rewarding outrage. Others argue that they simply made visible a polarisation that already existed. Which explanation do you find more convincing, and why?",
    },
    [
      {
        who: "Iris",
        text: "The platforms cause it. Engagement ranking selects for whatever provokes a reaction, and anger is the cheapest reaction to provoke. The design is the argument.",
      },
      {
        who: "Bastien",
        text: "Polarisation rose in countries with low social media use too, and it rose most among older people who use it least. The timing does not fit the story.",
      },
    ],
    "Bastien's evidence is the stronger of the two, and I think it forces a more modest version of Iris's claim rather than refuting it.\n\nIf polarisation grew fastest among the least online group, platforms cannot be the main driver. But they can still be an amplifier, and amplification is worth studying separately from causation. Ranking by engagement does select for provocation; the question is how much of the total effect that accounts for.\n\nWhere I part company with Iris is the word cause. I would say platforms lower the cost of reaching an already divided audience, which makes division more profitable to produce. That is a serious problem, and it is a different problem from the one usually described.",
  ),
  disc(
    37,
    "Should fieldwork be compulsory in geography?",
    "Pedagogie",
    "B1",
    {
      who: "Dr Mbeki",
      text: "Our department is deciding whether fieldwork should remain compulsory. It is expensive, it excludes some students with caring responsibilities, and a good deal can now be done with satellite data. Should we keep it as a requirement?",
    },
    [
      {
        who: "Hugo",
        text: "Keep it. You do not understand a slope until you have walked up one. Satellite data teaches you to trust a picture without knowing what it flattens.",
      },
      {
        who: "Amara",
        text: "I agree it is valuable, but compulsory is a different word. I could not have gone in my second year, and I would have failed a module for a reason that had nothing to do with geography.",
      },
    ],
    "Amara's distinction between valuable and compulsory is the one that matters here, and I would build the department's answer on it.\n\nHugo is right that fieldwork teaches something no dataset does: the awareness that every measurement was taken by someone standing somewhere, in weather, with limited time. That is not a detail, it is the foundation of how you read data later.\n\nBut a requirement that some students physically cannot meet does not teach them that lesson, it removes them. The workable position is to make the learning outcome compulsory and the format flexible: a residential week for most, a set of local day visits for students who cannot travel, with the same assessment applied to both.",
  ),
  disc(
    38,
    "Is economic growth compatible with lower emissions?",
    "Economie et environnement",
    "C1",
    {
      who: "Professor Lindgren",
      text: "Several wealthy economies report growing output alongside falling territorial emissions. Some read this as proof that decoupling is possible; others argue the fall is an accounting effect of moving production abroad. How would you settle the question?",
    },
    [
      {
        who: "Nils",
        text: "Consumption-based accounting is the test. Once you count imported emissions, most of the impressive decoupling curves flatten considerably.",
      },
      {
        who: "Yuki",
        text: "They flatten but they do not vanish. Several countries show falling consumption-based emissions with rising output. That is the case that has to be explained.",
      },
    ],
    "Nils names the right test and Yuki applies it correctly, and I think the second observation is the important one.\n\nIf consumption-based emissions fall while output rises, offshoring cannot be the whole story, because imported emissions are already inside the measure. What remains is a combination of electricity decarbonisation and a shift in what growth consists of, since a unit of software output carries less embodied energy than a unit of steel.\n\nThe honest limit is speed rather than possibility. Absolute decoupling clearly happens; the rates observed so far are well below what the emissions budgets require. So the interesting question is not whether growth and falling emissions can coexist, but whether they can do so fast enough.",
  ),
  disc(
    39,
    "Should museums return collected objects?",
    "Patrimoine",
    "C1",
    {
      who: "Dr Almeida",
      text: "Debate continues about objects acquired during colonial rule. Some argue for return as a matter of justice; others say large museums preserve and display objects to audiences that would otherwise never see them. What principle should guide decisions?",
    },
    [
      {
        who: "Elise",
        text: "Provenance should decide. If an object left under coercion, no later benefit makes the acquisition legitimate. The audience argument would justify any theft with a good exhibition.",
      },
      {
        who: "Karim",
        text: "I agree on coercion but not on a blanket rule. Some communities ask for access, loans or digital records rather than physical return, and we should listen rather than assume.",
      },
    ],
    "Elise sets the right default and Karim supplies the correction that stops it becoming paternalistic in reverse.\n\nThe audience argument is genuinely weak as a justification: it evaluates a past acquisition by its present convenience, which is an argument no legal system accepts about property. So coercion at the point of acquisition should create a presumption of return.\n\nA presumption is not an automatic transfer, though, and this is Karim's point. The originating community decides what it wants, and sometimes that is a long-term loan or a share of exhibition income. What a museum should not do is treat its own preference for keeping the object as one of the competing claims.",
  ),
  disc(
    40,
    "Are grades useful?",
    "Education",
    "B2",
    {
      who: "Professor Duarte",
      text: "Some programmes have replaced grades with detailed written feedback and a pass or fail mark. Advocates say grades distort learning; critics say they provide information that employers and graduate schools need. Where do you stand?",
    },
    [
      {
        who: "Joanna",
        text: "Grades turn a piece of work into a number and students then optimise for the number. Ask any tutor how many emails are about the mark rather than the comments.",
      },
      {
        who: "Felix",
        text: "Remove grades and you do not remove ranking, you hide it. Selection still happens, just through reputation, references and where you studied, which is worse.",
      },
    ],
    "Felix makes the argument that decides this for me, though Joanna's diagnosis is accurate.\n\nStudents do optimise for the measure, and a numerical mark on a creative task narrows what gets attempted. But the alternative is not an absence of selection. Employers and graduate programmes will rank candidates regardless, and in the absence of a public measure they fall back on signals that correlate far more strongly with background than a mark does.\n\nA better target is what is graded rather than whether. Grading the final artefact rewards polish; grading a revision process rewards the behaviour we actually want. That keeps the information Felix needs while removing most of the distortion Joanna describes.",
  ),
  disc(
    41,
    "Should public transport be free?",
    "Politiques publiques",
    "B2",
    {
      who: "Dr Novak",
      text: "A number of cities have made buses and trams free at the point of use. Reported effects include higher ridership and lower fare-collection costs, but also crowding and pressure on maintenance budgets. Would you recommend free public transport for a mid-sized city?",
    },
    [
      {
        who: "Clara",
        text: "Yes. Fares are a small share of operating cost once you subtract collection and enforcement, and removing them speeds up boarding, which improves the service for everyone.",
      },
      {
        who: "Dmitri",
        text: "The people who switch are mostly walkers and cyclists, not drivers. You spend a lot of money to move the wrong group and the roads look the same.",
      },
    ],
    "Dmitri's point about who actually switches is the strongest objection here, and I think it changes the goal rather than the policy.\n\nIf free travel mainly attracts former walkers, it fails as a congestion measure. But the evidence he refers to also shows large gains among low-income and older users, which is a welfare result rather than a transport one, and worth funding on that basis if the city says so openly.\n\nWhere I agree with Dmitri is against selling it as a climate policy. Getting drivers out of cars requires making driving worse or the alternative faster, and neither follows from a zero fare. Frequency, not price, is what a commuter compares.",
  ),
];
