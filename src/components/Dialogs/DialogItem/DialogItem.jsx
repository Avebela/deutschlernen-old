import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>
        <img
          className={s.img1}
          src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg"
        />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
