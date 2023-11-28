import React from "react";
import { useParams,useNavigate } from 'react-router-dom';

// import { Container } from './styles';

const ContactDetails = () => {
     const {id}=useParams()

     const naigate=useNavigate()
     function handleContact(){
        alert("mensagem enviada")
        return naigate("/")
     }
  return (
    <div>
            <h1>Contactos detalhes</h1>
            <div>
                    <p>contacto numero {id}</p>
                    <button onClick={handleContact} >Enviar mensagem</button>
            </div>
    </div>
  );
}

export default ContactDetails;