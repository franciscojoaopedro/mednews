import React, { useContext, useEffect, useState } from 'react';

import "./index.css"
import { CardNews } from '../../components/CardNews/CardNews';
import { ListNews } from './test';
import { NotificacaoContext } from '../../contexts/context';
import api from '../../api/api';
import { ConvertarData } from '../../utils/tools';


// import { Container } from './styles';

const Home = () => {
    
  const [news,setNews]=useState([]);
  const {setNotificacao}=useContext(NotificacaoContext)
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
  useEffect(()=>{
    async function getAllNews(){
      let response=await api.get("/posts/index");
     let todoPosts= await response.data.posts
      console.log(todoPosts)
       setNews(todoPosts)
       // atualizando as notificações
       setNotificacao(0+Number(todoPosts.length))
    }
    getAllNews()
  },[])

   const handlePostNews= async()=>{
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


  return (
    <div className='container-home'>
        <div className='content-home'>
            <h2>Publicar uma mednews</h2>
           <form className='form-post'>
           <div className='area-input-title'>
                <input 
                placeholder='Titulo da news' 
                autoCapitalize={true}
                autoComplete={true}
                autoCorrect={true}
                value={title}
                onChange={(text)=>setTitle(text.target.value)}
                />
            </div>
            <div className='area-input-content'>
                <textarea
                value={content}
                onChange={(text)=>setContent(text.target.value)}
                 autoCapitalize={true}
                 autoComplete={true}
                 autoCorrect={true}
                  placeholder='partilha com a comunidade o que tens pensado....'
                />
            </div>
           </form>
           <div className='area-btn-publicar'>
            <button type='submit' onClick={handlePostNews} >Publicar</button>
           </div>
           <div className='mednew-pubs'>
            <h2>Todas mednews </h2>
           </div>
           <div className='all-news'>
           {news.map((element,index)=>{
              let data={
                dia:ConvertarData(element.createdAt).dia,
                mes:ConvertarData(element.createdAt).mes,
                ano:ConvertarData(element.createdAt).ano,
                hora:ConvertarData(element.createdAt).hora,
              }

              return  <CardNews 
               key={index}
                nome={element.author.name}
                conteudo={element.content}
                titulo={element.title}
                hora={data.hora}
                date={`${data.dia}/${data.mes}/${data.ano}`}
               />
           })}
          
        
           </div>
        </div>
        

    </div>
  )
}

export default Home;