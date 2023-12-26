import React from 'react'
import ReactDOM from 'react-dom/client'
import { RotasGloba }  from './routes/AppRoutes'

import './global.css'

import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './contexts/context'
import { ToastContainer } from 'react-toastify';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <RotasGloba/>
    <ToastContainer/>
    </AppContext>
  </React.StrictMode>
)
