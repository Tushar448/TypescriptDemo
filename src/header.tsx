import React from "react";
// import { LoginProps, LoginState } from "./login";

// class LoginForm extends React.Component<LoginProps, LoginState> {
//   state: LoginState;
//   constructor(props: LoginProps) {
//     super(props);
//     this.state = { username: "Kunj", password: "" };
//   }
//   render() {
//     return <h1>{this.state.username}</h1>;
//   }
// }

// export default LoginForm;
export interface LoginFormProps {
  username: String;
}

const LoginForm: React.FC<{ userName: string }> = ({ userName }) => {
  return <h1>{userName}</h1>;
};

export default LoginForm;
