import React from 'react'

const LogoutButton = ({user, setUser}) => {
    
    function handleOnClick(){
        fetch("/logout", {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            setUser(false)
        })
    }//end of onclick
    return (
        <button onClick={handleOnClick}>Logout</button>
    )
} //end of LogoutButton function 

export default LogoutButton
