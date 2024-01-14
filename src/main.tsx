import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Translation } from './langs/translation.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
)
