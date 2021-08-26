import { combineReducers } from "redux";
import { ProgressInterface } from "./interfaces/progressInterface";
import progress from "./progress";

export interface IReducer {
  progress: ProgressInterface;
}

const rootReducer = combineReducers<IReducer>({
  progress,
});

export default rootReducer;
