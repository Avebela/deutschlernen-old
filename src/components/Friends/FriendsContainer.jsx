import React from "react";
import Friends from "./Friends";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

const FriendsContainer1 = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return <Friends sideBar={store.getState().sideBar} />;
      }}
    </StoreContext.Consumer>
  );
};

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
