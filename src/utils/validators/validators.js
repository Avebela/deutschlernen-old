export const required = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is requared";
};

export const maxLengthCreater = (maxLength) => (value) => {
  // if (value.length > 30)
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

  return undefined;
};

// export const maxLength30 = (value) => {
//     // if (value.length > 30)
//     if (value && value.length > 30) {
//       return "Max length is 30 symbols";
//     }
//     return undefined;
//   };
