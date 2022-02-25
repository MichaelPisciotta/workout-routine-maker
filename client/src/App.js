import React, { useEffect, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import CreateRoutine from "./components/CreateRoutine";
import RoutineList from "./components/RoutineList";
import User from "./components/User";
import CreateExercise from "./components/CreateExercise";
import EditRoutineForm from "./components/EditRoutineForm";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("Logged In:", data);
          setUser(data);
          navigate("/user");
        }); //end of second .then
      } else {
        console.log("No one is logged in");
        navigate("/login");
      } //end of else
    }); //end of first .then
  }, []); //end of useEffect

  useEffect(() => {
    fetch("/user")
      .then((r) => r.json())
      .then((data) => {
        console.log("user", data);
        setUser(data);
      });
  }, []);

  useEffect(() => {
    console.error(user);
    if (user && user.id) {
      //this is the same as user?.id
      fetch("/routines")
        .then((r) => r.json())
        .then((data) => {
          setRoutines(data);
        });
    } else {
      setRoutines([]);
    }
  }, [user]);

  function addRoutine(newRoutine) {
    const updatedRoutines = [...routines, newRoutine];
    setRoutines(updatedRoutines);
  }

  function deleteRoutine(id) {
    const updatedRoutines = routines.filter((routine) => routine.id !== id);
    setRoutines(updatedRoutines);
  }

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route exact path="/user" element={<User user={user} />} />

        {/* <Route exact path="/routine/new" element={<CreateRoutine addRoutine={addRoutine} routines={routines} exercises={exercises}/>} user={user} /> */}
        <Route
          exact
          path="/routine/new"
          element={
            <CreateRoutine addRoutine={addRoutine} routines={routines} />
          }
          user={user}
        />

        {/* <Route exact path="/exercise/new" element={<CreateExercise addExercise={addExercise} exercises={exercises} setExercises={setExercises} routines={routines}/>} /> */}
        <Route
          exact
          path="/exercise/new"
          element={<CreateExercise routines={routines} />}
        />

        {/* <Route exact path="/routines" element={<RoutineList routines={routines} user={user} exercises={exercises} deleteRoutine={deleteRoutine} deleteExercise={deleteExercise} />} /> */}
        <Route
          exact
          path="/routines"
          element={
            <RoutineList
              routines={routines}
              user={user}
              deleteRoutine={deleteRoutine}
              //updateRoutine={updateRoutine}
            />
          }
        />

        <Route
          exact
          path="/routines/edit"
          element={
            <EditRoutineForm
              routines={routines}
              user={user}
              deleteRoutine={deleteRoutine}
              addRoutine={addRoutine}
              //updateRoutine={updateRoutine}
            />
          }
        />

        <Route
          exact
          path="/sign"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route exact path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
