import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/User.css';
const User = () =>  {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                if (!accessToken) {
                    setError('Authentication token not found.');
                    setLoading(false);
                    toast.error('Please log in to view your profile.');
                    navigate('/login');
                    return;
                }
                const response = await axios.get('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/me',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                console.log("Users Details:", response.data);
                setUser(response.data.data);
                // toast.success('Details fetched successfully!');
            } catch (err) {
                const msg = err.response?.data?.message || 'Failed to get user profile. Please try again later.';
                setError(msg);
                toast.error(msg);
                console.error("Error fetching user profile:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [navigate]);
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        toast.success('Logged out successfully!');
        navigate('/login');
    };
    if (loading) {
        return <div className="loading-message">Loading user...</div>;
    }
    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }
    if (!user) {
        return <div className="no-data-message">No user available.</div>;
    }
    return (
        <section>
            <div className="user-profile-container container">
                <div className="profile-card">
                    <FaUserCircle size={80} color="Black" />
                    <h2>My Profile</h2>
                    <p>Name: <strong>{user.name}</strong></p>
                    <p>Email: <strong>{user.email}</strong></p>
                    <button className="logout-button" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </section>
    );
}
export default User;