import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/_e89d7921-bacb-47f3-8b92-077576e84a57.jpeg"
const Navbar = () => {

     const navLinkStyle = {
        textDecoration: 'none',
        color: '#333',
        marginRight: '20px',
        
      };

      const activeStyle = {
        fontWeight: 'bold',
        color: 'blue',
      };
    const navLinks = <>
    <NavLink className={({isActive})=> isActive ? "text-white font-bold" : ""  }  to="/">Home</NavLink>
    <NavLink  to="/about-us"  className={({isActive})=> isActive ? "text-white font-bold" : ""  }>About Us</NavLink>
    <NavLink to="/contact-us"  className={({isActive})=> isActive ? "text-white font-bold" : ""  }>Contact Us</NavLink>
    
    </>
    return (

        <div className="navbar bg-transparent absolute z-[1000] top-4  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </nav>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">
        <img className="w-10 h-10 bg-none" src={logo} alt="" />
        <span className="text-white">HeavenHome</span>

    </Link>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <nav className="menu menu-horizontal gap-3 px-1">
      {navLinks}
    </nav>
  </div>
  <div className="navbar-end ">
    <Link className="mr-4 btn rounded-[50px]" to="/login">Login</Link>
    <Link className="btn rounded-[50px] bg-[#BB915B] text-white" to="/register ">Create Account</Link>
  </div>
</div>
    );
};

export default Navbar;