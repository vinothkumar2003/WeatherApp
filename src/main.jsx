import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { WeatherApp } from './WeatherApp.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <WeatherApp/>
  </React.StrictMode>,
)
