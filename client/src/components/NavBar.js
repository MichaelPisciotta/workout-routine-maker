import React from 'react'
import { NavLink } from "react-router-dom"
import LogoutButton from './LogoutButton'


const NavBar = ({user, setUser}) => {

    return (
        <div>
            <nav>      
                <NavLink exact to="/user">User Profile</NavLink>
                <NavLink exact to="/routine/new">Create Routine</NavLink>
                <NavLink exact to="/exercise/new">Add Exercises</NavLink>
                <NavLink exact to="/routines">Routines</NavLink>
                {user ? <LogoutButton className="logout" user={user} setUser={setUser} /> : null}
            </nav>
            
        </div>
    )
}

export default NavBar

