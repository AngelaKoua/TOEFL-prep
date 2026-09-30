import TestIndex from "@/components/TestIndex";
import { listening } from "@/data/listening";

export const metadata = { title: "Listening | Atelier TOEFL" };

export default function ListeningIndex() {
  return (
    <TestIndex
      section="listening"
      title="Listening"
      intro="Quinze conversations, dix annonces, quinze cours et dix series de reponses courtes. L'audio est produit par la synthese vocale de votre navigateur : reglez la vitesse, mais ecoutez d'abord a 1x, comme le jour de l'examen."
      tests={listening}
    />
  );
}
