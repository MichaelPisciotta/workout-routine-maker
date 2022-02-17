import React from 'react'
import ExerciseCard from "./ExerciseCard";

const RoutineCard = ({routines, exercises, title, description, id, deleteRoutine, deleteExercise}) => {
    console.log("exercises", exercises)

    const exerciseList = exercises.map( exercise => <ExerciseCard key={exercise.id} id={exercise.id} name={exercise.name} description={exercise.description} deleteExercise={deleteExercise} /> )

    function handleDelete() {
        fetch("/routines/${id}", {
            method: "DELETE"
        })
        .then((r) => { 
            //debugger
           return r.json()})
          .then(data => console.log(data));
           deleteRoutine(id)
    }

    return (
        <div className="routine-card">
            <br></br>
            <br></br>

            <h1>{title}</h1>
            <h4>{description}</h4>

            <button onClick={handleDelete}>Delete</button>
            {/* <button onClick={handleUpdate}>Update</button> */}
            <br></br>
            <br></br>
            <br></br>


            {exerciseList}

            
            <br></br>
            <br></br>
        </div>
    )
}

export default RoutineCard
