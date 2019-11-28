import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import getLoginDetail from "../action/login-service";
export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  const counter = useSelector((state: any) => state.characterReducer);
  const dispatch = useDispatch();
  const store = useStore();
  //console.log(">>>>>>>>>>>>>" + JSON.stringify(counter));
  const { LoginReducer } = store.getState();
  //console.log(">>>>>>>>>>>>>123" + JSON.stringify(LoginReducer));
  return (
    <div>
      <h1>User Profile</h1>
      <br />
      <button onClick={() => dispatch(getLoginDetail())}>Submit</button>
    </div>
  );
};

export default UserProfile;
