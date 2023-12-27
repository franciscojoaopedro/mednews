import {createContext, useState} from "react";
import api from "../api/api"
import { useCreateUserWithEmailAndPassword ,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../firebase/config"

import {toast} from "react-toastify"
export const NotificacaoContext=createContext();
export const NewsContexts=createContext();
export const UserContext=createContext()

export const AppContext=({children})=>{
    const [news,setNews]=useState([]);
    const [post,setPost]=useState()
    const [notificacao,setNotificacao]=useState(0);
    const [userLogin,setUserLogin]=useState("")
    const [author,setAuthor]=useState("")


    async function logOut(){
      localStorage.clear();
      toast("Esperamos por você!")
    }


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

    async function  buscarMeusPosts(){
      const getUserLocal=  localStorage.getItem("tokens");
        const userToken= await JSON.parse(getUserLocal);
     try {
      await api.get(`/posts/author/posts/${String(userToken.id)}`)
      .then((resposnse)=>{
          console.log(resposnse.data)
          let todosPost=resposnse.data.allPost
          setPost(todosPost)
      })
     } catch (error) {
      console.log({messageError:"erro ao pegar os meus post",error})
     }
    }
    const Postnews= async(title,content)=>{

     
      console.log("id do novo usuario",author.id)

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
            "author_id":`${author.id}`
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
          id:data._id,
          uid:usercredential.user.uid,
          name:data.name,
          bio:data.bio,
          date:data.createdAt,
          email:usercredential.user.email,
          token:await usercredential.user.getIdToken((t)=>t)
        }
        const getUserLocal=localStorage.getItem("tokens");
        const userToken=JSON.parse(getUserLocal);
        if(!userToken){
           localStorage.setItem("tokens",JSON.stringify(user))
          const userT=await JSON.parse(getUserLocal);
          console.log("foi criado um novo token",userT)
          setUserLogin(user)
        }
        
      })
    })
    
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
                   <NewsContexts.Provider  value={{news,getAllNews,buscarMeusPosts,post}} >
                   <UserContext.Provider value={{
                    Postnews,
                    userLogin,LogIn,
                    Register,
                    setUserLogin,
                    setAuthor,
                    author,
                    logOut
                    }}>
                   {children}
                   </UserContext.Provider >
                   </NewsContexts.Provider>
        </NotificacaoContext.Provider>
    )
}