import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditRoutineForm = ({
  routines,
  routine,
  setRoutine,
  editRoutine,
  setDisplayEditForm,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  //I dont know what to send into handlesubmit
  function handleSubmit() {
    editRoutine(routine);
  }

  function editRoutine(routine) {
    console.log(routine);
    fetch(`/routines/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(routine),
    })
      .then((r) => r.json())
      .then((data) => {
        setRoutine(data);
        setDisplayEditForm(false);
      });
  }

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
