import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Spinner from "../components/Spinner";
import "../styles/AdminLogin.css";
const AdminLogin = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("admin")) {
        localStorage.setItem(
            "admin",
            JSON.stringify({
            email: "admin@example.com",
            password: "Admin@123",
            role: "admin",
            })
        );
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setTimeout(() => {
        const admin = JSON.parse(localStorage.getItem("admin"));
        if (admin && email === admin.email && password === admin.password) {
            login(admin);
            navigate("/admin/dashboard");
        } else {
            setError(":x: You are not authorized");
        }
        setLoading(false);
        }, 1200);
    };
    return (
        <div className="admin-login-container">
        {loading ? (
            <Spinner />
        ) : (
            <form className="admin-login-form" onSubmit={handleSubmit}>
            <h2 className="admin-login-title">Admin Login</h2>
            {error && <p className="admin-error">{error}</p>}
            <div className="admin-input-group">
                <label className="admin-label">Email Address</label>
                <input
                type="email"
                className="admin-input"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="admin-input-group">
                <label className="admin-label">Password</label>
                <div className="admin-password-wrapper">
                <input
                    type={showPassword ? "text" : "password"}
                    className="admin-input"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span
                    className="show-password-button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Show" : "Hide"}
                </span>
                </div>
            </div>
            <button type="submit" className="admin-login-btn">
                Login
            </button>
            </form>
        )}
        </div>
    );
};
export default AdminLogin;