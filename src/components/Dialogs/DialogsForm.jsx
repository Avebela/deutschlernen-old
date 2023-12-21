import React from "react";

import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreater } from "../../utils/validators/validators";
import { Textarea } from "../Commen/FormControls/FormControls";

const maxLength50 = maxLengthCreater(50);

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Enter your message"}
          name={"newMessageText"}
          component={Textarea}
          validate={[required, maxLength50]}
          //component={"textarea"}
          // onChange={onMessageChange}
          // ref={newMessageElement}
          // value={newMessageText}
        />
      </div>
      <div>
        <button
        //onClick={addMessage}
        >
          Add Message
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "dialogs",
})(DialogsForm);
