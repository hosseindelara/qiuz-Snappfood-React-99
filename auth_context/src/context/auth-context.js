import React, { createContext, useState } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    const logout = () => {
        setUser(null)
    }
    const login = (data) => {
        setUser(data)
    }

    return (
        <AuthContext.Provider value={{ user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )

}