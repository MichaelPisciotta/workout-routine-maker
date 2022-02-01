import React from 'react'
// import ExerciseCard from "./ExerciseCard";

const RoutineCard = (routines) => {

    //need list of associated exercises:
    //RoutineExercises = exercises.map(exercise.routine_id === routine.id => <ExerciseCard key={exercise.id} />)

    return (
        <div>
         <li>Title</li>
         <li>Description</li>
         {/* {RoutineExercises} */}
           
         <button>Delete</button>
         <button>Update</button>
        </div>
    )
}

export default RoutineCard
