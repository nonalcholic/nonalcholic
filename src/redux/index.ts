import { combineReducers } from "redux";
import { UserInterface } from "./interfaces/userInterface";
import user from "./user";

export interface IReducer {
  user: UserInterface;
}

const rootReducer = combineReducers<IReducer>({
  user,
});

export default rootReducer;
