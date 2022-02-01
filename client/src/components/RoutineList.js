import React from 'react'
import RoutineCard from "./RoutineCard";

const RoutineList = ({routines}) => {
    const RoutineList = routines.map(routine => <RoutineCard key={routine.id} />)

    return (
        <div>
             <h1>My Routines</h1>
             {RoutineList}
        </div>
    )
}

export default RoutineList
