import React from 'react';

import "./index.css"
import { CardNews } from '../../components/CardNews/CardNews';
import { ListNews } from './test';

// import { Container } from './styles';
ListNews
const Home = () => {
    
  
    
  return (
    <div className='container-home'>
        <div className='content-home'>
           <form className='form-post'>
           <div className='area-input-title'>
                <input placeholder='Titulo da news' />
            </div>
            <div className='area-input-content'>
                <textarea
                    placeholder='partilha com a comunidade o que tens pensado....'
                />
            </div>
           </form>
           <div className='area-btn-publicar'>
            <button>Publicar</button>
           </div>
           <div className='mednew-pubs'>
            <h2>as mednews </h2>
           </div>
           <div className='all-news'>
           {ListNews.map((element,index)=>
           <CardNews 
           key={index}
           nome={element.author}
           conteudo={element.conteudo}
           titulo={element.titulo}
           />)}
           </div>
        </div>
        

    </div>
  )
}

export default Home;