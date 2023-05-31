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
import Checkout from './componentes/Checkout/Checkout';
import SignUp from './componentes/SignUp/SignUp';
import AUthProvider from './componentes/Provider/AUthProvider';
import PrivetRouts from './routes/PrivetRouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />,
        loader:()=>fetch('http://localhost:5000/totalProducts')

      },
      {
        path: 'orders',
        element: <Orders />,
        // loader:()=> fetch('products.json')
        loader: CartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'checkout',
        element: <PrivetRouts><Checkout /></PrivetRouts>
      }, {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AUthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AUthProvider>
  </React.StrictMode>,
)
