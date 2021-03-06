import { AnswerData } from "../redux/interfaces/progressInterface";
import { QuestionInfo } from "./utils.const";

export const caculateMBTI = (answerData: AnswerData[]) => {
  let EI = 0;
  let SN = 0;
  let TF = 0;
  let JP = 0;
  answerData.forEach((answer) => {
    const question = QuestionInfo.find((question) => question.id === answer.id);

    switch (question?.type) {
      case "EI":
        EI += answer.score === "E" ? 1 : -1;
        break;
      case "SN":
        SN += answer.score === "S" ? 1 : -1;
        break;
      case "TF":
        TF += answer.score === "T" ? 1 : -1;
        break;
      case "JP":
        JP += answer.score === "J" ? 1 : -1;
        break;
    }
  });

  let result = "";
  if (EI > 0) result += "E";
  else result += "I";
  if (SN > 0) result += "S";
  else result += "N";
  if (TF > 0) result += "T";
  else result += "F";
  if (JP > 0) result += "J";
  else result += "P";

  return result;
};

export const isMBTIResult = (text: string) => {
  switch (text.toUpperCase()) {
    case "ENTP":
    case "ENTJ":
    case "ENFP":
    case "ENFJ":
    case "ESTP":
    case "ESTJ":
    case "ESFP":
    case "ESFJ":
    case "INTP":
    case "INTJ":
    case "INFP":
    case "INFJ":
    case "ISTP":
    case "ISTJ":
    case "ISFP":
    case "ISFJ":
      return true;
    default:
      return false;
  }
};
