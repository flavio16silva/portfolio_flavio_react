import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App.jsx"
import './css/extends.css'
import "./index.css"

const rootElement = document.querySelector('[data-js="root"]')

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*Antes
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.querySelector('[data-js="root"]')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/
