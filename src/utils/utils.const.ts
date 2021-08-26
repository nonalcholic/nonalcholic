import { QuestionData } from "../redux/interfaces/progressInterface";

export const TOTAL_PROGRESS_NUMBER = 12;

export const QuestionInfo: QuestionData[] = [
  {
    id: 0,
    type: "EI",
    question: "질문 1",
    choiceA: { text: "답변 1-1", type: -1 },
    choiceB: { text: "답변 1-1", type: 1 },
  },
  {
    id: 1,
    type: "EI",
    question: "질문 2",
    choiceA: { text: "답변 2-1", type: -1 },
    choiceB: { text: "답변 2-2", type: 1 },
  },
  {
    id: 2,
    type: "EI",
    question: "질문 3",
    choiceA: { text: "답변 3-1", type: -1 },
    choiceB: { text: "답변 3-2", type: 1 },
  },
  {
    id: 3,
    type: "SN",
    question: "질문 4",
    choiceA: { text: "답변 4-1", type: -1 },
    choiceB: { text: "답변 4-2", type: 1 },
  },
  {
    id: 4,
    type: "SN",
    question: "질문 5",
    choiceA: { text: "답변 5-1", type: -1 },
    choiceB: { text: "답변 5-2", type: 1 },
  },
  {
    id: 5,
    type: "SN",
    question: "질문 6",
    choiceA: { text: "답변 6-1", type: -1 },
    choiceB: { text: "답변 6-2", type: 1 },
  },
  {
    id: 6,
    type: "TF",
    question: "질문 7",
    choiceA: { text: "답변 7-1", type: -1 },
    choiceB: { text: "답변 7-2", type: 1 },
  },
  {
    id: 7,
    type: "TF",
    question: "질문 8",
    choiceA: { text: "답변 8-1", type: -1 },
    choiceB: { text: "답변 8-2", type: 1 },
  },
  {
    id: 8,
    type: "TF",
    question: "질문 9",
    choiceA: { text: "답변 9-1", type: -1 },
    choiceB: { text: "답변 9-2", type: 1 },
  },
  {
    id: 9,
    type: "JP",
    question: "질문 10",
    choiceA: { text: "답변 10-1", type: -1 },
    choiceB: { text: "답변 10-2", type: 1 },
  },
  {
    id: 10,
    type: "JP",
    question: "질문 11",
    choiceA: { text: "답변 11-1", type: -1 },
    choiceB: { text: "답변 11-2", type: 1 },
  },
  {
    id: 11,
    type: "JP",
    question: "질문 12",
    choiceA: { text: "답변 12-1", type: -1 },
    choiceB: { text: "답변 12-2", type: 1 },
  },
];
