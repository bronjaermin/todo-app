import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/my-context";
import axios from "axios";
import "../styles/edittodo.css";

const EditTodoPage = () => {
  const { id } = useParams();
  const { user } = useContext(MyContext);
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  const getTodoById = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7137/api/Todos/${id}`
      );
      const responseData = response.data;

      setTodo(responseData);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    if (user !== null && id !== null) {
      getTodoById(id);
    }
  }, [user, id]);

  const editTodoHandler = async () => {
    try {
      var response = await axios.put(
        `https://localhost:7137/api/Todos/${todo.id}`,
        { content: todo.content }
      );

      navigate("/home");
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div className="edit-todo">
      {todo && (
        <div className="edit-todo-div">
          <div className="edit-page-input">
            <label>Content</label>
            <textarea
              type="text"
              placeholder="ex. elacuric"
              rows={10}
              value={todo.content}
              onChange={(e) => {
                setTodo((oldState) => ({
                  ...oldState,
                  content: e.target.value,
                }));
              }}
            />
            <button onClick={editTodoHandler} className="edit-page-button">
              Edit todo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTodoPage;
