import React from 'react';
import { Link } from 'react-router-dom';


// import { Container } from './styles';

const Contacto = () => {
  return (
    <div>
        <h2>Pagina de Contacto</h2>
       <p>
        <Link to={"/contact/1"}>Forma de contacto 1</Link>
        <Link to={"/contact/2"}>Forma de contacto 2</Link>
        <Link to={"/contact/3"}>Forma de contacto 3</Link>
        <Link to={"/contact/4"}>Forma de contacto 4</Link>
       </p>
    </div>
  )
}

export default Contacto;