import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import EstateDetails from "../Components/EstateDetails";
import AboutUS from "../Pages/AboutUS";
import ContactUs from "../Pages/ContactUs";
import Register from "../Pages/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import WishList from "../Pages/WishList";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>, 
        loader: ()=> fetch("/estate.json")
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
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
      }, 
      {
        path: "/update-profile", 
        element:<UpdateProfile/>
      }, 
      {path: "/wishlist", 
        element: <WishList/>
      }
    ]
    }, 
   ]);
  