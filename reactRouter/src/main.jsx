import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"

const router = createBrowserRouter(
 [
  {
    path: "/",
    element :<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
     
    ]
  }
 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
