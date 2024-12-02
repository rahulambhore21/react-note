import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from "./Card.jsx"
import Shop from "./Shop.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card /> 
    <Shop btn="Check This" price = "not in your limit" />
    <Shop btn="Check This this is another item" price = "102" />
  </StrictMode>,
)
