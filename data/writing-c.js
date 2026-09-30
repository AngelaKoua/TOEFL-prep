/* Writing, tests 25 a 32 : Write an Email */

const E = "Write an Email";

const RUBRIC = [
  "J'ai traite les trois points demandes, sans en oublier un.",
  "Le registre est constant du debut a la fin, sans melange de formel et de familier.",
  "Chaque paragraphe a un seul but : contexte, demande, cloture.",
  "J'ai utilise au moins deux tournures de la liste sans les recopier mecaniquement.",
  "Je n'ai pas de faute qui gene la comprehension a la premiere lecture.",
];

const email = (id, title, topic, level, situation, requirements, model, phrases) => ({
  id,
  title,
  topic,
  taskLabel: E,
  type: "email",
  level,
  minutes: 7,
  targetWords: 100,
  situation,
  requirements,
  rubric: RUBRIC,
  model,
  phrases,
});

export const writingC = [
  email(
    25,
    "Asking for feedback on a draft",
    "Etudes",
    "B2",
    "You want your supervisor to read a chapter draft. She is busy and you have asked once before without a reply.",
    [
      "Make it easy to say yes by limiting what you ask for",
      "Give a clear deadline and say what happens if she cannot",
      "Tell her what kind of feedback you want",
    ],
    "Dear Professor Lindqvist,\n\nI have finished a draft of chapter two, about eleven pages.\n\nI know your term is full, so I would like to ask for something narrow rather than a full read. If you could look only at section 2.3, where I set out the sampling strategy, that would be the most useful three pages by far.\n\nWhat I need is not line editing but a judgement on whether the logic holds. Anything by 28 April would still fit my timetable, and if that is not possible I will go ahead and revise it myself.\n\nThe file is attached.\n\nBest regards,\nOmar Haddad",
    [
      "I would like to ask for something narrow rather than ... : reduit le cout de la demande",
      "that would be the most useful ... by far : explique le choix",
      "What I need is not ... but ... : cadre le type de retour attendu",
      "if that is not possible I will ... : libere l'autre de toute culpabilite",
    ]
  ),
  email(
    26,
    "Rescheduling a meeting",
    "Monde professionnel",
    "B1",
    "You need to move a meeting you yourself requested. Three other people are attending.",
    [
      "Apologise briefly, once, and move on",
      "Offer at least two alternative slots",
      "Say what people should do if neither works",
    ],
    "Dear all,\n\nI am sorry to do this, but I need to move Thursday's meeting: the client review has been brought forward to the same hour and I cannot be in both.\n\nTwo alternatives that work at my end are Friday at 10.00 and Monday at 14.00, both in room B4. Either would keep us ahead of the reporting deadline.\n\nCould you reply with your preference by tomorrow lunchtime? If neither suits everyone, I will send a short poll rather than another round of emails.\n\nThe agenda is unchanged and I will circulate the figures beforehand.\n\nThanks for your flexibility,\nRuth",
    [
      "I am sorry to do this, but ... : une seule excuse, puis on avance",
      "Two alternatives that work at my end are ... : evite le ping-pong",
      "Could you reply with your preference by ... : fixe une echeance",
      "I will send a short poll rather than ... : prevoit le plan B",
    ]
  ),
  email(
    27,
    "Requesting a refund from a course provider",
    "Consommation",
    "B2",
    "An online course you paid for has changed its content substantially after you enrolled.",
    [
      "Show what was promised and what was delivered",
      "Refer to the terms you are relying on",
      "State the outcome you want",
    ],
    "Dear Support Team,\n\nI enrolled on the Data Visualisation course on 4 September, account reference 77120.\n\nThe course page at the time listed four modules, including one on interactive dashboards, which was the reason I chose it. That module has since been removed and replaced with a recorded webinar. This is a change to the advertised content, not simply a change of timetable.\n\nYour terms allow a refund where the syllabus changes materially after enrolment. On that basis I am requesting a full refund of 240 euros.\n\nIf you prefer, I would accept a transfer to the January cohort provided the dashboard module returns.\n\nYours faithfully,\nEva Nowak",
    [
      "which was the reason I chose it : etablit le lien causal",
      "This is a change to ..., not simply ... : bloque la reponse standard",
      "Your terms allow ... On that basis I am requesting ... : appuie la demande",
      "If you prefer, I would accept ... provided ... : ouvre une porte conditionnelle",
    ]
  ),
  email(
    28,
    "Introducing yourself to a new team",
    "Monde professionnel",
    "B1",
    "You start on Monday in a team of eight people you have never met. Write a short introduction.",
    [
      "Say who you are and what you will be doing",
      "Give one useful, human detail",
      "Make it easy for people to approach you",
    ],
    "Hello everyone,\n\nI am Jonas Reyes and I join the logistics team on Monday as a planning coordinator. I will be taking over the weekly route schedule from Ana while she moves to the new depot project.\n\nI spent the last three years in a smaller warehouse operation, so I am used to doing several jobs at once and I am not used to formal processes. You will probably have to tell me the obvious things twice in the first month, and I would rather you did.\n\nI sit by the window on the second floor. Come and say hello, or send me anything you think I should read.\n\nBest,\nJonas",
    [
      "I will be taking over ... from ... : precise le perimetre",
      "I am used to ... and I am not used to ... : honnete et memorable",
      "I would rather you did : invite explicitement la correction",
      "Come and say hello : ouvre la porte concretement",
    ]
  ),
  email(
    29,
    "Asking for a reference",
    "Candidature",
    "B2",
    "You need a reference from a former manager you have not contacted for two years.",
    [
      "Reconnect without pretending you kept in touch",
      "Make the request easy by supplying materials",
      "Give the deadline and an easy way to refuse",
    ],
    "Dear Mrs Aitken,\n\nIt has been a while since we worked together at Brightside, and I hope the new branch has settled in.\n\nI am applying for a project officer post at the city council and they ask for a reference from a former line manager. I would be very glad if you felt able to write one.\n\nTo make it quick, I have attached the job description, a one-page summary of what I did on the transport audit, and the dates of my contract. The deadline is 12 June and the form takes about fifteen minutes.\n\nIf you would rather not, please just say so; it will not be awkward.\n\nWith thanks,\nPierre Aubert",
    [
      "It has been a while since ... : assume la distance",
      "I would be very glad if you felt able to ... : demande sans presser",
      "To make it quick, I have attached ... : reduit l'effort de l'autre",
      "If you would rather not, please just say so : autorise le refus",
    ]
  ),
  email(
    30,
    "Negotiating a workload",
    "Monde professionnel",
    "C1",
    "Your manager has added a third project to your workload. You want to push back without refusing outright.",
    [
      "Accept the goal, question the arrangement",
      "Show the trade-off in concrete terms",
      "Propose two options and let the manager choose",
    ],
    "Dear Marc,\n\nI understand why the audit needs to start now, and I am not arguing against taking it on.\n\nWhat I want to flag is the arithmetic. The migration alone is taking about three days a week until the end of April, and the supplier review has fixed external deadlines I cannot move. Adding the audit means one of the three will slip, and I would rather choose which one with you than let it happen by accident.\n\nTwo options. Either the audit starts in May and I keep the current sequence, or I hand the supplier review to Priya and start the audit next week.\n\nI am comfortable with either. Which would you prefer?\n\nBest,\nHelena",
    [
      "I am not arguing against ... : desamorce la lecture defensive",
      "What I want to flag is ... : nomme le probleme sans dramatiser",
      "I would rather choose ... than let it happen by accident : cadre le risque",
      "I am comfortable with either. Which would you prefer? : rend la main",
    ]
  ),
  email(
    31,
    "Thanking someone who helped you",
    "Relations",
    "B1",
    "Someone put you in touch with a contact and it led to an internship. Write to thank them.",
    [
      "Be specific about what they did",
      "Say what came of it",
      "Offer something in return without being vague",
    ],
    "Dear Fatou,\n\nI wanted to tell you how it turned out. You introduced me to Samir at the careers evening in November, and that conversation led directly to a summer placement at his lab. I start on 10 June.\n\nI know introductions cost something, because you are putting your own name behind the person you send. Thank you for doing that when you barely knew me.\n\nIf it is ever useful, I am happy to talk to your first-year tutees about how the placement search actually works. I have a fairly honest account of the rejections as well as the offer.\n\nThank you again,\nNoor",
    [
      "I wanted to tell you how it turned out : donne une raison d'ecrire",
      "that conversation led directly to ... : montre le resultat concret",
      "I know introductions cost something, because ... : reconnait l'effort reel",
      "If it is ever useful, I am happy to ... : contrepartie precise",
    ]
  ),
  email(
    32,
    "Correcting a mistake you made",
    "Monde professionnel",
    "B2",
    "You sent a report to a client with an error in the figures. It was sent yesterday.",
    [
      "State the error immediately, without a long preamble",
      "Say what the consequence is and is not",
      "Explain what you have done and what happens next",
    ],
    "Dear Ms Farrow,\n\nThere is an error in the report I sent you yesterday and I want to correct it before you circulate it.\n\nThe figure for Q3 unit costs on page 6 is 12.40, not 14.20. The digits were transposed when the table was rebuilt. The error appears only in that cell, and the totals and the conclusion are unaffected, but the sentence beneath the table now reads incorrectly.\n\nA corrected version is attached, with the change highlighted on page 6. I have also checked the other three tables line by line and found nothing else.\n\nI am sorry for the inconvenience and for any version confusion.\n\nBest regards,\nDaniel Osei",
    [
      "There is an error in ... and I want to correct it before ... : ouverture directe",
      "The error appears only in ... : limite la portee, faits a l'appui",
      "I have also checked ... and found nothing else : rassure sur le reste",
      "I am sorry for the inconvenience : une excuse breve, pas une auto-flagellation",
    ]
  ),
];
