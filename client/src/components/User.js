import React from 'react'
import UserCard from "./UserCard";


const User = ({user}) => {


    return (
        <div>
            <h1>My Profile</h1>
            {user.username}
        </div>
    )
}

export default User