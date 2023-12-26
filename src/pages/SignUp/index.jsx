import React from 'react';
import { FaGooglePlusG,FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';


// import { Container } from './styles';

const SignUp = () => {
  return (
    <div className='sigin-in'>
    <div className='container-sigin-in'>
      <div>
          <p>
          Expresse gratidão pela escolha de se cadastrar na <strong>MedNews</strong>. Faça com que a pessoa se sinta valorizada desde o início!
          </p>
      </div>
        <div className='title-sigin-in'>
          <h2>Sign Up</h2>
        </div>
        <form>
            <div className='input-area-sign-in'>
            <input
            type='text'
            placeholder='nome'
            autoCapitalize={true}
            />
            </div>
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
        <button type='submit' onClick={()=>{alert('Você se cadastrou')}}>Registrar</button>
          <p>
            <Link to={"/signin"} >Já tenho uma conta</Link>
          </p>
        </div>

      
        
    </div>
</div>
  )
}

export default SignUp;