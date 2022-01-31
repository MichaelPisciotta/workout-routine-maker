import React, {useEffect, useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; 
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import CreateRoutine from "./components/CreateRoutine";




function App() {

  const [users, setUsers] = useState([])
  const [routines, setRoutines] = useState([])
  const [exercises, setExercises] = useState([])


  useEffect(() => {
    fetch("/me")
     .then(r => {
       if(r.ok){
         r.json().then( data => {
           console.log("Logged In:", data.user)
       })//end of second .then
       } else {
          console.log("No one is logged in")
       }//end of else
     })//end of first .then
  }, []) //end of useEffect

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(data => {
        console.log("users", data)
        setUsers(data)
      });
  }, [])

  useEffect(() => {
    fetch("/routines")
      .then((r) => r.json())
      .then(data => {
        console.log("routines", data)
        setRoutines(data)
      });
  }, [])

  // useEffect(() => {
  //   fetch("/exercises")
  //     .then((r) => r.json())
  //     .then(data => {
  //       console.log("exercises", data)
  //       setExercises(data)
  //     });
  // }, [])

  function addRoutine(newRoutine){
    const updatedRoutines = [...routines, newRoutine]
    setRoutines(updatedRoutines)
  }

  // function addExercise(newExercise){
  //   const updatedExercises = [...exercises, newExercise]
  //   setExercises(updatedExercises)
  // }


  return (
    <div className="App">
      <BrowserRouter>
              <NavBar />
              <Routes>
                {/* <Route exact path="/user" element={<User users={users} />} /> */}
                <Route exact path="/routine/new" element={<CreateRoutine addRoutine={addRoutine} routines={routines} exercises={exercises}/>} />
                {/* <Route exact path="/exercise/new" element={<CreateExercise addExercise={addExercise} exercises={exercises} routines={routines}/>} />
                <Route exact path="/routines" element={<RoutineList routines={routines}/>} /> */}
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/sign" element={<SignUp/>} />
                <Route exact path="*" element={<h1>404 not found</h1>} />
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
