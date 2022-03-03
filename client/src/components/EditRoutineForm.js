import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditRoutineForm = ({ routines, routine, editRoutine }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  //need some way of specifying which routine is being edited ---attempted on line 12
  function handleSubmit() {
    //this will handle what happens when update button is clicked
    //const currentRoutine = routines.filter((routine) => routine.id == id);
    editRoutine(routine);
  }

  function editRoutine(routine) {
    //   const updatedRoutines = routines.do - something - idk - what;
    //   setRoutines(updatedRoutines);
    console.log(routine);
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
