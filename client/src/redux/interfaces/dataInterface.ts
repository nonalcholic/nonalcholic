import { Answer } from "./progressInterface";

export interface ResultInterface {
  id: string;
  answers: Answer[];
  result: string;
  ip: string;
}
