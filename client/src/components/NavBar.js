import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>        
                <NavLink exact to="/user">User Profile</NavLink>
                <NavLink exact to="/routine/new">Create Routine</NavLink>
                {/* <NavLink exact to="/exercise/new">Create Exercise</NavLink> */}
                <NavLink exact to="/routines">Routines</NavLink>
            </nav>
            
        </div>
    )
}

export default NavBar

