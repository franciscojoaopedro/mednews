import {createContext, useState} from "react";

export const NotificacaoContext=createContext();

export const AppContext=({children})=>{
    const [notificacao,setNotificacao]=useState(0);

    return(
        <NotificacaoContext.Provider value={{notificacao,setNotificacao}}>
            {children}
        </NotificacaoContext.Provider>
    )
}