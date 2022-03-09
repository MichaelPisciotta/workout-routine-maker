import React from "react";
import RoutineCard from "./RoutineCard";
import { Navigate } from "react-router-dom";

const RoutineList = ({
  routines,
  user,
  exercises,
  deleteRoutine,
  deleteExercise,
  updateRoutines,
}) => {
  const routineList = routines.map((routine) => (
    <RoutineCard
      key={routine.id}
      title={routine.title}
      description={routine.description}
      id={routine.id}
      exercises={exercises}
      deleteRoutine={deleteRoutine}
      deleteExercise={deleteExercise}
      updateRoutines={updateRoutines}
    />
  ));

  // if(!user){
  //    return <Navigate to="/user" />
  // }
  return (
    <div>
      <h1>My Routines</h1>
      {routineList}
    </div>
  );
};

export default RoutineList;
