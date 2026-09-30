import TestIndex from "@/components/TestIndex";
import { writing } from "@/data/writing";

export const metadata = { title: "Writing | Atelier TOEFL" };

export default function WritingIndex() {
  return (
    <TestIndex
      section="writing"
      title="Writing"
      intro="Les trois taches du format 2026 : reconstruire des phrases, rediger un email en sept minutes, repondre a une discussion academique en dix. Chaque tache propose une grille d'auto-evaluation et une reponse modele."
      tests={writing}
    />
  );
}
