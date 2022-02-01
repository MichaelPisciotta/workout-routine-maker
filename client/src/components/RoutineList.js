import React from 'react'
import RoutineCard from "./RoutineCard";
import { Navigate } from 'react-router-dom';

const RoutineList = ({routines, user}) => {
    const RoutineList = routines.map(routine => <RoutineCard key={routine.id} />)

    if(!user){
       return <Navigate to="/user" />
    }
    return (
        <div>
             <h1>My Routines</h1>
             {RoutineList}
        </div>
    )
}

export default RoutineList
