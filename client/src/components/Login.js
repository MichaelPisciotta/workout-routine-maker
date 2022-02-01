import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({user}) => {

    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])

    function handleSubmit(event){
        event.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            }, //end of headers
            body: JSON.stringify({
                user: {
                    username,
                    password
                }//end of user:
            }) //end of stringify
        }) //end of fetch 
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setUsername("")
            setPassword("")
        }) //end of second .then
        return <Navigate to="/user" /> //go to user page after logging in, NOT WORKING
    } //end of handSubmit


   function handleOnClick() {
        return <Navigate to="/sign" />
   } 
   {/* ^isnt working */}

    // if(user){
    //     return <Navigate to="/user" />
    //  }
    // ^not correctly telling if user is signed in or not, pretty much just mskes login unaccesible

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Enter Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Enter Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button type="submit">Login</button>

                <button onClick={handleOnClick}>Sign Up</button>
                

            </form>
        </div>
    )
}

export default Login
