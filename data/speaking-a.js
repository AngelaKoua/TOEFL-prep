/* Speaking, tests 1 a 10 : Listen and Repeat
   On ecoute une phrase, on la repete immediatement. 15 secondes par item. */

const R = "Listen and Repeat";
const INSTR =
  "Ecoutez chaque phrase une fois, puis repetez-la sans lire le texte. Enregistrez-vous, reecoutez, puis comparez avec le texte affiche.";

const RUBRIC = [
  "J'ai restitue la phrase entiere, sans mot oublie ni ajoute.",
  "J'ai place l'accent sur les mots porteurs de sens, pas sur chaque mot.",
  "J'ai respecte les liaisons et les formes reduites entendues.",
  "Mon debit est regulier, sans pause au milieu d'un groupe de sens.",
  "L'intonation monte ou descend au bon endroit selon le type de phrase.",
];

const make = (id, title, topic, level, items) => ({
  id,
  title,
  topic,
  taskLabel: R,
  type: "repeat",
  level,
  instructions: INSTR,
  rubric: RUBRIC,
  items,
});

export const speakingA = [
  make(1, "Short everyday sentences", "Phonetique de base", "A2", [
    { sentence: "I left my keys on the kitchen table.", focus: "Liaison entre left et my, t final non explose." },
    { sentence: "Could you say that again, please?", focus: "Could you devient couldjou a l'oral." },
    { sentence: "The train leaves in twenty minutes.", focus: "Accent sur twenty, pas sur in." },
    { sentence: "She works at a hospital near the park.", focus: "at a se lie en ata." },
    { sentence: "We should get there before it closes.", focus: "should get : le d disparait presque." },
    { sentence: "I have not seen him since Tuesday.", focus: "Forme pleine have not, contraste avec haven't." },
    { sentence: "Do you want me to wait outside?", focus: "want me : le t tombe souvent." },
    { sentence: "That was much easier than I expected.", focus: "Accent sur easier et expected." },
  ]),
  make(2, "Consonant clusters", "Prononciation", "B1", [
    { sentence: "The strengths of the proposal are clear.", focus: "strengths : trois consonnes finales, ne pas ajouter de voyelle." },
    { sentence: "He asked for a twelfth month of leave.", focus: "twelfth : lf th enchaines." },
    { sentence: "The texts were printed last spring.", focus: "texts : ksts en fin de mot." },
    { sentence: "She glimpsed the sixth exhibit briefly.", focus: "glimpsed et sixth, deux groupes difficiles." },
    { sentence: "We explored the depths of the problem.", focus: "depths : pths sans voyelle intercalaire." },
    { sentence: "The world's largest desks arrived today.", focus: "world's et desks : pluriels sur cluster." },
    { sentence: "He acts as if nothing had happened.", focus: "acts as : liaison ts az." },
    { sentence: "They prompt students to think clearly.", focus: "prompt students : mpt st, ne pas couper." },
  ]),
  make(3, "Sentence stress", "Rythme", "B1", [
    { sentence: "I did not say she stole the money.", focus: "Deplacez l'accent : le sens change a chaque fois." },
    { sentence: "The results were better than we hoped.", focus: "Accent sur better et hoped, reste reduit." },
    { sentence: "There is nothing wrong with the design.", focus: "There is se reduit a there's a l'oral naturel." },
    { sentence: "It was the second time it had failed.", focus: "second et failed portent l'information." },
    { sentence: "Nobody told me the meeting had moved.", focus: "Nobody accentue en debut de phrase." },
    { sentence: "We will need at least three more weeks.", focus: "at least est un groupe, pas deux mots separes." },
    { sentence: "I would rather finish it tonight.", focus: "would rather se prononce presque wud rather." },
    { sentence: "That is exactly what I was afraid of.", focus: "afraid of : liaison d of." },
  ]),
  make(4, "Question intonation", "Intonation", "B1", [
    { sentence: "Are you coming to the seminar tomorrow?", focus: "Question fermee : intonation montante." },
    { sentence: "What time does the library close on Sundays?", focus: "Question ouverte : intonation descendante." },
    { sentence: "You have already submitted it, haven't you?", focus: "Tag montant si on doute, descendant si on confirme." },
    { sentence: "Would you mind repeating the last part?", focus: "Demande polie : montee legere sur part." },
    { sentence: "Which option do you think is safer?", focus: "Descendante malgre l'alternative." },
    { sentence: "Is that the version you sent yesterday?", focus: "Montante, accent sur yesterday." },
    { sentence: "How long have you been working on it?", focus: "Descendante, groupe been working lie." },
    { sentence: "Do you know whether the room is booked?", focus: "Question indirecte : descendante." },
  ]),
  make(5, "Numbers and data", "Chiffres", "B1", [
    { sentence: "The figure rose from thirteen to thirty per cent.", focus: "thirteen et thirty : accent sur des syllabes differentes." },
    { sentence: "The meeting is at a quarter past eleven.", focus: "quarter past se lie en un seul groupe." },
    { sentence: "Only fourteen of the forty samples were usable.", focus: "fourteen contre forty, meme piege." },
    { sentence: "Costs fell by nine point six per cent.", focus: "point se prononce clairement entre les chiffres." },
    { sentence: "She was born on the third of August, nineteen ninety.", focus: "Dates : the third of, puis nineteen ninety." },
    { sentence: "There were two hundred and fifty applicants.", focus: "and entre hundred et fifty, reduit en n." },
    { sentence: "The room holds a maximum of sixteen people.", focus: "maximum of : liaison m of." },
    { sentence: "Round it to two decimal places, please.", focus: "Accent sur two et decimal." },
  ]),
  make(6, "Academic phrasing", "Registre academique", "B2", [
    { sentence: "These findings should be interpreted with caution.", focus: "should be se reduit fortement." },
    { sentence: "The evidence suggests a weak but consistent effect.", focus: "Pause apres suggests, pas avant." },
    { sentence: "Previous studies have reached the opposite conclusion.", focus: "have reached : liaison v r." },
    { sentence: "We controlled for age, income and education.", focus: "Liste : montee sur les deux premiers, descente sur le dernier." },
    { sentence: "The sample was not representative of the population.", focus: "Accent contrastif sur not." },
    { sentence: "It is possible that other factors are involved.", focus: "It is possible that : groupe rapide et non accentue." },
    { sentence: "The method was developed in the late nineteen sixties.", focus: "was developed : passif reduit." },
    { sentence: "This raises a question the authors do not address.", focus: "do not address : accent sur not et address." },
  ]),
  make(7, "Workplace sentences", "Monde professionnel", "B2", [
    { sentence: "I will send the revised version before the end of the day.", focus: "before the end of the day : un seul groupe rapide." },
    { sentence: "Could we push the deadline back by a week?", focus: "push back est separe par the deadline." },
    { sentence: "I am afraid that will not be possible this month.", focus: "I am afraid annonce un refus, ton descendant." },
    { sentence: "Let me check with the team and get back to you.", focus: "get back to you : trois mots en un souffle." },
    { sentence: "The client has asked for a shorter summary.", focus: "has asked : liaison z a." },
    { sentence: "We are running slightly behind on the second phase.", focus: "slightly behind : accent sur behind." },
    { sentence: "Would it help if I drafted the outline first?", focus: "Would it : liaison d it." },
    { sentence: "I take your point, but the cost concerns me.", focus: "Pause nette apres point." },
  ]),
  make(8, "Longer sentences", "Souffle et groupes", "B2", [
    { sentence: "Although the results were encouraging, the sample was too small to draw firm conclusions.", focus: "Une seule pause, apres encouraging." },
    { sentence: "If you could confirm the date by Friday, I will book the room straight away.", focus: "Pause apres Friday." },
    { sentence: "The report, which was written in under a week, contains several errors.", focus: "Deux pauses courtes autour de la relative." },
    { sentence: "What surprised me most was how quickly the temperature fell.", focus: "Pas de pause avant was : le sujet est long." },
    { sentence: "Before we decide anything, we should look at what the data actually shows.", focus: "Pause apres anything." },
    { sentence: "The problem is not that the method is wrong, but that it is applied too broadly.", focus: "Contraste not that ... but that." },
    { sentence: "Having read both chapters, I still find the argument difficult to follow.", focus: "Pause apres chapters." },
    { sentence: "She explained that the equipment had been recalibrated the previous afternoon.", focus: "Aucune pause interne : un seul souffle." },
  ]),
  make(9, "Reduced forms", "Anglais naturel", "B2", [
    { sentence: "What do you want to do about it?", focus: "whaddya wanna do : forme reduite courante." },
    { sentence: "I have got to leave in about ten minutes.", focus: "have got to devient gotta a l'oral rapide." },
    { sentence: "It is kind of hard to say at this stage.", focus: "kind of devient kinda." },
    { sentence: "Let us give them another couple of days.", focus: "couple of devient coupla." },
    { sentence: "I am going to need a bit more information.", focus: "going to devient gonna." },
    { sentence: "Do you not think it is a little early?", focus: "Forme pleine pour l'insistance, contraste avec don't." },
    { sentence: "She must have forgotten to attach the file.", focus: "must have devient musta." },
    { sentence: "Because of that, we had to start over.", focus: "Because of se reduit a cuz of." },
  ]),
  make(10, "Mixed review", "Revision", "B2", [
    { sentence: "The lecture has been moved to the main hall.", focus: "has been : deux syllabes tres reduites." },
    { sentence: "I would rather not comment until I have read it.", focus: "Deux formes reduites enchainees." },
    { sentence: "Twenty-three of the thirty participants completed the task.", focus: "Attention twenty-three contre thirty." },
    { sentence: "That is not quite what the report said.", focus: "Accent contrastif sur quite." },
    { sentence: "Could you walk me through the second table?", focus: "walk me through : groupe idiomatique." },
    { sentence: "There appears to be an error in the calculation.", focus: "There appears to be : formule prudente." },
    { sentence: "We will need to confirm that with the supplier first.", focus: "confirm that with : trois groupes lies." },
    { sentence: "I am sorry, I did not catch your name.", focus: "did not catch : accent sur catch." },
  ]),
];
