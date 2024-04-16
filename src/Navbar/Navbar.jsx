import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/_e89d7921-bacb-47f3-8b92-077576e84a57.jpeg"
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiEdit,  CiSettings } from "react-icons/ci";
import toast from "react-hot-toast";

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

    
     {user && <>
      <NavLink to="/wishlist"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>Wishlist</NavLink>
      <NavLink to="/update-profile"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>Update Profile</NavLink>
      
     
     </>}

     

     <NavLink  to="/about-us"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>About Us</NavLink> 
    <NavLink to="/contact-us"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>Contact Us</NavLink>
    </>
    return (

        <div className="navbar  bg-base-200 lg:py-6 lg:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
      <label className="btn btn-circle swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
      </div>
      <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-40">
       {navLinks}
        {/* {
          !user && <NavLink to="/register"  className={({isActive})=> isActive ? "text-[#D23A25] font-bold" : ""  }>Sign Up</NavLink>
        } */}
      </nav>
    </div>
    <Link to="/" className="btn btn-ghost md:text-2xl lg:text-3xl">
        <img className="w-10 h-10 bg-none" src={logo} alt="" />
        <span className="text-black">HeavenHome</span>

    </Link>
  </div>
  <div className="navbar-center md:ml-12 hidden md:flex lg:flex">
    <nav className="menu menu-horizontal gap-3 px-1 text-[17px]">
      {navLinks}
    </nav>
  </div>
  <div>
    
  </div>
  <div className="navbar-end ">
  

  {user? <div className="dropdown dropdown-end relative">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-warning   tooltip-left"    data-tip={user?.displayName} onClick={handleIsOpen}>
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-32 md:w-60 lg:w-60 absolute top-full  ${
          isOpen ? '' : 'hidden'
        }`}>

          <div className="flex flex-col lg:flex-row md:flex-row  items-center md:gap-3 lg:gap-3 md:pb-8 lg:pb-8">
            <div className="w-12 rounded-full">
            <img src={user?.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" className="" />
            </div>
            <div>
            <h3 className="md:text-[18px] lg:text-[18px] font-medium   w-full ">{user?.displayName || "Name not found"}</h3>
            </div>
          
          </div>
       
       
        <li className="md:text-[17px] lg:text-[17px] border-t-2 md:py-2  lg:py-2 border-[#0000000d] ">
          <Link to="/update-profile" className="">
          <FaRegCircleUser></FaRegCircleUser> MY Profile
          </Link>
        </li>

        <li className=" md:py-2  lg:py-2 md:text-[17px] lg:text-[17px] border-t-2 border-[#0000000d] ">
          <Link to="/update-profile" className="">
          <CiEdit/> Edit Profile
          </Link>
        </li>
        <li className="md:text-[17px] lg:text-[17px] border-t-2  md:py-2  lg:py-2 border-[#0000000d] ">
          <Link className="">
          <CiSettings/> Settings
          </Link>
        </li>
        <li className="md:text-[17px] lg:text-[17px] border-t-2  md:py-2  lg:py-2 border-[#0000000d] ">
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