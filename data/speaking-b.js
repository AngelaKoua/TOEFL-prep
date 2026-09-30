/* Speaking, tests 11 a 25 : Take an Interview
   Format 2026 : aucune preparation, 45 secondes par reponse. */

const I = "Take an Interview";
const INSTR =
  "Lancez la question, puis parlez immediatement : il n'y a pas de temps de preparation au format 2026. Visez 45 secondes, une idee principale et un exemple.";

const RUBRIC = [
  "J'ai commence a parler dans les deux secondes, sans blanc initial.",
  "J'ai donne une position claire avant de developper.",
  "J'ai illustre par un exemple concret et personnel, pas par une generalite.",
  "J'ai tenu environ 45 secondes sans m'arreter net ni me repeter.",
  "Je me suis corrige sans paniquer quand j'ai fait une erreur.",
];

const make = (id, title, topic, level, items) => ({
  id,
  title,
  topic,
  taskLabel: I,
  type: "interview",
  level,
  instructions: INSTR,
  rubric: RUBRIC,
  items,
});

export const speakingB = [
  make(11, "Your studies", "Parcours", "B1", [
    { q: "What are you studying at the moment, and why did you choose it?", tips: ["Nommez le domaine en une phrase, puis la raison.", "Une anecdote de choix vaut mieux qu'une liste de motivations.", "Terminez par ce que vous en attendez."] },
    { q: "Which subject at school did you find hardest, and how did you deal with it?", tips: ["Nommez la matiere et la difficulte precise.", "Decrivez une methode concrete que vous avez essayee.", "Dites si elle a marche, meme partiellement."] },
    { q: "Do you prefer studying alone or with other people?", tips: ["Repondez d'abord, justifiez ensuite.", "Reconnaissez le cas ou l'autre option est meilleure.", "Utilisez I tend to plutot que always."] },
    { q: "What would you change about the way you were taught?", tips: ["Une seule chose, developpee.", "Dites quel probleme cela reglerait.", "Evitez de critiquer une personne nommement."] },
    { q: "How do you decide what to revise first before an exam?", tips: ["Decrivez une regle personnelle.", "Donnez un exemple d'examen recent.", "Mentionnez ce qui ne marche pas pour vous."] },
  ]),
  make(12, "Daily routine", "Vie quotidienne", "A2", [
    { q: "Describe a typical weekday morning for you.", tips: ["Suivez l'ordre chronologique, c'est le plus simple a tenir.", "Utilisez usually, normally, most days.", "Ajoutez un detail inhabituel a la fin."] },
    { q: "What do you usually do to relax after a long day?", tips: ["Une activite, pas trois.", "Expliquez pourquoi elle vous detend.", "Comparez avec ce que vous faisiez avant."] },
    { q: "Do you think you get enough sleep? Why or why not?", tips: ["Repondez honnetement, pas ideallement.", "Donnez une cause concrete.", "Dites ce que vous aimeriez changer."] },
    { q: "How has your routine changed in the last year?", tips: ["Opposez avant et maintenant : I used to ... now I ...", "Nommez l'evenement declencheur.", "Dites si le changement vous convient."] },
    { q: "What is one habit you would like to start?", tips: ["Soyez precis : pas etre en meilleure sante mais marcher trente minutes.", "Dites pourquoi vous ne l'avez pas encore fait.", "Donnez une premiere etape realiste."] },
  ]),
  make(13, "Where you live", "Lieu de vie", "B1", [
    { q: "Describe the area where you live.", tips: ["Commencez par une impression generale, puis deux details.", "Un son, une odeur ou une habitude locale rend la reponse vivante.", "Terminez par ce que vous en pensez."] },
    { q: "What is the biggest problem in your town, and what would help?", tips: ["Un seul probleme, bien decrit.", "Proposez une solution realiste.", "Reconnaissez pourquoi elle n'a pas encore ete faite."] },
    { q: "Would you rather live in a city or in the countryside?", tips: ["Choisissez franchement, meme si vous hesitez.", "Donnez un critere decisif.", "Concedez un avantage a l'autre option."] },
    { q: "How has your town changed since you were a child?", tips: ["Un changement visible, un changement invisible.", "Utilisez le present perfect : it has become ...", "Dites si c'est une amelioration."] },
    { q: "Where would you live if you could live anywhere?", tips: ["Conditionnel type 2 : I would live ... because ...", "Justifiez par le mode de vie, pas par le decor.", "Ajoutez ce qui vous manquerait."] },
  ]),
  make(14, "Technology in your life", "Technologie", "B2", [
    { q: "Which piece of technology could you not do without?", tips: ["Nommez-la, puis decrivez un usage precis.", "Dites ce qui se passerait sans elle.", "Evitez la reponse attendue si vous avez mieux."] },
    { q: "Do you think people spend too much time on their phones?", tips: ["Nuancez : too much for what?", "Parlez de vous avant de parler des gens.", "Distinguez usage passif et usage actif."] },
    { q: "What technology would you like to see improved?", tips: ["Une frustration concrete vecue recemment.", "Dites pourquoi c'est difficile a resoudre.", "Imaginez la version amelioree."] },
    { q: "How do you decide whether to trust information you find online?", tips: ["Decrivez un reflexe precis, pas un principe general.", "Donnez un exemple ou vous avez verifie.", "Admettez une limite de votre methode."] },
    { q: "Has technology made your studies easier or harder?", tips: ["Les deux, mais tranchez sur le solde.", "Un exemple pour chaque cote.", "Concluez par une phrase nette."] },
  ]),
  make(15, "Travel", "Voyage", "B1", [
    { q: "Describe a journey you remember well.", tips: ["Situez en une phrase, puis racontez un moment.", "Le detail sensoriel fait la difference.", "Dites pourquoi vous vous en souvenez."] },
    { q: "Do you prefer planning a trip or improvising?", tips: ["Repondez, puis nuancez selon le type de voyage.", "Un exemple de chaque approche.", "Terminez par votre regle personnelle."] },
    { q: "What is the hardest part of travelling in a foreign language?", tips: ["Soyez precis : comprendre au telephone, lire un menu ...", "Dites comment vous vous en sortez.", "Ajoutez un progres recent."] },
    { q: "Would you like to live abroad for a year?", tips: ["Repondez franchement.", "Une raison pour, une reserve.", "Nommez un pays et dites pourquoi."] },
    { q: "How do you choose where to go on holiday?", tips: ["Nommez vos criteres dans l'ordre.", "Un exemple de decision recente.", "Dites ce qui compte le moins pour vous."] },
  ]),
  make(16, "Food and cooking", "Alimentation", "A2", [
    { q: "What is a dish you know how to cook well?", tips: ["Nommez-le, puis deux etapes cles.", "Dites de qui vous l'avez appris.", "Terminez par quand vous le faites."] },
    { q: "Do you prefer eating out or eating at home?", tips: ["Tranchez, puis justifiez par le cout ou le temps.", "Un exemple recent.", "Concedez l'avantage inverse."] },
    { q: "Have your eating habits changed in recent years?", tips: ["Avant et maintenant.", "Nommez la cause du changement.", "Dites si vous en etes satisfait."] },
    { q: "What food from another country do you enjoy?", tips: ["Soyez precis sur le plat, pas sur la cuisine entiere.", "Racontez la premiere fois.", "Dites ou vous le mangez."] },
    { q: "Is it important to eat meals with other people?", tips: ["Position claire des la premiere phrase.", "Un exemple familial ou amical.", "Reconnaissez quand manger seul est bien."] },
  ]),
  make(17, "Work and money", "Monde professionnel", "B2", [
    { q: "Describe a job you have had or would like to have.", tips: ["Une phrase de cadrage, puis le quotidien reel du poste.", "Dites ce qui vous attire precisement.", "Mentionnez une difficulte que vous anticipez."] },
    { q: "Is salary the most important thing in a job?", tips: ["Repondez sans cliche moral.", "Hierarchisez deux ou trois criteres.", "Donnez un exemple concret d'arbitrage."] },
    { q: "How do you handle a task you find boring?", tips: ["Decrivez une strategie reelle.", "Un exemple precis.", "Dites si elle marche toujours."] },
    { q: "Would you prefer to work for a large company or a small one?", tips: ["Choisissez, puis justifiez par le type de travail.", "Concedez un avantage a l'autre.", "Terminez par votre priorite actuelle."] },
    { q: "What skill would most improve your employability?", tips: ["Une seule competence, nommee precisement.", "Dites pourquoi elle manque.", "Donnez votre plan pour l'acquerir."] },
  ]),
  make(18, "Friends and family", "Relations", "B1", [
    { q: "Describe someone who has influenced you.", tips: ["Nommez la relation, puis un moment precis.", "Dites ce que vous avez change grace a cette personne.", "Evitez la liste d'adjectifs."] },
    { q: "How do you keep in touch with people who live far away?", tips: ["Un moyen principal, un secondaire.", "Dites ce qui marche et ce qui s'essouffle.", "Un exemple recent."] },
    { q: "Is it easy to make new friends as an adult?", tips: ["Repondez d'apres votre experience.", "Nommez un obstacle concret.", "Proposez ce qui aide."] },
    { q: "What makes a good friendship last?", tips: ["Un facteur developpe plutot que trois evoques.", "Un exemple d'amitie longue.", "Dites ce qui la met en danger."] },
    { q: "Do you prefer large gatherings or small groups?", tips: ["Tranchez immediatement.", "Expliquez par votre facon de discuter.", "Concedez une exception."] },
  ]),
  make(19, "Learning English", "Apprentissage", "B1", [
    { q: "Why are you learning English?", tips: ["Une raison principale, pas quatre.", "Reliez-la a un objectif date.", "Ajoutez une raison secondaire inattendue."] },
    { q: "What is the hardest part of English for you?", tips: ["Soyez precis : les prepositions, le rythme, l'ecoute rapide.", "Donnez un exemple d'echec recent.", "Dites ce que vous testez pour progresser."] },
    { q: "How do you practise speaking outside class?", tips: ["Nommez une pratique reelle, meme modeste.", "Dites a quelle frequence.", "Reconnaissez ce que vous ne faites pas."] },
    { q: "Has learning English changed how you see your own language?", tips: ["Repondez oui ou non franchement.", "Un exemple linguistique concret.", "Concluez sur ce que cela vous apprend."] },
    { q: "What advice would you give a beginner?", tips: ["Un conseil, developpe.", "Dites pourquoi les conseils habituels ne marchent pas.", "Terminez par une premiere action."] },
  ]),
  make(20, "Money and choices", "Economie personnelle", "B2", [
    { q: "Do you save money or spend it as you get it?", tips: ["Repondez honnetement, sans vous juger.", "Un exemple de decision recente.", "Dites ce que vous voudriez changer."] },
    { q: "Is it better to buy something cheap now or save for something better?", tips: ["Prenez position, puis nuancez selon l'objet.", "Un exemple vecu des deux cotes.", "Formulez une regle personnelle."] },
    { q: "Should students work while studying?", tips: ["Position claire.", "Distinguez volume horaire et type de travail.", "Reconnaissez l'objection principale."] },
    { q: "What is the best purchase you have made recently?", tips: ["Nommez l'objet, puis l'usage reel.", "Expliquez pourquoi il vaut son prix.", "Comparez a un achat rate."] },
    { q: "How would you spend an unexpected sum of money?", tips: ["Une priorite, pas une liste.", "Justifiez par votre situation actuelle.", "Ajoutez ce que vous ne feriez pas."] },
  ]),
  make(21, "Environment and habits", "Environnement", "B2", [
    { q: "What do you personally do to reduce your impact?", tips: ["Une action concrete et reelle.", "Dites ce que vous ne faites pas, cela rend credible.", "Reconnaissez la limite de l'action individuelle."] },
    { q: "Should individuals or governments do more about climate change?", tips: ["Tranchez, puis expliquez l'echelle.", "Un exemple de mesure qui ne marche qu'au niveau collectif.", "Concedez le role de l'exemple individuel."] },
    { q: "How easy is it to live without a car where you are?", tips: ["Decrivez votre situation reelle.", "Donnez un trajet precis en exemple.", "Dites ce qu'il faudrait changer."] },
    { q: "Do you think recycling makes a real difference?", tips: ["Repondez avec nuance, pas avec un slogan.", "Distinguez les materiaux.", "Nommez ce qui aurait plus d'effet."] },
    { q: "What environmental change have you noticed in your lifetime?", tips: ["Un changement observe, pas lu.", "Situez dans le temps.", "Dites ce que cela vous fait."] },
  ]),
  make(22, "Media and news", "Information", "B2", [
    { q: "Where do you get your news?", tips: ["Nommez les sources reelles, y compris les moins nobles.", "Dites pourquoi celles-la.", "Reconnaissez un biais de votre regime d'information."] },
    { q: "Do you follow the news less than you used to?", tips: ["Repondez, puis expliquez le changement.", "Nommez la cause : fatigue, temps, format.", "Dites si c'est un probleme."] },
    { q: "Should journalists report everything they know?", tips: ["Position claire, puis une limite.", "Un type de cas precis.", "Reconnaissez le risque de l'autre position."] },
    { q: "What makes a news story trustworthy to you?", tips: ["Nommez deux signaux concrets.", "Un exemple ou vous avez doute.", "Dites ce qui ne suffit pas."] },
    { q: "Do you discuss the news with friends or avoid it?", tips: ["Repondez franchement.", "Expliquez selon le sujet ou la personne.", "Un exemple de conversation recente."] },
  ]),
  make(23, "Health and exercise", "Sante", "B1", [
    { q: "How do you stay active?", tips: ["Une activite reguliere, une occasionnelle.", "Dites a quelle frequence reellement.", "Ce qui vous empeche parfois."] },
    { q: "Is it hard to keep a fitness habit? Why?", tips: ["Repondez d'apres votre experience.", "Nommez l'obstacle numero un.", "Ce qui a marche pour vous."] },
    { q: "Do you think people worry too much about health?", tips: ["Nuancez selon le domaine.", "Un exemple d'inquietude utile, un d'inutile.", "Concluez nettement."] },
    { q: "What would make it easier for people to be active?", tips: ["Une mesure concrete.", "Dites qui elle aiderait le plus.", "Reconnaissez son cout."] },
    { q: "How do you handle stress before an important deadline?", tips: ["Une methode reelle, meme imparfaite.", "Un exemple date.", "Ce que vous evitez de faire."] },
  ]),
  make(24, "Culture and free time", "Loisirs", "B1", [
    { q: "What kind of music do you listen to, and when?", tips: ["Reliez le genre au moment de la journee.", "Un artiste precis vaut mieux qu'un genre vague.", "Dites si vos gouts ont change."] },
    { q: "Describe a film or book that stayed with you.", tips: ["Une phrase de resume maximum.", "Concentrez-vous sur l'effet qu'il a eu.", "Dites a qui vous le recommanderiez."] },
    { q: "Do you prefer watching something alone or with others?", tips: ["Tranchez, puis expliquez.", "Distinguez selon le type de contenu.", "Un exemple recent."] },
    { q: "Have you ever tried a creative hobby?", tips: ["Meme un echec fait une bonne reponse.", "Racontez le debut.", "Dites pourquoi vous avez continue ou arrete."] },
    { q: "Is it important for a city to have cultural venues?", tips: ["Position claire.", "Un exemple de votre ville.", "Reconnaissez l'argument du cout."] },
  ]),
  make(25, "Decisions and change", "Reflexion personnelle", "B2", [
    { q: "Describe a difficult decision you have made.", tips: ["Posez le choix en deux options.", "Dites ce qui a fait pencher la balance.", "Dites si vous le referiez."] },
    { q: "Do you make decisions quickly or slowly?", tips: ["Repondez, puis distinguez selon l'enjeu.", "Un exemple de chaque.", "Ce que vous voudriez ameliorer."] },
    { q: "How do you react when a plan falls through?", tips: ["Decrivez une reaction reelle, pas ideale.", "Un exemple recent.", "Ce que vous avez appris."] },
    { q: "What is a risk you are glad you took?", tips: ["Nommez le risque et la peur associee.", "Le resultat concret.", "Ce qui aurait pu mal tourner."] },
    { q: "Do you think people change much over time?", tips: ["Position claire.", "Distinguez les traits qui changent et ceux qui non.", "Un exemple, vous ou quelqu'un de proche."] },
  ]),
];
