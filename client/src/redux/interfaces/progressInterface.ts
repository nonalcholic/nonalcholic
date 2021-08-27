export interface ProgressInterface {
  id: number;
  currentProgress: number;
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
  choiceA: ChoiceData;
  choiceB: ChoiceData;
}
export interface ChoiceData {
  text: string;
  type: Answer;
}
