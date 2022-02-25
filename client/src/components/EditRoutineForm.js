import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditRoutineForm = ({}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleUpdate(id) {}

  return (
    <div>
      <form onSubmit={handleUpdate}>
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
