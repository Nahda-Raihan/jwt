import React, { useState } from "react";
import { createContext } from "react";

export const Logcontext = createContext()

export const LogcontextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <Logcontext.Provider value={{isLoggedIn, login, logout}}>
                {props.children}
            </Logcontext.Provider>
        </>
    )
}

export default LogcontextProvider