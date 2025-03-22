import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';

function SignIn({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('https://backend-fdur.onrender.com/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const info = await response.json();
                setIsAuthenticated(true);
                navigate('/welcome', { state: { myAttributes: info.data } });
            } else {
                navigate("/error");
            }
        } catch (error) {
            console.error('Network Error:', error.message);
            alert('Network error: please check your internet connection');
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Sign In</h2>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="form-button">Sign In</button>
            </form>
            <button onClick={handleSignUp} className="form-button secondary">Sign Up</button>
        </div>
    );
}

export default SignIn;