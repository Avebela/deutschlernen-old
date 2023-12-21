// store OOP
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _callsubscriber() {
    console.log("State was changed");
  },

  subscribe(observer) {
    this._callsubscriber = observer;
  },

  //       subscribe  (observer) {
  // rerenderEntireTree = observer; },

  // наблюдатель, патерн
  // observer button.addEventListener//  publisher subscriber

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Message 1", like: "like1" },
        { id: 2, message: "Message 2", like: "like2" },
        { id: 3, message: "Message 3", like: "like3" },
        { id: 4, message: "Message 4", like: "like4" },
      ],
      newPostText: "Первый текст",
    },
    messagesPage: {
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
      newMessageText: "Первый месседж",
    },
    sideBar: {
      friends: [
        { id: 1, name: "Nina" },
        { id: 2, name: "Diana" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Demid" },
      ],
      icon: [
        {
          id: 1,
          img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
        },
        {
          id: 2,
          img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
        },
        {
          id: 3,
          img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
        },
        {
          id: 4,
          img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },

  // addMessage() {
  //   let newMessage = {
  //     id: 5,
  //     message: this._state.messagesPage.newMessageText,
  //   };
  //   this._state.messagesPage.messages.push(newMessage);
  //   this._state.messagesPage.newMessageText = "";
  //   this._callsubscriber(this._state);
  // },
  // onMessageChange(newText) {
  //   this._state.messagesPage.newMessageText = newText;
  //   this._callsubscriber(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._callsubscriber(this._state);
  },
};

export const fake = () => 5;
// export const addPostActionCreater = () => {
//   return {
//     type: ADD_POST,
//   };
// };

export default store;
window.store = store;
