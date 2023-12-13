import React, { useContext, useState } from "react";
import "../styles/register.css";
import axios from "axios";
import { MyContext } from "../context/my-context";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState(null);
  const [lastName, setLastName] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState(null);
  const [address, setAddress] = useState("");
  const [addressMessage, setAddressMessage] = useState(null);
  const [age, setAge] = useState(0);
  const [ageMessage, setAgeMessage] = useState(null);
  const [userName, setUserName] = useState("");
  const [userNameMessage, setUserNameMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState(null);
  const {user} = useContext(MyContext)
  //let textRegex = /^[A-Za-z0-9]$/;

  console.log("USERRRRRRRRRRRR", user)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setFirstNameMessage(null);
    setLastNameMessage(null);
    setAddressMessage(null);
    setAgeMessage(null);
    setUserNameMessage(null);
    setPasswordMessage(null);

    if (firstName.trim().length === 0) {
      setFirstNameMessage("Please enter valid first name!");
      return;
    }

    if (lastName.trim().length === 0) {
      setLastNameMessage("Please enter valid last name!");
      return;
    }

    if (address.trim().length === 0) {
      setAddressMessage("Please enter valid address!");
      return;
    }

    if (age < 18 || age > 150) {
      setAgeMessage("Please enter correct age!");
      return;
    }

    if (userName.trim().length === 0) {
      setUserNameMessage("Please enter valid username!");
      return;
    }

    if (password.trim().length === 0) {
      setPasswordMessage("Please enter valid password!");
      return;
    }

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
      console.log(response.data)
    } catch(e) {
      console.log("ERROR", e)
    }
    console.log(firstName, lastName, address, age, userName, password);
  };

  return (
    <div className="auth-page">
      <div className="auth-page-div">
        <form onSubmit={onSubmitHandler}>
          <div className="auth-page-input">
            <label>First Name</label>
            <input
              type="text"
              placeholder="ex. Ela"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {firstNameMessage && (
              <p className="input-alert">{firstNameMessage}</p>
            )}
          </div>
          <div className="auth-page-input">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="ex. Curic"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            {lastNameMessage && (
              <p className="input-alert">{lastNameMessage}</p>
            )}
          </div>
          <div className="auth-page-input">
            <label>Address</label>
            <input
              type="text"
              placeholder="ex. Stevana Nemanje BB"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            {addressMessage && <p className="input-alert">{addressMessage}</p>}
          </div>
          <div className="auth-page-input">
            <label>Age</label>
            <input
              type="number"
              placeholder="ex. 18"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            {ageMessage && <p className="input-alert">{ageMessage}</p>}
          </div>
          <div className="auth-page-input">
            <label>Username</label>
            <input
              type="text"
              placeholder="ex. elacuric"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            {userNameMessage && (
              <p className="input-alert">{userNameMessage}</p>
            )}
          </div>
          <div className="auth-page-input">
            <label>Password</label>
            <input
              type="password"
              placeholder="ex. ElaCuric1!"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordMessage && (
              <p className="input-alert">{passwordMessage}</p>
            )}
          </div>
          <input type="submit" value="Register" />
        </form>
        <div className="auth-page-input"></div>
      </div>
    </div>
  );
};

export default Registration;
