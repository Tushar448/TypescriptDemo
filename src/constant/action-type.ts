import { ICharacter } from "./chracter";
import { Action } from "redux";
export interface LoginStart extends Action {
  type: "LOGIN_START";
}

export interface LoginSuccess extends Action {
  type: "LOGIN_SUCCESS";
  data: ICharacter[];
}

export interface LoginError extends Action {
  type: "LOGIN_ERROR";
  errorMessage: string;
}

export type AppActions = LoginStart | LoginSuccess | LoginError;
