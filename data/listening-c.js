/* Listening, tests 16 a 25 : Listen to an Announcement */

const A = "Listen to an Announcement";

export const listeningC = [
  {
    id: 16,
    title: "Library closure for refurbishment",
    topic: "Bibliotheque",
    taskLabel: A,
    type: "audio",
    level: "B1",
    script:
      "Attention please. The second and third floors of the library will close from Monday the ninth for four weeks of electrical work. The ground floor remains open, and study spaces have been added in the Chapman building, which will run twenty-four hours during this period. Books from the closed floors have been moved to temporary shelving in the basement, arranged by classmark as usual, but the self-service machines cannot read the temporary labels. Take these items to the desk instead. Reservations placed before Friday will be held for ten days rather than the usual seven. If you use assistive equipment on the third floor, contact the accessibility team this week so we can relocate it with you rather than around you.",
    questions: [
      {
        q: "What is the reason for the closure?",
        options: ["Electrical work", "A staff shortage", "Water damage", "Stock taking"],
        answer: 0,
        explanation: "Quatre semaines de travaux electriques.",
      },
      {
        q: "Why must basement items be taken to the desk?",
        options: [
          "They are reference only",
          "Self-service machines cannot read the temporary labels",
          "They must be photographed first",
          "The basement has no scanner",
        ],
        answer: 1,
        explanation: "Les automates ne lisent pas les etiquettes temporaires.",
      },
      {
        q: "What are users of assistive equipment asked to do?",
        options: [
          "Move it themselves before Monday",
          "Contact the accessibility team this week",
          "Use the Chapman building instead",
          "Apply for a new access card",
        ],
        answer: 1,
        explanation:
          "Pour deplacer le materiel avec la personne plutot qu'a sa place.",
      },
    ],
  },
  {
    id: 17,
    title: "Train platform change",
    topic: "Transport",
    taskLabel: A,
    type: "audio",
    level: "A2",
    script:
      "Good afternoon. This is a platform alteration. The fourteen twenty-two service to Manchester Piccadilly, calling at Stockport and Macclesfield, will now depart from platform six, not platform two as shown on the boards. Passengers already on platform two should use the lift or the footbridge at the far end; the nearest stairs are closed today. The service is running eight minutes late and is formed of four coaches rather than eight, so the train will be busier than usual. Reservations are not valid on this service. First class has been declassified, which means any passenger may sit there. The next service to Manchester after this one leaves at fifteen twelve and is formed of eight coaches.",
    questions: [
      {
        q: "What has changed?",
        options: [
          "The destination",
          "The departure platform",
          "The ticket price",
          "The list of stops",
        ],
        answer: 1,
        explanation: "Depart du quai six et non du quai deux.",
      },
      {
        q: "Why will the train be crowded?",
        options: [
          "It is a holiday weekend",
          "It has four coaches instead of eight",
          "Two earlier services were cancelled",
          "Tickets are being sold on board",
        ],
        answer: 1,
        explanation: "Quatre voitures au lieu de huit.",
      },
      {
        q: "What does declassified first class mean here?",
        options: [
          "First class tickets are refunded",
          "Any passenger may sit in first class",
          "First class is closed",
          "Only reserved passengers may use it",
        ],
        answer: 1,
        explanation: "Any passenger may sit there.",
      },
    ],
  },
  {
    id: 18,
    title: "Fire drill briefing",
    topic: "Securite",
    taskLabel: A,
    type: "audio",
    level: "B1",
    script:
      "Before we begin today's session, a short announcement about tomorrow's evacuation drill. The alarm will sound at eleven fifteen. It is a continuous tone; an intermittent tone means a real incident elsewhere in the building and you should wait for instructions instead of leaving. On the continuous tone, leave by the nearest marked exit, not the way you came in, and assemble on the grass by the sports hall. Do not use the lifts and do not return for bags or laptops. Fire marshals wear yellow vests and will check each room. If you have a personal evacuation plan, go to your designated refuge point and a marshal will come to you. The drill should last about twelve minutes.",
    questions: [
      {
        q: "What does an intermittent tone mean?",
        options: [
          "Evacuate immediately",
          "Wait for instructions",
          "Return to your room",
          "The drill has finished",
        ],
        answer: 1,
        explanation:
          "Un son intermittent signale un incident ailleurs : on attend les consignes.",
      },
      {
        q: "Which exit should people use?",
        options: [
          "The one they entered by",
          "The nearest marked exit",
          "The main entrance only",
          "The exit nearest the lifts",
        ],
        answer: 1,
        explanation: "La sortie balisee la plus proche, pas celle de l'arrivee.",
      },
      {
        q: "What should someone with a personal evacuation plan do?",
        options: [
          "Leave first, before the others",
          "Go to the designated refuge point",
          "Use the lift with a marshal",
          "Assemble by the sports hall",
        ],
        answer: 1,
        explanation: "Un responsable viendra au point de refuge.",
      },
    ],
  },
  {
    id: 19,
    title: "Museum tour opening remarks",
    topic: "Culture",
    taskLabel: A,
    type: "audio",
    level: "B1",
    script:
      "Welcome to the maritime museum. A few things before we start. The tour lasts fifty minutes and covers three galleries; we will not enter the conservation workshop, which is visible through glass on the way back. Photography is fine without flash, except in the manuscript room, where the light damages the ink. Please stay behind the brass line, since the floorboards beyond it are original and are being monitored for movement. If you lose the group, go back to the entrance hall rather than searching, because the route is not circular. At the end, the shop offers a ten per cent reduction on presentation of your tour ticket, and there is a step-free route to it through the courtyard.",
    questions: [
      {
        q: "Where is photography not allowed?",
        options: [
          "In all three galleries",
          "In the manuscript room",
          "In the conservation workshop",
          "In the entrance hall",
        ],
        answer: 1,
        explanation: "La lumiere abime l'encre des manuscrits.",
      },
      {
        q: "Why should visitors stay behind the brass line?",
        options: [
          "The floorboards are original and monitored",
          "The objects beyond it are fragile",
          "Staff need room to work",
          "There is a step down",
        ],
        answer: 0,
        explanation: "Plancher d'origine, surveille pour ses mouvements.",
      },
      {
        q: "What should someone do if they lose the group?",
        options: [
          "Wait where they are",
          "Ask at the shop",
          "Return to the entrance hall",
          "Continue to the last gallery",
        ],
        answer: 2,
        explanation: "Le parcours n'est pas circulaire, d'ou le retour a l'entree.",
      },
    ],
  },
  {
    id: 20,
    title: "Scholarship information session",
    topic: "Financement",
    taskLabel: A,
    type: "audio",
    level: "B2",
    script:
      "Thank you for coming. Three points about the Hartley scholarship. First, it is needs based, which means the financial assessment is done before anyone reads your personal statement; a strong statement cannot compensate for an assessment that places you outside the threshold. Second, the award is paid in three instalments across the year, not as a lump sum, and each instalment depends on continued enrolment, so if you interrupt your studies the remaining payments stop. Third, and this catches people out every year, the scholarship counts as income for the purposes of the hardship fund, so receiving it may reduce what you can claim there. Applications close at midnight on the fourteenth, and late applications are not considered under any circumstances.",
    questions: [
      {
        q: "What does needs based mean here?",
        options: [
          "The statement is read first",
          "Financial assessment comes before the statement",
          "Academic results decide the award",
          "Only international students may apply",
        ],
        answer: 1,
        explanation:
          "L'evaluation financiere precede la lecture de la lettre.",
      },
      {
        q: "What happens if a student interrupts their studies?",
        options: [
          "The remaining instalments stop",
          "The full amount must be repaid",
          "Payments continue for six months",
          "The award converts to a loan",
        ],
        answer: 0,
        explanation: "Chaque versement depend de l'inscription en cours.",
      },
      {
        q: "What point does the speaker say catches people out?",
        options: [
          "The application deadline",
          "The number of instalments",
          "The effect on hardship fund claims",
          "The need for two references",
        ],
        answer: 2,
        explanation:
          "La bourse compte comme revenu pour le fonds d'urgence.",
      },
    ],
  },
  {
    id: 21,
    title: "Flight boarding announcement",
    topic: "Voyage",
    taskLabel: A,
    type: "audio",
    level: "A2",
    script:
      "This is a boarding announcement for flight BA two four seven to Dublin. We will begin boarding in approximately ten minutes from gate forty-one B, which is at the lower level, down the escalator opposite the bookshop. Please allow eight minutes to walk there. We are boarding by row number today rather than by group, beginning with rows twenty-five to thirty. If you require extra time or assistance, or you are travelling with a child under two, please come forward now. The flight is full, so cabin bags larger than the sizer will be placed in the hold free of charge at the gate. Please remove anything you need during the flight before handing the bag over.",
    questions: [
      {
        q: "How are passengers being boarded today?",
        options: ["By group", "By row number", "By ticket price", "All at once"],
        answer: 1,
        explanation: "Par numero de rang, en commencant par 25 a 30.",
      },
      {
        q: "Why should passengers allow eight minutes?",
        options: [
          "The flight is delayed",
          "The gate is at the lower level, some distance away",
          "Security checks are slow",
          "Boarding passes must be reissued",
        ],
        answer: 1,
        explanation: "Porte au niveau inferieur, en bas de l'escalator.",
      },
      {
        q: "What happens to oversized cabin bags?",
        options: [
          "They are refused",
          "They are charged a fee",
          "They go in the hold at no cost",
          "They are carried by staff",
        ],
        answer: 2,
        explanation: "Placees en soute gratuitement a la porte.",
      },
    ],
  },
  {
    id: 22,
    title: "Campus construction notice",
    topic: "Campus",
    taskLabel: A,
    type: "audio",
    level: "B1",
    script:
      "A notice about building work starting next week. The path between the science block and the refectory will be fenced off until March. The signed diversion adds about four minutes and is lit, but it passes the loading bay, so please use the marked crossing rather than cutting across. Noisy work, including drilling, is restricted to between nine thirty and four, and it will not take place during the examination period at all. Deliveries to the science block move to the north entrance, which means the bicycle racks there are being removed; replacement racks are already installed behind the library. Bicycles left at the old racks after Friday will be moved by security, and you can collect them from the lodge.",
    questions: [
      {
        q: "What is said about noisy work?",
        options: [
          "It happens only at night",
          "It is limited to 9.30 to 4 and stops during exams",
          "It continues around the clock",
          "It is restricted to weekends",
        ],
        answer: 1,
        explanation: "Plage horaire limitee et arret total pendant les examens.",
      },
      {
        q: "Why are the bicycle racks being removed?",
        options: [
          "They are unsafe",
          "Deliveries are moving to the north entrance",
          "There are too few users",
          "They are being replaced with newer ones there",
        ],
        answer: 1,
        explanation:
          "Les livraisons passent par l'entree nord, d'ou la suppression des racks.",
      },
      {
        q: "Where can a bicycle be collected if it is moved?",
        options: ["The lodge", "The library", "The refectory", "The north entrance"],
        answer: 0,
        explanation: "La securite les depose a la loge.",
      },
    ],
  },
  {
    id: 23,
    title: "Supermarket customer announcement",
    topic: "Vie quotidienne",
    taskLabel: A,
    type: "audio",
    level: "A2",
    script:
      "Attention shoppers. The store will close in twenty minutes at ten o'clock. Please bring your final items to the checkouts, where all ten tills are open. The self-service area closes five minutes before the main tills, so if you have more than a basket, please use a staffed till now. A reminder that the fresh bakery discount begins at nine thirty, with all bread and pastries reduced by half; items are not held back, so what is on the shelf is what remains. The car park barrier drops at ten fifteen and there is no attendant after that, so please do not leave your vehicle overnight. Lost property can be collected tomorrow from the customer service desk from eight.",
    questions: [
      {
        q: "What closes first?",
        options: [
          "The self-service area",
          "The main tills",
          "The bakery",
          "The customer service desk",
        ],
        answer: 0,
        explanation: "Cinq minutes avant les caisses principales.",
      },
      {
        q: "What is said about the bakery discount?",
        options: [
          "Items are held back for the last customers",
          "Only bread is reduced",
          "What remains on the shelf is all there is",
          "The discount is a quarter off",
        ],
        answer: 2,
        explanation: "Items are not held back.",
      },
      {
        q: "Why should cars not be left overnight?",
        options: [
          "The barrier drops and there is no attendant",
          "A fee applies after midnight",
          "The car park is being resurfaced",
          "Security patrols stop at nine",
        ],
        answer: 0,
        explanation: "Barriere a dix heures quinze, plus de gardien ensuite.",
      },
    ],
  },
  {
    id: 24,
    title: "Orientation week briefing",
    topic: "Rentree",
    taskLabel: A,
    type: "audio",
    level: "B1",
    script:
      "Welcome to orientation. Three practical things. Your enrolment is not complete until you have shown original documents in person, even if you uploaded scans in August; the desk in the great hall is open until Thursday and the queue is shortest before ten. Your email account becomes the official channel from Monday, and departments will not use personal addresses afterwards, so check it daily. Finally, module choices open on Wednesday at noon and close on Friday. Popular options fill within the first hour, but there is a swap window in week three, so a first choice is not a final choice. If you have a timetable clash the system will not let you register, and you should see your department rather than trying different combinations.",
    questions: [
      {
        q: "What is required to complete enrolment?",
        options: [
          "Uploading scans in August",
          "Showing original documents in person",
          "Attending all orientation sessions",
          "Paying the first instalment",
        ],
        answer: 1,
        explanation: "Les scans ne suffisent pas.",
      },
      {
        q: "What changes on Monday?",
        options: [
          "Module choices open",
          "The university email becomes the official channel",
          "The great hall desk closes",
          "Timetables are published",
        ],
        answer: 1,
        explanation:
          "Les services n'utiliseront plus les adresses personnelles.",
      },
      {
        q: "What should a student do about a timetable clash?",
        options: [
          "Try other module combinations",
          "Wait for the swap window",
          "See their department",
          "Register twice",
        ],
        answer: 2,
        explanation:
          "Le systeme bloque l'inscription, il faut voir le departement.",
      },
    ],
  },
  {
    id: 25,
    title: "Concert hall house rules",
    topic: "Spectacle",
    taskLabel: A,
    type: "audio",
    level: "B1",
    script:
      "Ladies and gentlemen, this evening's performance begins in five minutes and runs for fifty-five minutes without an interval. Latecomers cannot be admitted during the first movement and will be shown to the gallery at the first suitable pause, then to their own seats afterwards. Please switch devices off rather than to silent, as the vibration is audible in the front rows and the recording is being made live for broadcast. There is no photography at any point, including at the end. The bar will reopen immediately after the performance and remains open for forty minutes. The composer will take questions in the foyer from half past nine, and that session is free and does not require a ticket.",
    questions: [
      {
        q: "What happens to latecomers?",
        options: [
          "They are refused entry entirely",
          "They wait, then sit in the gallery before moving to their seats",
          "They are seated immediately",
          "They receive a refund",
        ],
        answer: 1,
        explanation:
          "Admis a la premiere pause en galerie, puis a leur place.",
      },
      {
        q: "Why must devices be switched off rather than silenced?",
        options: [
          "Vibration is audible and a live recording is being made",
          "Screens distract the players",
          "The hall has no signal",
          "Silent mode drains batteries",
        ],
        answer: 0,
        explanation: "La vibration s'entend aux premiers rangs.",
      },
      {
        q: "What is said about the composer's session?",
        options: [
          "It requires a separate ticket",
          "It is free and open to all",
          "It takes place before the concert",
          "It is for members only",
        ],
        answer: 1,
        explanation: "Gratuite et sans billet, a partir de vingt et une heures trente.",
      },
    ],
  },
];
