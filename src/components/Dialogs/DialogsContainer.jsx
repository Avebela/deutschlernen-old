import React from "react";
import { addMessageActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import StoreContext from "../../StoreContext";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const DialogsContaine1 = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addMessage = () => {
          store.dispatch(addMessageActionCreater());
        };

        // let onMessageChange = (text) => {
        //   store.dispatch(updateNewMessageTextActionCreater(text));
        // };
        return (
          <Dialogs
            messagesPage={store.getState().messagesPage}
            // dialogs={state.messagesPage.dialogs}
            addMessage={addMessage}
            // onMessageChange={onMessageChange}
            // newMessageText={state.messagesPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreater(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

// export default DialogsContainer;

// props.addMessage(text);
// props.dispatch({ type: "ADD-MESSAGE" });

// let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text };
// props.dispatch(action);
