import React, {use, useState} from 'react';
import {useNavigate} from "react-router-dom";
import welcome from "../UserEntry/Welcome";

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();


        const signUpDetails = {
            username: username,
            email: email,
            password: password,
        };

        const response = await fetch('https://backendfdur-production.up.railway.app/register',{
            method:'POST',
            headers: {
                'content-Type' : 'application/json',
            },
            body: JSON.stringify(signUpDetails),
        });
        const user = await response.json();
        if(response.ok){

            console.log(user);
            navigate('/welcome',{state:{myAttributes:user}});
        }else{
            navigate('/error',{state:{myAttributes:user}});
        }

        // Handle sign-up logic here
        console.log('Sign Up:', { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;