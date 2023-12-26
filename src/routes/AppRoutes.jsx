import  { useState,useContext } from 'react'
import {createBrowserRouter,RouterProvider,Navigate} from "react-router-dom"
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Error from '../pages/Error'
import ContactDetails from '../routes/ContactDetails.jsx'
import Contacto from '../routes/Contacto.jsx'
import Home from '../pages/Home/'
import { ProfileUser } from '../pages/Profile'
import App from '../App.jsx'
import { UserContext } from '../contexts/context.jsx'




 export   function RotasGloba(){
 const {userLogin}=useContext(UserContext)

   const AppRouter=createBrowserRouter([
       {
         path:"/",
         element:   <App/> ,
         errorElement:<Error/>,
         children:[
           {path:'/',element: userLogin?  <Home/>:<Navigate to="/signin"/>},
           {path:'signin',element: userLogin? <Navigate to={"/"}/> : <SignIn/>},
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
      <RouterProvider router={AppRouter} />
     )
}
 



