import React, {useState} from 'react';

const Login = () => {

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
    } //end of handSubmit



    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Create Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Create Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
