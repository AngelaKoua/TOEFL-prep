import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { articles, getArticle } from "@/data/learning/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ id: String(a.id) }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.id);
  return { title: article ? `${article.title} | Learning` : "Learning" };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.id);
  if (!article) notFound();
  return <ArticleView article={article} total={articles.length} />;
}
