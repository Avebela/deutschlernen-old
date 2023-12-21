import React from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";

const InputField = ({ text, handleInput, handleSubmit }) => {
  const editText = (e) => {
    handleInput(e.target.value);
  };

  return (
    <label>
      <MyInput name="todoName" type="text" value={text} onChange={editText} />

      <MyButton //disabled={}
        onClick={handleSubmit}
      >
        Добавить задание
      </MyButton>
    </label>
  );
};

export default InputField;
