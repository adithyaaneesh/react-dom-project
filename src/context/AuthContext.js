
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const normalizeUser = (userData) => {
        return {
            name: userData.name || userData.username || "Unknown User",
            email: userData.email || "Not Provided",
            role: userData.role || "user",
        };
    };

    const login = (userData) => {
        const normalizedUser = normalizeUser(userData);

        localStorage.setItem("loggedInUser", JSON.stringify(normalizedUser));
        setUser(normalizedUser);

        if (normalizedUser.role === "admin") {
            navigate("/admin/dashboard");
        } else {
            navigate("/"); 
        }
    };

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        if (user?.role === "admin") {
            navigate("/admin/login");
        } else {
            navigate("/login");
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;






// import { createContext, useState } from "react";

// const defaultValues = {
//     loggedIn: false,
//     setIsLoggedIn: () => {}
// }

// const AuthContext = createContext(defaultValues)

// const AuthProvider = ({children}) => {

//     const [login, setLogin] = useState(false)

//     return (
//         <AuthContext.Provider value={{loggedIn: login, setIsLoggedIn: setLogin }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export { AuthContext, AuthProvider }

