const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
  dialogs: [
    { id: 1, name: "Nina" },
    { id: 2, name: "Diana" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Demid" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Let's go!" },
    { id: 4, message: "Bye!" },
  ],
  // newMessageText: "Первый месседж",
};

const dialogsReducer = (state = initialState, action) => {
  // let stateCopy;

  switch (action.type) {
    case ADD_MESSAGE: {
      // let newMessage = {
      //   id: 5,
      //   message: state.newMessageText,
      // };
      let body = action.newMessageText;
      return {
        ...state,
        // newMessageText: "",
        messages: [
          // {
          //   id: 5,
          //   message: body,
          // },
          ...state.messages,
          {
            id: 5,
            message: body,
          },
        ],
      };
      //stateCopy.messages.push(newMessage );

      // stateCopy.messages.push({
      //   id: 5,
      //   message: body
      // });
      //stateCopy.newMessageText = "";
      // return stateCopy;
    }
    // case UPDATE_NEW_MESSAGE_TEXT: {
    //   return {
    //     ...state,
    //     newMessageText: action.newText,
    //   };
    //   // stateCopy.newMessageText = action.newText;
    //   //  return stateCopy;
    // }
    default:
      return state;
  }
};

export const addMessageActionCreater = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

// export const updateNewMessageTextActionCreater = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newText: text,
// });

export default dialogsReducer;
