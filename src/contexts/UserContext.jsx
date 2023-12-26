import {createContext, useState} from "react";


export const UserContext=createContext()

export const AuthContext=({children})=>{
   
    const [userLogin,setUserLogin]=useState(true)

    return(
        <UserContext.Provider value={userLogin}>
            {children}
        </UserContext.Provider>
    )
}