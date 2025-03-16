import React, { useContext, useEffect } from 'react'
import heartIcon from '../../assets/imgs/Heart.png';
import shareIcon from '../../assets/imgs/Share 2.png';
import CheckMark from '../../assets/imgs/Check Mark.png';
import Cube from '../../assets/imgs/Cube.png';
import Frame25 from '../../assets/imgs/Frame 25.png';
import Frame160 from '../../assets/imgs/Frame 160.png';
import PaintRoller from '../../assets/imgs/Paint Roller.png';
import Bath from '../../assets/imgs/Bath.png'
import Popular from '../Popular/Popular';
import map from '../../assets/imgs/Frame 172.png'
import person1 from '../../assets/imgs/Ellipse 1.png';
import person2 from '../../assets/imgs/Ellipse 1 (1).png';
import person3 from '../../assets/imgs/Ellipse 1 (2).png';
import person4 from '../../assets/imgs/Ellipse 1 (3).png';
import star from '../../assets/imgs/Star 1.png'
import { BackgroundContext } from '../../context/BackrgroundContext/BackrgroundContext';
import Navbar from '../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../lib/ProductSlice';

export default function ProductDetails() {
  const { backgroundColor, setBackgroundColor } = useContext(BackgroundContext);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const { id } = useParams();
  const selectedProduct = products.data ? products.data.find((product) => product.id === id) : '';

  return (
   <>
<div className=' pt-[142px] relative'>
    <div className=' mx-auto sm:px-16'>
    <h2 className='text-[#000000] mb-3 font-semibold'>St. Crystal</h2>
    <div className='flex sm:flex-col sm:flex-wrap sm:gap-4 lg:flex-row lg:flex-nowrap justify-between mb-4'>
        <p className='text-[#606060]'>210 Egypt Street , Cairo ,Fl</p>
        <div className='flex gap-4  '>
            <button className='flex gap-1 text-[#0055CD] border-1 border-[#0055CD] rounded-xs w-[155px] h-[35px] items-center'>
                <img className='w-[35px] h-[25px] px-2 py-1 ' src={shareIcon} alt="" />
                <p>Share</p>
              </button>
              <button className='flex gap-1 text-[#0055CD] border border-[#0055CD] rounded-xs w-[155px] h-[35px] items-center'>
                <img className='w-[35px] h-[25px] px-2 py-1' src={heartIcon} alt="" />
                <p>Favorite</p>
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-5 grid-rows-6 gap-2 sm:w-full lg:w-3/4 mx-auto h-[600px] mt-12">
            <div className="lg:col-span-3 lg:row-span-6 sm:col-span-7 sm:row-span-3 md:row-span-3">
              <img className='h-full w-full rounded-xl' src={selectedProduct?.image} alt="" />
            </div>
            <div className="lg:col-span-2 lg:row-span-3 col-start-4 sm:col-span-7 sm:row-span-2 md:row-span-3 md:col-span-3">
              <img className='h-full w-full rounded-xl' src="https://s3-alpha-sig.figma.com/img/d8f3/66f5/dffd0a968a456e6c8a57076b1e6bb596?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZKLtvkfmk5AJUpFJXKlNMrM-0ugpTCTvnMHkCOdpR2CURPiE1BVAPI2tpdmPH8TC41nOMNA5hrOgwDfwGgEte79prjF600Y2PhFB4tFlY1YVdgV1-7ZUxSw99lKWDSLO9KWvWcuuiBQzdYAfwj40ATBhvpGoK7NPh38T1xFqeWpepMYLG0SScFDidk7FCZzFxPfUKNX4CwGvx9Y1M35nL~MY3vbwlYrSw4Eqhw0PZIjJGSRjmOPznB4skCcQdkJZs2aRu3zzzRyBYxM8LwKYPCgHZ1QyZMH8nnhlpFLsu~6vL~ewuxm2GhkmHW1llf1VyjVZ~r-11mzsaDhtO0PJnw__" alt="" />
            </div>
            <div className="lg:col-span-2 lg:row-span-3 col-start-4 row-start-4 sm:col-span-7 sm:row-span-2 md:row-span-3 md:col-span-4">
              <img className='h-full w-full rounded-xl' src="https://s3-alpha-sig.figma.com/img/07bf/9f8c/117715897d1303c433c08785bb8091f7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AYgJDosnSaIvTYAsLvxC5l8V9TxO36--Etz~6IQRiQlIVISvpYoHaYQtrrjb9SsbFAJKiEKlsqMWXBtynWnFx7bIdpNjQloSnjGjOIOn2bF5iQVdEzEqtZmuwmpWwhBlz2KF3xdVqD3YFfXL8WFIIznvJULobzwr7vrjshA4CdvF2n-tRjn4WyCRYOWYQ2R21QW2ga6w2~I94TjKN0SfN1DYQQggyJJQ6S681190KvBTEjN1OiOL-FNlP-gIW4tIxwI0t-kGjrghXSIt-DJG5HSDKOlUBKHEHAZuBYDuvBjqfXZG5eWNEN7PUcTBwdJbOF-EzAmhkIy61gPhIX-S7w__" alt="" />
            </div>
          </div>

          <div className='flex mt-12 sm:flex-col sm:flex-wrap lg:flex-nowrap md:w-full lg:w-3/4 mx-auto gap-2'>
            <div className='sm:flex sm:flex-wrap lg:w-3/4 lg:flex-nowrap lg:flex-row flex justify-between border border-gray-300 rounded-xl p-4 gap-1 px-6 text-[#666666]'>
              <div className='sm:w-1/3 sm:mb-4 md:w-1/3 lg:w-1/5'>
                <p className='mb-2'>Bedrooms</p>
                <div className='flex gap-1.5 items-center'>
                  <img src={Frame25} alt="" />
                  <span>2</span>
                </div>
              </div>

              <div className='sm:w-1/3 sm:mb-4 md:w-1/3 lg:w-1/5'>
                <p className='mb-2'>Bathrooms</p>
                <div className='flex gap-1.5 items-center'>
                  <img src={Bath} alt="" />
                  <span>1</span>
                </div>
              </div>

              <div className='sm:w-1/3 sm:mb-4 md:w-1/3 lg:w-1/5'>
                <p className='mb-2'>Square Area</p>
                <div className='flex gap-1.5 items-center'>
                  <img src={Cube} alt="" />
                  <span>6*8 m</span>
                </div>
              </div>

              <div className='sm:w-1/3 sm:mb-4 md:w-1/3 lg:w-1/5'>
                <p className='mb-2'>Repair Quality</p>
                <div className='flex gap-1.5 items-center'>
                  <img src={PaintRoller} alt="" />
                  <span>Modern Loft</span>
                </div>
              </div>

              <div className='sm:w-1/3 sm:mb-4 md:w-1/3 lg:w-1/5'>
                <p className='mb-2'>Status</p>
                <div className='flex gap-1.5 items-center'>
                  <img src={CheckMark} alt="" />
                  <span>Active</span>
                </div>
              </div>
            </div>

            <div className='lg:w-1/4 border border-gray-300 rounded-xl p-4'>
              <p className='mb-2'>Rent Price</p>
              <p>$2500 <span>/month</span></p>
            
            
                 <Link to={`/Reservation/${selectedProduct.id}`}>         
              <button className='text-white rounded-md bg-[#0055CD] px-2 py-1 w-full mt-2 cursor-pointer'>Book now</button>
            </Link>
            </div>
          </div>

          <div className='flex gap-1 mt-12 sm:flex-col sm:flex-wrap lg:flex-row lg:flex-nowrap lg:gap-4 pb-[380px]'>
            <div className='sm:w-full lg:w-3/4 sm:mb-4'>
              <div className='w-full mx-auto'>
                <h2 className='font-semibold mb-4 text-xl mt-6 text-[#3E3E3E] uppercase'>
                  <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> About
                </h2>
                <h2 className='font-bold text-xl'>About the Home</h2>
                <p className='sm:w-full lg:w-3/4 mb-6 text-[#606060]'>
                  Discover a home that blends modern design with timeless comfort. Every detail is crafted to create a warm, inviting space ideal for families and individuals. Enjoy spacious living areas, contemporary finishes, and a community-friendly environment.
                </p>
              </div>
              <img className='sm:w-full sm:h-[280px] lg:w-full mx-auto' src={map} alt="" />
            </div>

            <div className='sm:w-full mx-auto lg:w-1/4 flex flex-wrap gap-2 md:gap-5'>
              <div className='bg-white rounded-xl text-center flex flex-col items-center sm:w-full md:w-5/12 lg:w-4/9 py-4'>
                <img src={person1} alt="" />
                <h3 className='flex gap-2 items-center'>
                  <img src={star} alt="" />
                  <p>4.9</p>
                </h3>
                <h4>John Smith</h4>
                <p className='w-3/4'>The spacious layout and modern design made this home truly inviting.</p>
              </div>

              <div className='bg-white rounded-xl text-center flex flex-col items-center sm:w-full md:w-5/12 lg:w-4/9 py-4'>
                <img src={person2} alt="" />
                <h3 className='flex gap-2 items-center'>
                  <img src={star} alt="" />
                  <p>4.8</p>
                </h3>
                <h4>Emily Johnson</h4>
                <p className='w-3/4'>A well-maintained property with a friendly atmosphere and elegant touches.</p>
              </div>

              <div className='bg-white rounded-xl text-center flex flex-col items-center sm:w-full md:w-5/12 lg:w-4/9 py-4'>
                <img src={person3} alt="" />
                <h3 className='flex gap-2 items-center'>
                  <img src={star} alt="" />
                  <p>4.7</p>
                </h3>
                <h4>Michael Brown</h4>
                <p className='w-3/4'>A perfect blend of style and functionality, ideal for any family.</p>
              </div>

              <div className='bg-white rounded-xl text-center flex flex-col items-center sm:w-full md:w-5/12 lg:w-4/9 py-4'>
                <img src={person4} alt="" />
                <h3 className='flex gap-2 items-center'>
                  <img src={star} alt="" />
                  <p>4.9</p>
                </h3>
                <h4>Sophia Lee</h4>
                <p className='w-3/4'>Exceptional quality and attention to detail. A home that truly stands out.</p>
              </div>
            </div>
          </div>

        </div>

        <div className='absolute left-0 z-50 -bottom-60'>
          <Popular />
        </div>
      </div>
    </>
  )
}
