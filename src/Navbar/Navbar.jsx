import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/_e89d7921-bacb-47f3-8b92-077576e84a57.jpeg"
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {

     
    const navLinks = <>
    <NavLink className={({isActive})=> isActive ? "text-[#D23A25] font-bold " : ""  }  to="/">Home</NavLink>
    <NavLink  to="/about-us"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>About Us</NavLink>
    <NavLink to="/contact-us"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>Contact Us</NavLink>
    
    </>
    return (

        <div className="navbar   bg-base-200 lg:py-6 lg:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
       
      </nav>
    </div>
    <Link to="/" className="btn btn-ghost md:text-2xl lg:text-3xl">
        <img className="w-10 h-10 bg-none" src={logo} alt="" />
        <span className="text-black">HeavenHome</span>

    </Link>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <nav className="menu menu-horizontal gap-3 px-1 text-[17px]">
      {navLinks}
    </nav>
  </div>
  <div>
    
  </div>
  <div className="navbar-end ">
    
    <Link to="/login" className="btn  bg-[#D23A25] text-white" ><FiLogIn/> Sign In</Link>
    <Link to="/register" className="btn  bg-[#D23A25] text-white" ><FiLogIn/> Sign Up</Link>
  </div>
</div>
    );
};

export default Navbar;