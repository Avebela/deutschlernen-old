import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  // let LinkRight = () => (props.side = 100 ? s.messages1 : s.messages2);
  // debugger;
  let LinkRight = s.messages2;

  return (
    // <div className={s.message}>

    <div className={s.messages}>
      {/* <div className={() => (props.side = 100 ? s.messages1 : s.messages2)}> */}
      <div className={s.circle}>1</div>
      <p>{props.message}</p>
      {props.side}
    </div>
  );
};

export default Message;
