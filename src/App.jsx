// import { useState } from 'react'

import {Outlet} from "react-router-dom";
import { Header } from './components/Header';
import {Footer} from "./components/Footer";
import { AppContext, UserContext } from "./contexts/context";
import { useContext } from "react";

function App() {
  const {userLogin}=useContext(UserContext);
  return (
  <>
   {userLogin&& <Header/>}
    <Outlet/>
    <Footer/>
  
  </>
  )
}

export default App
