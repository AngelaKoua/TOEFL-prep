import TestIndex from "@/components/TestIndex";
import { reading } from "@/data/reading";

export const metadata = { title: "Reading | Atelier TOEFL" };

export default function ReadingIndex() {
  return (
    <TestIndex
      section="reading"
      title="Reading"
      intro="Trente passages academiques, dix textes de la vie courante et dix exercices Complete the Words. Au format 2026, la section dure environ trente minutes et s'adapte a votre niveau : entrainez-vous en chronometrant chaque test."
      tests={reading}
    />
  );
}
