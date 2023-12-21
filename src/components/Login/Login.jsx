import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreater } from "../../utils/validators/validators";
import { Input } from "../Commen/FormControls/FormControls";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import s from "../Commen/FormControls/FormControls.module.css";
import { createField } from "../Commen/FormControls/FormControls";
const maxLength50 = maxLengthCreater(50);
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength50]}
        /> */}
      {createField("Email", "email", [required, maxLength50], Input)}
      {/* <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required, maxLength50]}
          type={"password"}
        /> */}
      {createField("Password", "password", [required, maxLength50], Input, {
        type: "password",
      })}
      {/* <Field component={Input} name={"rememberMe"} type={"checkbox"} /> */}
      {createField(
        null,
        "rememberMe",
        [],
        Input,

        {
          type: "checkbox",
        },
        "remember me"
      )}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField(
          "Symbols from images",
          "captcha",
          [required],
          Input,

          {}
        )}

      {error && <div className={s.formSummeryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
    //console.log(formData);
  };
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);

// const LoginForm = (props) => {
//   return (
//     <form>
//       <div>
//         <input placeholder={"Login"} />
//       </div>
//       <div>
//         <input placeholder={"Password"} />
//       </div>
//       <div>
//         <input type={"checkbox"} />
//         remember me
//       </div>
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   );
// }
