export const metadata = { title: "Format et bareme 2026 | Atelier TOEFL" };

const ROWS = [
  {
    s: "Reading",
    t: "environ 30 min, adaptatif",
    i: "50 items",
    k: "Complete the Words, Read in Daily Life, Read an Academic Passage",
  },
  {
    s: "Listening",
    t: "environ 29 min, adaptatif",
    i: "47 items",
    k: "Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk",
  },
  {
    s: "Writing",
    t: "23 min, lineaire",
    i: "12 items",
    k: "Build a Sentence, Write an Email (7 min), Writing for an Academic Discussion (10 min)",
  },
  {
    s: "Speaking",
    t: "8 min, lineaire",
    i: "11 items",
    k: "Listen and Repeat, Take an Interview",
  },
];

export default function Guide() {
  return (
    <div>
      <div className="page-head">
        <h1>Ce qui a change le 21 janvier 2026</h1>
        <p>
          L'examen est passe de trois a quatre heures a environ une heure et
          demie, l'echelle 0 a 120 a laisse place a des bandes de 1,0 a 6,0 par
          pas de 0,5, et neuf types de taches sur douze sont nouveaux. Si vous
          avez des annales anterieures a 2026, elles portent sur un examen qui
          n'existe plus.
        </p>
      </div>

      <div className="panel">
        <h2>Structure de l'epreuve</h2>
        <p className="small muted">
          Les quatre sections s'enchainent dans un ordre fixe, sans pause.
        </p>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Section</th>
                <th>Duree</th>
                <th>Items</th>
                <th>Types de taches</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.s}>
                  <td>
                    <b>{r.s}</b>
                  </td>
                  <td>{r.t}</td>
                  <td>{r.i}</td>
                  <td>{r.k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <h2>Le routage adaptatif</h2>
        <p>
          Reading et Listening se deroulent en deux etapes. Votre performance
          dans la premiere determine le niveau de difficulte de la seconde, et
          donc le plafond de votre score. Writing et Speaking restent lineaires.
        </p>
        <p>
          La consequence pratique est contre-intuitive : le debut de la section
          pese plus lourd que la fin. Ne perdez pas six minutes sur la premiere
          question difficile, mais ne survolez pas non plus les premiers items
          pour gagner du temps.
        </p>
      </div>

      <div className="panel">
        <h2>Lire une bande</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Bande</th>
                <th>Correspondance CECR approximative</th>
                <th>Ce que cela signifie concretement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5,5 a 6,0</td>
                <td>C1 et plus</td>
                <td>
                  Vous suivez un cours magistral sans effort et vous nuancez a
                  l'ecrit comme a l'oral.
                </td>
              </tr>
              <tr>
                <td>4,5 a 5,0</td>
                <td>B2 solide</td>
                <td>
                  Niveau demande par la plupart des programmes anglophones de
                  licence et de master.
                </td>
              </tr>
              <tr>
                <td>3,5 a 4,0</td>
                <td>B2 en construction</td>
                <td>
                  Vous comprenez l'essentiel mais perdez les details rapides et
                  les implicites.
                </td>
              </tr>
              <tr>
                <td>2,5 a 3,0</td>
                <td>B1</td>
                <td>
                  Communication efficace sur des sujets familiers, difficultes
                  sur l'academique.
                </td>
              </tr>
              <tr>
                <td>1,0 a 2,0</td>
                <td>A2 vers B1</td>
                <td>
                  Travaillez d'abord le vocabulaire de haute frequence et
                  l'ecoute, avant les techniques d'examen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <h2>Les pieges propres a chaque nouvelle tache</h2>
        <h3 style={{ marginTop: 16 }}>Complete the Words</h3>
        <p>
          Les premieres lettres sont donnees. L'erreur la plus frequente n'est
          pas lexicale mais grammaticale : on trouve le bon mot et on oublie la
          terminaison exigee par la phrase.
        </p>
        <h3>Listen and Choose a Response</h3>
        <p>
          Une seule ecoute, pas de transcription. Ce qui est teste est le
          registre et l'intention, pas le vocabulaire : une reponse correcte
          grammaticalement peut etre absurde pragmatiquement.
        </p>
        <h3>Build a Sentence</h3>
        <p>
          Dix items sur les douze de la section writing. C'est la partie la plus
          rentable de l'epreuve, car elle se travaille par automatismes.
        </p>
        <h3>Write an Email</h3>
        <p>
          Sept minutes. Trois paragraphes suffisent : contexte, demande precise,
          cloture. Le registre compte autant que la langue.
        </p>
        <h3>Listen and Repeat</h3>
        <p>
          On evalue la prononciation, le rythme et la memoire de travail. Repetez
          le groupe de sens entier plutot que mot a mot.
        </p>
        <h3>Take an Interview</h3>
        <p>
          Aucune preparation, quarante-cinq secondes de reponse. Il vaut mieux
          commencer par une position nette et l'illustrer que chercher la reponse
          parfaite pendant cinq secondes de silence.
        </p>
      </div>

      <div className="panel">
        <h2>Verifier les informations</h2>
        <p className="small muted">
          Ce guide reflete le format annonce par ETS pour 2026. Les durees
          exactes et les baremes peuvent evoluer : confirmez toujours sur le site
          officiel d'ETS avant de vous inscrire.
        </p>
      </div>
    </div>
  );
}
