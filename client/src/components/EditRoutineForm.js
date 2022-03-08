import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditRoutineForm = ({ routines, editRoutine, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    editRoutine(title, description);
    //I dont know what to send into handlesubmit, what to do inside of it or what to send editRoutine
  } //not sure how to specify specific routine that is being sent in

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Edit Title or Description</h1>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditRoutineForm;
