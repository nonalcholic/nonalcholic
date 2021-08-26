export interface UserInterface {
  id: number;
  currentProgress: number;
  EI: number;
  SN: number;
  TF: number;
  JP: number;
  answerData: AnswerData[];
}

export interface AnswerData {
  id: number;
  score: Answer;
}

export type Answer = -1 | 1 | 0;
export type MBTIType = "EI" | "SN" | "TF" | "JP";

export interface QuestionData {
  id: number;
  type: MBTIType;
  question: string;
  answerA: string;
  answerB: string;
}
