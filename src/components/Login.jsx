
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
        const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData(prev=> ({ ...prev, [name]: value })) 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                'https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login',
                userData
            );
            const token = res.data.token;
            if (token) {
                localStorage.setItem('access_token', token);
                toast.success('Login Successful');
                navigate('/');
            } else {
                toast.error('Authentication token not received. Please try again.');
            }
        } catch (error) {
            console.error(error, 'error');
            const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name='email'
                    value={userData.email} 
                    onChange={handleInputChange} 
                    placeholder="Enter your email" 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name='password'
                            value={userData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="show-password-button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <button type="submit" className="auth-button">Log In</button>
                <p className="auth-link-text">Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;

