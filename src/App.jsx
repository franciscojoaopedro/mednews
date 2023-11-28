import { useState } from 'react'

import {Outlet} from "react-router-dom"
import { Header } from './components/Header/Header'
import{Footer} from "./components/Footer"
import { AppContext } from './contexts/context'
function App() {
  const [lognin,setLognin]=useState(true)

  return (
  <>
    <div>
    <AppContext>
    {
        lognin &&(  <Header/>)
      }
      <Outlet
      />
     {lognin&& (<Footer/>)}
    </AppContext>
    </div>
  </>
  )
}

export default App
