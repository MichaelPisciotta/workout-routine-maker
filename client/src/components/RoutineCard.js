import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";

//would have to delete useEffect and exercises state,

const RoutineCard = ({
  routines,
  title,
  description,
  id,
  deleteRoutine,
  deleteExercise,
  updateRoutine,
}) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/exercises")
      .then((r) => r.json())
      .then((data) => {
        // console.log("exercises", data)
        setExercises(data);
      });
  }, []);

  const currentRoutineExercises = exercises.filter(
    (exercise) => id === exercise.routine.id
  );
  console.log("currentRoutineExercises", currentRoutineExercises, id);

  const exerciseList = currentRoutineExercises.map((exercise) => (
    <ExerciseCard
      key={exercise.id}
      id={exercise.id}
      name={exercise.name}
      description={exercise.description}
      deleteExercise={deleteExercise}
      exercises={exercises}
      setExercises={setExercises}
    />
  ));

  function handleDelete() {
    fetch(`/routines/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        //debugger
        return r.json();
      })
      .then((data) => console.log(data));
    deleteRoutine(id);
  }

  function handleUpdate() {
    fetch(`/routines/${id}`, {
      method: "PATCH",
    })
      .then((r) => {
        //debugger
        return r.json();
      })
      .then((data) => console.log(data));
    updateRoutine(id);
  }

  return (
    <div className="routine-card">
      <br></br>
      <br></br>

      <h1>{title}</h1>
      <h4>{description}</h4>

      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
      <br></br>
      <br></br>
      <br></br>
      {exerciseList}
      <br></br>
      <br></br>
    </div>
  );
};

export default RoutineCard;
