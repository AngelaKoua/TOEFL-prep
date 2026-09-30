/* Writing, tests 16 a 24 : Write an Email */

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

export const writingB = [
  email(
    16,
    "Requesting an extension",
    "Vie universitaire",
    "B2",
    "Your seminar paper is due on Friday. You have been ill for four days and have a medical certificate. Write to your tutor, Dr Okonjo.",
    [
      "Explain the situation briefly and factually",
      "Request a specific new deadline rather than asking vaguely for more time",
      "Say what you have already completed",
    ],
    "Dear Dr Okonjo,\n\nI am writing about the seminar paper due on Friday 14 March. I have been ill since Monday and have a medical certificate from the campus health centre, which I can send you today.\n\nI have completed the reading and a full outline, and the first section is drafted. What I have not been able to do is the analysis of the interview data, which needs about three working days.\n\nWould it be possible to submit on Wednesday 19 March instead? If a shorter extension is easier, I could manage Tuesday.\n\nPlease let me know what documentation you need.\n\nBest regards,\nMarion Delcourt",
    [
      "I am writing about ... : ouverture neutre et directe",
      "What I have not been able to do is ... : isole precisement le blocage",
      "Would it be possible to ... instead? : demande sans exiger",
      "If a shorter extension is easier, I could ... : montre de la souplesse",
    ]
  ),
  email(
    17,
    "Complaining about a delivery",
    "Consommation",
    "B1",
    "You ordered a desk lamp online three weeks ago. It arrived damaged and the seller has not replied to two messages. Write to customer services.",
    [
      "Give the order details and dates",
      "Describe the damage clearly",
      "State exactly what you want to happen and by when",
    ],
    "Dear Customer Services,\n\nI ordered a Larsson desk lamp on 2 October, order number 88431. It arrived on 9 October with a cracked base and a bent shade, and the box itself was undamaged, so the problem is not with the courier.\n\nI have contacted the seller twice, on 9 and 14 October, and have had no reply.\n\nI would like a replacement lamp rather than a refund, as I still need it. If a replacement is not available, I would accept a full refund including the delivery charge.\n\nCould you confirm within five working days which of these you can offer?\n\nYours faithfully,\nPaul Menard",
    [
      "the box itself was undamaged, so ... : anticipe l'objection",
      "I would like ... rather than ... : exprime une preference claire",
      "If ... is not available, I would accept ... : propose une solution de repli",
      "Could you confirm within ... : impose une echeance poliment",
    ]
  ),
  email(
    18,
    "Accepting a job offer",
    "Monde professionnel",
    "B2",
    "You have been offered a junior analyst position. You want to accept but need to start two weeks later than proposed. Write to the hiring manager.",
    [
      "Accept clearly and warmly",
      "Explain the start date issue and propose an alternative",
      "Ask one practical question about the first week",
    ],
    "Dear Ms Tanaka,\n\nThank you for the offer of the junior analyst position. I am very glad to accept.\n\nThere is one point I would like to raise. The proposed start date is 1 June, but my current contract runs until 12 June and I would rather leave properly than cut it short. Could we agree on 16 June instead? I am happy to complete any onboarding paperwork before then.\n\nOne practical question: will I need to bring my own laptop for the first week, or is equipment provided from day one?\n\nI look forward to joining the team.\n\nBest regards,\nSofia Ricci",
    [
      "There is one point I would like to raise : annonce une reserve sans refuser",
      "I would rather ... than ... : justifie par un principe, pas par un caprice",
      "I am happy to ... before then : compense la demande",
      "One practical question: ... : isole la question pour qu'elle ne se perde pas",
    ]
  ),
  email(
    19,
    "Asking a neighbour about noise",
    "Vie quotidienne",
    "B1",
    "Your upstairs neighbour has been doing building work early in the morning for two weeks. Write a first, friendly message.",
    [
      "Stay friendly and avoid accusation",
      "Give the specific times that cause the problem",
      "Propose a concrete arrangement",
    ],
    "Hi Daniel,\n\nI hope the flat is coming along well. I wanted to mention something before it becomes an issue between us.\n\nThe drilling has been starting around seven most mornings, and I work nights, so I am usually asleep until nine. It is only the early part that is difficult; the afternoon noise does not bother me at all.\n\nWould it be possible to start at nine instead? If that slows the work down too much, even three mornings a week would help enormously.\n\nLet me know what works. Happy to talk about it in person if that is easier.\n\nBest,\nAmelie (flat 2B)",
    [
      "I wanted to mention something before ... : desamorce le conflit",
      "It is only ... that is difficult : delimite le probleme",
      "Would it be possible to ... instead? : propose sans exiger",
      "Let me know what works : laisse la main a l'autre",
    ]
  ),
  email(
    20,
    "Requesting information from a department",
    "Etudes",
    "B2",
    "You are considering a master's programme and the website does not say whether the dissertation can be written in English. Write to the admissions office.",
    [
      "Say who you are and what you are applying for",
      "Ask two precise questions",
      "Mention your deadline for deciding",
    ],
    "Dear Admissions Office,\n\nI am a final-year sociology student at the University of Rouen and I am considering applying to the MSc in Social Policy starting next September.\n\nTwo points are not covered on your website. First, may the dissertation be written in English, or is French required for all submitted work? Second, does the programme accept a B2 certificate, or is C1 needed for entry?\n\nI would be grateful for an answer before 20 January, as I need to finalise my applications by the end of that month.\n\nThank you for your help.\n\nYours faithfully,\nThomas Bauer",
    [
      "Two points are not covered on your website : justifie l'email",
      "First ... Second ... : rend les questions faciles a traiter",
      "I would be grateful for an answer before ... : donne l'urgence sans presser",
      "Thank you for your help : cloture sobre",
    ]
  ),
  email(
    21,
    "Cancelling a booking",
    "Voyage",
    "B1",
    "You booked a hotel room for a conference that has been moved online. The booking was non-refundable. Write to the hotel.",
    [
      "Give the booking details",
      "Explain why you are asking for an exception",
      "Suggest an alternative to a full refund",
    ],
    "Dear Sir or Madam,\n\nI have a non-refundable booking at your hotel from 3 to 6 April, reference HR2214, under the name Lefevre.\n\nThe conference I was attending has been moved online by the organisers, so the reason for the trip no longer exists. I understand this is not your responsibility and that the rate I chose was non-refundable.\n\nRather than a refund, would you be able to move the booking to a later date? I travel to the city twice a year and would be glad to use the credit before the end of December.\n\nThank you for considering this.\n\nYours faithfully,\nClara Lefevre",
    [
      "I understand this is not your responsibility : reconnait la position de l'autre",
      "Rather than a refund, would you be able to ... : demande plus acceptable",
      "I would be glad to ... : offre une contrepartie",
      "Thank you for considering this : n'affirme pas un droit",
    ]
  ),
  email(
    22,
    "Following up after an interview",
    "Candidature",
    "B2",
    "You were interviewed eleven days ago and were told you would hear within a week. Write a follow-up.",
    [
      "Refer to the interview precisely",
      "Ask for an update without sounding impatient",
      "Add one short piece of new information",
    ],
    "Dear Mr Halvorsen,\n\nThank you again for meeting me on 12 May to discuss the research assistant post.\n\nYou mentioned that decisions would be made within a week, so I wanted to check whether the timeline has shifted. I remain very interested in the role, particularly the fieldwork component we discussed.\n\nOne small update: the paper I mentioned, on survey attrition in longitudinal studies, has now been accepted and I can send the final version if that would be useful.\n\nI appreciate that hiring takes time, and I am happy to wait if there is simply a delay.\n\nBest regards,\nInes Roche",
    [
      "You mentioned that ... so I wanted to check ... : relance factuelle",
      "I remain very interested in ... : reaffirme sans supplier",
      "One small update: ... : donne une raison legitime d'ecrire",
      "I appreciate that hiring takes time : enleve toute pression",
    ]
  ),
  email(
    23,
    "Declining an invitation",
    "Relations professionnelles",
    "B2",
    "A colleague has invited you to join a weekend working group. You do not want to join, but you want to keep the relationship good.",
    [
      "Decline clearly, without leaving false hope",
      "Give a genuine but brief reason",
      "Offer something smaller that you can actually do",
    ],
    "Hi Nadia,\n\nThank you for thinking of me for the weekend group. I have given it some thought and I am going to say no.\n\nThe honest reason is capacity rather than interest. I am already covering two modules this term and I know I would end up doing the work badly or dropping out halfway, which would be worse for the group than not joining.\n\nWhat I can offer is a single session: I would be glad to run the workshop on coding qualitative data in March, if that is still needed.\n\nI hope it goes well, and do send me the notes.\n\nBest,\nYann",
    [
      "I have given it some thought and ... : montre que le refus est reflechi",
      "The honest reason is ... rather than ... : evite le pretexte",
      "What I can offer is ... : compense par un engagement reel",
      "I hope it goes well : maintient la relation",
    ]
  ),
  email(
    24,
    "Reporting a problem to a landlord",
    "Logement",
    "B1",
    "The boiler in your rented flat has been producing no hot water for five days. You reported it by phone but nothing has happened.",
    [
      "Record the history of the problem with dates",
      "State the effect on daily life",
      "Ask for a specific action and a date",
    ],
    "Dear Mr Whitfield,\n\nI am writing about the boiler at 14 Ashcombe Road, flat 3.\n\nThere has been no hot water since Saturday 8 February. I reported this by phone on Monday 10 February and was told an engineer would call, but I have had no contact since.\n\nThere are two of us in the flat and we are currently heating water on the hob, which is not workable for much longer.\n\nCould you confirm by Friday when an engineer will visit? If that is difficult, I am at home on Thursday and Saturday and can give access at any time.\n\nThank you,\nLea Fontaine",
    [
      "There has been no ... since ... : pose les faits datees",
      "which is not workable for much longer : exprime l'urgence sans menace",
      "Could you confirm by ... when ... : demande une date, pas une intention",
      "I can give access at any time : retire l'excuse la plus frequente",
    ]
  ),
];
