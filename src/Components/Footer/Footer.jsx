import React from 'react'
import { Link} from 'react-router-dom';
import facebookIcon from '../../assets/imgs/Icon (1).png'
import linkedinIcon from '../../assets/imgs/icon (2).png'
import instagramIcon from '../../assets/imgs/icon (3).png'
import twitterIcon from '../../assets/imgs/icon (4).png'
import { NavLink } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
    <div className=' w-full   mt-20 bg-[#000000] text-white '>
        <div className='px-16 mx-auto '>
    <div className='text-[#969696] flex gap-2 sm:w-4/5 md:w-2/3 lg:w-1/3  mb-10'>
    <i className="fa-solid fa-quote-left mt-16"></i>
    <p className='mt-16'>
    Our business is built off of close relationships and we are 
glad that we are able to share our positive real estate
experiences with our clients.
    </p>

    </div>
    
    <div className='grid grid-cols-12 justify-between'>
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 sm:mb-6">
            <h2 className='font-semibold text-xl mb-6'>Contact Us</h2>
            <div className='flex gap-2 items-center mb-2'>
            <i className="fa-solid fa-location-dot"></i>
            <p>Cairo,Nasr city</p>
            </div>
            <div className='flex gap-2 items-center'>
               <i className="fa-solid fa-phone"></i>
               <p>022344444</p>
            </div>
        </div>

        <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 sm:mb-6">
            <h2 className='font-semibold text-xl mb-6'>Quick Links</h2>
            <ul>
                <li className='mb-1' > <Link to='/aboutus'>About Us</Link> </li>
                <li className='mb-1'> <Link to='/aboutus'>Terms & Conditions</Link> </li>
                <li className='mb-1'> <Link to='/aboutus'>Support Center</Link>  </li>
                <li className='mb-1'> <Link to='/aboutus'>Privacy Policy</Link>  </li>
            </ul>
        </div>

        <div className="sm:col-span-12 md:col-span-6 lg:col-span-4 sm:mb-6">
            <h2 className='mb-10 font-semibold text-xl'>Newsletter</h2>
            <div className='relative'>
                         <input type="email" name="" id="" className='rounded-md px-2 py-1 w-3/4 bg-[#FFFFFF1A]' placeholder='Email Address' />
                         <i className="fa-solid fa-arrow-right bg-[#0055CD] absolute right-1/4 h-[32px] w-[35px] top-0 rounded-r-md pt-2 pl-2"></i>
            </div>
   
        </div>
        
    </div>

    <div className='flex  gap-8   py-10 justify-center items-center'>
      <NavLink to =''>   <img src={facebookIcon} alt="" /></NavLink>
      <NavLink to =''>   <img src={linkedinIcon} alt="" /></NavLink>
       <NavLink to =''><img src={instagramIcon} alt="" /></NavLink>
       <NavLink to =''><img src={twitterIcon} alt="" /></NavLink>
    </div>
    </div>
    </div>
    </>
  )
}
