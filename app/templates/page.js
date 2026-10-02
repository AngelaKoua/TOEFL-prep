import TemplatesBoard from "@/components/TemplatesBoard";

export const metadata = { title: "Writing templates | Atelier TOEFL" };

export default function TemplatesPage() {
  return (
    <div>
      <div className="page-head">
        <h1>Writing templates</h1>
        <p>
          Redigez vos propres modeles de reponse pour l'email et la discussion
          academique, puis reprenez-les et ajustez-les au fil de vos
          entrainements. Ils restent dans votre navigateur et sont synchronises
          si vous etes connecte.
        </p>
      </div>
      <TemplatesBoard />
    </div>
  );
}
