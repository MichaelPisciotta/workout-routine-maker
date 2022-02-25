import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

const CreateRoutine = ({ exercises, routines, addRoutine }) => {
  // let history = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  //const [owner, setOwner] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const routineObj = {
      title: title,
      description: description,
      //user_id: owner
    };
    setLoading(true);
    fetch("/routines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(routineObj),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        //debugger;
        addRoutine(data);
        setTitle("");
        setDescription("");
        //setOwner("")
        setTimeout(() => {
          setLoading(false);
          // history.push("/routines");
        }, 1000);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Routines</h1>

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

        <button type="submit">
          {loading ? "loading..." : "Create New Routine"}
        </button>
      </form>
    </div>
  );
};

export default CreateRoutine;
