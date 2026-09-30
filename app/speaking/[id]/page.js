import { notFound } from "next/navigation";
import SpeakingRunner from "@/components/SpeakingRunner";
import { speaking, getSpeaking } from "@/data/speaking";

export function generateStaticParams() {
  return speaking.map((t) => ({ id: String(t.id) }));
}

export function generateMetadata({ params }) {
  const test = getSpeaking(params.id);
  return { title: test ? `${test.title} | Speaking` : "Speaking" };
}

export default function SpeakingTest({ params }) {
  const test = getSpeaking(params.id);
  if (!test) notFound();
  return <SpeakingRunner test={test} total={speaking.length} />;
}
