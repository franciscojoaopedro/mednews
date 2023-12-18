import { useState } from 'react'

import {Outlet} from "react-router-dom"
import { Header } from './components/Header/Header'
import{Footer} from "./components/Footer"
import { AppContext } from './contexts/context'
import { UserContext } from './contexts/UserContext'
function App() {
  const [lognin,setLognin]=useState(true)

  return (
  <>
    <div>
    <AppContext>
    <UserContext>
    {
        lognin &&(  <Header/>)
      }
      <Outlet
      />
     {lognin&& (<Footer/>)}
    </UserContext>
    </AppContext>
    </div>
  </>
  )
}

export default App
