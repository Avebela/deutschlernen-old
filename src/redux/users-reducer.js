import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  //fake: 10,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "FAKE":
    //   return {
    //     ...state,
    //     fake: state.fake + 1,
    //   };
    case FOLLOW:
      return {
        ...state,
        //users: [...state.users], ===
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        //users: [...state.users], ===
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USER:
      return { ...state, users: action.users };
    // return { ...state, users: [...state.users, ...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgres: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USER, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleIsFollowingProgress(false, userId));
  }
};

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.getFollow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.getUnfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

// export const follow = (userId) => {
//   return async (dispatch) => {
//     let apiMethod = usersAPI.getFollow.bind(usersAPI);
//     let actionCreator = followSuccess;
//     followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
//   };
// };

// export const unfollow = (userId) => {
//   return async (dispatch) => {
//     let apiMethod = usersAPI.getUnfollow.bind(usersAPI);
//     let actionCreator = unfollowSuccess;
//     followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
//   };
// };

export default usersReducer;

// {
//   id: 1,
//   photoURL:
//     "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
//   followed: true,
//   fullName: "Nina",
//   status: "I'm boss",
//   location: { city: "Minsk", country: "Belarus" },
// },
// {
//   id: 2,
//   photoURL:
//     "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
//   followed: true,
//   fullName: "Diana",
//   status: "I'm boss",
//   location: { city: "Moscow", country: "Russia" },
// },
// {
//   id: 3,
//   photoURL:
//     "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
//   followed: false,
//   fullName: "Alex",
//   status: "I'm boss",
//   location: { city: "Kiew", country: "Ukraina" },
// },
// {
//   id: 4,
//   photoURL:
//     "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
//   followed: false,
//   fullName: "Demid",
//   status: "I'm boss",
//   location: { city: "Köln", country: "Germany" },
// },
