import React from 'react'

const ExerciseCard = ({exercises, name, description, id}) => {
    console.log("name", name)
    console.log("description", description)

    return (
        <div>
            <br></br>
            <div className="exercise-card">
                <h4>{name}</h4> 
                <h5>{description}</h5> 
                <button>Delete</button>
                <button>Update</button>
                {/* <button onClick={handleDelete}>Delete</button>
                <button onClick={handleUpdate}>Update</button> */}
            </div>
            <br></br>
        </div>
    )
}

export default ExerciseCard