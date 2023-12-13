import React, { useContext, useState } from "react";
import "../styles/auth.css";
import axios from "axios";
import { MyContext } from "../context/my-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserFunction } = useContext(MyContext);
  const navigate = useNavigate();

  const loginUserHandler = async () => {
    setError(null);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://localhost:7137/api/Users/login",
        {
          userName: userName,
          password: password,
        }
      );

      const responseData = response.data;

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${responseData.token}`;

      setUserFunction(responseData);

      localStorage.setItem("user", JSON.stringify(responseData));
      setUserName("");
      setPassword("");
      navigate("/home");
    } catch (e) {
      console.log("Error", e);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="auth-page-div">
          <div className="auth-page-input">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username..."
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className="auth-page-input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && (
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
          )}
          <div className="auth-page-button">
            <button onClick={loginUserHandler}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
