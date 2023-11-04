import React, {useContext, useEffect, useState} from "react";
import HomeCard from "../components/home/HomeCard";
import { MyContext } from "../context/my-context";
import useMyCustomHook from '../hooks/my-custom-hook'

const Home = () => {
  const [myTodos, setMyTodos] = useState([
    { id: 1, content: "Ela Programer" },
    { id: 2, content: "1111111" },
    { id: 3, content: "2222222" },
    { id: 4, content: "3333333" },
    { id: 5, content: "4444444" },
    { id: 6, content: "5555555" },
  ])
  const [counter, setCounter] = useState(0)
  const [myInput, setMyInput] = useState('')
  const programiranje = useContext(MyContext)
  const mojHuk = useMyCustomHook()

  useEffect(() => {
  }, [counter])

  const myChildToParentFunction = (name, lastName, age) => {
    console.log(name, lastName, age);
  };

  const onIncrementCounter = () => {
    setCounter(oldValue => oldValue + 1);
  }

  const onDecrementCounter = () => {
    setCounter(oldValue => oldValue - 1);
  }

  console.log("Moje ime je", programiranje.firstName)
  
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

      <button onClick={mojHuk.increment}>Increment</button>
      <h1>COUNTER: {mojHuk.counter}</h1>
      <button onClick={mojHuk.decrement}>Decrement</button>

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
