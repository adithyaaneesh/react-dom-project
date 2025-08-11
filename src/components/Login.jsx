
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
        const navigator = useNavigate()

    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData(prev=> ({ ...prev, [name]: value })) 
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login',userData, {})
        .then((res)=> {
            console.log(res,'response')
            toast.success("Login Successfully")
            navigator('/')


        }).catch((error)=> {
            console.log(error,'error')
            toast.error(error.response.data.message)

        })
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
                    <input 
                    type="password" 
                    id="password" 
                    name='password'
                    value={userData.password} 
                    onChange={handleInputChange} 
                    placeholder="Enter your password" 
                    required/>
                </div>
                <button type="submit" className="auth-button">Log In</button>
                <p className="auth-link-text">Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;

