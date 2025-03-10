import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import imgpopup from '../../assets/imgs/imgpopup.png'

const Popup = ({ Showpupup, setShowpupup }) => {
  return (
    <>
      {Showpupup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-[9999] backdrop-blur-sm'>
        
          <div className='relative bg-white rounded-[25px] shadow-md duration-200 w-[599px] h-[599px] flex flex-col items-center justify-center'>
          <IoCloseOutline className='text-2xl cursor-pointer absolute top-4 right-4 ' onClick={()=>setShowpupup(false)}/>

            <img src={imgpopup} alt='' className='w-[414px] h-[338px] mb-6' />

            <h1 className='font-bold text-[36px] text-[#095DDB] text-center leading-tight'>
              Your reservation is <br /> confirmed
            </h1>
            <NavLink  to='/'><button className='bg-[#0055CD] text-[#FFFFFF] w-[80%] rounded-[5px] px-4 py-4 mt-6'>Reservation details</button>            </NavLink>


          </div>
        </div>
      )}
    </>
  )
}

export default Popup;
