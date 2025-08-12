import React, { useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css'
import axios from 'axios';
import toast from 'react-hot-toast';


const Register = () => {


    const navigator = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer'
    })

    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setUserData(prev=> ({ ...prev, [name]: value })) 
    }

    const handleRegister = async (data)=> {

         await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/register', data, { } )
        .then(res=> {
            window.localStorage.setItem('access_token', res.data.token)
            window.localStorage.setItem('user_data', JSON.stringify(res.data.data))
            toast.success("Successfully Registered")
            navigator('/')

        })
        .catch(err=> {
            console.log(err, 'err')
            toast.error(err.response.data.message)
        }).finally(()=> {
            setLoading(false)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        handleRegister(userData)
        
    };

    return (
        <div className="reg-container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                     type="text" 
                     id="name"  
                     name='name' 
                     value={userData.name} 
                     onChange={handleInputChange}
                     placeholder="Enter your name" 
                     required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" name='email'
                    value={userData.email} 
                    onChange={handleInputChange} 
                    placeholder="Enter your email" 
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    id="password" 
                    name='password' 
                    value={userData.password} 
                    onChange={handleInputChange} 
                    placeholder="Create a password" 
                    required/>
                </div>
                
                <button 
                type="submit" 
                className="auth-button" 
                disabled={loading}>{ loading ? 'Loading...' : 'Register' }
                </button>
                <p className="auth-link-text">Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </div>
    );
};

export default Register;