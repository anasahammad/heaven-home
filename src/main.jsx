import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
 import "./index.css"; 
import Root from './Root.jsx';
import Home from './assets/Pages/Home.jsx';
import AboutUS from './assets/Pages/AboutUS.jsx';
import ContactUs from './assets/Pages/ContactUs.jsx';
import Login from './assets/Pages/Login.jsx';
import Register from './assets/Pages/Register.jsx';
import EstateDetails from './Components/EstateDetails.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';



 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  children: [
    {
      path: "/",
      element: <Home></Home>, 
      loader: ()=> fetch("/estate.json")
    },
    {
      path: "/details/:id",
      element: <EstateDetails></EstateDetails>,
      loader: ()=> fetch("/estate.json")
    },
    {
      path: "/about-us",
      element: <AboutUS/>,
      
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ]
  }, 
 ]);


ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <AuthProvider>
 <RouterProvider router={router} /> 
 
 </AuthProvider>
 </React.StrictMode> 
); 