import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef(),
    password = useRef();

  const { user, isFetching, dispatch } = useContext(AuthContext);
  // handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sociout</h3>
          <span className="loginDesc">
            Social media platform to connect with everyone around the world.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleFormSubmission}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength={6}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" />
              ) : (
                "Create new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
