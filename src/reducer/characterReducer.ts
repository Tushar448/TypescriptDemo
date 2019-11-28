import { Reducer, Action } from "redux";
import { LoginSuccess } from "../constant/action-type";
import { Constants } from "../constant/action";
import { ICharacter } from "../constant/chracter";

// Define the Character State
export interface ICharacterState {
  readonly characters: ICharacter[];
}

export function isCharacter(action: Action): action is LoginSuccess {
  return action.type === Constants.LOGIN_SUCCESS;
}
// Define the initial state
const initialCharacterState: ICharacterState = {
  characters: []
};

export const characterReducer: Reducer<ICharacterState, Action> = (
  state = initialCharacterState,
  action
) => {
  if (isCharacter(action)) {
    return {
      ...state,
      characters: action.data
    };
  } else {
    return state;
  }
};
