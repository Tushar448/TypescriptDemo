import React from "react";
import { connect } from "react-redux";
import LoginForm from "./header";
import Input from "./input";
import getLoginDetail from "./action/login-service";
import { ICharacter } from "./constant/chracter";
import CharacterList from "./container/CharacterList";
export interface LoginProps {
  loadData: () => void;
  data: ICharacter[];
}

export interface LoginState {
  username: string;
  password: String;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps, state: LoginState) {
    super(props, state);
    this.state = { username: "", password: "" };
  }

  componentDidMount() {
    this.props.loadData();
  }

  componentWillReceiveProps(nextProps: any) {
    //console.log(">>>>>>>>>>>>>>>LoginReducer" + JSON.stringify(nextProps));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{this.state.username}</h1>
        <LoginForm userName="Kunj" />
        <Input
          type="text"
          placeholder="User Name"
          onChangeForm={this.handleChange}
          name="username"
          value={this.state.username}
        />
        {data && data.map(item => <span key={item.name}>{item.name}</span>)}
        <CharacterList />
      </div>
    );
  }

  handleChange = (e: any) => {
    this.setState({ username: e.target.value });
  };
}

const mapStateToProps = ({ LoginReducer }: any) => {
  return {
    data: LoginReducer.data
  };
};

// const mapStateToProps = (ownProps: LoginProps) => {
//   // TODO: Use state to fill the props of the component
//   return {
//     data: []
//   };
// };
const mapDispatchToProps = (dispatch: any) => {
  // tslint:disable-line
  return {
    loadData: () => dispatch(getLoginDetail())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
