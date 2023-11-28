import { useState } from 'react'

import {Outlet} from "react-router-dom"
import { Header } from './components/Header/Header'
import{Footer} from "./components/Footer"
function App() {
  const [lognin,setLognin]=useState(true)

  return (
  <>
    <div>
      {
        lognin &&(  <Header/>)
      }
      <Outlet
      />
     {/* {lognin&& (<Footer/>)} */}
    </div>
  </>
  )
}

export default App
