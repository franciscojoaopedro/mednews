import React, { useContext, useEffect, useState } from 'react';

import "./index.css"
import { CardNews } from '../../components/CardNews/CardNews';
import { ListNews } from './test';
import { NotificacaoContext } from '../../contexts/context';
import api from '../../api/api';

// import { Container } from './styles';
ListNews
const Home = () => {
    
  const [news,setNews]=useState([]);
  const {setNotificacao}=useContext(NotificacaoContext)
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")
    
  useEffect(()=>{
    async function getAllNews(){
      let response=await api.get("http://localhost:3333/posts/index");
     let todoPosts= await response.data.posts
      console.log(todoPosts)
       setNews(todoPosts)
       // atualizando as notificações
       setNotificacao(0+Number(todoPosts.length))
    }
    getAllNews()
  },[])

  const handlePostNews=()=>{
    if(!title || !content){
      alert("os campos estão vazios")
    }
   console.log({
    title,
    content
   })
  }


  return (
    <div className='container-home'>
        <div className='content-home'>
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
           {news.map((element,index)=>
           <CardNews 
           key={index}
           nome={"Teste"}
           conteudo={element.content}
           titulo={element.title}
           />)}
           </div>
        </div>
        

    </div>
  )
}

export default Home;