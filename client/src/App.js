import React, {useEffect, useState} from 'react';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; 
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import CreateRoutine from "./components/CreateRoutine";
import RoutineList from "./components/RoutineList";
import User from "./components/User";
import CreateExercise from "./components/CreateExercise";

//would have to uncomment out sections and delete the new links


function App() {
  
  const navigate = useNavigate()

  const [user, setUser] = useState(false)
  const [routines, setRoutines] = useState([])
  //const [exercises, setExercises] = useState([])


  useEffect(() => {
    fetch("/me")
     .then(r => {
       if(r.ok){
         r.json().then( data => {
           console.log("Logged In:", data)
           setUser(data)
           navigate("/user")
       })//end of second .then
       } else {
          console.log("No one is logged in")
          navigate("/login")
       }//end of else
     })//end of first .then
  }, []) //end of useEffect

  useEffect(() => {
    fetch("/user")
      .then((r) => r.json())
      .then(data => {
        console.log("user", data)
        setUser(data)
      });
  }, [])

  useEffect(() => {
    console.error(user)
    if(user && user.id){ //this equals user?.id
      fetch("/routines")
      .then((r) => r.json())
      .then(data => {
        setRoutines(data)
      });
    }else{
      setRoutines([])
    }
  }, [user])

  // useEffect(() => {
  //   fetch("/exercises")
  //     .then((r) => r.json())
  //     .then(data => {
  //       // console.log("exercises", data)
  //       setExercises(data)
  //     });
  // }, [])

  function addRoutine(newRoutine){
    const updatedRoutines = [...routines, newRoutine]
    setRoutines(updatedRoutines)
  }

//state for exercises should be held inside of routine card not app.js

  // function addExercise(newExercise){
  //   const updatedExercises = [...exercises, newExercise]
  //   setExercises(updatedExercises)
  // }

  function deleteRoutine(id) {
    const updatedRoutines = routines.filter(routine => routine.id !== id)
    setRoutines(updatedRoutines)
  }

  // function deleteExercise(id) {
  //   const updatedExercises = exercises.filter(exercise => exercise.id !== id)
  //   setExercises(updatedExercises)
  // }


  return (
    <div className="App">
              <NavBar user={user} setUser={setUser}/>
              <Routes>
                <Route exact path="/login" element={<Login user={user} setUser={setUser} />} />
                <Route exact path="/user" element={<User user={user} />} />
                
                {/* <Route exact path="/routine/new" element={<CreateRoutine addRoutine={addRoutine} routines={routines} exercises={exercises}/>} user={user} /> */}
                <Route exact path="/routine/new" element={<CreateRoutine addRoutine={addRoutine} routines={routines} />} user={user} />

                {/* <Route exact path="/exercise/new" element={<CreateExercise addExercise={addExercise} exercises={exercises} setExercises={setExercises} routines={routines}/>} /> */}
                <Route exact path="/exercise/new" element={<CreateExercise  routines={routines}/>} />

                {/* <Route exact path="/routines" element={<RoutineList routines={routines} user={user} exercises={exercises} deleteRoutine={deleteRoutine} deleteExercise={deleteExercise} />} /> */}
                <Route exact path="/routines" element={<RoutineList routines={routines} user={user}  deleteRoutine={deleteRoutine}  />} />

                <Route exact path="/sign" element={<SignUp user={user} setUser={setUser} />} />
                <Route exact path="*" element={<h1>404 not found</h1>} />
              </Routes>
    </div>
  );
}

export default App;
