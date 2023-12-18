import React, { useState,useContext } from 'react'
import {createBrowserRouter,RouterProvider,Navigate} from "react-router-dom"
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Error from '../pages/Error'
import ContactDetails from '../routes/ContactDetails.jsx'
import Contacto from '../routes/Contacto.jsx'
import Home from '../pages/Home'
import { ProfileUser } from '../pages/Profile'
import { AuthContext } from '../contexts/UserContext.jsx'

export function Rootas(){
    const {userLogin}=useContext(AuthContext)
    
const router=createBrowserRouter([
    {
      path:"/",
      element:<SignIn/>,
      errorElement:<Error/>,
      children:[
      
        {path:'/',element:<Home/>},
        {path:'signin',element:<SignIn/>},
        {path:'signup',element:<SignUp/>},
        {path:'contact',element:<Contacto/>},
        // routa alinhadass ou dinamicas
        {
          path:"/contact/:id",
          element:<ContactDetails/>
        },
        // navegar para paginas não existentes
        {
          path:"oldcontact",
          element:<Navigate to={"/contact"} />
        },
        {
          path:"profile",
          element:<ProfileUser/>
        }
      ]
    }
  ])
  
    return(
        <RouterProvider  
        router={router}
        />
    )
}