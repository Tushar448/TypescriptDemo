import * as React from "react";
import { connect } from "react-redux";
import getLoginDetail from "../action/login-service";
import { ICharacter } from "../constant/chracter";
import UserProfile from "../container/profile";
// Create the containers interface
interface IProps {
  loadData: () => void;
  data: ICharacter[];
}

class CharacterList extends React.Component<IProps> {
  componentWillMount() {
    this.props.loadData();
  }
  public render() {
    const { data } = this.props;
    return (
      <div className="name-container">
        {data &&
          data.map(data => {
            return (
              <span key={data.name} className="name">
                {data.name}
              </span>
            );
          })}
        <UserProfile />
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
// const mapStateToProps = (store: any) => {
//   return {
//     characters: store.characterState.characters
//   };
// };

const mapStateToProps = ({ LoginReducer }: any) => {
  return {
    data: LoginReducer.data
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // tslint:disable-line
  return {
    loadData: () => dispatch(getLoginDetail())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
