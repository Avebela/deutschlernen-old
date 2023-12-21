let initialState = {
  friends: [
    { id: 1, name: "Nina" },
    { id: 2, name: "Diana" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Demid" },
  ],
  icon: [
    {
      id: 1,
      img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
    },
    {
      id: 2,
      img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
    },
    {
      id: 3,
      img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
    },
    {
      id: 4,
      img: "https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg",
    },
  ],
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
