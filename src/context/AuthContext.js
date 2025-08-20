import { createContext, useState } from "react";

const defaultValues = {
    loggedIn: false,
    setIsLoggedIn: () => {}
}

const AuthContext = createContext(defaultValues)

const AuthProvider = ({children}) => {

    const [login, setLogin] = useState(false)

    return (
        <AuthContext.Provider value={{loggedIn: login, setIsLoggedIn: setLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
