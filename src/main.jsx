import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'


//

import {createBrowserRouter,RouterProvider,Navigate} from "react-router-dom"
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Error from './pages/Error'
import ContactDetails from './routes/ContactDetails.jsx'
import Contacto from './routes/Contacto.jsx'
import Home from './pages/Home/index.jsx'
import { ProfileUser } from './pages/Profile/index.jsx'

// const browserHistory = createBrowserRouter([
//   {
//     path:"/",
//     element: <Home/>
//   },
//   {
//     path:"/signin",
//     element: <SignIn/>
//   },
//   {
//     path:"/signup",
//     element: <SignUp/>
//   },
//   {
//     path:"/*",
//     element:<div>404</div>,
//   }

// ])

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
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



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
