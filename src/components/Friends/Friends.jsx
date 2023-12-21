import React from "react";
import s from "./Friends.module.css";
import Icon from "./Icon/Icon";

const Friends = (props) => {
  let state = props.sideBar;
  let FriendElements = state.friends.map((f) => f.name + " ");

  let IconElements = state.icon.map((i) => <Icon img={i.img} key={i.id} />);

  return (
    <div className={s.friends}>
      <div>Friends</div>
      <div>{FriendElements}</div>

      <div>{IconElements}</div>
    </div>
  );
};

export default Friends;
