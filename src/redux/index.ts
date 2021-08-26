import { combineReducers } from "redux";
import { IUserResponseDto } from "./interfaces/userInterface";
import user from "./user";

export interface IReducer {
  user: IUserResponseDto;
}

const rootReducer = combineReducers<IReducer>({
  user,
});

export default rootReducer;
