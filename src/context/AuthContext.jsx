import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [auth, setAuth] = useState(sessionStorage.getItem("credencial") ? true : null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}