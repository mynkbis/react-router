/* eslint-disable no-undef */
import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
 
const [user, setUser]=useState(null)

    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }

    return (
        
        <AuthProvider.Provider value={{ user, login, logout }}>
            {children} </AuthProvider.Provider>
    )

}

export default AuthProvider;