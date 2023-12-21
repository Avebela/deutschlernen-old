import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/buy-one-get-one-free-logo-design-template-08a90705dc649cb0fad947c571902c99_screen.jpg?ts=1610032698"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <div>userId: {props.userId}</div>
            <div>
              login: {props.login} -{" "}
              <button onClick={props.logout}>Log out</button>{" "}
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
