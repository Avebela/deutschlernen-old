import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let LinkActive = ({ isActive }) => (isActive ? s.activeLink : "");
  var name = "Diana";

  // state={props.appState.profilePage}

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          // className={(navData) => (navData.isActive ? s.activeLink : s.item)}
          className={LinkActive}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" className={LinkActive}>
          Messages
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/users" className={LinkActive}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={LinkActive}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={LinkActive}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/type" className={LinkActive}>
          Type
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends " className={LinkActive}>
          <h3>Friends</h3>
          <div className={s.friend}>{name}</div>
          <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />
          <div className={s.friend}>Nina</div>
          <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />
          <div className={s.friend}>Alex </div>
          <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />

          {/* <div className={s.friend}>Diana Nina Alex</div>
          <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />

          <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />

          <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />
        */}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
