import { Reducer } from "redux";
import { AppActions } from "..//constant/action-type";
import { Constants } from "../constant/action";
import { ICharacter } from "../constant/chracter";

// Define the Character State
export interface ICharacterState {
  readonly data: ICharacter[];
}

// Define the initial state
const initialCharacterState: ICharacterState = {
  data: []
};
const LoginReducer: Reducer<ICharacterState, AppActions> = (
  state = initialCharacterState,
  action
) => {
  //   if (action.type === "LOGIN_START") {
  //     return {
  //       ...state
  //     };
  //   }
  //   if (action.type === "LOGIN_SUCCESS") {
  //     return {
  //       ...state,
  //       data: action.data
  //     };
  //   }
  //   if (action.type === "LOGIN_ERROR") {
  //     return {
  //       ...state
  //     };
  //   }

  switch (action.type) {
    case Constants.LOGIN_START: {
      return { ...state };
    }

    case Constants.LOGIN_SUCCESS: {
      return { ...state, data: action.data };
    }

    case Constants.LOGIN_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default LoginReducer;
