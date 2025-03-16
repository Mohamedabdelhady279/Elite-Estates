import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../lib/ProductSlice';
import Popup from '../../Components/Popup/Popup';
import { bookReservation } from '../../lib/BookingSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservation = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [showPopup, setShowPopup] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { id } = useParams();
  const selectedProduct = products.data ? products.data.find((product) => product.id === id) : '';

  const handleBooking = () => {
    dispatch(bookReservation(selectedProduct));
    toast.success("Reservation confirmed! Thank you✨", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    setShowPopup(true);
    setIsBooked(true);
  };

  return (
    <div className='mx-auto mt-20 pt-20'>
   <ToastContainer />
        
      <div className='px-16'>
        <h2 className='font-semibold text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative mb-8'>
          <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> Your Reservation
        </h2>

        <div className='grid md:grid-cols-12 sm:grid-cols-6 items-center gap-8 mb-8'>
          <div className='sm:col-span-12 md:col-span-6 lg:col-span-4'>
            <img className='w-full rounded-xl sm:w-[442px]' src={selectedProduct?.image} alt="" />
          </div>

          <div className='sm:col-span-12 md:col-span-6 lg:col-span-8'>
            <div className='flex gap-2 items-center mb-3'>
              <i className="fa-solid fa-location-dot"></i>
              <p>{selectedProduct.title}</p>
            </div>

            <p className='mb-8'>
              Your reservation on 7 May at 3 PM in a place
            </p>

            <div className='flex items-center gap-12'>
              <button
                onClick={handleBooking}
                className={`text-white px-3 py-2 w-[177px] rounded-md cursor-pointer ${isBooked ? 'bg-[#1E1E1E94]' : 'bg-blue-500'}`}
              >
                {isBooked ? 'Booked' : 'Reserve '}
              </button>
              <p className='text-[#000000] font-bold'>{selectedProduct.price} {selectedProduct.currency}</p>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <Popup Showpupup={showPopup} setShowpupup={setShowPopup} />}
    </div>
  );
};

export default Reservation;
