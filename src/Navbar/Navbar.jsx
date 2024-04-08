import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/_e89d7921-bacb-47f3-8b92-077576e84a57.jpeg"
const Navbar = () => {
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about-us">About Us</NavLink></li>
    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
    
    </>
    return (

        <div className="navbar bg-transparent ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">
        <img className="w-10 h-10 bg-none" src={logo} alt="" />
        HeavenHome

    </Link>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end ">
    <Link className="mr-4 btn rounded-[50px]" to="/login">Login</Link>
    <Link className="btn rounded-[50px] bg-[#BB915B] text-white" to="/register ">Create Account</Link>
  </div>
</div>
    );
};

export default Navbar;