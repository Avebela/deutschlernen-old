import { stopSubmit } from "redux-form";
import { typeAPI } from "../api/api";

const SET_TYPE = "SET_TYPE";
const SET_TYPE_INSERT = "SET_TYPE_INSERT";
const SET_TYPE_UPDATE = "SET_TYPE_UPDATE";
const SET_TYPE_ONE = "SET_TYPE_ONE";

let initialState = {
  // typeNew: [1, 2, 3],
  types: [
    { id: 1, name: "Message 1" },
    { id: 2, name: "Message 2" },
  ],
};

const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE: {
      return {
        ...state,
        //...action.payload,
        // types: state.types.map((a) => (a.id === action.id ? action.types : a)),

        // state.articles.map(a => (a.id === action.id ? action.article : a))

        types: action.types,
        /// type: [...state.typeNew, ...action.typeNew],
        // types: [...state.type, ...action.types],
        /// users: [...state.users, ...action.users]
      };
    }
    case SET_TYPE_ONE: {
      return {
        ...state,
        types: action.types,
      };
    }
    case SET_TYPE_INSERT: {
      return {
        ...state,
        types: action.types,
        //types: { ...state.types, typeNew: action.typeNew },
      };
    }

    case SET_TYPE_UPDATE: {
      return {
        ...state,
        // types: action.types,
        types: { ...state.types, typeNew: action.typeNew },
      };
    }

    default:
      return state;
  }
};

export const setType = (type) => ({
  type: SET_TYPE,
  types: type,
});

export const setTypeOne = (type) => ({
  type: SET_TYPE_ONE,
  types: type,
});

export const setTypeInsert = (type) => ({
  type: SET_TYPE_INSERT,
  typeNew: type,
});

export const setTypeUpdate = (type) => ({
  type: SET_TYPE_UPDATE,
  typeNew: type,
});

export const getType = () => {
  return async (dispatch) => {
    const data = await typeAPI.getType();

    dispatch(setType(data));
  };
};

export const getTypeOne = () => {
  return async (dispatch) => {
    const data = await typeAPI.getTypeOne();

    dispatch(setTypeOne(data));
  };
};

export const insertType = (type) => {
  return async (dispatch) => {
    try {
      const data = await typeAPI.typeInsert(type);

      //  dispatch(setTypeInsert(data));
      dispatch(getType());
    } catch (e) {
      console.log(e);
      // dispatch(stopSubmit("edit-type", { _error: e }));
      // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0] }}));
      //return Promise.reject(e);
    }
  };
};

export const updateType = (type) => {
  return async (dispatch) => {
    try {
      const data = await typeAPI.typeUpdate(type);

      //  dispatch(setTypeInsert(data));
      dispatch(getType());
    } catch (e) {
      console.log(e);
      // dispatch(stopSubmit("edit-type", { _error: e }));
      // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0] }}));
      //return Promise.reject(e);
    }
  };
};

export default typeReducer;
