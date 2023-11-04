import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login-page-div">
        <div className="login-page-input">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className="login-page-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="login-page-button">
          <button
            onClick={() =>
              console.log("USERNAME, PASSWORD", userName, password)
            }
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
