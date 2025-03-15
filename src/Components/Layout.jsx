import React, { useContext } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout({backgroundColor , setBackgroundColor}) {

  return (
    <>
    <Navbar backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
   <div className='mt-0 sm:pt-16 lg:pt-0'> <Outlet /></div>
    <Footer />
    </>
  )
}
