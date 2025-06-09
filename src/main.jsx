import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Authproiver from './Provider/Authproiver.jsx';
import Dashbord from './Components/Dashbord/Dashbord.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/dashbord",
        element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authproiver>
      <RouterProvider router={router} />
    </Authproiver>
  </StrictMode>,
)
