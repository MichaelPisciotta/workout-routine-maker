import React, {useState} from 'react';

const SignUp = () => {

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
                username,
                password,
                password_confirmation: passwordConf
            })
          })
            .then(resp =>{
                if (resp.ok){
                    resp.json().then(data => {
                        console.log("signup successful: ", data)
                        setUsername("")
                        setPassword("")
                        setPasswordConf("")
                    })
                } else {
                    console.warn("signup not successful")
                }
            })

    } //end of handleSubmit function


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