import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditExerciseForm from "./EditExerciseForm";

const ExerciseCard = ({
  setExercises,
  exercises,
  name,
  description,
  id,
  deleteExercise,
}) => {
  const [displayEditExercise, setDisplayEditExercise] = useState(false);
  const navigate = useNavigate();

  function handleDelete() {
    fetch(`/exercises/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        //debugger
        return r.json();
      })
      .then((data) => console.log(data));
    deleteExercise(id);
  }

  function deleteExercise(id) {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(updatedExercises);
  }

  function editExercise(name, description) {
    const updatedExercise = { name, description };
    fetch(`/exercises/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(updatedExercise),
    })
      .then((r) => r.json())
      .then((data) => {
        updateExercises(data);
        setDisplayEditExercise(false);
        navigate("/routines");
      });
  }

  function updateExercises(newExercise) {
    const updatedExercises = exercises.map((exercise) => {
      if (exercise.id == newExercise.id) {
        return newExercise;
      } else {
        return exercise;
      }
    });
    setExercises(updatedExercises);
  }

  function editDisplay() {
    if (displayEditExercise) {
      return <EditExerciseForm editExercise={editExercise} id={id} />;
    } else {
      return (
        <button
          onClick={() => {
            setDisplayEditExercise(true);
          }}
        >
          Update
        </button>
      );
    }
  }

  return (
    <div>
      <br></br>
      <div className="exercise-card">
        <h4>{name}</h4>
        <h5>{description}</h5>
        <button onClick={handleDelete}>Delete</button>
        {editDisplay()}
      </div>
      <br></br>
    </div>
  );
};

export default ExerciseCard;
