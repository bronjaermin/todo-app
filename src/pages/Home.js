import React from "react";
import HomeCard from "../components/home/HomeCard";

const myTodos = [
  { id: 1, content: "Ela Programer" },
  { id: 2, content: "1111111" },
  { id: 3, content: "2222222" },
  { id: 4, content: "3333333" },
  { id: 5, content: "4444444" },
  { id: 6, content: "5555555" },
];

const Home = () => {
  const myChildToParentFunction = (name, lastName, age) => {
    console.log(name, lastName, age);
  };

  return (
    <div className="content">
      <div className="content-header">
        <div className="content-header-div content-header-div-one">
          <h1>MY TODO APP</h1>
        </div>
        <div className="content-header-div  content-header-div-two">
          <input />
          <button>Submit</button>
        </div>
      </div>

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
