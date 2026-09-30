/* Listening, tests 41 a 50 : Listen and Choose a Response
   On entend une phrase courte, on choisit la reponse la plus naturelle. */

const R = "Listen and Choose a Response";
const INSTR =
  "Chaque phrase est lue separement. Choisissez la reaction la plus naturelle : attention au registre et a l'intention, pas seulement aux mots.";

const make = (id, title, topic, level, items) => ({
  id,
  title,
  topic,
  taskLabel: R,
  type: "response",
  level,
  instructions: INSTR,
  items,
});

export const listeningF = [
  make(41, "Everyday exchanges", "Vie courante", "A2", [
    {
      prompt: "Sorry, is this seat taken?",
      options: ["No, go ahead.", "Yes, I sat down.", "It is a chair."],
      answer: 0,
      explanation: "On repond a une demande de permission, pas a une question factuelle.",
    },
    {
      prompt: "Would you mind closing the window?",
      options: ["Yes, I mind it.", "Not at all.", "The window is open."],
      answer: 1,
      explanation: "Avec would you mind, accepter se dit not at all ou of course not.",
    },
    {
      prompt: "How did the interview go?",
      options: ["By train.", "Better than I expected.", "At nine o'clock."],
      answer: 1,
      explanation: "How did it go demande une appreciation, pas un moyen de transport.",
    },
    {
      prompt: "I'm afraid I can't make it on Thursday.",
      options: ["No problem, shall we say Friday?", "You are afraid.", "Thursday is a day."],
      answer: 0,
      explanation: "I'm afraid annonce un refus poli : on propose une alternative.",
    },
    {
      prompt: "Do you happen to know when the library closes?",
      options: ["It happens often.", "Nine, I think.", "Yes, I happen."],
      answer: 1,
      explanation: "Do you happen to know adoucit la question : on donne l'information.",
    },
    {
      prompt: "Thanks so much for covering my shift.",
      options: ["Any time.", "I covered it.", "You are welcome to cover mine."],
      answer: 0,
      explanation: "Any time est la reponse courante a un remerciement pour un service.",
    },
  ]),
  make(42, "At the university office", "Administration", "B1", [
    {
      prompt: "Have you enrolled yet?",
      options: ["Not yet, I'm doing it tonight.", "Yes, I will.", "I enrol every day."],
      answer: 0,
      explanation: "Yet appelle une reponse sur l'etat present : not yet plus un plan.",
    },
    {
      prompt: "You'll need to bring the original, not a copy.",
      options: ["I'll bring it tomorrow then.", "It is original.", "Copies are cheaper."],
      answer: 0,
      explanation: "On accuse reception de la contrainte et on propose une action.",
    },
    {
      prompt: "I'm afraid the deadline has already passed.",
      options: ["Is there anything I can do?", "The deadline is Friday.", "I am afraid too."],
      answer: 0,
      explanation: "Face a une mauvaise nouvelle, on cherche une marge de manoeuvre.",
    },
    {
      prompt: "Could you spell your surname for me?",
      options: ["It is a surname.", "S, A, U, V, A, G, E.", "Yes, I could."],
      answer: 1,
      explanation: "Could you est une demande, pas une question sur la capacite.",
    },
    {
      prompt: "You should hear back within ten working days.",
      options: ["And if I don't?", "I heard you.", "Ten is a lot."],
      answer: 0,
      explanation: "La suite naturelle est de prevoir le cas ou rien n'arrive.",
    },
    {
      prompt: "Just so you know, the office closes at four on Fridays.",
      options: ["Good to know, thanks.", "It is Friday.", "Four o'clock is late."],
      answer: 0,
      explanation: "Just so you know introduit une information utile : on remercie.",
    },
  ]),
  make(43, "Making arrangements", "Organisation", "B1", [
    {
      prompt: "Shall we say two o'clock outside the main entrance?",
      options: ["That works for me.", "We said it.", "It is two o'clock."],
      answer: 0,
      explanation: "Shall we say propose un rendez-vous : on confirme.",
    },
    {
      prompt: "I'd rather not meet on Monday if that's all right.",
      options: ["Of course, how about Tuesday?", "Monday is fine.", "You would rather."],
      answer: 0,
      explanation: "I'd rather not exprime une preference negative : on propose autre chose.",
    },
    {
      prompt: "Let me know if anything changes.",
      options: ["Will do.", "Nothing changed.", "Let me know too."],
      answer: 0,
      explanation: "Will do est la confirmation informelle standard.",
    },
    {
      prompt: "Any chance you could send it over before lunch?",
      options: ["I'll try, but it might be closer to two.", "There is no chance.", "Lunch is at one."],
      answer: 0,
      explanation: "On repond a une demande avec une estimation realiste.",
    },
    {
      prompt: "We're running about fifteen minutes behind.",
      options: ["No worries, I'll wait.", "Fifteen is behind.", "You are running."],
      answer: 0,
      explanation: "Running behind signifie etre en retard sur le planning.",
    },
    {
      prompt: "Does Thursday still suit you?",
      options: ["Actually, could we push it to Friday?", "Thursday suits Thursday.", "I still do."],
      answer: 0,
      explanation: "On peut confirmer ou renegocier : la reponse B et C n'ont pas de sens.",
    },
  ]),
  make(44, "Shops and services", "Commerces", "A2", [
    {
      prompt: "Would you like a bag with that?",
      options: ["No thanks, I've got one.", "Yes, it is a bag.", "The bag is mine."],
      answer: 0,
      explanation: "Offre commerciale : on accepte ou on decline brievement.",
    },
    {
      prompt: "I'm sorry, we're out of stock at the moment.",
      options: ["When are you expecting more?", "I am out too.", "The stock is sorry."],
      answer: 0,
      explanation: "On demande la date de reapprovisionnement.",
    },
    {
      prompt: "Would you like to pay by card or cash?",
      options: ["Card, please.", "Yes, please.", "I would like to pay."],
      answer: 0,
      explanation: "Question a choix : on choisit l'une des deux options.",
    },
    {
      prompt: "Do you need a receipt?",
      options: ["Yes, if you don't mind.", "The receipt needs me.", "I do not receipt."],
      answer: 0,
      explanation: "Reponse polie a une offre pratique.",
    },
    {
      prompt: "It comes with a two-year guarantee.",
      options: ["Does that cover accidental damage?", "Two years is a year.", "It came."],
      answer: 0,
      explanation: "On approfondit l'information donnee.",
    },
    {
      prompt: "Sorry to keep you waiting.",
      options: ["That's all right.", "I kept waiting.", "You are sorry."],
      answer: 0,
      explanation: "Excuse legere : on rassure.",
    },
  ]),
  make(45, "Study and coursework", "Etudes", "B2", [
    {
      prompt: "How's the essay coming along?",
      options: ["Slowly, but I've got an outline.", "It comes along the road.", "The essay is coming."],
      answer: 0,
      explanation: "To come along signifie avancer, progresser.",
    },
    {
      prompt: "You might want to check the referencing before you submit.",
      options: ["Good point, I'll go through it.", "I already submitted it yesterday and it was fine.", "Referencing is a style."],
      answer: 0,
      explanation: "You might want to est un conseil poli : on l'accepte.",
    },
    {
      prompt: "I'm not sure I follow your argument in the second section.",
      options: ["Which part exactly?", "I follow you.", "The second section is long."],
      answer: 0,
      explanation: "On demande une precision pour pouvoir corriger.",
    },
    {
      prompt: "Would it help if I read a draft?",
      options: ["That would be great, thank you.", "It helps you.", "I have no draft ever."],
      answer: 0,
      explanation: "Offre d'aide : on accepte avec gratitude.",
    },
    {
      prompt: "Don't take this the wrong way, but the introduction is too long.",
      options: ["No, that's fair, I'll cut it.", "I take it wrongly.", "The introduction is short."],
      answer: 0,
      explanation: "La formule annonce une critique bienveillante.",
    },
    {
      prompt: "Have you had a chance to look at the feedback?",
      options: ["Not properly yet, I skimmed it.", "The chance looked.", "Feedback is a chance."],
      answer: 0,
      explanation: "Have you had a chance to est une facon douce de demander si c'est fait.",
    },
  ]),
  make(46, "Travel situations", "Voyage", "B1", [
    {
      prompt: "Is this the right platform for the Brussels train?",
      options: ["It is, but it's been moved to seven.", "Brussels is a city.", "Yes, it is a platform."],
      answer: 0,
      explanation: "Reponse utile : confirmation plus information nouvelle.",
    },
    {
      prompt: "You'll have to change at Lille.",
      options: ["How long is the connection?", "I changed already.", "Lille is far."],
      answer: 0,
      explanation: "On enchaine sur l'information pratique qui manque.",
    },
    {
      prompt: "I'm afraid your bag is slightly over the limit.",
      options: ["Can I move something into my hand luggage?", "The bag is slight.", "I am over."],
      answer: 0,
      explanation: "On propose une solution concrete.",
    },
    {
      prompt: "Check-in closes forty minutes before departure.",
      options: ["So I need to be there by ten past.", "Departure closes.", "Forty is a number."],
      answer: 0,
      explanation: "On traduit la regle en heure concrete : reaction naturelle.",
    },
    {
      prompt: "Would you like a window or an aisle?",
      options: ["Aisle, if there's one left.", "Yes, please.", "A window is glass."],
      answer: 0,
      explanation: "Question a choix : on choisit avec une condition.",
    },
    {
      prompt: "Mind the gap between the train and the platform.",
      options: ["Thanks, I will.", "The gap minds.", "I am the gap."],
      answer: 0,
      explanation: "Avertissement de securite : on accuse reception.",
    },
  ]),
  make(47, "At work", "Monde professionnel", "B2", [
    {
      prompt: "Could you walk me through the numbers?",
      options: ["Sure, let's start with the first column.", "I walked yesterday.", "The numbers walk."],
      answer: 0,
      explanation: "To walk someone through signifie expliquer pas a pas.",
    },
    {
      prompt: "I'll be honest, I think we're underestimating the timeline.",
      options: ["What would you add to it?", "You are honest.", "Timelines are long."],
      answer: 0,
      explanation: "On invite la personne a preciser son objection.",
    },
    {
      prompt: "Do you want to take that offline?",
      options: ["Yes, let's discuss it after the meeting.", "There is no line.", "I am offline."],
      answer: 0,
      explanation: "Take it offline signifie en reparler en dehors de la reunion.",
    },
    {
      prompt: "That's not quite what I had in mind.",
      options: ["Tell me what you were picturing.", "Your mind is quiet.", "I had it too."],
      answer: 0,
      explanation: "Desaccord attenue : on cherche a comprendre l'attente.",
    },
    {
      prompt: "Can I pick your brain about the supplier issue?",
      options: ["Of course, when suits you?", "My brain is fine.", "Pick anything."],
      answer: 0,
      explanation: "Pick your brain veut dire demander un avis, un conseil.",
    },
    {
      prompt: "We're going to have to park that for now.",
      options: ["Understood, shall I add it to next month?", "Where is the car?", "Parking is hard."],
      answer: 0,
      explanation: "To park a topic signifie le mettre de cote provisoirement.",
    },
  ]),
  make(48, "Health and appointments", "Sante", "B1", [
    {
      prompt: "How long have you been feeling like this?",
      options: ["About four days now.", "I feel it.", "Very long indeed."],
      answer: 0,
      explanation: "Question sur la duree : on donne une periode precise.",
    },
    {
      prompt: "Are you allergic to anything that you know of?",
      options: ["Penicillin, yes.", "I know of it.", "Allergies are common."],
      answer: 0,
      explanation: "On repond par l'allergene concerne.",
    },
    {
      prompt: "I'd like to see you again in two weeks.",
      options: ["Shall I book at reception?", "I saw you.", "Two weeks is short."],
      answer: 0,
      explanation: "On enchaine sur la demarche pratique.",
    },
    {
      prompt: "Take one tablet twice a day with food.",
      options: ["Morning and evening, then?", "I take food.", "Twice is two."],
      answer: 0,
      explanation: "On reformule pour verifier sa comprehension.",
    },
    {
      prompt: "If it gets worse over the weekend, don't wait until Monday.",
      options: ["Who should I call?", "It is the weekend.", "Monday is fine."],
      answer: 0,
      explanation: "Consigne d'urgence : on demande le contact.",
    },
    {
      prompt: "Have you had any side effects so far?",
      options: ["Nothing apart from mild headaches.", "So far is far.", "I have effects."],
      answer: 0,
      explanation: "On repond avec la nuance apart from.",
    },
  ]),
  make(49, "Social and small talk", "Relations", "B1", [
    {
      prompt: "We should catch up properly one of these days.",
      options: ["Definitely, are you free next week?", "I caught it.", "Days are long."],
      answer: 0,
      explanation: "To catch up signifie se revoir pour prendre des nouvelles.",
    },
    {
      prompt: "I heard you've moved. How's the new place?",
      options: ["Smaller, but much quieter.", "I moved.", "The place is new."],
      answer: 0,
      explanation: "How's demande une appreciation avec un detail.",
    },
    {
      prompt: "Sorry, I didn't catch your name.",
      options: ["It's Lena, with an L.", "I threw it.", "Names are hard."],
      answer: 0,
      explanation: "Didn't catch signifie ne pas avoir entendu.",
    },
    {
      prompt: "Fancy a coffee after the seminar?",
      options: ["Go on, then.", "Coffee is fancy.", "I fancy nothing."],
      answer: 0,
      explanation: "Fancy est une invitation informelle ; go on then l'accepte.",
    },
    {
      prompt: "It's been ages since we spoke.",
      options: ["I know, far too long.", "Ages are old.", "We spoke yesterday indeed."],
      answer: 0,
      explanation: "On abonde dans le sens de la remarque.",
    },
    {
      prompt: "No pressure, but let me know either way.",
      options: ["I'll tell you by Friday.", "There is no pressure.", "Either is a way."],
      answer: 0,
      explanation: "Either way signifie que la reponse soit oui ou non.",
    },
  ]),
  make(50, "Softened disagreement", "Nuances", "C1", [
    {
      prompt: "I see what you mean, although I'm not sure the data supports it.",
      options: ["Which figures are you thinking of?", "You see me.", "Data is data."],
      answer: 0,
      explanation: "Desaccord poli : on demande sur quoi il repose.",
    },
    {
      prompt: "To be fair, she did warn us about the delay.",
      options: ["True, I'd forgotten that.", "Fairness is good.", "She warns often."],
      answer: 0,
      explanation: "To be fair introduit une nuance en faveur de quelqu'un.",
    },
    {
      prompt: "I wouldn't go that far, personally.",
      options: ["Where would you draw the line?", "It is far.", "I go far too."],
      answer: 0,
      explanation: "Reserve exprimee : on demande jusqu'ou l'autre irait.",
    },
    {
      prompt: "It's not that I disagree, it's more a question of timing.",
      options: ["So when would you do it?", "You disagree.", "Timing is a question."],
      answer: 0,
      explanation: "La structure it's more a question of recentre le debat.",
    },
    {
      prompt: "With respect, that wasn't quite what the report said.",
      options: ["Fair enough, remind me of the wording.", "I respect you.", "Reports say things."],
      answer: 0,
      explanation: "With respect annonce une correction ferme mais polie.",
    },
    {
      prompt: "I take your point, but there's a cost we haven't mentioned.",
      options: ["Go on, which one?", "I took it.", "Points are costly."],
      answer: 0,
      explanation: "On invite l'interlocuteur a developper son objection.",
    },
  ]),
];
