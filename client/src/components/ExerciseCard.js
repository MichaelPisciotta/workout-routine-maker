import React from 'react'

const ExerciseCard = ({exercises, name, description, id, deleteExercise}) => {
    console.log("name", name)
    console.log("description", description)


    function handleDelete() {
        fetch("/exercises/${id}", {
            method: "DELETE"
        })
        .then((r) => { 
            //debugger
           return r.json()})
          .then(data => console.log(data));
           deleteExercise(id)
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