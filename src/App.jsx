// import { useState } from 'react'

import {Outlet} from "react-router-dom"
import { Header } from './components/Header'
import {Footer} from "./components/Footer"
import { AppContext } from "./contexts/context"

function App() {
  // const [lognin,setLognin]=useState(true)

  return (
  <>
  <AppContext>
    <Header/>
    <Outlet/>
    <Footer/>
  </AppContext>
  </>
  )
}

export default App
