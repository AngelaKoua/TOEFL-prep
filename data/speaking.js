import { speakingA } from "./speaking-a";
import { speakingB } from "./speaking-b";
import { speakingC } from "./speaking-c";
import { speakingD } from "./speaking-d";

export const speaking = [...speakingA, ...speakingB, ...speakingC, ...speakingD];

export function getSpeaking(id) {
  return speaking.find((t) => t.id === Number(id));
}
