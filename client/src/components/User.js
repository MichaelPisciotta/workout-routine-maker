import React from 'react'
import UserCard from "./UserCard";


const User = ({users}) => {

    const UserFormat = users.map(user => <UserCard key={user.id} />)

    return (
        <div>
            <h1>User Profile</h1>
            {UserFormat}
        </div>
    )
}

export default User