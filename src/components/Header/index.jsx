import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/Logo.svg"
import { NotificacaoContext } from '../../contexts/context';

export const Header = () => {
  const {notificacao}=useContext(NotificacaoContext)
  const notification=Number(notificacao);
  return (
    <header>
      <div className='container-header'>
        <nav className='container-nav'>
        <Link to={"/"} className='logo'>
            <img  src={Logo} />
        </Link>

        <div className='content-search-and-notify'>
            <input   type='search' placeholder=' pesquisa uma news'   />
            <button type='submit'>
                  {/* <FaSearch size={24} color='gray'  /> */}
            </button>
            <div className='notify_update'>
              <IoIosNotifications size={24} />
              {
                notificacao&&<span>{notification}</span>

              }
            </div>
        </div>

        <Link to={"/profile"}>
          <CgProfile size={24} />
        </Link>
        </nav>
        

      </div>
      {/* <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/signin"} >Entrar</Link>
              <Link to ={"/signup"}>Cadastrar-se</Link>
              <Link to ={"/contact"}>Contacto</Link>
      </nav> */}
    </header>
  );
}
