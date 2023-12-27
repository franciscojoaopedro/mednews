import { useContext, useEffect, useState } from 'react';

import "./index.css"
import { CardNews } from '../../components/CardNews/CardNews';
import { ListNews } from './test';
import { NewsContexts, NotificacaoContext, UserContext } from '../../contexts/context';

import { ConvertarData } from '../../utils/tools';


// import { Container } from './styles';

const Home = () => {
    
  const {news,getAllNews}=useContext(NewsContexts)
  const {Postnews,setAuthor}=useContext(UserContext)
  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  useEffect(()=>{
    pegarTokens()
    getAllNews()
  },[])
  
  async function pegarTokens(){
    const getUserLocal= localStorage.getItem("tokens");
    const userToken= await JSON.parse(getUserLocal);
    setAuthor(userToken);
  }
  function clearInputs(){
    setContent("");
    setTitle("");
  }
   const handlePostNews= async()=>{
      await Postnews(title,content)
      getAllNews();
      clearInputs();
  }


  return (
    <div className='container-home'>
        <div className='content-home'>
            <h2>Publicar uma mednews</h2>
           <form className='form-post'>
           <div className='area-input-title'>
                <input 
                placeholder='Titulo da news' 
               
                value={title}
                onChange={(text)=>setTitle(text.target.value)}
                />
            </div>
            <div className='area-input-content'>
                <textarea
                value={content}
                onChange={(text)=>setContent(text.target.value)}
                
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

              return  (<CardNews 
               key={index}
                nome={element.author.name}
                conteudo={element.content}
                titulo={element.title}
                hora={data.hora}
                date={`${data.dia}/${data.mes}/${data.ano}`}
               />)
           }).sort((element)=>element.createdAt)}
          
        
           </div>
        </div>
        

    </div>
  )
}

export default Home;