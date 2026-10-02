import LearningBoard from "@/components/LearningBoard";

export const metadata = { title: "Learning | Atelier TOEFL" };

export default function LearningPage() {
  return (
    <div>
      <div className="page-head">
        <h1>Learning</h1>
        <p>
          Des ressources pour progresser entre deux tests : des articles pour
          enrichir le vocabulaire, des videos pour entrainer l'oreille et un
          discours a apprendre chaque semaine. Cochez ce que vous avez termine
          pour suivre votre avancee.
        </p>
      </div>
      <LearningBoard />
    </div>
  );
}
