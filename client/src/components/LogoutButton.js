import React from 'react'
import {useNavigate } from "react-router-dom";

const LogoutButton = ({user, setUser}) => {
    
    const navigate = useNavigate()

    function handleOnClick(){
        fetch("/logout", {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            setUser(false)
            navigate("/login")
        })
    }//end of onclick

    return (
        <button onClick={handleOnClick}>Logout</button>
    )

} //end of LogoutButton function 

 
export default LogoutButton
