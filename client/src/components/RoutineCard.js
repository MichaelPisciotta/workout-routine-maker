import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { useNavigate } from "react-router-dom";
import EditRoutineForm from "./EditRoutineForm";

const RoutineCard = ({
  routines,
  title,
  description,
  id,
  deleteRoutine,
  deleteExercise,
  updateRoutine,
}) => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [routine, setRoutine] = useState([]); //made just so i could send "routine" into editRoutineForm like in video, not sure why
  //space
  useEffect(() => {
    fetch("/exercises")
      .then((r) => r.json())
      .then((data) => {
        setExercises(data);
      });
  }, []);

  const currentRoutineExercises = exercises.filter(
    (exercise) => id === exercise.routine.id
  );
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

  function editDisplay() {
    //if displayEditForm is true, which is currently isn't, display form, otherwise display this button which when clicked changes displayEditForm to true.
    if (displayEditForm) {
      console.log(displayEditForm);
      return (
        <EditRoutineForm
          routines={routines}
          routine={routine} //equal to state variable
          setRoutine={setRoutine}
          setDisplayEditForm={setDisplayEditForm}
        />
      );
    } else {
      return (
        <button
          onClick={() => {
            setDisplayEditForm(true);
          }}
        >
          Update
        </button>
      );
    }
  }

  return (
    <div className="routine-card">
      <br></br>
      <br></br>

      <h1>{title}</h1>
      <h4>{description}</h4>

      <button onClick={handleDelete}>Delete</button>
      {editDisplay()}
      {/* ^this represents the function above the return */}

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
