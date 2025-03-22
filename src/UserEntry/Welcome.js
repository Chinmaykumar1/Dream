import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.myAttributes || {};

    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome, {user.id}</h1>
            <h2 className="welcome-subtitle">Your Email: {user.email}</h2>
            <pre className="welcome-details">{JSON.stringify(user, null, 2)}</pre>
            <p className="welcome-message">You have successfully signed in!</p>
            <button className="welcome-button" onClick={() => navigate("/")}>Logout</button>
        </div>
    );
}

export default Welcome;