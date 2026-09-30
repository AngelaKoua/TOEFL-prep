/* Speaking, tests 41 a 50 : Take an Interview, series avancee */

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

export const speakingD = [
  make(41, "Comparing options", "Argumentation", "C1", [
    { q: "Would you rather have more time or more money?", tips: ["Tranchez des la premiere phrase.", "Un arbitrage concret que vous avez fait.", "Reconnaissez que la reponse depend du moment de la vie."] },
    { q: "Is it better to be an expert in one field or competent in several?", tips: ["Position selon un critere : marche, satisfaction, risque.", "Un exemple de personne que vous connaissez.", "Concedez le danger de votre choix."] },
    { q: "Should you follow your interests or the job market?", tips: ["Refusez le faux dilemme si vous voulez, mais tranchez ensuite.", "Un exemple personnel.", "Nommez le cout de l'autre option."] },
    { q: "Is it worse to try and fail or never to try?", tips: ["Position, puis distinguez les enjeux.", "Un exemple concret.", "Reconnaissez que l'echec a un cout reel."] },
    { q: "Would you prefer feedback that is kind or feedback that is blunt?", tips: ["Repondez pour vous, pas en general.", "Un exemple des deux.", "Nommez la condition qui rend la franchise utile."] },
  ]),
  make(42, "Explaining a process", "Exposition", "B2", [
    { q: "Explain how to do something you are good at.", tips: ["Trois etapes maximum, dans l'ordre.", "Nommez l'erreur classique du debutant.", "Terminez par le signe que c'est reussi."] },
    { q: "How would you explain your field of study to a child?", tips: ["Une comparaison concrete d'abord.", "Evitez tout terme technique.", "Un exemple du quotidien de l'enfant."] },
    { q: "Describe how you prepare for an important conversation.", tips: ["Votre methode reelle, meme sommaire.", "Un exemple date.", "Ce que vous ne preparez jamais."] },
    { q: "How do you learn to use a new tool or application?", tips: ["Decrivez votre ordre de recours.", "Un exemple recent.", "Dites ce qui vous fait abandonner."] },
    { q: "Explain a mistake you see people make often.", tips: ["Nommez l'erreur precisement.", "Expliquez pourquoi elle est tentante.", "Donnez l'alternative."] },
  ]),
  make(43, "Hypothetical situations", "Conditionnel", "B2", [
    { q: "If you could change one law, which would it be?", tips: ["Une loi precise, pas un domaine.", "Dites qui gagnerait et qui perdrait.", "Reconnaissez la difficulte d'application."] },
    { q: "If you had to move abroad tomorrow, what would you take?", tips: ["Trois objets, avec une raison chacun.", "Un objet inattendu rend la reponse memorable.", "Dites ce qui vous manquerait le plus."] },
    { q: "If you could meet anyone living, who would it be?", tips: ["Nommez la personne, puis la question que vous poseriez.", "Justifiez par un interet reel.", "Evitez la celebrite par defaut."] },
    { q: "What would you do if a friend asked to borrow a large sum?", tips: ["Repondez concretement, pas moralement.", "Dites ce qui ferait varier la reponse.", "Un exemple, meme hypothetique."] },
    { q: "If you could restart your studies, would you choose the same path?", tips: ["Repondez franchement.", "Une chose que vous garderiez, une que vous changeriez.", "Dites ce que vous ne pouviez pas savoir."] },
  ]),
  make(44, "Describing people and behaviour", "Description", "B2", [
    { q: "Describe someone you find difficult to work with.", tips: ["Decrivez un comportement, pas un caractere.", "Un exemple precis.", "Dites comment vous vous adaptez."] },
    { q: "What quality do you most admire in others?", tips: ["Une qualite, definie precisement.", "Une personne qui l'incarne.", "Dites pourquoi elle est rare."] },
    { q: "How do you know when someone is a good listener?", tips: ["Nommez deux signes observables.", "Un exemple vecu.", "Dites ce qui imite mal l'ecoute."] },
    { q: "Are first impressions usually right?", tips: ["Position claire.", "Un cas ou vous vous etes trompe.", "Nommez ce qui fausse le jugement."] },
    { q: "What does it mean to be reliable?", tips: ["Definissez avec un comportement concret.", "Un exemple.", "Distinguez fiabilite et disponibilite."] },
  ]),
  make(45, "Problems and solutions", "Resolution", "B2", [
    { q: "Describe a problem you solved recently.", tips: ["Le probleme en une phrase.", "L'action, pas la reflexion seule.", "Le resultat, meme partiel."] },
    { q: "What do you do when two people ask you for opposite things?", tips: ["Decrivez votre reflexe.", "Un exemple concret.", "Dites ce qui rend la situation gerable."] },
    { q: "How do you know when to give up on something?", tips: ["Proposez un critere.", "Un exemple ou vous avez arrete.", "Un exemple ou vous auriez du continuer."] },
    { q: "What is the most useful thing to do in the first hour of a crisis?", tips: ["Une action, justifiee.", "Un exemple, professionnel ou personnel.", "Ce qu'il ne faut surtout pas faire."] },
    { q: "How do you deal with a task that keeps getting postponed?", tips: ["Votre methode reelle.", "Une tache precise en exemple.", "Pourquoi elle etait repoussee."] },
  ]),
  make(46, "Opinion under pressure", "Debat rapide", "C1", [
    { q: "Is honesty always the best policy?", tips: ["Position, puis une exception nette.", "Un exemple concret.", "Distinguez mentir et ne pas dire."] },
    { q: "Do people deserve second chances?", tips: ["Position claire.", "Distinguez selon l'acte.", "Nommez la condition."] },
    { q: "Is ambition a virtue?", tips: ["Tranchez, puis definissez ambition.", "Un exemple positif et un negatif.", "Concluez nettement."] },
    { q: "Should you always finish what you start?", tips: ["Position, puis un critere d'exception.", "Un exemple personnel.", "Reconnaissez le cout de l'abandon."] },
    { q: "Is it possible to be too organised?", tips: ["Position claire.", "Decrivez le symptome.", "Un exemple observe ou vecu."] },
  ]),
  make(47, "Personal experience", "Recit", "B1", [
    { q: "Describe a day that did not go as planned.", tips: ["Le plan en une phrase, puis la rupture.", "Un detail concret.", "La fin, meme banale."] },
    { q: "Talk about something you learned the hard way.", tips: ["L'erreur d'abord.", "La consequence.", "Ce que vous faites differemment."] },
    { q: "Describe a time you helped someone.", tips: ["Situation, action, resultat.", "Restez sur les faits.", "Dites ce que cela vous a coute."] },
    { q: "Talk about a compliment you remember.", tips: ["Qui, quand, quoi exactement.", "Pourquoi il a compte.", "Ce qu'il a change."] },
    { q: "Describe the last time you were surprised.", tips: ["L'attente d'abord, puis la surprise.", "Un detail sensoriel.", "Votre reaction."] },
  ]),
  make(48, "Predictions", "Futur", "B2", [
    { q: "How will people travel in thirty years?", tips: ["Une prediction principale, argumentee.", "Appuyez sur une tendance actuelle.", "Nommez ce qui pourrait l'empecher."] },
    { q: "Will cities become bigger or smaller?", tips: ["Tranchez.", "Un facteur precis.", "Reconnaissez la variation selon les regions."] },
    { q: "What job will disappear first?", tips: ["Nommez-en un, precisement.", "Expliquez le mecanisme.", "Dites ce qui resistera plus longtemps."] },
    { q: "Will people read fewer books in the future?", tips: ["Position, puis distinguez lecture et livre.", "Une tendance observee.", "Reconnaissez l'incertitude."] },
    { q: "What do you hope will change in your lifetime?", tips: ["Un souhait concret.", "Dites pourquoi il est plausible.", "Nommez l'obstacle principal."] },
  ]),
  make(49, "Abstract questions", "Reflexion", "C1", [
    { q: "What does success mean to you?", tips: ["Definissez avec un exemple, pas avec des abstractions.", "Distinguez de la definition courante.", "Dites comment vous le mesurez."] },
    { q: "Is fairness the same as equality?", tips: ["Position, puis une distinction claire.", "Un exemple concret.", "Reconnaissez la tension entre les deux."] },
    { q: "Can a person be happy without other people?", tips: ["Position argumentee.", "Distinguez solitude choisie et subie.", "Un exemple."] },
    { q: "Does having more choice make life better?", tips: ["Tranchez.", "Un domaine ou le choix aide, un ou il pese.", "Un exemple personnel."] },
    { q: "What is worth doing badly?", tips: ["Repondez avec une activite precise.", "Expliquez pourquoi la qualite importe peu.", "Un exemple de votre vie."] },
  ]),
  make(50, "Full mock interview", "Simulation", "B2", [
    { q: "Tell me a little about yourself.", tips: ["Trente secondes maximum : situation, interet, objectif.", "Evitez la chronologie complete.", "Terminez par pourquoi vous etes la."] },
    { q: "What is something you have changed your mind about?", tips: ["Nommez l'ancienne position.", "Le declencheur du changement.", "La position actuelle."] },
    { q: "Describe a situation where you disagreed with someone.", tips: ["Le desaccord en une phrase.", "Comment vous l'avez exprime.", "Le resultat, meme sans accord."] },
    { q: "What do you find most difficult about speaking English?", tips: ["Soyez precis et honnete.", "Un exemple recent.", "Ce que vous faites pour progresser."] },
    { q: "If you could ask me one question, what would it be?", tips: ["Posez une vraie question, pas une politesse.", "Justifiez en une phrase.", "Restez naturel."] },
  ]),
];
