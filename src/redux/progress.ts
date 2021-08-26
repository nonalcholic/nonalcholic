import { Dispatch } from "redux";
import { handleActions } from "redux-actions";
import { TOTAL_PROGRESS_NUMBER } from "../utils/utils.const";
import { ProgressInterface } from "./interfaces/progressInterface";

const PROGRESS_RESET = "PROGRESS/RESET";
const PROGRESS_UPDATE = "PROGRESS/UPDATE";

const PROGRESS_NEXT = "PROGRESS/NEXT";
const PROGRESS_PREV = "PROGRESS/PREV";

export const resetProgress = () => (dispatch: Dispatch) => {
  dispatch({
    type: PROGRESS_RESET,
  });
};

export const updateProgress =
  (data: ProgressInterface) => (dispatch: Dispatch) => {
    dispatch({ type: PROGRESS_UPDATE, payload: data });
  };

export const nextProgress = () => (dispatch: Dispatch) => {
  dispatch({ type: PROGRESS_NEXT });
};
export const prevProgress = () => (dispatch: Dispatch) => {
  dispatch({ type: PROGRESS_PREV });
};

const initialState: ProgressInterface = {
  id: -1,
  currentProgress: 0,
  EI: 0,
  SN: 0,
  TF: 0,
  JP: 0,
  answerData: [
    { id: 0, score: 0 },
    { id: 1, score: 0 },
    { id: 2, score: 0 },
    { id: 3, score: 0 },
    { id: 4, score: 0 },
    { id: 5, score: 0 },
    { id: 6, score: 0 },
    { id: 7, score: 0 },
    { id: 8, score: 0 },
    { id: 9, score: 0 },
    { id: 10, score: 0 },
    { id: 11, score: 0 },
  ],
};

export default handleActions<ProgressInterface, any>(
  {
    [PROGRESS_UPDATE]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [PROGRESS_RESET]: () => {
      return { ...initialState };
    },
    [PROGRESS_NEXT]: (state) => {
      const moveTo =
        state.currentProgress === TOTAL_PROGRESS_NUMBER - 1
          ? state.currentProgress
          : state.currentProgress + 1;
      return { ...state, currentProgress: moveTo };
    },
    [PROGRESS_PREV]: (state, action) => {
      const moveTo =
        state.currentProgress === 0 ? 0 : state.currentProgress - 1;
      return { ...state, currentProgress: moveTo };
    },
  },
  initialState
);
