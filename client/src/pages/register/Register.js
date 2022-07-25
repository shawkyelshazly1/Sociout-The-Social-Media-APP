import "./register.css";

export default function Register() {
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
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input
              placeholder="Password"
              type="password"
              className="registerInput"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>

            <button className="registerRegisterButton">
              Log into your account.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
