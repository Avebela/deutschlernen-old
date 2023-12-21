import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

import DialogsForm from "./DialogsForm";

const Dialogs = (props) => {
  let state = props.messagesPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} side={m.id === 1 ? 100 : 200} />
  ));

  // let newMessageText = state.newMessageText;

  // let newMessageElement = React.createRef();

  let addMessage = (values) => {
    props.addMessage(values.newMessageText);
    // alert(values.newMessageText);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>

      <DialogsForm onSubmit={addMessage} />
    </div>
  );
};
export default Dialogs;

// [
//   <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
//   <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
// ];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isOdd = (num) => num % 2 !== 0;
// const odd = numbers.filter(isOdd);
// let messagesElements = props.state.messages.map((m) => (
//   <Message message={m.message} />
// ));
// let messagesElements = numbers.filter(isOdd);
// const sweetArray = [2, 3, 4, 5, 35];
// const messagesElements = sweetArray.map((sweetItem) => {
//   return sweetItem * 2;
// });
