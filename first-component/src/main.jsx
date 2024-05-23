import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp.jsx'
import FirstApp from './FirstApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp />
    <CounterApp value={ 6521 }/>
  </React.StrictMode>,
)
