import React from "react";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  // getUsersSuperSelector,
} from "../../redux/users-selectors";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Users from "./Users";
import Preloader from "../Commen/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    // console.log("render USERS");
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let AuthRedirectComponent = withAuthRedirect(UsersContainer);

let mapStateToProps = (state) => {
  // console.log("mapStateToProps USERS");
  return {
    users: getUsers(state),
    // users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

// export default AuthRedirectComponent(
//   connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleIsFollowingProgress,
//     getUsers,
//   })(UsersContainer)
// );

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setCurrentPage,
//   toggleIsFollowingProgress,
//   getUsers,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers,
  }),
  withAuthRedirect
)(UsersContainer);

// toggleIsFetching: toggleIsFetching,

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//     setTotalUsersCount: (totalCount) =>
//       dispatch(setTotalUsersCountAC(totalCount)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

{
  /* <button onClick={this.requestUsers}> Get Users </button> */
}

// getUsers = () => {
//   if (this.props.users.length === 0) {

//   }

//};

// constructor(props) {
//   super(props);
//   //alert("NEW");
// }

// <span className={true
//   ? s.selectPage
//   : ""}>

// <span className={true && s.selectPage}>p</span>;

// let UsersContainer = (props) => {
//   return <div>USERS WILL BE HERE</div>;
// };
