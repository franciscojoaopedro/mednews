import React, { useContext, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/context';


import { ToastContainer, toast } from 'react-toastify';
// import { Container } from './styles';

const SignUp = () => {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const {Register}=useContext(UserContext)


  function clearInputs(){
    setName("");
    setEmail("");
    setPassword("");
  }
async function handleCreateUser(){
  if(!name || !email || !password){
    return alert("Verifique os campos vazios!!")

  }
  await Register(name,email,password);
  
  clearInputs();
}

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
        <form action=''  >
            <div className='input-area-sign-in'>
            <input
            name='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type='text'
            placeholder='nome'
           required
            />
            </div>
            <div className='input-area-sign-in'>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name='email'
            type='email'
            placeholder='email@gmail.com'
            required
            />
            </div>
            <div className='input-area-sign-in' >
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name='password'
            type='password'
            placeholder='*******************'
            required
            />
            </div>
        </form>

        <div className='area-btn-entrar'>
        <button onClick={handleCreateUser}>Registrar</button>
          <p>
            <Link to={"/signin"} >Já tenho uma conta</Link>
          </p>
        </div>

      
        
    </div>
</div>
  )
}

export default SignUp;