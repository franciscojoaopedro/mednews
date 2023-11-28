import React from 'react';


// import { Container } from './styles';
import "./Card.css"
export const CardNews = ({nome,titulo,conteudo}) => {
  return(
    <div className="news">
        <div className='author-news'>
        <h3>{nome}</h3>
        </div>
        <div className='title-news' >
        <h2>{titulo}</h2>
        </div>
       <div className='content-news'>
        <p>{conteudo}</p>
       </div>    
</div>
  )
}

