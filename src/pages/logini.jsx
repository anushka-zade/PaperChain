import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../assets/images/Hero/person3.png";
import { Link } from "react-router-dom";
const Login = () => {
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
                <form>
                    <h3 className='text-center'>Issuer Login</h3>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <Link to={'/li'}>
                        <div className="d-grid">
                            <button className='btn btn-primary'>Sign In</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
