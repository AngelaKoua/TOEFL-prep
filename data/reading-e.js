/* Reading, tests 33 a 40 : Read in Daily Life */

const D = "Read in Daily Life";

export const readingE = [
  {
    id: 33,
    title: "Internship offer email",
    topic: "Monde professionnel",
    taskLabel: D,
    type: "passage",
    level: "B1",
    minutes: 4,
    passage:
      "From: Talent team, Marden Analytics\nSubject: Summer placement, next steps\n\nDear Camille,\n\nWe are pleased to offer you a place on our summer analytics programme, running from 15 June to 21 August. The role is based in our Lyon office with the option of two remote days per week after the first month.\n\nTo confirm, please reply to this message by 30 April and complete the attached form. We cannot hold the place beyond that date, as the cohort is capped at fourteen.\n\nA few practical points. The monthly allowance is 1,150 euros; travel between home and the office is not reimbursed, but we do cover any travel required during the placement. You will need a laptop for the first week only, after which equipment is provided. Accommodation is your own responsibility, though our office manager keeps a list of student residences that hold rooms until late May.\n\nIf you have a graduation ceremony or an exam in June, tell us now and we will adjust your start date.",
    questions: [
      {
        q: "What must Camille do to accept the offer?",
        options: [
          "Attend an interview in Lyon",
          "Reply and return the form by 30 April",
          "Send proof of her exam results",
          "Book a room in a student residence",
        ],
        answer: 1,
        explanation:
          "Repondre au message et completer le formulaire joint avant le 30 avril.",
      },
      {
        q: "Which travel costs will the company pay?",
        options: [
          "Daily travel from home to the office",
          "Travel needed during the placement itself",
          "The cost of moving to Lyon",
          "All travel during the summer",
        ],
        answer: 1,
        explanation:
          "Le trajet domicile-bureau n'est pas rembourse, mais les deplacements lies a la mission le sont.",
      },
      {
        q: "What does the email say about the start date?",
        options: [
          "It is fixed and cannot change",
          "It can be adjusted for an exam or ceremony",
          "It depends on when accommodation is found",
          "It is decided by the office manager",
        ],
        answer: 1,
        explanation:
          "La derniere phrase propose explicitement d'ajuster la date.",
      },
    ],
    vocabulary: [
      "a placement : un stage",
      "an allowance : une indemnite",
      "to be capped at : etre plafonne a",
    ],
  },
  {
    id: 34,
    title: "Flat share agreement",
    topic: "Logement",
    taskLabel: D,
    type: "passage",
    level: "B1",
    minutes: 4,
    passage:
      "Key terms, 12 Ashgrove Road, shared tenancy\n\nRent is 480 pounds per person per month, due on the first working day of the month. A deposit of one month's rent is held in a protection scheme; the certificate is issued within thirty days of payment.\n\nThe tenancy is joint. This means all four tenants are responsible for the full rent, so if one person does not pay, the others must cover the shortfall and recover it themselves. Anyone wishing to leave must give two months' notice in writing and find a replacement approved by the landlord; until a replacement signs, the leaving tenant remains liable.\n\nThe landlord will give twenty-four hours' notice before any visit except in an emergency. Redecorating requires written permission, and any hole in a wall must be filled before the end of the tenancy. Bills for electricity, water and internet are not included. The garden is shared with the ground-floor flat, and the bicycle store may hold a maximum of six bicycles.",
    questions: [
      {
        q: "What does a joint tenancy mean here?",
        options: [
          "Each tenant is responsible only for their own share",
          "All tenants are responsible for the whole rent",
          "The landlord chooses who shares each room",
          "Rent is paid directly by the university",
        ],
        answer: 1,
        explanation:
          "Si une personne ne paie pas, les autres doivent couvrir la difference.",
      },
      {
        q: "When does a departing tenant stop being liable?",
        options: [
          "Two months after giving notice",
          "When the deposit is returned",
          "When an approved replacement signs",
          "At the end of the academic year",
        ],
        answer: 2,
        explanation:
          "La responsabilite court jusqu'a la signature d'un remplacant approuve.",
      },
      {
        q: "Which of the following is included in the rent?",
        options: ["Electricity", "Water", "Internet", "None of these"],
        answer: 3,
        explanation:
          "Le texte precise que electricite, eau et internet ne sont pas inclus.",
      },
    ],
    vocabulary: [
      "a deposit : une caution",
      "a shortfall : un manque, un deficit",
      "liable : responsable juridiquement",
    ],
  },
  {
    id: 35,
    title: "Museum visitor information",
    topic: "Culture",
    taskLabel: D,
    type: "passage",
    level: "A2",
    minutes: 3,
    passage:
      "City Museum, information for visitors\n\nOpening hours are 10.00 to 18.00 from Tuesday to Sunday, with last entry at 17.15. The museum is closed on Mondays except during school holidays, when it opens at 12.00.\n\nEntry to the permanent collection is free. The temporary exhibition on the second floor costs 9 euros, or 5 euros for students, teachers and visitors under 26. Entry is free for everyone on the first Sunday of each month, but tickets must still be booked online, as numbers are limited.\n\nLarge bags and umbrellas must be left in the cloakroom, which is free and closes fifteen minutes before the museum. Photography without flash is allowed in the permanent collection only. Guided tours in English run at 11.00 and 15.00 on Saturdays and last about an hour; no booking is needed, but groups are limited to twenty and form at the information desk.",
    questions: [
      {
        q: "When is the museum open on a Monday?",
        options: [
          "Never",
          "From 10.00 during school holidays",
          "From 12.00 during school holidays",
          "Only for guided tours",
        ],
        answer: 2,
        explanation:
          "Ferme le lundi sauf pendant les vacances scolaires, avec ouverture a 12.00.",
      },
      {
        q: "A 22-year-old student wants to see the temporary exhibition on a normal Tuesday. What do they pay?",
        options: ["Nothing", "5 euros", "9 euros", "14 euros"],
        answer: 1,
        explanation:
          "Tarif reduit pour les etudiants et les moins de 26 ans.",
      },
      {
        q: "What is required on the first Sunday of the month?",
        options: [
          "Payment of a reduced fee",
          "Booking a ticket online",
          "Joining a guided tour",
          "Leaving all bags at home",
        ],
        answer: 1,
        explanation:
          "Gratuit pour tous, mais la reservation en ligne reste obligatoire.",
      },
    ],
    vocabulary: [
      "a cloakroom : un vestiaire",
      "last entry : derniere admission",
      "to book : reserver",
    ],
  },
  {
    id: 36,
    title: "Bike share terms",
    topic: "Vie quotidienne",
    taskLabel: D,
    type: "passage",
    level: "B1",
    minutes: 4,
    passage:
      "Velomat, how the subscription works\n\nA monthly subscription costs 6 euros and includes unlimited journeys of up to thirty minutes. Beyond thirty minutes, each additional half hour costs 1 euro, charged to the card on file. Journeys are counted from the moment the bike is released to the moment the lock clicks; the app will show a green confirmation, and without that confirmation the journey continues.\n\nIf the station you arrive at is full, press the plus button on the terminal. This gives you fifteen free minutes to reach another station and freezes the charge. Report a fault by turning the saddle backwards and flagging it in the app, so the next user knows.\n\nBikes may not be kept overnight. A bike not returned within twenty-four hours is treated as lost, and the replacement charge of 300 euros applies. Subscriptions may be cancelled at any time through the app, taking effect at the end of the current month; no partial refunds are issued.",
    questions: [
      {
        q: "How does the system know a journey has ended?",
        options: [
          "The user presses the plus button",
          "The lock clicks and the app confirms in green",
          "The bike is parked at any station",
          "The saddle is turned backwards",
        ],
        answer: 1,
        explanation:
          "Sans la confirmation verte, le trajet continue d'etre compte.",
      },
      {
        q: "What does pressing the plus button do at a full station?",
        options: [
          "Reserves a space for later",
          "Calls a technician",
          "Gives fifteen free minutes to reach another station",
          "Ends the journey immediately",
        ],
        answer: 2,
        explanation:
          "Quinze minutes gratuites et gel de la facturation.",
      },
      {
        q: "A user cancels on the 10th of the month. What happens?",
        options: [
          "The subscription ends at the end of that month, with no refund",
          "The subscription ends immediately with a partial refund",
          "The subscription continues for one more month",
          "A cancellation fee of 6 euros applies",
        ],
        answer: 0,
        explanation:
          "Effet a la fin du mois en cours, aucun remboursement partiel.",
      },
    ],
    vocabulary: [
      "a fault : une panne, un defaut",
      "to flag : signaler",
      "a refund : un remboursement",
    ],
  },
  {
    id: 37,
    title: "Health centre registration",
    topic: "Sante",
    taskLabel: D,
    type: "passage",
    level: "B1",
    minutes: 4,
    passage:
      "Campus Health Centre, how to register and book\n\nAll students living in university accommodation should register with the centre in their first two weeks, even if they feel well. Bring photo identification and proof of address; a residence contract is accepted. Registration cannot be completed by email.\n\nOnce registered, routine appointments are booked through the online portal and are usually available within three working days. Same-day appointments open at 08.00 each morning and are intended for problems that cannot wait; they are released in two batches, at 08.00 and again at 13.00.\n\nThe nurse-led clinic handles vaccinations, dressings and travel advice without a doctor's referral, but travel appointments should be made at least six weeks before departure. Repeat prescriptions take two working days and are collected from the pharmacy on Maple Street, not from the centre itself. Outside opening hours, call the out-of-hours number on the door; in a life-threatening emergency, call 112.",
    questions: [
      {
        q: "What is needed to register?",
        options: [
          "Photo identification and proof of address, in person",
          "An email with a scanned passport",
          "A referral from a doctor",
          "A completed vaccination record",
        ],
        answer: 0,
        explanation:
          "Piece d'identite avec photo et justificatif de domicile, et pas par email.",
      },
      {
        q: "When are same-day appointments released?",
        options: [
          "Only at 08.00",
          "At 08.00 and again at 13.00",
          "Whenever a cancellation occurs",
          "Three working days in advance",
        ],
        answer: 1,
        explanation: "Deux vagues, a 08.00 puis a 13.00.",
      },
      {
        q: "Where are repeat prescriptions collected?",
        options: [
          "At the health centre reception",
          "From the nurse-led clinic",
          "At the pharmacy on Maple Street",
          "They are delivered to student accommodation",
        ],
        answer: 2,
        explanation:
          "A la pharmacie de Maple Street, pas au centre lui-meme.",
      },
    ],
    vocabulary: [
      "a referral : une orientation par un medecin",
      "a repeat prescription : une ordonnance renouvelable",
      "out-of-hours : en dehors des heures d'ouverture",
    ],
  },
  {
    id: 38,
    title: "Conference call for papers",
    topic: "Vie academique",
    taskLabel: D,
    type: "passage",
    level: "B2",
    minutes: 4,
    passage:
      "Northern Symposium on Urban Mobility, call for contributions\n\nWe invite abstracts of no more than 300 words for two formats: a twenty-minute talk followed by five minutes of questions, or a poster displayed across both days. Indicate your preference, and state whether you would accept the other format if your first choice is full.\n\nAbstracts are due on 14 February and are reviewed anonymously, so do not include your name, institution or acknowledgements in the file itself. Decisions are sent by 20 March. Presenters must register by 10 April; a talk is withdrawn from the programme if the presenter has not registered by that date.\n\nA limited number of travel bursaries of up to 400 euros is available to doctoral students without institutional funding. Apply using the separate form; applications are considered only after an abstract has been accepted. Presentation slides are collected the evening before each session, and the symposium cannot support presenters connecting remotely.",
    questions: [
      {
        q: "Why should the abstract file exclude the author's name?",
        options: [
          "To keep the file size small",
          "Because review is anonymous",
          "Because names are added automatically",
          "To allow multiple submissions",
        ],
        answer: 1,
        explanation:
          "La relecture est anonyme, d'ou l'absence de nom, d'institution et de remerciements.",
      },
      {
        q: "What happens if a presenter does not register by 10 April?",
        options: [
          "A late fee is charged",
          "The talk is moved to a poster",
          "The talk is withdrawn from the programme",
          "The abstract is reviewed again",
        ],
        answer: 2,
        explanation:
          "La communication est retiree du programme.",
      },
      {
        q: "When can a bursary application be considered?",
        options: [
          "At the same time as the abstract",
          "Only after the abstract is accepted",
          "Only after registration is paid",
          "Only for poster presenters",
        ],
        answer: 1,
        explanation:
          "Les demandes ne sont examinees qu'apres acceptation du resume.",
      },
    ],
    vocabulary: [
      "an abstract : un resume de communication",
      "a bursary : une bourse",
      "to withdraw : retirer",
    ],
  },
  {
    id: 39,
    title: "Volunteer rota and briefing",
    topic: "Vie associative",
    taskLabel: D,
    type: "passage",
    level: "A2",
    minutes: 3,
    passage:
      "Riverside Food Project, volunteer notes for April\n\nShifts are three hours long: morning 09.00 to 12.00, afternoon 13.00 to 16.00, evening 17.00 to 20.00. Sign up on the board at least a week ahead so we can plan the deliveries. If you cannot come, message the group chat rather than the coordinator directly, because someone else may be able to swap.\n\nEveryone doing their first shift arrives fifteen minutes early for a short briefing on hygiene and allergens. Hair must be tied back and rings removed; gloves and aprons are provided. Please do not bring food from home into the preparation area.\n\nWe are short of drivers on Thursday evenings. A full licence held for at least a year is required, and the van is insured for anyone over 21. Storage is at the back of the hall, and the code changes on the first of each month; the new code is sent by message, never written on the door.",
    questions: [
      {
        q: "What should a volunteer do if they cannot attend a shift?",
        options: [
          "Message the group chat",
          "Call the coordinator directly",
          "Write on the board",
          "Find a replacement themselves",
        ],
        answer: 0,
        explanation:
          "Le message au groupe permet a quelqu'un de proposer un echange.",
      },
      {
        q: "Who must arrive fifteen minutes early?",
        options: [
          "Drivers only",
          "Anyone doing their first shift",
          "Everyone, every time",
          "Only evening volunteers",
        ],
        answer: 1,
        explanation:
          "Le briefing hygiene et allergenes concerne le premier service.",
      },
      {
        q: "What is said about the storage code?",
        options: [
          "It never changes",
          "It is written on the door",
          "It changes monthly and is sent by message",
          "Only drivers receive it",
        ],
        answer: 2,
        explanation:
          "Change le premier de chaque mois, transmis par message et jamais affiche.",
      },
    ],
    vocabulary: [
      "a shift : un creneau de travail",
      "a rota : un planning de roulement",
      "an allergen : un allergene",
    ],
  },
  {
    id: 40,
    title: "Exchange programme conditions",
    topic: "Etudes a l'etranger",
    taskLabel: D,
    type: "passage",
    level: "B2",
    minutes: 4,
    passage:
      "Semester abroad, conditions of participation\n\nApplicants must have completed at least one full year and hold an average of 12 out of 20 with no failed module outstanding. Language requirements depend on the host institution: partners teaching in English normally ask for B2, and a small number ask for C1 in writing specifically.\n\nPlaces are allocated in two rounds. The first round considers academic record and the statement of purpose; the second round fills remaining places on a first-come basis. Once a place is accepted, withdrawing after 1 June means the student pays the partner's administrative fee, currently between 80 and 250 euros depending on the country.\n\nCredits transfer automatically only if the learning agreement is signed by all three parties before departure. Changes to the course list after arrival are possible within the first three weeks and must be approved by the home coordinator, not by the host tutor alone. Grades are converted using the published table; the host grade never appears on the home transcript.",
    questions: [
      {
        q: "What is required for credits to transfer automatically?",
        options: [
          "A grade average above 12 out of 20",
          "A learning agreement signed by all three parties before departure",
          "Approval from the host tutor after arrival",
          "A C1 certificate in writing",
        ],
        answer: 1,
        explanation:
          "Le contrat pedagogique signe par les trois parties avant le depart.",
      },
      {
        q: "How are places filled in the second round?",
        options: [
          "By academic record only",
          "By interview",
          "On a first-come basis",
          "By the host institution",
        ],
        answer: 2,
        explanation:
          "Le second tour comble les places restantes au fil de l'arrivee des dossiers.",
      },
      {
        q: "What appears on the home transcript?",
        options: [
          "The host grade as awarded",
          "Both the host and converted grade",
          "Only the converted grade",
          "A pass or fail mark only",
        ],
        answer: 2,
        explanation:
          "La note d'accueil n'apparait jamais : seule la note convertie figure.",
      },
    ],
    vocabulary: [
      "a learning agreement : un contrat pedagogique",
      "to withdraw : se desister",
      "a transcript : un releve de notes",
    ],
  },
];
