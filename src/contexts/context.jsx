import {createContext, useState} from "react";
import api from "../api/api"
import { useCreateUserWithEmailAndPassword ,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../firebase/config"

export const NotificacaoContext=createContext();
export const NewsContexts=createContext();
export const UserContext=createContext()

export const AppContext=({children})=>{
    const [news,setNews]=useState([]);
    const [notificacao,setNotificacao]=useState(0);
    const [userLogin,setUserLogin]=useState()
    const [usuario,setUsuario]=useState(null)

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
      signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);

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

async function LogIn(email,password){
  try {
    await signInWithEmailAndPassword(email,password)
    .then( async (usercredential)=>{

      await api.get(`/authors/user/${email}`)
      .then( async (response)=>{
        const data=response.data.user
        const user={
          id:usercredential.user.uid,
          name:data.name,
          email:usercredential.user.email,
          token:await usercredential.user.getIdToken((t)=>t)
        }

        const getUserLocal=localStorage.getItem("tokens");
        const userToken=JSON.parse(getUserLocal);

        if(!userToken){
          localStorage.setItem("tokens",JSON.stringify(user))
         return console.log("foi criado um novo token",userToken)
        }
        console.log("esse usuario já existe",userToken)
        setUserLogin(userToken)
      })
        console.log("dados do loggin",user)
    })
    
    setUserLogin(true)
    return alert("usuario logado")
    
  } catch (error) {
    console.log("erro ao fazer log",error)
  }

}

async function Register(name,email,password){
 await  createUserWithEmailAndPassword(email,password)
  .then(async  (usercredential)=>{
    const data={
    name:name,
    email:email,
    bio:`Olá ${name},com o passar do tempo vais poder atualizar a sua biografia!  `
    }
    await api.post("/authors/create",data)
    .then((response)=>console.log(response))

    // const user={
    //   id:usercredential.user.uid,
    //   name,
    //   email:usercredential.user.email,
    //   token:await usercredential.user.getIdToken((t)=>t)
    // }


    console.log("user do firabase",user)
  })
  .catch((error)=>{
    console.log(`erro ao criar usuarioo`,error)
  })
  
  return alert("Usuario criado");
}

    return(
        <NotificacaoContext.Provider value={{notificacao,setNotificacao}}>
                   <NewsContexts.Provider  value={{news,getAllNews}} >
                   <UserContext.Provider value={{Postnews,userLogin,LogIn,Register,setUserLogin}}>
                   {children}
                   </UserContext.Provider >
                   </NewsContexts.Provider>
        </NotificacaoContext.Provider>
    )
}