import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = " SAVE_PHOTO_SUCCESS";
let initialState = {
  posts: [
    { id: 1, message: "Message 1", like: "like1" },
    { id: 2, message: "Message 2", like: "like2" },
    { id: 3, message: "Message 3", like: "like3" },
    { id: 4, message: "Message 4", like: "like4" },
  ],
  //  newPostText: "Первый текст",
  userProfile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = action.newPostText;
      return {
        ...state,
        //   newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 5,
            message: text,
            like: 0,
          },
        ],

        // let newPost = {
        //   id: 10,
        //   message: state.newPostText,
        //   like: 0,
        // };

        // stateCopy.posts = [...state.posts];
        // //state.posts.push(newPost);
        // //state.newPostText = "";
        // stateCopy.posts.push(newPost);
        // stateCopy.newPostText = "";

        // return stateCopy;
      };
    case DELETE_POST:
      return {
        ...state,
        post: state.posts.filter((p) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    // case UPDATE_NEW_POST_TEXT:
    //   return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreater = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

// export const updateNewPostTextActionCreater = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {}
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    // dispatch(getUserProfile(30361));
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0] }}));
    return Promise.reject(response.data.messages[0]);
  }
};

// export const getUserProfile = (userId) => (dispatch) => {
//   profileAPI.getProfile(userId).then((response) => {
//     dispatch(setUserProfile(response.userProfile));
//   });
// };

// stateCopy.newPostText = { ...state.newPostText };

// //state.newPostText = action.newText;
// stateCopy.newPostText = action.newText;
//return stateCopy;

export default profileReducer;
