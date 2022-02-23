import React from 'react'

//would have to remove deleteExercise function

const ExerciseCard = ({setExercises, exercises, name, description, id, deleteExercise}) => {


    function handleDelete() {
        fetch(`/exercises/${id}`, {
            method: "DELETE"
        })
        .then((r) => { 
            //debugger
           return r.json()})
          .then(data => console.log(data));
           deleteExercise(id)
    }

    function deleteExercise(id) {
        const updatedExercises = exercises.filter(exercise => exercise.id !== id)
        setExercises(updatedExercises)
      }

    return (
        <div>
            <br></br>
            <div className="exercise-card">
                <h4>{name}</h4> 
                <h5>{description}</h5> 
                <button onClick={handleDelete}>Delete</button>
                {/* <button onClick={handleUpdate}>Update</button> */}
            </div>
            <br></br>
        </div>
    )
}

export default ExerciseCard