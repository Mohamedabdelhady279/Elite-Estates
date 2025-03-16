
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BackgroundContext } from "../../context/BackrgroundContext/BackrgroundContext";
import Profileee from '../../assets/imgs/Profileee.png';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../lib/UserNameSlice";
import { getAuth, signOut } from "firebase/auth";


export default function Navbar({ disableScroll = false }  ) {

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const {backgroundColor ,setBackgroundColor} = useContext(BackgroundContext);
  const [isMobileMenuOpen ,setIsMobileMenuOpen] = useState(true);
  const userinfo = useSelector((state) => state.userinfo.userinfo); // جلب بيانات المستخدم من Redux
  const dispatch = useDispatch();
  
  
  
  // 🔹 تحديد الصورة
    const avatarUrl = userinfo?.photoURL
    ? userinfo.photoURL
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(userinfo?.name || "Guest")}&background=0D8ABC&color=fff&bold=true`;

 
 
 
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
   
   
  }

  
  
  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = 846.5;
      setIsScrolled(window.scrollY > screenHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
 
 
 
 
  const navBgColor = disableScroll ? backgroundColor : (isScrolled ? "bg-[#25356b]" : backgroundColor);

  return (
    <div
      className={`fixed lg:px-16 top-0 left-0 right-0 z-50 w-full ${isMobileMenuOpen ? "sm:h-[120px] "  : "sm:h-[330px]"}  md:h-[80px] transition-all duration-500 ${
        isScrolled} ? "bg-transparent text-black" : ${backgroundColor}
       text-white`}
    >
      <div className={`px-16 mx-auto flex sm:flex-col sm:flex-wrap sm:px-5 sm:items-start sm:gap-4 md:gap-1 lg:gap-2 md:flex-row lg:flex-nowrap 
       justify-between items-center py-6 ${isMobileMenuOpen? '': ''} `}>
        <Link to='/' className="logo flex gap-2 relative sm:w-full md:w-fit">
          <img className="w-[20px] h-[20px]" src={logo} alt="" />
          <h1 className="font-bold">Elite Estates</h1>
        
        </Link>
        <button className="flex cursor-pointer absolute right-[20px]" aria-expanded={isMobileMenuOpen} aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
        <i  className={  `text-2xl fa-solid md:invisible ${isMobileMenuOpen  ? "fa-bars" : "fa-circle-xmark "} `}></i>
        </button>

       
 <ul className={`menu flex sm:flex-col sm:flex-wrap md:flex-row md:flex-nowrap sm:gap-0.5 md:gap-1.5 lg:gap-4 font-semibold ${isMobileMenuOpen? 'sm:hidden md:flex':'flex'} `}>
       <li className='relative'> 
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[3px] before:bg-[#0055CD] before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/'>Home</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[3px] before:bg-[#0055CD] before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/aboutus'>  About Us</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[3px] before:bg-[#0055CD] before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/products'>  Products</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[3px] before:bg-[#0055CD] before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/properities'>Properities</NavLink>
       </li>
    
   
       <li className='relative'>
        <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[3px] before:bg-[#0055CD] before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/Authpage'>Login</NavLink>
       </li>
     

     </ul>
      
<div className="flex sm:gap-8 md:gap-3 items-center">
<NavLink className={ ' text-white  hover:text-gray-200' } to='/favproducts'><i className="fa-regular fa-heart text-4xl"></i></NavLink>
<button onClick={()=>navigate('/products')} className="w-fit px-3 py-2 border border-white rounded cursor-pointer">
          Find A House
        </button>
       
        {userinfo ? (
        <div className="flex items-center gap-2">
                 <NavLink to="/profile">

          <img src={userinfo.photoURL} alt="User Avatar" className="w-[40px] h-[40px] rounded-full" />
          </NavLink>

        </div>
      ) :(
        <NavLink to="/profile">
            <img className="w-[40px] h-[40px] rounded-full" src={Profileee} alt="User Avatar" />
          </NavLink>
      )}
</div>
      </div>
    </div>
  );
}