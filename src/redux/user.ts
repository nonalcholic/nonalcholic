import { Dispatch } from "redux";
import { handleActions } from "redux-actions";
import { UserInterface } from "./interfaces/userInterface";

const USER_SET = "USER/SET";
const USER_RESET = "USER/RESET";
const USER_UPDATE = "USER/UPDATE";

export const setUser = (userData: UserInterface) => (dispatch: Dispatch) => {
  dispatch({ type: USER_SET, payload: userData });
};

export const resetUser = (dispatch: Dispatch) => {
  dispatch({
    type: USER_RESET,
  });
};

export const updateUser = (userData: any) => (dispatch: Dispatch) => {
  dispatch({ type: USER_UPDATE, payload: userData });
};

const initialState: UserInterface = {
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

export default handleActions<UserInterface, any>(
  {
    [USER_SET]: (state, action) => {
      return action.payload;
    },
    [USER_UPDATE]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [USER_RESET]: () => {
      return { ...initialState };
    },
  },
  initialState
);
