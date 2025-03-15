import React, { useContext } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 

export default function Layout({backgroundColor , setBackgroundColor}) {

  return (
    <>
    <Navbar backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
   <div className='mt-0 sm:pt-16 lg:pt-0'> <Outlet /></div>
    <Footer />
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}

      />
    </>
  )
}
