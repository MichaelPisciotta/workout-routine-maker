import React from 'react'
//import ExerciseCard from "./ExerciseCard";

const RoutineCard = ({routines, exercises, title, description, id}) => {

    //need list of associated exercises:
    // exerciseList = exercises.map( exercise => <ExerciseCard key={exercise.id} id={exercise.id} name={exercise.name} description={exercise.description}  />)

    return (
        <div>
         <br></br>
         <br></br>

        <h1>{title}</h1>
        <h4>{description}</h4>

         {/* {exerciseList} */}

         <br></br>
         <button>Delete</button>
         <button>Update</button>
         {/* <button onClick={handleDelete}>Delete</button>
         <button onClick={handleUpdate}>Update</button> */}
        </div>
    )
}

export default RoutineCard
