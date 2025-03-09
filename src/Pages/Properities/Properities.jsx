import React from 'react'
import apartment from '../../assets/imgs/Frame 205.png';
import villa from '../../assets/imgs/Villa.png';
import real from '../../assets/imgs/Real.png';
import location from '../../assets/imgs/location.png';
import land from '../../assets/imgs/land.png';

export default function Properities() {
  return (
    <>
    <div className='bgprop  min-w-screen min-h-[1400px] p-14 mt-2 relative'>
        <h2 className='text-center text-white text-2xl font-semibold  mt-12'>Types Of Properties</h2>
          <div className='flex justify-between w-3/4 mx-auto pt-28'>
            <div className='h-[330px] rounded-tl-full rounded-tr-full w-[100px] px-2 pt-4 bg-slate-300'>
                <img src={apartment} alt="" />
                <h3 className='text-center mt-2'>Apartment</h3>
            </div>
            <div className='h-[330px] rounded-tl-full rounded-tr-full w-[100px] px-2 pt-4 bg-slate-300'>
                <img src={villa} alt="" />
                <h3 className='text-center mt-2'>Villas</h3>
            </div>
            <div className='h-[330px] rounded-tl-full rounded-tr-full w-[100px] px-2 pt-4 bg-slate-300'>
                <img src={real} alt="" />
                <h3 className='text-center mt-2'>Commercial Space</h3>
            </div>
            <div className='h-[330px] rounded-tl-full rounded-tr-full w-[100px] px-2 pt-4 bg-slate-300'>
                <img src={location} alt="" />
                <h3 className='text-center mt-2'>Any Location</h3>
            </div>
            <div className='h-[330px] rounded-tl-full rounded-tr-full w-[100px] px-2 pt-4 bg-slate-300'>
                <img src={land} alt="" />
                <h3 className='text-center mt-2'>Land Of Development</h3>
            </div>

          </div>


        <p className='text-center text-white text-2xl absolute bottom-26 font-bold left-[30%]' >Our listing cater to different budgets and preferences</p>
        </div>
    </>
  )
}
