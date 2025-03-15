
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BackgroundContext } from "../../context/BackrgroundContext/BackrgroundContext";
import Favorite from '../../assets/imgs/favorite.png';


export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const {backgroundColor ,setBackgroundColor} = useContext(BackgroundContext);
  const [isMobileMenuOpen ,setIsMobileMenuOpen] = useState(false);
 
  

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
        <i  className={  `  text-white text-2xl fa-solid md:invisible ${isMobileMenuOpen  ? "fa-bars" : "fa-circle-xmark "} `}></i>
        </button>

       
 <ul className={`menu flex sm:flex-col sm:flex-wrap md:flex-row md:flex-nowrap sm:gap-0.5 md:gap-1.5 lg:gap-4 font-semibold ${isMobileMenuOpen? 'sm:hidden md:flex':'flex'} `}>
       <li className='relative'> 
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/'>Home</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/aboutus'>  About Us</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/products'>  Products</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/services'>Services</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/properities'>Properities</NavLink>
       </li>
    
       <li className='relative'>
       <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/agents'>Agents</NavLink>
       </li>
       <li className='relative'>
        <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/login'>Login</NavLink>
       </li>
     

     </ul>
      
<div className="flex sm:gap-8 md:gap-3 items-center">
<NavLink className={ ' text-white  hover:text-gray-200' } to='/favproducts'><i className="fa-regular fa-heart text-4xl"></i></NavLink>
<button onClick={()=>navigate('/products')} className="w-fit px-3 py-2 border border-white rounded cursor-pointer">
          Find A House
        </button>
        <NavLink className={` before:w-0 text-white hover:text-gray-200`} to='/profile'>
        <img className='w-[40px]  h-[40px] rounded-full' src='https://s3-alpha-sig.figma.com/img/833b/fcf2/fbdf822af730dc5a309217c373e76ab9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fIhHhX1B~92nfteVTN~VwXvdcyoI~On7ZqEA48OiQkAJJ9wW4ni-Bly5UOYH-bkUg2MHAuLPqU2jl3fDfBhN1qKgZwB1yCOWZehF4nAI6YQY~cRufYj47GvPOr3FBCsP-kTIYNpMVjb8HNLzxiQ-GlM2XHP6nF78pXQkXsM9gfbsgcGJwBuV9Ndw078SZtyBqIqWzgpwJjbhHDQLz3r0wXT7Xwl-qAFe6i98BcDm0gmGVt5XtNbpbJ0M-2u-wTYKMjx0KTPKEHNgFI9XEyH4lbHJS~9wSbCsuftK4173Q-IgLIOFCtoK5-78Rh6R7ZEwzIHzfMf8yxP4y5dgx1xtxg__' alt="" />
           
        </NavLink>

</div>
      </div>
    </div>
  );
}