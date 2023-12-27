import React, { useContext, useEffect, useState } from 'react';

// import { Container } from './styles';
import "./index.css"
import {CardNews} from "../../components/CardNews/CardNews"
import { NewsContexts, UserContext } from '../../contexts/context';

 export const ProfileUser = () => {
    const [user,setUser]=useState({})

    async function pegarTokens(){
        const getUserLocal=  localStorage.getItem("tokens");
        const userToken= await JSON.parse(getUserLocal);
        console.log(userToken)
        setUser(userToken);
      }

    
      useEffect(()=>{
        pegarTokens()
      },[])



  return (
    <div className='profile-user-container'>

        <div className='profile-info-flex'>
            <div className='profile-info-user'>
                <div className='avatar-user'>
                    <img  src={"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1701326277~exp=1701326877~hmac=be1f41df2a89aeb0a9719b6c708a6b9af0ede5136ab005d58fe772ded32caf50"} />
                </div>
                <div className='profile-user-descrition'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>Luanda,Angola</p>
                <p>{user.bio}</p>
                </div>

            </div>
            <div className='info-user'>
                    
            </div>
        </div>
        <div className='content-actividades'>
            <div>
                <h3>Actividade mais recente</h3>
            </div>
            <div className='area-btn-actividade'>
                <button>Publicações</button>
                <button>Comentários</button>
            </div>
            <div className='actividades'>
                <div>
                    {/* <img src="https://images.pexels.com/photos/576940/pexels-
                    photo-576940.jpeg?auto=compress&cs=tinysrgb&dpr=2&
                    h=750&w=1260"/>
                    <span><strong>Francisco Joao pedro</strong></span>
                    <span>publicou um post em:<br/><strong>Cursos de programação</strong></span>
                    <span>há 2 dias</span> */}
                
                <CardNews 
                date={"18/11/2023"}
                hora={"19:33"}
                    nome={"Juelma Silva"}
                    conteudo={"Cultivando a Saúde Mental: Pequenos Passos para uma Mente Equilibrada Em meio às demandas diárias, muitas vezes negligenciamos nossa saúde mental. Neste post, exploramos práticas simples e eficazes para cultivar o bem-estar mental. Desde técnicas de relaxamento até a importância da conexão social, descubra como incorporar pequenos passos em sua rotina diária para promover uma mente equilibrada. Cuide da sua saúde mental, pois é a chave para uma vida plena e feliz"}
                    titulo={"Cultivando a Saúde Mental: Pequenos Passos para uma Mente Equilibrada"}
                />
                <CardNews 
                date={"18/11/2023"}
                hora={"19:33"}
                    nome={"Juelma Silva"}
                    conteudo={"Cultivando a Saúde Mental: Pequenos Passos para uma Mente Equilibrada Em meio às demandas diárias, muitas vezes negligenciamos nossa saúde mental. Neste post, exploramos práticas simples e eficazes para cultivar o bem-estar mental. Desde técnicas de relaxamento até a importância da conexão social, descubra como incorporar pequenos passos em sua rotina diária para promover uma mente equilibrada. Cuide da sua saúde mental, pois é a chave para uma vida plena e feliz"}
                    titulo={"Cultivando a Saúde Mental: Pequenos Passos para uma Mente Equilibrada"}
                />

            <CardNews 
                date={"18/11/2023"}
                hora={"19:33"}
                    nome={"Juelma Silva"}
                    conteudo={"Cultivando a Saúde Mental: Pequenos Passos para uma Mente Equilibrada Em meio às demandas diárias, muitas vezes negligenciamos nossa saúde mental. Neste post, exploramos práticas simples e eficazes para cultivar o bem-estar mental. Desde técnicas de relaxamento até a importância da conexão social, descubra como incorporar pequenos passos em sua rotina diária para promover uma mente equilibrada. Cuide da sua saúde mental, pois é a chave para uma vida plena e feliz"}
                    titulo={"Cultivando a Saúde Mental: Pequenos Passos para uma Mente Equilibrada"}
                />
                </div>
            </div>
        </div> 
    </div>
  )
}

