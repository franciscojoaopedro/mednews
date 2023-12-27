import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import Logo from "../../assets/Logo.svg"
import { NewsContexts, NotificacaoContext,UserContext } from '../../contexts/context';

export const Header = () => {
  const {notificacao}=useContext(NotificacaoContext)
  const {logOut}=useContext(UserContext)

  const notification=Number(notificacao);
  const {getAllNews}=useContext(NewsContexts)

  function reloadWiwndows(){
    logOut();
    setInterval(function() {
      location.reload();
    }, 4000);
  }
  useEffect(()=>{
    getAllNews();
  },[])

  return (
    <header>
      <div className='container-header'>
        <nav className='container-nav'>
        <Link to={"/"} className='logo'>
            <img  src={Logo} />
        </Link>

        <div className='content-search-and-notify'>
            <input name='search'   type='search' placeholder=' pesquisa uma news'   />
            <button type='submit'>
                  {/* <FaSearch size={24} color='gray'  /> */}
            </button>
            <div className='notify_update'>
              <IoIosNotifications color={"#000"} size={30} />
              {
                notificacao&&<span>{notification}</span>
              }
            </div>
        </div>

          <div  className='area-logout'  >

        <Link to={"/profile"}>
          <CgProfile   className='CgProfile'  size={30}  />
        </Link>

        <div className='div-btn-sair'>
          <MdLogout 
          className='MdLogout'
          type='button'
          onClick={reloadWiwndows}
          />
          
        </div>
          </div>
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

