import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import Shop from './component/Shop/Shop'
import Order from './component/Shop/Order.jsx';
import Inventory from './component/Shop/Inventory.jsx';
import Login from './component/Shop/Login.jsx';
import {dataLoader} from '../src/component/DataBase/DataLoader';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
      path:'/',
      element:<Shop/>
    },
    {
      path:'order',
      element:<Order/>,
      loader:dataLoader,
    },
    {
      path:'inventory',
      element:<Inventory/>,
    },
    {
      path:'login',
      element:<Login/>,
    }
  ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router ={router}/>
  </React.StrictMode>,
)
