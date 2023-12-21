// тестировщик jest
import {
  profileReducer,
  addPostActionCreater,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Message 1", like: "like1" },
    { id: 2, message: "Message 2", like: "like2" },
    { id: 3, message: "Message 3", like: "like3" },
    { id: 4, message: "Message 4", like: "like4" },
  ],
};

test("length post should be incremented", () => {
  // 1. test data
  let action = addPostActionCreater("NinaPost");

  // 2. action
  //let newState = profileReducer({}, {});
  let newState = profileReducer(state, action);

  // 3. expectation
  //expect(newState.posts.length) === 5;
  expect(newState.posts.length).toBe(5);
});

test("message should be correct", () => {
  // 1. test data
  let action = addPostActionCreater("NinaPost");

  // 2. action
  //let newState = profileReducer({}, {});
  let newState = profileReducer(state, action);

  // 3. expectation
  //expect(newState.posts.length) === 5;
  expect(newState.posts[4].message).toBe("NinaPost");
});

test("after deleting should be increment", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  //let newState = profileReducer({}, {});
  let newState = profileReducer(state, action);

  // 3. expectation
  //expect(newState.posts.length) === 5;
  expect(newState.posts.length).toBe(3);
});

// test("after deleting shouldn`t be decrement if id is incorrect", () => {
//   // 1. test data
//   let action = deletePost(1000);

//   // 2. action
//   //let newState = profileReducer({}, {});
//   let newState = profileReducer(state, action);

//   // 3. expectation
//   //expect(newState.posts.length) === 5;
//   expect(newState.posts.length).toBe(4);
// });
