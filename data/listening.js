import { listeningA } from "./listening-a";
import { listeningB } from "./listening-b";
import { listeningC } from "./listening-c";
import { listeningD } from "./listening-d";
import { listeningE } from "./listening-e";
import { listeningF } from "./listening-f";

export const listening = [
  ...listeningA,
  ...listeningB,
  ...listeningC,
  ...listeningD,
  ...listeningE,
  ...listeningF,
];

export function getListening(id) {
  return listening.find((t) => t.id === Number(id));
}
