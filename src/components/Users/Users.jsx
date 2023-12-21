import React from "react";

import Paginator from "../Commen/Paginator/Paginator";
import User from "../Users/User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      {/* <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div> */}

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

{
  /* <button onClick={this.getUsers}> Get Users </button> */
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
