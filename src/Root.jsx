
import {Outlet} from "react-router-dom"
import Navbar from "./Navbar/Navbar";
import Footer from "./assets/Pages/Footer";
const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;