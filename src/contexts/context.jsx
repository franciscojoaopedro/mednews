import {createContext, useState} from "react";

export const NotificacaoContext=createContext();
export const UserContext=createContext()

export const AppContext=({children})=>{
    const [notificacao,setNotificacao]=useState(0);
    const [userLogin,setUserLogin]=useState(true)

    return(
        <NotificacaoContext.Provider value={{notificacao,setNotificacao}}>
                    {children}
        </NotificacaoContext.Provider>
    )
}