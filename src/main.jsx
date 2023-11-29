import React from 'react'
import ReactDOM from 'react-dom/client'
import TheContext from './context/TheContext'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './sass/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TheContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TheContext>
  </React.StrictMode>
);

