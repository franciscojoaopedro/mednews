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
            <div>
                <input placeholder='Titulo da news' />
            </div>
            <div>
                <textarea
                    placeholder='partilha com a comunidade o que tens pensado....'
                />
            </div>
           <div>
            <button>Publicar</button>
           </div>
           <div>
            <h2>Novas mednews </h2>
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