import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({user, setUser}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        fetch("/users", {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                    password_confirmation: passwordConf
                }//end of user:
            })//end of stringify
          })//end of fetch statement
            .then(resp =>{
                if (resp.ok){
                    resp.json().then(data => {
                        console.log("signup successful: ", data)
                        setUser(data)
                        // setUsername("")
                        // setPassword("")
                        // setPasswordConf("")
                        return <useNavigate to="/login" />  //not working               
                    })//end of second .then
                } else {
                    console.warn("signup not successful")
                }
            })//end of first .then

    } //end of handleSubmit function

    // if(user){
    //     return <Navigate to="/user" />
    //  }
    // ^not working just doesnt allow access to signup

    return (
        <div className="auth-container">
            <h1>Sign up Today!</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Create Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Create Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="passwordConf">Confirm Password:</label>
                <input type="text" id="passwordConf" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)} />
                
                <button type="submit">Create New Account</button>
            </form>
        </div>
    )
}

export default SignUp
