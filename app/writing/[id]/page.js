import { notFound } from "next/navigation";
import WritingRunner from "@/components/WritingRunner";
import { writing, getWriting } from "@/data/writing";

export function generateStaticParams() {
  return writing.map((t) => ({ id: String(t.id) }));
}

export function generateMetadata({ params }) {
  const test = getWriting(params.id);
  return { title: test ? `${test.title} | Writing` : "Writing" };
}

export default function WritingTest({ params }) {
  const test = getWriting(params.id);
  if (!test) notFound();
  return <WritingRunner test={test} total={writing.length} />;
}
