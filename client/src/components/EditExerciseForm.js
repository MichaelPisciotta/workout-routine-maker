import React, { useState } from "react";

const EditExerciseForm = ({ editExercise, id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    editExercise(name, description);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Edit Name or Description</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default EditExerciseForm;
