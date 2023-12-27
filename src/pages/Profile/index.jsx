import React, { useContext, useEffect, useState } from 'react';

import styles from "./profile.module.css"
import {CardNews} from "../../components/CardNews/CardNews"
import { NewsContexts, UserContext } from '../../contexts/context';
import { ProfileAside, ProfileHeader } from '../../components/profiles/profiles';
import api from '../../api/api';
import { ConvertarData } from '../../utils/tools';



 export const ProfileUser = () => {

    const [user,setUser]=useState({})
  const {post,buscarMeusPosts}=useContext(NewsContexts)
    async function pegarTokens(){
        const getUserLocal=  localStorage.getItem("tokens");
        const userToken= await JSON.parse(getUserLocal);
        setUser(userToken);
      }


    
      useEffect(()=>{
        buscarMeusPosts()
        pegarTokens()
      },[])

      


  return (
    <div className={styles.Container}>
      <ProfileHeader 
      nome={user.name}
      data={`${ConvertarData(user.date).mes}/${ConvertarData(user.date).ano}`}
      job=""
      />
      <main className={styles.ContentePrincipal} >
        <ProfileAside
        nome={user.name}
        email={user.email}
        />
        <div className={styles.Atividades} >
        <div className={styles.AtividadeTitle} >
            <h3>Minhas atividades</h3>
        </div>
      <div className={styles.OpcaoAtividade} >
        <div className={styles.BtnAtividade}>
          <button className={styles.btnPost}   >Minhas postagens</button>
          <button  className={styles.btnComent}   >Meus comentários</button>
        </div>
      </div>
       <div className={styles.flatList} >
        {post?post.map((post,index)=>{
           let data={
            dia:ConvertarData(post.createdAt).dia,
            mes:ConvertarData(post.createdAt).mes,
            ano:ConvertarData(post.createdAt).ano,
            hora:ConvertarData(post.createdAt).hora,
          }

          return(
            <CardNews  
            key={index}
            titulo={post.title}
            conteudo={post.content}
            nome={post.author.name}
            date={`${data.dia}/${data.mes}/${data.ano}`}
            hora={data.hora}
            />
          )
        }):
        
       <h2>Não tens nenhum pubblicação</h2>
      }
         

       </div>

        </div>

        <ProfileAside
        nome={user.name}
        email={user.email}
        />
        </main>
    </div>
  )
}

