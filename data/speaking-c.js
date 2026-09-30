/* Speaking, tests 26 a 40 : Take an Interview */

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

export const speakingC = [
  make(26, "Education policy", "Debat", "B2", [
    { q: "Should university education be free for everyone?", tips: ["Prenez position avant d'argumenter.", "Distinguez gratuite et acces reel.", "Reconnaissez le cout pour le contribuable."] },
    { q: "Are exams a fair way to assess students?", tips: ["Comparez a une alternative precise.", "Un exemple de votre parcours.", "Nuancez selon la discipline."] },
    { q: "Should schools teach practical skills like cooking and budgeting?", tips: ["Dites ce que cela remplacerait.", "Un exemple de competence manquante chez vous.", "Concedez l'objection du temps disponible."] },
    { q: "Is it better to specialise early or study broadly?", tips: ["Tranchez selon un critere clair.", "Reliez a votre propre parcours.", "Reconnaissez le cout du changement d'avis."] },
    { q: "Should attendance at lectures be compulsory?", tips: ["Position nette.", "Distinguez cours magistral et travaux diriges.", "Un exemple vecu."] },
  ]),
  make(27, "Cities and transport", "Debat", "B2", [
    { q: "Should city centres be closed to cars?", tips: ["Position, puis conditions.", "Nommez qui serait penalise.", "Proposez une mesure d'accompagnement."] },
    { q: "Is public transport in your area good enough?", tips: ["Donnez un trajet precis en exemple.", "Distinguez frequence et couverture.", "Dites ce qui changerait tout."] },
    { q: "Should cycling be encouraged more?", tips: ["Position claire.", "Nommez l'obstacle principal la ou vous vivez.", "Reconnaissez les limites geographiques."] },
    { q: "Do big events benefit a city?", tips: ["Distinguez court terme et long terme.", "Un exemple concret.", "Nommez qui paie et qui gagne."] },
    { q: "Should tourists pay a tax to visit popular places?", tips: ["Position, puis usage des recettes.", "Un exemple de ville.", "Reconnaissez l'effet sur les visiteurs modestes."] },
  ]),
  make(28, "Work culture", "Debat", "B2", [
    { q: "Should the working week be four days?", tips: ["Position, puis mecanisme : meme salaire ou non.", "Un secteur ou cela marcherait mal.", "Citez un benefice mesurable."] },
    { q: "Is working from home better for everyone?", tips: ["Distinguez les profils.", "Un exemple personnel.", "Nommez le perdant de l'arrangement."] },
    { q: "Should employers be allowed to contact staff outside working hours?", tips: ["Position nette.", "Distinguez urgence et habitude.", "Proposez une regle praticable."] },
    { q: "Is loyalty to one employer still valuable?", tips: ["Repondez selon le marche que vous connaissez.", "Un exemple, proche ou lointain.", "Concedez l'autre lecture."] },
    { q: "Should salaries be public within a company?", tips: ["Position claire.", "Nommez un effet positif et un effet pervers.", "Un exemple d'entreprise ou de pays."] },
  ]),
  make(29, "Science and society", "Debat", "C1", [
    { q: "Should scientists communicate uncertainty to the public?", tips: ["Position, puis la difficulte reelle.", "Un exemple recent.", "Distinguez incertitude et desaccord."] },
    { q: "Is it acceptable to use animals in medical research?", tips: ["Position argumentee, sans slogan.", "Distinguez les types de recherche.", "Reconnaissez la position adverse."] },
    { q: "Should countries spend money on space exploration?", tips: ["Position, puis proportion budgetaire.", "Un benefice indirect concret.", "Repondez a l'objection des priorites terrestres."] },
    { q: "Do you trust expert advice? Why or why not?", tips: ["Nuancez selon le domaine.", "Un cas ou vous avez suivi, un ou non.", "Nommez ce qui construit la confiance."] },
    { q: "Should there be limits on genetic research?", tips: ["Position, puis ou tracer la ligne.", "Distinguez therapie et amelioration.", "Reconnaissez la difficulte d'appliquer une limite."] },
  ]),
  make(30, "Technology and ethics", "Debat", "C1", [
    { q: "Should facial recognition be used in public spaces?", tips: ["Position claire.", "Distinguez usage policier et commercial.", "Nommez la garantie qui manquerait."] },
    { q: "Is it fair for platforms to decide what content is removed?", tips: ["Position, puis alternative.", "Un exemple de decision contestee.", "Reconnaissez le probleme d'echelle."] },
    { q: "Should children under a certain age be banned from social media?", tips: ["Position et age precis.", "Dites comment on l'appliquerait.", "Reconnaissez le contournement previsible."] },
    { q: "Will artificial intelligence change your future job?", tips: ["Repondez sur votre metier precis.", "Nommez la tache qui disparaitrait.", "Dites ce qui resterait humain."] },
    { q: "Should people have the right to be forgotten online?", tips: ["Position, puis limite.", "Distinguez vie privee et information publique.", "Un exemple concret."] },
  ]),
  make(31, "Arts and funding", "Debat", "B2", [
    { q: "Should governments fund the arts?", tips: ["Position claire.", "Nommez ce qui disparaitrait sans subvention.", "Reconnaissez l'argument du marche."] },
    { q: "Are museums still relevant?", tips: ["Position, puis ce qu'un ecran ne remplace pas.", "Un exemple de visite marquante.", "Nommez ce qui devrait changer."] },
    { q: "Should famous artworks travel between countries?", tips: ["Position, puis le risque materiel.", "Un exemple d'exposition.", "Distinguez pret et retour definitif."] },
    { q: "Is street art vandalism or culture?", tips: ["Tranchez, puis posez un critere.", "Un exemple de votre ville.", "Reconnaissez le probleme du consentement."] },
    { q: "Should school trips to theatres be compulsory?", tips: ["Position claire.", "Dites qui en beneficierait le plus.", "Reconnaissez le cout."] },
  ]),
  make(32, "Language and identity", "Debat", "C1", [
    { q: "Does speaking another language change how you think?", tips: ["Repondez d'apres votre experience.", "Un exemple linguistique precis.", "Distinguez pensee et comportement."] },
    { q: "Should English be the single language of science?", tips: ["Position, puis ce que cela coute.", "Un exemple de savoir non traduit.", "Reconnaissez le gain d'efficacite."] },
    { q: "Is it a loss when a language disappears?", tips: ["Position claire.", "Nommez ce qui disparait concretement.", "Reconnaissez le cout de la preservation."] },
    { q: "Should children learn a second language from age five?", tips: ["Position, puis quelle langue et pourquoi.", "Un argument sur l'age.", "Reconnaissez la contrainte de moyens."] },
    { q: "Do accents matter when you speak a foreign language?", tips: ["Distinguez intelligibilite et accent.", "Un exemple vecu.", "Position finale nette."] },
  ]),
  make(33, "Sport and competition", "Debat", "B2", [
    { q: "Should professional athletes earn so much?", tips: ["Position, puis le mecanisme du marche.", "Comparez a un autre metier.", "Reconnaissez la breve duree des carrieres."] },
    { q: "Is competition good for children?", tips: ["Nuancez selon l'age et l'encadrement.", "Un exemple personnel.", "Nommez la condition qui rend cela sain."] },
    { q: "Should hosting large sporting events be a national priority?", tips: ["Position claire.", "Citez un cout concret.", "Reconnaissez le benefice d'image."] },
    { q: "Do you follow any sport? Why or why not?", tips: ["Repondez franchement.", "Racontez comment cela a commence ou s'est arrete.", "Un detail qui vous plait ou vous ennuie."] },
    { q: "Should physical education be graded?", tips: ["Position, puis sur quoi on noterait.", "Un souvenir scolaire.", "Reconnaissez l'injustice possible."] },
  ]),
  make(34, "Living with others", "Vie sociale", "B1", [
    { q: "What makes someone a good flatmate?", tips: ["Une qualite developpee plutot qu'une liste.", "Un exemple concret de conflit evite.", "Ce que vous faites mal vous-meme."] },
    { q: "How do you deal with a disagreement at home?", tips: ["Decrivez votre reflexe reel.", "Un exemple date.", "Ce que vous avez appris."] },
    { q: "Is it better to live alone or with other people?", tips: ["Tranchez selon votre periode de vie.", "Un avantage concret.", "Concedez le manque."] },
    { q: "Should people share household tasks equally?", tips: ["Position, puis ce que equal veut dire.", "Un exemple d'arrangement.", "Reconnaissez le desequilibre invisible."] },
    { q: "How important is privacy to you?", tips: ["Repondez avec un exemple d'espace ou de temps.", "Distinguez solitude et isolement.", "Dites ce qui vous derange."] },
  ]),
  make(35, "Memory and the past", "Reflexion", "B2", [
    { q: "Describe a place from your childhood that no longer exists.", tips: ["Un detail sensoriel d'abord.", "Dites ce qui l'a remplace.", "Ce que vous ressentez."] },
    { q: "Do you keep photographs or letters?", tips: ["Repondez, puis dites pourquoi.", "Un objet precis.", "Ce que vous avez jete et regrette."] },
    { q: "Is nostalgia useful or does it hold people back?", tips: ["Position claire.", "Distinguez souvenir et comparaison.", "Un exemple, personnel ou collectif."] },
    { q: "What tradition from your family do you want to keep?", tips: ["Nommez-la precisement.", "Racontez une occasion.", "Dites pourquoi elle risque de se perdre."] },
    { q: "Do you think the past was better in any way?", tips: ["Repondez sans idealiser.", "Un aspect precis, pas une epoque entiere.", "Reconnaissez ce qui s'est ameliore."] },
  ]),
  make(36, "Rules and fairness", "Debat", "B2", [
    { q: "Is it ever right to break a rule?", tips: ["Position, puis un critere.", "Un exemple concret, meme mineur.", "Reconnaissez le risque du precedent."] },
    { q: "Should fines be proportional to income?", tips: ["Position claire.", "Un exemple de pays qui le fait.", "Reconnaissez la difficulte administrative."] },
    { q: "Are queues a fair system?", tips: ["Position, puis comparez a une alternative.", "Un exemple ou cela echoue.", "Nommez qui est desavantage."] },
    { q: "Should voting be compulsory?", tips: ["Position claire.", "Un effet previsible.", "Reconnaissez l'objection de liberte."] },
    { q: "How should a group decide when it cannot agree?", tips: ["Proposez une procedure.", "Un exemple de groupe reel.", "Reconnaissez le cout de la methode."] },
  ]),
  make(37, "Habits of study", "Methodologie", "B1", [
    { q: "How do you take notes?", tips: ["Decrivez le format precis.", "Dites ce que vous faites des notes ensuite.", "Ce qui ne marche pas pour vous."] },
    { q: "Do you work better in the morning or at night?", tips: ["Repondez, puis distinguez selon la tache.", "Un exemple recent.", "Ce que vous faites quand ce n'est pas possible."] },
    { q: "How do you avoid distractions?", tips: ["Une methode reelle.", "Dites combien de temps elle tient.", "Ce que vous avez abandonne."] },
    { q: "Is it useful to study in a group?", tips: ["Position, puis pour quelle etape du travail.", "Un exemple bon et un mauvais.", "Nommez la condition de reussite."] },
    { q: "What do you do when you do not understand something?", tips: ["Decrivez l'ordre de vos recours.", "Un exemple precis.", "Dites quand vous abandonnez."] },
  ]),
  make(38, "Change and adaptation", "Reflexion", "B2", [
    { q: "Describe a time you had to adapt quickly.", tips: ["Situez la contrainte en une phrase.", "Racontez l'action, pas le sentiment seul.", "Le resultat."] },
    { q: "Do you like routine or variety?", tips: ["Tranchez, puis nuancez selon le domaine.", "Un exemple de chaque.", "Ce qui vous epuise."] },
    { q: "How do you feel about moving to a new city?", tips: ["Repondez d'apres l'experience ou l'anticipation.", "Le plus difficile precisement.", "Ce qui aide."] },
    { q: "What helps people accept a change they did not choose?", tips: ["Une idee developpee.", "Un exemple observe.", "Ce qui empire les choses."] },
    { q: "Is it better to plan far ahead or stay flexible?", tips: ["Position selon un critere.", "Un exemple de plan tenu ou abandonne.", "Reconnaissez le cout de l'autre approche."] },
  ]),
  make(39, "Community and help", "Societe", "B1", [
    { q: "Have you ever volunteered? Would you?", tips: ["Repondez concretement.", "Dites ce qui vous a decide ou retenu.", "Ce que vous en avez retire."] },
    { q: "Do neighbours help each other where you live?", tips: ["Un exemple precis.", "Distinguez petits services et vraie entraide.", "Dites ce qui manque."] },
    { q: "Should young people do a period of community service?", tips: ["Position claire.", "Duree et contenu precis.", "Reconnaissez l'objection de la contrainte."] },
    { q: "What local problem would you like to solve?", tips: ["Un probleme, pas trois.", "Proposez une action realiste.", "Nommez l'obstacle."] },
    { q: "Is it easier to ask for help or to offer it?", tips: ["Repondez pour vous-meme.", "Un exemple des deux cotes.", "Ce qui explique la difference."] },
  ]),
  make(40, "Looking forward", "Projets", "B2", [
    { q: "Where do you hope to be in five years?", tips: ["Une image concrete, pas une ambition vague.", "Une etape intermediaire.", "Ce qui pourrait changer le plan."] },
    { q: "What skill do you most want to learn?", tips: ["Nommez-la precisement.", "Dites pourquoi maintenant.", "Votre premiere etape."] },
    { q: "Is it important to have long-term goals?", tips: ["Position claire.", "Distinguez cap et plan detaille.", "Un exemple personnel."] },
    { q: "What would you do with a free year?", tips: ["Une reponse, developpee.", "Dites ce que vous ne feriez pas.", "Reliez a une envie ancienne."] },
    { q: "What advice would you give your younger self?", tips: ["Un conseil, concret.", "Le moment precis auquel il s'applique.", "Dites si vous l'auriez ecoute."] },
  ]),
];
