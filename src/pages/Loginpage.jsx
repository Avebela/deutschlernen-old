import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../hook/useAuth";

const Loginpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || "/";
  const { signin } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
          <button type="submit">Login</button>
        </label>
      </form>
    </div>
  );
};

export { Loginpage };
