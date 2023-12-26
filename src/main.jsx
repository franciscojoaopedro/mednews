import React from 'react'
import ReactDOM from 'react-dom/client'
import { RotasGloba }  from './routes/AppRoutes'
import './global.css'
import { AppContext } from './contexts/context'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <RotasGloba/>
    </AppContext>
  </React.StrictMode>
)
