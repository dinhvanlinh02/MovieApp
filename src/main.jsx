import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import Rootlayout from './pages/Rootlayout.jsx'

const router = createBrowserRouter([
  {
    element:<Rootlayout/>
  ,
  children:[
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/movie/:id',
      element:<MovieDetail/>
    }
  
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </StrictMode>
)
