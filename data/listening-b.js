/* Listening, tests 9 a 15 : Listen to a Conversation */

const C = "Listen to a Conversation";

export const listeningB = [
  {
    id: 9,
    title: "A missed lecture",
    topic: "Vie universitaire",
    taskLabel: C,
    type: "audio",
    level: "B1",
    script:
      "Man: You weren't in the ten o'clock lecture.\nWoman: I had a dentist appointment I couldn't move. Was there anything important?\nMan: He announced the exam format. It's changed. Two questions instead of three, but one of them is compulsory and worth half the paper.\nWoman: Which one is compulsory?\nMan: The data interpretation question. He said it's the part people avoid, so now they can't.\nWoman: That's actually fair. Did he put the slides up?\nMan: He never does. But he repeated it twice, so I think he expects it to travel.\nWoman: I'll email him to confirm. If I'm going to reorganise a month of revision I'd rather have it in writing.",
    questions: [
      {
        q: "What has changed about the exam?",
        options: [
          "It is now two questions with one compulsory",
          "It has been moved to a later date",
          "It is now three questions instead of two",
          "It is open book",
        ],
        answer: 0,
        explanation: "Deux questions, dont une obligatoire valant la moitie.",
      },
      {
        q: "Why was the data question made compulsory?",
        options: [
          "It is the easiest to mark",
          "Students tend to avoid it",
          "It was requested by students",
          "It replaces a coursework element",
        ],
        answer: 1,
        explanation: "C'est la partie que les gens evitent, donc elle devient obligatoire.",
      },
      {
        q: "Why will the woman email the lecturer?",
        options: [
          "To ask for the slides",
          "To request an extension",
          "To have the change confirmed in writing",
          "To apologise for her absence",
        ],
        answer: 2,
        explanation: "Elle veut une confirmation ecrite avant de revoir son planning.",
      },
    ],
  },
  {
    id: 10,
    title: "Opening a bank account",
    topic: "Demarches",
    taskLabel: C,
    type: "audio",
    level: "B1",
    script:
      "Adviser: You'd like a student account. Do you have proof of address?\nStudent: I have my tenancy agreement.\nAdviser: That works. And your student status letter, which you can download from the portal. The passport alone isn't enough.\nStudent: I can get that in five minutes on my phone.\nAdviser: Do that and we'll finish today. The account comes with a small overdraft, but I'd rather you saw it as an emergency line than as extra money. It's interest free up to a limit, and above that limit it isn't.\nStudent: How long until the card arrives?\nAdviser: Five working days to the address on the agreement. The app works immediately, so you can receive money before the card comes. Don't let anyone send anything large until you've checked the details yourself.",
    questions: [
      {
        q: "What does the student still need?",
        options: [
          "A passport",
          "A student status letter",
          "A tenancy agreement",
          "A reference from the university",
        ],
        answer: 1,
        explanation: "Le justificatif de statut etudiant, telechargeable sur le portail.",
      },
      {
        q: "How does the adviser describe the overdraft?",
        options: [
          "As extra spending money",
          "As an emergency line, interest free up to a limit",
          "As unavailable to first-year students",
          "As always charged at a high rate",
        ],
        answer: 1,
        explanation: "Une reserve d'urgence, sans interet jusqu'a un plafond.",
      },
      {
        q: "What can the student do before the card arrives?",
        options: [
          "Withdraw cash at the counter only",
          "Nothing, the account is inactive",
          "Receive money through the app",
          "Order a second card",
        ],
        answer: 2,
        explanation: "L'application fonctionne immediatement.",
      },
    ],
  },
  {
    id: 11,
    title: "Field trip logistics",
    topic: "Sortie pedagogique",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Woman: About the geology trip, I need to know whether the coach leaves from campus or from the station.\nMan: Campus, main gate, six forty. It will not wait. Last year two people watched it leave.\nWoman: Six forty. And what do we actually need?\nMan: Boots with ankle support, waterproofs, and a hard hat which we lend you. Trainers are refused at the site entrance, not by me, by the quarry.\nWoman: I don't own boots.\nMan: The outdoor society lends them, but you have to book by Wednesday and leave a deposit.\nWoman: Is lunch provided?\nMan: No, and there is nothing to buy within twenty kilometres. Bring more water than you think. The write-up is due a week after we return, and it uses the field notebook, so keep it dry.",
    questions: [
      {
        q: "Where and when does the coach leave?",
        options: [
          "Station, six forty",
          "Main gate, six forty",
          "Main gate, seven forty",
          "Station, seven o'clock",
        ],
        answer: 1,
        explanation: "Portail principal du campus a six heures quarante.",
      },
      {
        q: "Who refuses trainers at the site?",
        options: ["The tutor", "The coach driver", "The quarry", "The outdoor society"],
        answer: 2,
        explanation: "Not by me, by the quarry.",
      },
      {
        q: "What is said about the write-up?",
        options: [
          "It is due a week after the return and uses the field notebook",
          "It must be handed in on the coach",
          "It is optional for first-year students",
          "It replaces the end-of-term exam",
        ],
        answer: 0,
        explanation: "Rendu une semaine apres, a partir du carnet de terrain.",
      },
    ],
  },
  {
    id: 12,
    title: "Negotiating a deadline",
    topic: "Travail ecrit",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Student: I'd like to ask for an extension on the case study.\nTutor: How long do you need and why?\nStudent: A week. I've had two deadlines in the same three days and I know the work I'd hand in tomorrow isn't what I can do.\nTutor: I appreciate the honesty, but workload clashes aren't formal grounds, so I can't give you the mitigating circumstances route. What I can do is a three-day discretionary extension, which doesn't need paperwork.\nStudent: Three days would help.\nTutor: Take them. One condition: send me your outline tomorrow anyway. Extensions fail when people use the extra days to start rather than to finish.\nStudent: That's fair.\nTutor: And look at your calendar for May. You have the same clash again, and you can move one of those submissions now, in a way you can't move it then.",
    questions: [
      {
        q: "Why can the tutor not grant mitigating circumstances?",
        options: [
          "The request came too late",
          "A workload clash is not a formal ground",
          "The student has already used one extension",
          "The module does not allow extensions",
        ],
        answer: 1,
        explanation: "Les chevauchements de charge ne sont pas un motif recevable.",
      },
      {
        q: "What condition does the tutor attach?",
        options: [
          "Submitting an outline the next day",
          "Attending an extra tutorial",
          "Reducing the word count",
          "Working with another student",
        ],
        answer: 0,
        explanation:
          "Un plan des demain, pour que les jours servent a finir et non a commencer.",
      },
      {
        q: "What advice does the tutor give about May?",
        options: [
          "To apply for an extension in advance",
          "To move one submission while it is still possible",
          "To take fewer modules",
          "To ask for a different tutor",
        ],
        answer: 1,
        explanation:
          "Le meme conflit revient et une soumission peut encore etre deplacee.",
      },
    ],
  },
  {
    id: 13,
    title: "Joining a research project",
    topic: "Recherche",
    taskLabel: C,
    type: "audio",
    level: "C1",
    script:
      "Student: I saw your notice about a research assistant.\nResearcher: I did. Tell me what you imagine the job is.\nStudent: Running experiments, I suppose. Analysing results.\nResearcher: Eventually. For the first two months it is cleaning a dataset that eleven different people entered inconsistently over six years. It is tedious and it is the single most important part of the project, because every later conclusion sits on top of it.\nStudent: That's honest.\nResearcher: People leave after three weeks when I'm not honest. The hours are flexible, eight a week, and I will put your name on anything you contribute to. What I need is someone who will tell me when something looks wrong rather than quietly fixing it.\nStudent: Why is that better?\nResearcher: Because if you fix it silently, I never learn that the data collection has a problem. The error matters more than the correction.",
    questions: [
      {
        q: "What will the work involve for the first two months?",
        options: [
          "Running experiments",
          "Cleaning an inconsistent dataset",
          "Writing a literature review",
          "Interviewing participants",
        ],
        answer: 1,
        explanation:
          "Nettoyer un jeu de donnees saisi de facon incoherente par onze personnes.",
      },
      {
        q: "Why is the researcher blunt about the task?",
        options: [
          "To discourage applicants",
          "Because people leave when she is not honest",
          "Because the university requires it",
          "To justify the low pay",
        ],
        answer: 1,
        explanation: "People leave after three weeks when I'm not honest.",
      },
      {
        q: "What does she most want from the assistant?",
        options: [
          "To work more than eight hours a week",
          "To correct errors without asking",
          "To report anything that looks wrong",
          "To publish independently",
        ],
        answer: 2,
        explanation:
          "L'erreur signalee lui apprend qu'il y a un probleme de collecte.",
      },
    ],
  },
  {
    id: 14,
    title: "Gym membership and injury",
    topic: "Sport",
    taskLabel: C,
    type: "audio",
    level: "B1",
    script:
      "Member: I've hurt my shoulder and I can't train for at least six weeks. Can I pause my membership?\nStaff: We can freeze it for up to three months, but we need something from a physiotherapist or a doctor. A message saying you're injured isn't enough, I'm afraid.\nMember: I have an appointment on Monday.\nStaff: Bring the note then and we'll backdate the freeze to today, so you don't lose the days in between.\nMember: Will I still be charged?\nStaff: A freeze is five euros a month instead of the full fee, which keeps the joining discount you got in September. Cancelling entirely is free, but if you rejoin later you pay the joining fee again, and it's forty.\nMember: So freezing is cheaper if I come back within eight months.\nStaff: That's the arithmetic, yes.",
    questions: [
      {
        q: "What does the gym require to freeze the membership?",
        options: [
          "A note from a physiotherapist or doctor",
          "Two weeks' written notice",
          "A payment of forty euros",
          "Proof of a gym injury",
        ],
        answer: 0,
        explanation: "Un simple message ne suffit pas.",
      },
      {
        q: "What does backdating the freeze achieve?",
        options: [
          "It reduces the monthly fee to zero",
          "It avoids losing the days before the note arrives",
          "It extends the membership by a month",
          "It cancels the joining fee",
        ],
        answer: 1,
        explanation: "Le gel prend effet aujourd'hui, pas lundi.",
      },
      {
        q: "Why might cancelling cost more overall?",
        options: [
          "Cancellation carries a penalty",
          "The joining fee must be paid again on return",
          "Refunds are not given",
          "The monthly rate rises each year",
        ],
        answer: 1,
        explanation: "Quarante euros de frais d'inscription a la reinscription.",
      },
    ],
  },
  {
    id: 15,
    title: "Presentation rehearsal feedback",
    topic: "Prise de parole",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Man: So, honestly, how was it?\nWoman: The content is strong. The delivery is fighting it.\nMan: Meaning?\nWoman: You said every number twice, as if you didn't trust us to hear it. And you apologised three times for slides that were fine.\nMan: I didn't notice.\nWoman: Nobody does. Also, your best point, the one about the survey being run twice, arrived at minute eleven of twelve. It should be at minute two.\nMan: But it's the conclusion.\nWoman: It's the reason anyone should keep listening. Put it early, then show how you got there. Academics like a story that builds; audiences at a conference like knowing where they are being taken.\nMan: What about the slides?\nWoman: Fewer words, and stop reading them aloud. If the slide says it, you say something else.",
    questions: [
      {
        q: "What is the woman's overall judgement?",
        options: [
          "The content is weak but the delivery is good",
          "The content is strong but the delivery undermines it",
          "Both content and delivery need rewriting",
          "The presentation is too short",
        ],
        answer: 1,
        explanation: "The content is strong. The delivery is fighting it.",
      },
      {
        q: "What does she suggest about the key point?",
        options: [
          "Remove it entirely",
          "Move it near the beginning",
          "Repeat it at the end",
          "Put it on a separate slide",
        ],
        answer: 1,
        explanation: "Elle veut l'entendre a la minute deux, pas onze.",
      },
      {
        q: "What is her advice about slides?",
        options: [
          "Add more detail so nothing is forgotten",
          "Use fewer words and do not read them aloud",
          "Use one slide per minute",
          "Remove all numbers",
        ],
        answer: 1,
        explanation: "Si la diapositive le dit, dites autre chose.",
      },
    ],
  },
];
