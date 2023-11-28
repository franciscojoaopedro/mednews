import React from 'react';
// import { Container } from './styles';
import "./index.css"
import { FaGooglePlusG,FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='sigin-in'>
        <div className='container-sigin-in'>
            <div className='title-sigin-in'>
              <h2>Sign In</h2>
            </div>
            <form>
                <div className='input-area-sign-in'>
                <input
                type='email'
                placeholder='email@gmail.com'
                autoCapitalize={true}
                />
                </div>
                <div className='input-area-sign-in' >
                <input
                type='password'
                placeholder='*******************'
                />
                </div>
            </form>

            <div className='area-btn-entrar'>
            <button type='submit' onClick={()=>{alert('Você entrou')}}>Entrar</button>
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
  )
}

export default SignIn;