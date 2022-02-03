import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

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
        return <useNavigate to="/user" /> //go to user page after logging in, NOT WORKING
    } //end of handSubmit


   function handleOnClick() {
        return <useNavigate to="/sign" /> 
   } 
   {/* ^should bring people without account to sign up, isnt working */}



    // if(user){
    //     return <Navigate to="/user" />
    //  }
    // ^not correctly telling if user is signed in or not, pretty much just makes login unaccessible

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Enter Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Enter Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>

                <br></br>
                <br></br>

                <button onClick={handleOnClick}>Don't Have an Account? Sign Up Today!</button>
                

            </form>
        </div>
    )
}

export default Login
