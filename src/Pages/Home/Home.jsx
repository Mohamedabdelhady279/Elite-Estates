import React, { useContext, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Popular from '../../Components/Popular/Popular'
import Services from '../../Components/Services/Services'
import Blog from '../../Components/Blog/Blog'
import axios from 'axios'
import Search from '../../Components/Search/Search'
import {  useNavigate } from 'react-router-dom'

export default function Home() {
   
  const navigate=useNavigate();
   

  return (
    <>
    <div className='min-h-screen bg   '>
        {/* <Navbar /> */}
        <div className='text-white w-[1336px] mx-auto mt-20 pt-20  sm:pl-12'>
            <h2 className='text-5xl mb-8  font-bold fs-1 capitalize leading-14'>find a house <br /> that suits you </h2>
            <p className='mb-8  lg:text-left lg:w-full sm:w-3/4 '>want to fin a home? we are ready to help you find one that suits <br /> your lifestyle and needs</p>
            <button onClick={()=>navigate('/products')} className='bg-[#1E1E1E] text-white w-fit px-4 py-1 w-fullmb-8 cursor-pointer '>Get started</button>
            <div className='flex justify-between w-100'>
            <div>
                <h3 className='font-bold mb-2 text-[#E7E7E7]'>1200 <span> <i className="text-[#0055CD]   ml-2 fa-solid fa-plus"></i></span></h3>
                <p className='capitalize text-sm'>listed properties</p>
            </div>
            <div>
                <h3 className='font-bold mb-2'>4500 <span> <i className="text-[#0055CD] ml-2 fa-solid fa-plus"></i></span></h3>
                <p className='capitalize text-sm'>happy customers</p>
            </div>
            <div>
                <h3 className='font-bold mb-2'>100 <span> <i className="text-[#0055CD] ml-2 fa-solid fa-plus"></i></span></h3>
                <p className='capitalize text-sm'>awards</p>
            </div>
        </div>
        </div>

    </div>
    

    <div className='absolute mb-16 sm:-bottom-65 lg:-bottom-45 left-[15%] z-100 w-[70%]'>
        <Search />
    </div>

      <div className='relative z-30 pt-[400px]'>
        <Popular  />
        </div>  
         <Services />
         <div className='relative'>
         <Blog />
         </div>
    
    </>
  )
}
