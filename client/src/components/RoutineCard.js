import React from 'react'
// import ExerciseCard from "./ExerciseCard";

const RoutineCard = ({routines}) => {

    //need list of associated exercises:
    // RoutineExercises = exercises.map(exercise.routine_id === routine.id => <ExerciseCard key={exercise.id} />)

    return (
        <div>
         <br></br>
         <br></br>

         <h1>Title</h1>
         <li>Description</li>

         <li>Exercises:</li>
         <li>Exercise 1</li>
         <li>Exercise 2</li>
         <li>Exercise 3</li>

         {/* {RoutineExercises} */}

         <button>Delete</button>
         <button>Update</button>
        </div>
    )
}

export default RoutineCard
