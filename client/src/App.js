import React, {useEffect, useState} from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; 
import SignUp from "./components/SignUp";

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(data => {
        console.log("users", data)
        setUsers(data)
      });
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
              {/* <NavBar /> */}
              <Routes>
                {/* <Route exact path="/user" element={<User users={users} />} />
                <Route exact path="/routine/new" element={<CreateRoutine addRoutine={addRoutine} routines={routines} exercises={exercises}/>} />
                <Route exact path="/exercise/new" element={<CreateExercise addExercise={addExercise} exercises={exercises} routines={routines}/>} />
                <Route exact path="/routines" element={<RoutineList routines={routines}/>} />
                <Route exact path="/login" element={<Login/>} /> */}
                <Route exact path="/sign" element={<SignUp/>} />
                <Route exact path="*" element={<h1>404 not found</h1>} />
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
