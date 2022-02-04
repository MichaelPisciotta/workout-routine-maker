import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CreateExercise = ({exercises, addExercise, routines}) => {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)
    const [choice, setChoice] = useState("")
    


    const handleChoice = (e) => {
        setChoice(e.target.value)
    } 
    const pickRoutine = routines.map(routine => <option value={routine.id}  key={routine.id} data-id={routine.id}>{routine.title}</option>)

    function handleSubmit(e) {
        e.preventDefault()
        const exerciseObj = { 
            name: name,
            description: description,
            routine_id: choice
        }
        setLoading(true)
        fetch("/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(exerciseObj)
        })
            .then(r => r.json())
            .then(data => {
                //debugger;
                console.log("data", data)
                addExercise(data)
                setName("")
                setDescription("")
                //navigate("/routines")
                setTimeout(() => {
                    setLoading(false)
                } ,1000)
            })   
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Add Exercises to Specific Routines</h1>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <select name="routine" className="form-select" aria-label="Default select example"  onChange={handleChoice}>
                    <option defaultValue>Select Routine</option>
                    {pickRoutine} 
                </select>


                <button type="submit">{loading ? "loading..." : "Create New Exercise"}</button>
            </form>
        </div>
    )
}

export default CreateExercise