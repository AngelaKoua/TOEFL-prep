import TestIndex from "@/components/TestIndex";
import { speaking } from "@/data/speaking";

export const metadata = { title: "Speaking | Atelier TOEFL" };

export default function SpeakingIndex() {
  return (
    <TestIndex
      section="speaking"
      title="Speaking"
      intro="Dix series de repetition de phrases et quarante entretiens. Au format 2026 il n'y a plus aucun temps de preparation : on parle des la fin de la question, pendant quarante-cinq secondes. Vos enregistrements restent dans votre navigateur."
      tests={speaking}
    />
  );
}
