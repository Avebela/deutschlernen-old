export const updateObjectInArray = (
  items,
  itemId,
  objectPropName,
  newObjProps
) => {
  // state.users.map((u) => {
  return items.map((u) => {
    //if (u.id === itemId) {

    //  if (u["id"] === itemId) {

    if (u[objectPropName] === itemId) {
      //   return { ...u, followed: false };
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
