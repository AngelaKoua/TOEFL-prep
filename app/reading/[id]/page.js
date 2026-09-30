import { notFound } from "next/navigation";
import ReadingRunner from "@/components/ReadingRunner";
import { reading, getReading } from "@/data/reading";

export function generateStaticParams() {
  return reading.map((t) => ({ id: String(t.id) }));
}

export function generateMetadata({ params }) {
  const test = getReading(params.id);
  return { title: test ? `${test.title} | Reading` : "Reading" };
}

export default function ReadingTest({ params }) {
  const test = getReading(params.id);
  if (!test) notFound();
  return <ReadingRunner test={test} total={reading.length} />;
}
