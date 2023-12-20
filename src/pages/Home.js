import React, { useContext, useEffect, useState } from "react";
import HomeCard from "../components/home/HomeCard";
import { MyContext } from "../context/my-context";
import axios from "axios";

const Home = () => {
  const [myInput, setMyInput] = useState("");
  const [todos, setTodos] = useState([]);
  const programiranje = useContext(MyContext);
  const { user } = useContext(MyContext);

  const getTodos = async () => {
    try {
      const response = await axios.get("https://localhost:7137/api/Todos");
      const responseData = response.data;

      setTodos(responseData);
    } catch (e) {
      console.log("Exception", e);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log("TODOS", todos);

  const childToParentFunction = async (id) => {
    console.log("ID iz child komponente", id);
    const filteredArray = todos.filter((x) => x.id !== id);

    try {
      await axios.delete(`https://localhost:7137/api/Todos/${id}`);
      setTodos([...filteredArray]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  // const myChildToParentFunction = (name, lastName, age) => {
  //   console.log(name, lastName, age);
  // };

  return (
    <div className="content">
      <div className="content-header">
        <div className="content-header-div content-header-div-one">
          <h1>MY TODO APP</h1>
        </div>
        <div className="content-header-div  content-header-div-two">
          <input onChange={(e) => setMyInput(e.target.value)} value={myInput} />
          <button onClick={() => programiranje.changeFirstName(myInput)}>
            Submit
          </button>
        </div>
      </div>

      {todos !== null && todos.length === 0 && <p>Prazan niz</p>}
      {todos !== null &&
        todos.length > 0 &&
        todos.map((todo) => (
          <HomeCard
            key={todo.id}
            id={todo.id}
            content={todo.content}
            customFunction={() => {}}
            isLoggedIn={user !== null}
            childToParentFunction={childToParentFunction}
          />
        ))}

      {/* {myTodos.map((myTodo) => (
        <HomeCard
          key={myTodo.id}
          content={myTodo.content}
          customFunction={myChildToParentFunction}
        />
      ))} */}

      {/* <HomeCard
        content="Ela Programer"
        customFunction={}
      /> */}
    </div>
  );
};

export default Home;
