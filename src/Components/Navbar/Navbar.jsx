
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BackgroundContext } from "../../context/BackrgroundContext/BackrgroundContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {backgroundColor ,setBackgroundColor} = useContext(BackgroundContext);
  const [isMobileMenuOpen ,setIsMobileMenuOpen] = useState(false);
 
  const navigate = useNavigate();

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
      className={`fixed top-0 left-0 right-0 z-10 w-full sm:h-[330px] lg:h-[80px] transition-all duration-500 ${
        isScrolled ? "bg-[#25356b]" : 'bg-[#25356b]'
      } text-white`}
    >
      <div className={`w-[1336px] mx-auto flex sm:flex-col sm:flex-wrap sm:px-10 sm:items-start sm:gap-4 lg:flex-row lg:flex-nowrap 
       justify-between items-center pt-2 ${isMobileMenuOpen? '': ''} `}>
        <Link to='/' className="logo flex gap-2">
          <img className="w-[20px] h-[20px]" src={logo} alt="" />
          <h1 className="font-bold">Elite Estates</h1>
        <button className="flex cursor-pointer" aria-expanded={isMobileMenuOpen} aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
        <i  className={  ` text-white text-2xl fa-solid ${isMobileMenuOpen ? "fa-circle-xmark" : ""} `}></i>
        </button>
        </Link>

       

        <ul className={`flex sm:flex-col sm:flex-wrap lg:flex-row lg:flex-nowrap sm:gap-0.5 lg:gap-4 font-semibold ${isMobileMenuOpen? 'hidden':'visible'} `}>
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
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/favproducts'>Fav Products</NavLink>
       </li>
       <li className='relative'>
       <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/agents'>Agents</NavLink>
       </li>
       <li className='relative'>
        <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/login'>Login</NavLink>
       </li>

     </ul>

        <button onClick={()=>navigate('/products')} className="w-fit px-3 py-2 border border-white rounded cursor-pointer">
          Find A House
        </button>
      </div>
    </div>
  );
}