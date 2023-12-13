import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/my-context";
import axios from "axios";

const MyNavigation = () => {
  const { user, setUserFunction } = useContext(MyContext);

  const logoutUserHandler = () => {
    setUserFunction(null);
    localStorage.removeItem("user");
    axios.defaults.headers.common[
      "Authorization"
    ] = '';
  };

  return (
    <div className="navigation">
      <div className="navigation-link">
        <Link to="/home">Home</Link>
      </div>
      {!user && (
        <div className="navigation-link">
          <Link to="/login">Login</Link>
        </div>
      )}
      {!user && (
        <div className="navigation-link">
          <Link to="/registration">Registration</Link>
        </div>
      )}
      {user && (
        <div className="navigation-link">
          <button onClick={logoutUserHandler}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default MyNavigation;
