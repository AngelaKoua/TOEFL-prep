import { writingA } from "./writing-a";
import { writingB } from "./writing-b";
import { writingC } from "./writing-c";
import { writingD } from "./writing-d";
import { writingE } from "./writing-e";

export const writing = [
  ...writingA,
  ...writingB,
  ...writingC,
  ...writingD,
  ...writingE,
];

export function getWriting(id) {
  return writing.find((t) => t.id === Number(id));
}
