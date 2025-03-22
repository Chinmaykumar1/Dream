import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Error.css';

function ErrorPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const errorData = location.state?.myAttributes || {};

    return (
        <div className="error-container">
            <h1 className="error-title">404 - Page Not Found</h1>
            <p className="error-message">Sorry, the page you are looking for does not exist.</p>
            <pre className="error-details">{JSON.stringify(errorData, null, 2)}</pre>
            <button className="error-button" onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
}

export default ErrorPage;