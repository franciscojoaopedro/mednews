import React, { useContext, useState } from 'react';
// import { Container } from './styles';
import "./index.css"
import { FaGooglePlusG,FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/context';
import { ToastContainer, toast } from 'react-toastify';
import {Navigate} from "react-router-dom"

const SignIn = () => {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const {LogIn}=useContext(UserContext)

  async function entrar(){
    if(!email || !password) {
      return alert("Verifica os campos vazios");
    }
    await LogIn(email,password)
    toast.success("Seja Bem Vindo!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
     
  }

  return (
    <main>
     <ToastContainer
     
     />
     <div className='sigin-in'>
        <div className='container-sigin-in'>
            <div className='title-sigin-in'>
              <h2>Sign In</h2>
            </div>
            <form>
                <div className='input-area-sign-in'>
                <input
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type='email'
                placeholder='email@gmail.com'
                autoCapitalize
                required
                />
                </div>
                <div className='input-area-sign-in' >
                <input
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type='password'
                required
                placeholder='*******************'
                />
                </div>
            </form>

            <div className='area-btn-entrar'>
            <button type='submit' onClick={entrar}>Entrar</button>
              <p>
                <Link to={"/signup"} >Não tenho uma conta</Link>
              </p>
            </div>

            <div className='barra-de-contas'>
                <hr className='hr-left'   />
                  <p> ou </p>
                <hr className='hr-rigth'  />
            </div>

            <div className='sign-in-optional'>
              <Link>
              <FaGooglePlusG  size={24} color='red'/>
              </Link>
                  <Link>
             <FaFacebook size={24} color='#0284c7' />
                </Link>
            </div>
        </div>
    </div>
   </main>
  )
}

export default SignIn;