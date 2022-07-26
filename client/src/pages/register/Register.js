import "./register.css";
import { useRef } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  // register handler function
  const registerHandler = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Sociout</h3>
          <span className="registerDesc">
            Social media platform to connect with everyone around the world.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={registerHandler}>
            <input
              required
              type="text"
              placeholder="Username"
              className="registerInput"
              ref={username}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="registerInput"
              ref={email}
            />
            <input
              required
              placeholder="Password"
              type="password"
              className="registerInput"
              ref={password}
              minLength="6"
            />
            <input
              required
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
              ref={confirmPassword}
              minLength="6"
            />
            <button className="registerButton">Sign Up</button>

            <button className="registerRegisterButton">
              Log into your account.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
