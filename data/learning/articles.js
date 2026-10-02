import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";
import { articlesC } from "./articles-c";
import { articlesD } from "./articles-d";
import { articlesE } from "./articles-e";
import { articlesF } from "./articles-f";
import { articlesG } from "./articles-g";
import { articlesH } from "./articles-h";
import { articlesI } from "./articles-i";
import { articlesJ } from "./articles-j";

export const articles = [
  ...articlesA,
  ...articlesB,
  ...articlesC,
  ...articlesD,
  ...articlesE,
  ...articlesF,
  ...articlesG,
  ...articlesH,
  ...articlesI,
  ...articlesJ,
];

export function getArticle(id) {
  return articles.find((a) => a.id === Number(id));
}
