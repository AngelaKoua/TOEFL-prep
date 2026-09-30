import { notFound } from "next/navigation";
import ListeningRunner from "@/components/ListeningRunner";
import { listening, getListening } from "@/data/listening";

export function generateStaticParams() {
  return listening.map((t) => ({ id: String(t.id) }));
}

export function generateMetadata({ params }) {
  const test = getListening(params.id);
  return { title: test ? `${test.title} | Listening` : "Listening" };
}

export default function ListeningTest({ params }) {
  const test = getListening(params.id);
  if (!test) notFound();
  return <ListeningRunner test={test} total={listening.length} />;
}
