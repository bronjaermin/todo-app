import React, {useContext, useEffect, useState} from "react";
import HomeCard from "../components/home/HomeCard";
import { MyContext } from "../context/my-context";
import useMyCustomHook from '../hooks/my-custom-hook'
import axios from "axios";

const Home = () => {
  const [myTodos, setMyTodos] = useState([
    { id: 1, content: "Ela Programer" },
    { id: 2, content: "1111111" },
    { id: 3, content: "2222222" },
    { id: 4, content: "3333333" },
    { id: 5, content: "4444444" },
    { id: 6, content: "5555555" },
  ])
  const [myInput, setMyInput] = useState('')
  const programiranje = useContext(MyContext)

  const myChildToParentFunction = (name, lastName, age) => {
    console.log(name, lastName, age);
  };

  const getAllTodosHandler = async () => {
    try {
      const response = await axios.get("https://localhost:7137/api/Todos");
      console.log("RESPONSE", response.data)
    } catch(e) {
      console.log("Error", e)
    }
    
  }
  
  return (
    <div className="content">
      <div className="content-header">
        <div className="content-header-div content-header-div-one">
          <h1>MY TODO APP</h1>
        </div>
        <div className="content-header-div  content-header-div-two">
          <input onChange={(e) => setMyInput(e.target.value)} value={myInput} />
          <button onClick={() => programiranje.changeFirstName(myInput)}>Submit</button>
        </div>
      </div>

      <button onClick={getAllTodosHandler}>GET ALL TODOS</button>

      {myTodos.map((myTodo) => (
        <HomeCard
          key={myTodo.id}
          content={myTodo.content}
          customFunction={myChildToParentFunction}
        />
      ))}
      {/* <HomeCard
        content="Ela Programer"
        customFunction={}
      /> */}
    </div>
  );
};

export default Home;
