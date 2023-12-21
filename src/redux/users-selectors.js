import { createSelector } from "reselect";
// export const getUsers = (state) => {
//   return state.usersPage.users;
// };

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});

// export const getUsersSuperSelector = createSelector(getUsers, (users) => {
//   return users.filter((u) => true);
// });
// export const getUsersSelector = (state) => {
//   return getUsers(state).users.filter((u) => true);
// };

// export const getUsersSuperSelector = createSelector(
//   getUsers,
//   getIsFetching,
//   (users, isFetching) => {
//   return users.filter((u) => true);
// });

// export const getUsersSelector =  (state) => {
//    return state.usersPage.users.filter((u) => true);
// };

// export const getUsersSuperSelector = createSelector  (state) => {
//   return state.usersPage.users;
// };

// export const getUsersSuperSelector = createSelector(() => {
//   state.usersPage.users.filter((u) => true);
// });

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
