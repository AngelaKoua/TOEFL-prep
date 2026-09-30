import { readingA } from "./reading-a";
import { readingB } from "./reading-b";
import { readingC } from "./reading-c";
import { readingD } from "./reading-d";
import { readingE } from "./reading-e";
import { readingF } from "./reading-f";

export const reading = [
  ...readingA,
  ...readingB,
  ...readingC,
  ...readingD,
  ...readingE,
  ...readingF,
];

export function getReading(id) {
  return reading.find((t) => t.id === Number(id));
}
