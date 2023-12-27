// import { useState } from 'react'
"client"
import {Outlet} from "react-router-dom";
import { Header } from './components/Header';
import {Footer} from "./components/Footer";
import { AppContext, UserContext } from "./contexts/context";
import { useContext } from "react";
import styles from "./app.module.css"
function App() {
  const {userLogin}=useContext(UserContext);
  return (
    <AppContext>

  <div  className={styles.AppContainer}>
   {userLogin&& <Header/>}
    <Outlet/>
    <Footer/>
  
  </div>
    </AppContext>
  )
}

export default App
