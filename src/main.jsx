import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './componentes/Shop/Shop';
import Home from './componentes/Layout/Home';
import Orders from './componentes/Orders/Orders';
import Inventory from './componentes/Inventory/Inventory';
import Login from './componentes/Login/Login';
import CartProductsLoader from './lodar/CartProductsLodar';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Shop/>
         
      },
      {
        path:'orders',
        element:<Orders/>,
        // loader:()=> fetch('products.json')
        loader:CartProductsLoader
      },
      {
        path:'inventory',
        element:<Inventory/>
      },
      {
        path: 'login',
        element:<Login/>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
