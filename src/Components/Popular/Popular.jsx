import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Favorite from '../../assets/imgs/favorite.png';
import { FavProductsContext } from '../../context/FavContext/FavContext';
import {  ProductsContext } from '../../context/ProductsContext/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../lib/ProductSlice';

export default function Popular() {
  const navigate = useNavigate();
  // const {products} = useContext(ProductsContext);
  
let dispatch = useDispatch();
const {products} = useSelector((state)=> state.products);
let y = products.data;
let x = useSelector((state)=>{state.products});
// const {products} = useContext(ProductsContext );
console.log(products);

useEffect(()=>{
   dispatch(fetchProducts())
},[])


  console.log(products);
  

  let popularProducts = products.data.filter((product)=> product.price > 500000);
  console.log(popularProducts);
  

  return (
   <>
<div className=' px-16 mx-auto py-18 mt-20 pt-[50px] relative'>
   <h2 className='font-semibold mb-4 text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative '> 
    <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> Popular</h2>
  <div className='flex justify-between mb-4'>
    <p className='text-2xl'> Our Popular Homes</p>
    <Link to='/products' className='text-[#606060]'>Explore all <span><i className="fa-solid fa-arrow-right"></i></span> </Link>
  </div>

  <div className= 'grid grid-cols-12 gap-4 '>

    {popularProducts ? popularProducts.map((product)=>(
  //       <Link to='' key={product.id} className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
  //   <div className='relative'>
  //    <img className='h-[302px] w-full' src={product.image} alt="" />
  //  <div className='absolute top-2 right-2 w-[45px] h-[45px]'><img  src={Favorite} alt="" /></div>
  //  </div>

  //     <div className='flex gap-2 items-center'>
  //        <i className="fa-solid fa-location-dot"></i>
  //        <h3 className='mb-2'>{product.title}</h3>
  //     </div>
     
  //     <div className='flex justify-between mb-2 text-[#666666]'>
  //       <div className='flex gap-1.5 items-center'>
          
  //         <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/a652/0a27/524708a6161976debad1d56ea6151747?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fd88JaBbpPX490XESkcvDK3UwN7tOZVFZaOUo1Cxeb6FLTS5NC~asFH19zz~-hzQOGNfdIL3E7cKtf0Zg~CYwmeVyNCaGkUHiqMMk4S8s7xMAdAUlbbG7TBNXrq2hSuZm7r1er-54SO4SyBdHkC28bEUqF7vnWynv-YHJoEI4vCUIeWfx-FCTg8uX0iCXU8T0-lxjIP8b7e3gAeoCcE~7EmJmyjU4sOYfyblkYUPa1MB0XbGqmgq6vJjDzmfLgPzffME2gCGWvt5TTjW8DFTkSV2VU9c32THMHedwmYkK8KflUGAOrdrGUNgEJtkv6jUnABn7uUMYePeMvcFcNtHrQ__" alt="" />
  //         <p>{product.property_details.bedrooms} Bedrooms</p>
  //       </div>
  //       <div className='flex gap-1.5 items-center'>
  //       <i class="fa-solid fa-chart-column w-[20px] h-[20px]"></i>
  //       <p>10 x 10 m</p>  
  //       </div>
  //       <div className='flex gap-1.5 items-center'>
  //         <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/f922/3eca/ba76c64191298924ce2303664286935b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BHM~V3rtrr6DPqQhBWK7oPMP9AHknojFA4Az7bVWAwk2C~FfG4f7VjRKxfwhCHLvLM-k6cA0L6y5Qw6hjl57iDXYLrxR5P7b9k0NPINv6a47ZmgOEQI9p6eqnPTePm0PF4r0d7RluJ8ey6efF2-DabqUWSjCTbDcbFhJlnvPNT8Gy117x9~3ZPIV2GmLl4qRuC6CALaohAtBmPy05Yy2t~7GBuE~0gQ1bepST7~09UuSmBSCxyxafv-UGMZEy2gMhc-u8eWPUuYCkwo1VFgxcLfcp3R5uX~-fNAijKldWMuxAEZLambQ-wWs5HE8Z~Qz0DOd-XAhtfDkKI8UiIsY1w__" alt="" />
  //         <p>{product.property_details.area_sqft} m</p>
  //       </div>
  //     </div>
  //     <div className='flex justify-between font-bold'>
  //       <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor-pointer '>Book Now</button>
  //       <p className='text-[#000000]'>{product.price} $</p>
  //     </div>
  //   </Link>
   <ProductCard productInfo ={product} key={product.id} />
    ))
    
    : <h2>loading... </h2>
    
  }
  


  </div>
   </div>
   </>
  )
}
