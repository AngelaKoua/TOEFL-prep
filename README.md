# Atelier TOEFL

Site personnel de préparation au TOEFL iBT, **format 2026** (en vigueur depuis le 21 janvier 2026 : environ 90 minutes, sections Reading et Listening adaptatives, notation en bandes de 1,0 à 6,0).

200 tests : 50 en Reading, 50 en Listening, 50 en Writing, 50 en Speaking.

## Lancer le site

Il vous faut Node.js 18.17 ou plus.

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000

Pour une version de production :

```bash
npm run build
npm start
```

## Ce que contient chaque section

**Reading (50)**
- 30 passages académiques avec 3 ou 4 questions, explications et vocabulaire
- 10 textes de la vie courante (règlement de bibliothèque, offre de stage, bail, notice de sécurité, etc.)
- 10 exercices *Complete the Words* de 8 items chacun

**Listening (50)**
- 15 conversations, 10 annonces, 15 cours académiques
- 10 séries *Listen and Choose a Response* de 6 items
- L'audio est produit par la synthèse vocale du navigateur : aucun fichier à héberger. Vous pouvez régler la vitesse entre 0,6x et 1,2x, et la transcription reste masquée tant que vous ne l'ouvrez pas.

**Writing (50)**
- 15 exercices *Build a Sentence* (120 phrases à reconstruire par blocs)
- 17 *Write an Email* chronométrés à 7 minutes
- 18 *Writing for an Academic Discussion* chronométrés à 10 minutes
- Chaque tâche rédigée propose un compteur de mots, une grille d'auto-évaluation, une réponse modèle et une liste de tournures

**Speaking (50)**
- 10 séries *Listen and Repeat* (8 phrases chacune, 15 secondes par phrase)
- 40 *Take an Interview* (5 questions chacun, 45 secondes, aucune préparation comme au format 2026)
- Enregistrement par le microphone, jusqu'à 4 prises conservées par question, téléchargeables

## Vie privée

Tout reste dans votre navigateur. La progression est stockée en `localStorage` sous la clé `toefl-prep:progress:v1`, et les enregistrements audio ne quittent jamais votre machine. Le bouton « Réinitialiser la progression » du tableau de bord efface tout.

## Notation

Les scores automatiques (Reading, Listening, Build a Sentence) sont convertis en bande selon `1 + taux de réussite × 5`, arrondi au demi-point. Pour Writing et Speaking, la bande vient de votre auto-évaluation par rubrique. C'est une estimation d'entraînement, pas une prédiction du score ETS.

## Structure du projet

```
app/
  page.js                 tableau de bord avec les jauges de bande
  guide/page.js           format et barème 2026
  reading/page.js         liste filtrable des 50 tests
  reading/[id]/page.js    page d'un test
  (idem listening, writing, speaking)
  layout.js, globals.css
components/
  Rail.js                 navigation latérale
  TestIndex.js            liste de tests réutilisable
  Shared.js               synthèse vocale, minuteur, enregistreur, navigation
  Mcq.js                  questions à choix multiple
  ReadingRunner.js  ListeningRunner.js  WritingRunner.js  SpeakingRunner.js
data/
  reading-a..f.js + reading.js
  listening-a..f.js + listening.js
  writing-a..e.js + writing.js
  speaking-a..d.js + speaking.js
lib/
  progress.js             localStorage, calcul des bandes
```

## Ajouter vos propres tests

Ouvrez le fichier de données correspondant et copiez un objet existant. Les formats attendus :

```js
// Reading, passage
{ id, title, topic, taskLabel, type: "passage", level, minutes,
  passage: "paragraphe\n\nparagraphe",
  questions: [{ q, options: [4 items], answer: 0..3, explanation }],
  vocabulary: ["mot : glose"] }

// Reading, Complete the Words
{ ..., type: "complete", instructions,
  items: [{ text: "phrase avec ___", answer: "submit", given: 3 }] }

// Listening, audio
{ ..., type: "audio", script: "Man: ...\nWoman: ...", questions: [...] }

// Listening, réponse à choisir
{ ..., type: "response", instructions,
  items: [{ prompt, options: [3 items], answer, explanation }] }

// Writing, Build a Sentence
{ ..., type: "build", instructions,
  items: [{ context, chunks: [...], answer, note }] }

// Writing, email
{ ..., type: "email", situation, requirements: [...], minutes: 7,
  targetWords, rubric: [...], model, phrases: [...] }

// Writing, discussion
{ ..., type: "discussion", professor: { who, text },
  posts: [{ who, text }], minutes: 10, targetWords, rubric, model, phrases }

// Speaking
{ ..., type: "repeat", instructions, rubric, items: [{ sentence, focus }] }
{ ..., type: "interview", instructions, rubric, items: [{ q, tips: [...] }] }
```

Les identifiants doivent rester uniques et continus de 1 à 50 dans chaque section.

## Compatibilité navigateur

- Synthèse vocale : Chrome, Edge, Safari, Firefox récents. Les voix disponibles dépendent du système ; installez une voix anglaise si le rendu est mauvais.
- Enregistrement : nécessite l'autorisation du microphone et un contexte sécurisé (localhost ou https).

## Avertissement

Ce site est un outil d'entraînement indépendant. TOEFL et TOEFL iBT sont des marques d'ETS. Les durées et le barème décrits reflètent le format annoncé pour 2026 ; vérifiez toujours sur ets.org avant de vous inscrire.
