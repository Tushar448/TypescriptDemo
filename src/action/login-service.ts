import Axios from "axios";
import { Dispatch } from "redux";
import { Constants } from "../constant/action";
import { ICharacter } from "../constant/chracter";

function getLoginSuccess() {
  return {
    type: Constants.LOGIN_SUCCESS,
    isAuthenticated: true
  };
}

function getLoginFailure(error: any) {
  return {
    type: Constants.LOGIN_ERROR,
    data: error,
    isAuthenticated: false
  };
}

export default function getLoginDetail() {
  return (dispatch: Dispatch) => {
    Axios.get("https://swapi.co/api/people/")
      .then(response => {
        //dispatch(getLoginSuccess(response.data.result));
        dispatch({
          data: response.data.results,
          type: Constants.LOGIN_SUCCESS
        });
      })
      .catch(e => {
        dispatch(getLoginFailure(e));
      });
  };
}
