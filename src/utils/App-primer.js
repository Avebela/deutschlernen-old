import React, { Suspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import TypeContainer from "./components/Type/TypeContainer";
import TypeEdit from "./components/Type/TypeEdit";

import FriendsContainer from "./components/Friends/FriendsContainer";
import { Route, Routes } from "react-router-dom";

import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import withRouter from "./WithRouter";
import Preloader from "./components/Commen/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter, Navigate } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
// const DialogsContainer = React.lazy(() =>
//   import("./components/Dialogs/DialogsContainer")
// );
import ProfileContainer from "./components/Profile/ProfileContainer";

// const ProfileContainer = React.lazy(() =>
//   import("./components/Profile/ProfileContainer")
// );

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-sidebar">
          <FriendsContainer />
        </div>
        <div className="app-wrapper-content">
          {/* <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          > */}
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/type" element={<TypeContainer />} />
            // <Route path="/type/:id?" element={<TypeEdit />} />
            {/* <Route path="`/type/:id?name=${name}`" element={<TypeEdit />} /> */}
            {/* `users?page=${currentPage}&count=${pageSize}` */}
            <Route path="/friends" element={<FriendsContainer />} />
            {/*<Route path="*" element={<NotFound />} />*/}
            <Route path="*" element={() => <div>404 NOT FOUND</div>} />
          </Routes>
          {/* </Suspense> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = () => {
  return (
    <BrowserRouter>
      {/*   <HashRouter> <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <Provider store={store}>
        <AppContainer
        // store={store}
        // appState={state}
        // dispatch={store.dispatch.bind(store)}
        // addPost={store.addPost.bind(store)}
        // onPostChange={store.onPostChange.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // onMessageChange={store.onMessageChange.bind(store)}
        />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJSApp;

// export default compose(
//   withRouter,
//   connect(mapStateToProps, { initializeApp })
// )(App);

// store={props.store}
// addPost={props.addPost}
// onPostChange={props.onPostChange}

// store={props.store}
// addMessage={props.addMessage}
// onMessageChange={props.onMessageChange}

{
  /* <Suspense
  fallback={
    <div>
      <Preloader />
    </div>
  }
>
  <Routes>
    <Route path="/profile/:userID" element={<ProfileContainer />} />
    <Route path="/profile" element={<ProfileContainer />} />
    <Route exact path="/dialogs" element={<DialogsContainer />} />
    <Route path="/news" element={<News />} />
    <Route path="/music" element={<Music />} />
    <Route path="/users" element={<UsersContainer />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</Suspense>; */
}
