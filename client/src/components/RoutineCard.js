import React from 'react'
import ExerciseCard from "./ExerciseCard";

const RoutineCard = ({routines, exercises, title, description, id}) => {
    console.log("exercises", exercises)
    //need list of associated exercises:
    const exerciseList = exercises.map( exercise => <ExerciseCard key={exercise.id} id={exercise.id} name={exercise.name} description={exercise.description} /> )

    return (
        <div>
         <br></br>
         <br></br>

        <h1>{title}</h1>
        <h4>{description}</h4>

         <button>Delete</button>
         <button>Update</button>
         {/* <button onClick={handleDelete}>Delete</button>
         <button onClick={handleUpdate}>Update</button> */}
         <br></br>
         <br></br>
         <br></br>


         {exerciseList}

         
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </div>
    )
}

export default RoutineCard
