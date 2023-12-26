import {createContext, useState} from "react";
import api from "../api/api"
export const NotificacaoContext=createContext();
export const NewsContexts=createContext();
export const UserContext=createContext()

export const AppContext=({children})=>{
    const [news,setNews]=useState([]);
    const [notificacao,setNotificacao]=useState(0);
    const [userLogin,setUserLogin]=useState(true)

    async function getAllNews(){
        let response=await api.get("/posts/index");
        let todoPosts= await response.data.posts
        console.log(todoPosts)
         setNews(todoPosts)
         // atualizando as notificações
         setNotificacao(0+Number(todoPosts.length))
    }

    const Postnews= async(title,content)=>{
        if(!title || !content){
          alert("os campos estão vazios")
          return;
        }
       try {
        await api.post("/posts/create",{
          title:title,
          content:content
        },{
          headers:{
            "author_id":"656f7bf22575b549bb3a4b58"
          }
        }).then(()=>{
          console.log("ok")
        })
       } catch (error) {
        console.log({error:error,message:"ERRO AO CRIAR O POST"})
       }
      
    
      }



    return(
        <NotificacaoContext.Provider value={{notificacao,setNotificacao}}>
                   <NewsContexts.Provider  value={{news,getAllNews}} >
                   <UserContext.Provider value={{Postnews,userLogin}}>
                   {children}
                   </UserContext.Provider >
                   </NewsContexts.Provider>
        </NotificacaoContext.Provider>
    )
}