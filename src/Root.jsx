
import {Outlet, useLocation} from "react-router-dom"
import Navbar from "./Navbar/Navbar";
import Footer from "./assets/Pages/Footer";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
    const location = useLocation()
console.log(location)
    useEffect(()=>{
        if(location.pathname === "/"){
            document.title = `Home`
        } else{
            document.title = `HeavenHome - ${location.pathname.replace("/", "")}`
        }
        if(location.state){
            document.title = location.state;
        }
    }, [location.pathname])
    return (

        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;