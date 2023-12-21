import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  compose,
} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleWare from "redux-thunk";
import typeReducer from "./type-reducer";
import { reducer as formReducer } from "redux-form";

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
  type: typeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

window.__store__ = store;
export default store;
