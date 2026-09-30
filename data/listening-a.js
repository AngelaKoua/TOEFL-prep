/* Listening, tests 1 a 8 : Listen to a Conversation */

const C = "Listen to a Conversation";

export const listeningA = [
  {
    id: 1,
    title: "Changing a dissertation topic",
    topic: "Bureau du tuteur",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Student: Professor Allen, do you have a minute? I wanted to talk about my dissertation topic.\nProfessor: Of course. You were looking at urban noise, weren't you?\nStudent: That's the problem. I've been reading for three weeks and everything useful has already been done. I think I need to change.\nProfessor: Before you throw it out, tell me what you actually found interesting while you were reading.\nStudent: Honestly, the part about how hospitals measure night-time noise. Nobody seems to have looked at whether the measurements match what patients report.\nProfessor: That is a topic. It's narrower than what you proposed, and narrower is usually better at this stage. You would need access to a ward, though.\nStudent: My cousin works at St Mary's.\nProfessor: Start there, but go through the ethics committee properly. Send me two pages by Friday and we'll see whether it holds together.",
    questions: [
      {
        q: "Why does the student come to the office?",
        options: [
          "To ask for an extension on a deadline",
          "To discuss changing the dissertation topic",
          "To complain about a reading list",
          "To request access to a hospital",
        ],
        answer: 1,
        explanation:
          "Des la premiere replique, l'etudiant annonce vouloir parler du sujet de memoire.",
      },
      {
        q: "What does the professor suggest before abandoning the topic?",
        options: [
          "Reading three more weeks of literature",
          "Identifying what was interesting in the reading already done",
          "Choosing a broader question",
          "Speaking to another supervisor",
        ],
        answer: 1,
        explanation:
          "Before you throw it out, tell me what you actually found interesting.",
      },
      {
        q: "What is the professor's attitude to the narrower topic?",
        options: [
          "Doubtful but willing to be convinced",
          "Clearly opposed",
          "Broadly positive, with a condition about access",
          "Indifferent",
        ],
        answer: 2,
        explanation:
          "That is a topic, narrower is usually better, mais il faut passer par le comite d'ethique.",
      },
    ],
    notes: [
      "Before you throw it out : avant de tout jeter",
      "whether it holds together : si ca tient debout",
    ],
  },
  {
    id: 2,
    title: "A problem with a lab group",
    topic: "Travail en groupe",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Woman: You look like you've had a long day.\nMan: Our lab group presents on Thursday and one member hasn't sent anything for two weeks.\nWoman: Have you asked him directly?\nMan: I've messaged twice. Nothing. The others want to just do his part and mention it to the tutor afterwards.\nWoman: That's the worst of both options. You do the extra work, and the tutor only hears about it once the marks are decided.\nMan: So what would you do?\nWoman: Email him with a specific deadline and copy the tutor. Not as a complaint, just a summary of who is doing what. It gives him a chance and it puts a date on the record.\nMan: That feels aggressive.\nWoman: It feels aggressive for about a day. Losing twenty per cent of your mark feels aggressive for a term.",
    questions: [
      {
        q: "What is the man's problem?",
        options: [
          "He does not understand the assignment",
          "A group member has not contributed",
          "The presentation date has been moved",
          "His tutor has not replied to him",
        ],
        answer: 1,
        explanation:
          "Un membre du groupe n'a rien envoye depuis deux semaines.",
      },
      {
        q: "Why does the woman reject the group's plan?",
        options: [
          "It takes too much time to organise",
          "The tutor would learn only after grading",
          "It would upset the missing student",
          "The tutor has already been informed",
        ],
        answer: 1,
        explanation:
          "Le tuteur n'apprend la situation qu'une fois les notes decidees.",
      },
      {
        q: "What does the woman recommend?",
        options: [
          "Emailing a deadline and copying the tutor",
          "Removing him from the group immediately",
          "Presenting without his section",
          "Asking for a later presentation slot",
        ],
        answer: 0,
        explanation:
          "Un email avec une echeance precise, en copie au tuteur, presente comme un recapitulatif.",
      },
    ],
    notes: [
      "to copy someone in : mettre en copie",
      "put a date on the record : acter une date par ecrit",
    ],
  },
  {
    id: 3,
    title: "At the accommodation office",
    topic: "Logement etudiant",
    taskLabel: C,
    type: "audio",
    level: "B1",
    script:
      "Student: Hello, I'd like to change rooms if that's possible.\nStaff: Tell me the reason first, because it affects which list you go on.\nStudent: My room is above the kitchen and there's noise until two most nights.\nStaff: That's a wellbeing request rather than a preference, which is the faster list. Have you reported the noise?\nStudent: I've spoken to the students twice.\nStaff: Spoken, but not reported through the app?\nStudent: No.\nStaff: Do that tonight. Two logged reports and I can move you within about ten days. Without them, you're on the general list, and that's running at seven weeks.\nStudent: And if I move, do I keep the same rent?\nStaff: If it's the same room category, yes. If you move to an en-suite, the difference is charged from the day you get the keys, not from the start of term.",
    questions: [
      {
        q: "Why does the student want to move?",
        options: [
          "The rent is too high",
          "Noise from the kitchen below",
          "A conflict with a flatmate",
          "The room is too small",
        ],
        answer: 1,
        explanation: "Du bruit jusqu'a deux heures du matin la plupart des nuits.",
      },
      {
        q: "What does the staff member insist the student do?",
        options: [
          "Speak to the students again",
          "File reports through the app",
          "Write a letter to the warden",
          "Pay a transfer fee",
        ],
        answer: 1,
        explanation:
          "Deux signalements enregistres dans l'application donnent acces a la liste rapide.",
      },
      {
        q: "When is the extra rent charged for an en-suite room?",
        options: [
          "From the start of term",
          "From the day the keys are handed over",
          "At the end of the year",
          "It is never charged",
        ],
        answer: 1,
        explanation: "La difference court a partir du jour de remise des cles.",
      },
    ],
    notes: [
      "a wellbeing request : une demande liee au bien-etre",
      "to log a report : enregistrer un signalement",
    ],
  },
  {
    id: 4,
    title: "Choosing between two modules",
    topic: "Orientation",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Man: I have to choose between Data Ethics and Advanced Statistics and I keep changing my mind.\nWoman: What does your course need?\nMan: Neither. They're both optional.\nWoman: Then pick on workload and what you want afterwards. Statistics has a weekly problem set, doesn't it?\nMan: Yes, and an exam. Ethics is one essay of four thousand words.\nWoman: Which is riskier, by the way. One piece of work carrying the whole mark.\nMan: I hadn't thought of it that way. I assumed one essay would be lighter.\nWoman: Lighter in hours, heavier in risk. If you want a data job, though, the statistics module is the one recruiters recognise, and you can say you can do it rather than that you've thought about it.\nMan: So statistics.\nWoman: Statistics, and keep the ethics reading list. Nobody stops you reading it.",
    questions: [
      {
        q: "What does the woman say about the ethics module's assessment?",
        options: [
          "It is easier because there is no exam",
          "It is riskier because one piece carries the mark",
          "It requires weekly problem sets",
          "It is marked by several tutors",
        ],
        answer: 1,
        explanation:
          "Un seul travail portant toute la note, donc plus risque.",
      },
      {
        q: "Why does she favour statistics for a data career?",
        options: [
          "It is shorter",
          "It is recognised by recruiters",
          "It has no final exam",
          "It includes an internship",
        ],
        answer: 1,
        explanation:
          "C'est le module que les recruteurs reconnaissent.",
      },
      {
        q: "What is her final suggestion?",
        options: [
          "Take both modules",
          "Take statistics and read the ethics material anyway",
          "Delay the decision until next term",
          "Ask the tutor to decide",
        ],
        answer: 1,
        explanation: "Nobody stops you reading it.",
      },
    ],
    notes: [
      "a problem set : une serie d'exercices",
      "lighter in hours, heavier in risk : moins lourd en temps, plus risque",
    ],
  },
  {
    id: 5,
    title: "Returning a faulty laptop",
    topic: "Vie quotidienne",
    taskLabel: C,
    type: "audio",
    level: "B1",
    script:
      "Customer: I bought this laptop six weeks ago and it shuts down whenever it gets warm.\nAssistant: Do you have the receipt?\nCustomer: I have the email confirmation.\nAssistant: That's fine. Within the first six months, a fault is assumed to be there from the start, so you don't have to prove anything. Your options are a repair or a replacement.\nCustomer: I'd rather have my money back.\nAssistant: A refund is only automatic in the first thirty days. After that we're entitled to attempt one repair first. If the repair fails, then you can ask for a refund or a replacement.\nCustomer: How long does a repair take?\nAssistant: Usually ten working days. I can give you a loan machine if you're a student, but it stays in the building.\nCustomer: That doesn't help much.\nAssistant: I know. If you can wait until Thursday, the technician comes in and sometimes it's a simple fan problem, done in an hour.",
    questions: [
      {
        q: "Why does the customer not need to prove the fault?",
        options: [
          "She has the original receipt",
          "The fault is assumed present from the start in the first six months",
          "The shop has had similar complaints",
          "The laptop is still in its packaging",
        ],
        answer: 1,
        explanation:
          "Dans les six premiers mois, le defaut est presume d'origine.",
      },
      {
        q: "Why can she not get a refund straight away?",
        options: [
          "She does not have a paper receipt",
          "Refunds require a manager's approval",
          "Automatic refunds apply only in the first thirty days",
          "The model is no longer sold",
        ],
        answer: 2,
        explanation:
          "Au-dela de trente jours, le magasin peut d'abord tenter une reparation.",
      },
      {
        q: "What does the assistant suggest at the end?",
        options: [
          "Waiting until Thursday for the technician",
          "Buying a different model",
          "Contacting the manufacturer directly",
          "Taking the loan machine home",
        ],
        answer: 0,
        explanation:
          "Le technicien passe jeudi et un simple probleme de ventilateur se regle en une heure.",
      },
    ],
    notes: [
      "a refund : un remboursement",
      "a loan machine : un appareil de pret",
    ],
  },
  {
    id: 6,
    title: "Asking for a reference",
    topic: "Candidature",
    taskLabel: C,
    type: "audio",
    level: "B2",
    script:
      "Student: Would you be willing to write me a reference for a master's application?\nProfessor: I would. When is it due?\nStudent: The eighteenth.\nProfessor: Of this month? That's nine days. I'll do it, but let me tell you what makes a reference weak, so you don't do this again. If I only remember that you attended, I can write three paragraphs that say nothing.\nStudent: What would help?\nProfessor: Send me the programme description, your statement of purpose, and a reminder of the two pieces of work you did for me, including the grades. And tell me what you want the letter to emphasise. If the programme is research heavy, I write about your project design. If it's professional, I write about how you worked in the group.\nStudent: I'll send it tonight.\nProfessor: Good. And ask people six weeks ahead next time. The best letters are not written in an evening.",
    questions: [
      {
        q: "What is the professor's main concern?",
        options: [
          "The student's grades are too low",
          "There is very little time before the deadline",
          "He has never taught the student",
          "The programme is not suitable",
        ],
        answer: 1,
        explanation: "Neuf jours seulement, d'ou la remarque sur les six semaines.",
      },
      {
        q: "What does he ask the student to provide?",
        options: [
          "A draft of the letter itself",
          "Programme details, statement of purpose and past work",
          "Contact details for two other referees",
          "A transcript from the registry",
        ],
        answer: 1,
        explanation:
          "Description du programme, lettre de motivation, travaux realises avec les notes.",
      },
      {
        q: "Why does he ask what the letter should emphasise?",
        options: [
          "Because the content depends on the type of programme",
          "Because he writes only one kind of letter",
          "Because the university requires it",
          "Because he wants the student to write it",
        ],
        answer: 0,
        explanation:
          "Programme axe recherche ou professionnel : il n'ecrit pas la meme chose.",
      },
    ],
    notes: [
      "a reference : une lettre de recommandation",
      "a statement of purpose : une lettre de motivation",
    ],
  },
  {
    id: 7,
    title: "Booking a study room",
    topic: "Bibliotheque",
    taskLabel: C,
    type: "audio",
    level: "A2",
    script:
      "Student: Can I book a group study room for Saturday?\nLibrarian: How many people?\nStudent: Six.\nLibrarian: Then you need one of the large rooms on level three. They go up to eight. Bookings open exactly seven days ahead at nine in the morning, and Saturday rooms usually go within ten minutes.\nStudent: So I should be online at nine next Saturday for the Saturday after.\nLibrarian: Exactly. One more thing: the booking is cancelled automatically if nobody scans in within fifteen minutes of the start time. Three cancellations and you lose booking rights for a month.\nStudent: Can I book two slots back to back?\nLibrarian: Not under one name. Two people in the group can each book one slot, though, and that's perfectly allowed.\nStudent: Great, thanks.\nLibrarian: Bring headphones. The rooms are not soundproof, whatever the sign says.",
    questions: [
      {
        q: "When do bookings open?",
        options: [
          "Seven days ahead at nine in the morning",
          "On the day itself",
          "Two weeks ahead",
          "At any time online",
        ],
        answer: 0,
        explanation: "Exactement sept jours a l'avance, a neuf heures.",
      },
      {
        q: "What happens if nobody scans in?",
        options: [
          "A fee is charged",
          "The booking is cancelled after fifteen minutes",
          "The room is locked for the day",
          "The group is moved to a smaller room",
        ],
        answer: 1,
        explanation: "Annulation automatique au bout de quinze minutes.",
      },
      {
        q: "How can the group get two consecutive slots?",
        options: [
          "By asking the librarian in person",
          "By paying for an extension",
          "By having two members book one slot each",
          "It is not possible",
        ],
        answer: 2,
        explanation: "Pas sous un seul nom, mais deux personnes peuvent reserver.",
      },
    ],
    notes: [
      "back to back : l'un apres l'autre, consecutifs",
      "to scan in : badger a l'entree",
    ],
  },
  {
    id: 8,
    title: "Appealing a grade",
    topic: "Administration",
    taskLabel: C,
    type: "audio",
    level: "C1",
    script:
      "Student: I want to appeal my mark for the second essay.\nAdviser: On what grounds?\nStudent: I think it's too low.\nAdviser: That isn't a ground, and I say that to help you. An appeal succeeds on procedure, not on judgement. Was the marking criteria published in advance?\nStudent: Yes.\nAdviser: Were you given feedback that matches the criteria?\nStudent: The feedback is two lines and doesn't mention the criteria at all.\nAdviser: Now that is arguable. Not that the mark is wrong, but that you cannot see how it was arrived at. Request a review of the feedback first. In about a third of cases the tutor rewrites it, and in some of those the mark moves.\nStudent: And if it doesn't?\nAdviser: Then you have a documented attempt to resolve it informally, which you need before a formal appeal is even accepted. Skipping that step is the commonest reason appeals are rejected without being read.",
    questions: [
      {
        q: "Why does the adviser reject the student's first reason?",
        options: [
          "The deadline for appeals has passed",
          "Appeals rest on procedure, not on academic judgement",
          "The student has already appealed once",
          "The mark cannot be changed after publication",
        ],
        answer: 1,
        explanation:
          "An appeal succeeds on procedure, not on judgement.",
      },
      {
        q: "What makes the student's case arguable?",
        options: [
          "The criteria were never published",
          "The feedback does not relate to the criteria",
          "The essay was marked by two tutors",
          "The mark is lower than the class average",
        ],
        answer: 1,
        explanation:
          "Deux lignes de retour qui ne mentionnent pas les criteres.",
      },
      {
        q: "Why does the adviser stress the informal step?",
        options: [
          "It is faster than a formal appeal",
          "It is required before a formal appeal is accepted",
          "It guarantees the mark will change",
          "It avoids involving the tutor",
        ],
        answer: 1,
        explanation:
          "Sauter cette etape est la cause la plus frequente de rejet sans examen.",
      },
    ],
    notes: [
      "on what grounds : sur quels motifs",
      "to be arrived at : la maniere dont on parvient a un resultat",
    ],
  },
];
