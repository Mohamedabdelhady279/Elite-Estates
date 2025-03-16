import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import RingLoader from "react-spinners/RingLoader";

export default function Layout({ backgroundColor, setBackgroundColor }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // مدة التحميل 2 ثانية
  }, []);

  return (  
    <>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
<RingLoader
  color="#1400ff"
  loading
  size={171}
  speedMultiplier={1}
/>

  </div>
      ) : (
        <>
          <Navbar backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
          <ScrollRestoration />
          <div className='mt-0 sm:pt-16 lg:pt-0'>
            <Outlet />
          </div>
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
      )}
    </>
  );
}
