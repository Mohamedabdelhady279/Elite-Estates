import React from 'react'
import apartment from '../../assets/imgs/City Block (1).png';
import villa from '../../assets/imgs/Villa.png';
import real from '../../assets/imgs/Real.png';
import location from '../../assets/imgs/location.png';
import land from '../../assets/imgs/land.png';
import Navbar from '../../Components/Navbar/Navbar';

export default function Properities() {
  return (
    <>
  
    <div className='bgprop  min-w-screen min-h-[1400px] p-14 mt-2 relative'>
        <Navbar />
        <h2 className='text-center text-white text-2xl font-semibold  mt-12'>Types Of Properties</h2>
          <div className='flex sm:flex-col sm:flex-wrap  md:flex-row lg:flex-nowrap lg:justify-between w-3/4 mx-auto pt-28 sm:pb-14'>
            <div className='sm:h-[250px] md:w-1/3 lg:h-[458px] flex flex-col items-center rounded-tl-full rounded-tr-full w-[179px] px-2 pt-8 sm:bg-transparent lg:bg-[#6666661A]'>
              <div className='bg-[#0055CD33] w-[150px] h-[150px] rounded-full flex justify-center items-center'>
              <img className='' src={apartment} alt="" />
              </div>
                <h3 className='sm:text-white lg:text-black font-semibold  mt-6'>Apartment</h3>
            </div>
            <div className='sm:h-[250px] md:w-1/3 lg:h-[458px] flex flex-col items-center  lg:rounded-tl-full lg:rounded-tr-full w-[179px] px-2 pt-8 sm:bg-transparent lg:bg-[#6666661A]'>
            <div className='bg-[#0055CD33] w-[150px] h-[150px] rounded-full flex justify-center items-center'>
                <img className=' ' src={villa} alt="" />
                </div>
                <h3 className='sm:text-white lg:text-black font-semibold  mt-6'>Villas</h3>
            </div>
            <div className='sm:h-[250px] md:w-1/3 h-[458px] flex flex-col items-center rounded-tl-full rounded-tr-full w-[179px] px-2 pt-8 sm:bg-transparent lg:bg-[#6666661A]'>
            <div className='bg-[#0055CD33] w-[150px] h-[150px] rounded-full flex justify-center items-center'>
                <img className='' src={real} alt="" />
                </div>
                <h3 className='sm:text-white lg:text-black font-semibold  mt-6'>Commercial Space</h3>
            </div>
            <div className='sm:h-[250px] md:w-1/3 h-[458px] flex flex-col items-center rounded-tl-full rounded-tr-full w-[179px] px-2 pt-8 sm:bg-transparent lg:bg-[#6666661A]'>
            <div className='bg-[#0055CD33] w-[150px] h-[150px] rounded-full flex justify-center items-center'>
                <img className='' src={location} alt="" />
                </div>
                <h3 className='sm:text-white lg:text-black font-semibold  mt-6'>Any Location</h3>
            </div>
            <div className='sm:h-[250px] md:w-1/3 h-[458px] flex flex-col items-center rounded-tl-full rounded-tr-full w-[179px] px-2 pt-8 sm:bg-transparent lg:bg-[#6666661A]'>
            <div className='bg-[#0055CD33] w-[150px] h-[150px] rounded-full flex justify-center items-center'>
                <img className='' src={land} alt="" />
                </div>
                <h3 className='sm:text-white lg:text-black font-semibold text-center mt-2'>Land Of Development</h3>
            </div>

          </div>


        <p className='text-center text-white sm:text-xl lg:text-2xl absolute bottom-26 sm:font-semibold lg:font-bold sm:left-[7%] lg:left-[30%] sm:pt-16 ' >Our listing cater to different budgets and preferences</p>
        </div>
    </>
  )
}
