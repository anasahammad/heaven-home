import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  RouterProvider, 
 } from "react-router-dom"; 
 import "./index.css"; 
import { Toaster } from 'react-hot-toast';
import { router } from './Routes/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';




 

ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <AuthProvider>
 <RouterProvider router={router} /> 
 <Toaster></Toaster>
 </AuthProvider>
 </React.StrictMode> 
); 