import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/_e89d7921-bacb-47f3-8b92-077576e84a57.jpeg"
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiEdit, CiLogout, CiSettings } from "react-icons/ci";
import toast from "react-hot-toast";
import './Navbar.css'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";



const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

const handleIsOpen = ()=>{
  setIsOpen(!isOpen)
}
  const {user, signOutUser} = useContext(AuthContext);
     const handleSignOut = ()=>{
      signOutUser()
      .then(()=>{
        toast.success("Sign Out successfull")
      })
     }
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
      <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
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
  

  {user ?<div className="dropdown dropdown-end relative">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-warning   tooltip-left"  data-tip={user?.displayName} onClick={handleIsOpen}>
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-60 absolute top-full  ${
          isOpen ? '' : 'hidden'
        }`}>

          <div className="flex  items-center gap-3 pb-8">
            <div className="w-12 rounded-full">
            <img src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" className="" />
            </div>
            <div>
            <h3 className="text-[18px] font-medium   w-full ">{user?.displayName || "Name not found"}</h3>
            </div>
          
          </div>
       
       
        <li className="text-[17px] border-t-2  py-2 border-[#0000000d] ">
          <Link className="">
          <FaRegCircleUser></FaRegCircleUser> MY Profile
          </Link>
        </li>

        <li className=" py-2 text-[17px] border-t-2 border-[#0000000d] ">
          <Link className="">
          <CiEdit/> Edit Profile
          </Link>
        </li>
        <li className="text-[17px] border-t-2  py-2 border-[#0000000d] ">
          <Link className="">
          <CiSettings/> Settings
          </Link>
        </li>
        <li className="text-[17px] border-t-2  py-2 border-[#0000000d] ">
          <Link className="">
          <IoMdHelpCircleOutline/> Help
          </Link>
        </li>
        <li className="text-[17px] border-t-2 border-[#0000000d] ">
        <Link onClick={handleSignOut} className="btn  bg-[#D23A25] text-white" ><FiLogOut/>  Sign Out</Link>
        </li>
        
      </ul>
    </div> : <Link to="/login" className="btn  bg-[#D23A25] text-white" ><FiLogIn/> Sign In</Link> }
  
  
    {/* <Link to="/register" className="btn  bg-[#D23A25] text-white" ><FiLogIn/> Sign Up</Link> */}
      {/* {
        user ? <Link onClick={handleSignOut} className="btn  bg-[#D23A25] text-white" ><FiLogOut/>  Sign Out</Link> : <Link to="/login" className="btn  bg-[#D23A25] text-white" ><FiLogIn/> Sign In</Link>
      } */}
    
  </div>
</div>
    );
};

export default Navbar;