import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {
  const navigate = useNavigate();

  const editButtonFunction = () => {
    navigate(`/todos/${props.id}`);
  };

  const deleteHomeCardHandler = async () => {
    await props.childToParentFunction(props.id);
  };

  return (
    <div className="content-cards">
      <div className="content-card">
        <p>{props.content}</p>

        <div className="content-card-buttons">
          {props.isLoggedIn && (
            <button onClick={deleteHomeCardHandler}>Delete</button>
          )}
          {props.isLoggedIn && (
            <button onClick={editButtonFunction}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
