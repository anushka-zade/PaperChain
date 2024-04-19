import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../assets/images/Hero/person3.png";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // Function to handle password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
    }

    // Enable submit button only if email and password are not empty
    const isSubmitDisabled = email.trim() === '' || password.trim() === '';
    if (isSubmitDisabled){
        return (
            <div className='login template d-flex justify-content-center align-items-center vh-100' style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                opacity: 0.7,
                position: "absolute", // Ensure image is below text content
                backgroundImage: `url(${backgroundImage})`,
              }}>
                <div className="p-5 rounded bg-white" style={{ maxWidth: '400px' }}>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-center'>Issuer Login</h3>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={handlePasswordChange} />
                        </div>
                        
                        <div className="d-grid">
                            <button type="submit" className='btn btn-primary' disabled={isSubmitDisabled}>Sign In</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='login template d-flex justify-content-center align-items-center vh-100' style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                opacity: 0.7,
                position: "absolute", // Ensure image is below text content
                backgroundImage: `url(${backgroundImage})`,
              }}>
                <div className="p-5 rounded bg-white" style={{ maxWidth: '400px' }}>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-center'>Issuer Login</h3>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={handlePasswordChange} />
                        </div>
                        <Link to={'/login-issuer'}>
                        <div className="d-grid">
                            <button type="submit" className='btn btn-primary' disabled={isSubmitDisabled}>Sign In</button>
                        </div>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
    
};

export default Login;
