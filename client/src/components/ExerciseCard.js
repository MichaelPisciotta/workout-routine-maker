import React from 'react'

const ExerciseCard = (exercises, name, description, id) => {
    return (
        <div>
           <h1>{name}</h1> 
           <h1>{description}</h1> 
           <button>Delete</button>
           <button>Update</button>
           {/* <button onClick={handleDelete}>Delete</button>
           <button onClick={handleUpdate}>Update</button> */}

        </div>
    )
}

export default ExerciseCard