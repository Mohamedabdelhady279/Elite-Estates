import React from 'react'
import { Link } from 'react-router-dom';
import Favorite from '../../assets/imgs/favorite.png';
import { useDispatch } from 'react-redux'; 
import { addFavorite } from '../../lib/favoritesSlice'; 

export default function ProductCard({productInfo}) {
    let {title,price,image ,currency ,location} = productInfo;
    const dispatch = useDispatch(); 
    const handleAddToFavorites = () => { 
      const item = { 
        title, 
        price, 
        image, 
        currency, 
        location 
      }; 
       
      dispatch(addFavorite(item)); 
    }; 

  return (
   <>
  
   <div className='sm:col-span-12 md:col-span-6 lg:col-span-4 bg-white '>
    <div className='relative '>
     <img className='h-[302px] w-full' src={image} alt="" />
   <div 
 onClick={handleAddToFavorites} 
   className='absolute top-2 right-2 w-[45px] h-[45px] cursor-pointer'><img  src={Favorite} alt="" /></div>
   </div>
   <Link to={`/products/${productInfo.id}`}>
      <div className='flex gap-2 items-center px-3'>
         <i className="fa-solid fa-location-dot"></i>
         <h3 className='mb-2'>{title}</h3>
      </div>

      <p className='px-3'>Location: {location.city} - {location.state} </p>
     
      <div className='flex justify-between mb-2 text-[#666666] px-3'>
        <div className='flex gap-1.5 items-center'>
          
          <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/a652/0a27/524708a6161976debad1d56ea6151747?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fd88JaBbpPX490XESkcvDK3UwN7tOZVFZaOUo1Cxeb6FLTS5NC~asFH19zz~-hzQOGNfdIL3E7cKtf0Zg~CYwmeVyNCaGkUHiqMMk4S8s7xMAdAUlbbG7TBNXrq2hSuZm7r1er-54SO4SyBdHkC28bEUqF7vnWynv-YHJoEI4vCUIeWfx-FCTg8uX0iCXU8T0-lxjIP8b7e3gAeoCcE~7EmJmyjU4sOYfyblkYUPa1MB0XbGqmgq6vJjDzmfLgPzffME2gCGWvt5TTjW8DFTkSV2VU9c32THMHedwmYkK8KflUGAOrdrGUNgEJtkv6jUnABn7uUMYePeMvcFcNtHrQ__" alt="" />
          <p>4 Bed</p>
        </div>
        <div className='flex gap-1.5 items-center'>
        <i class="fa-solid fa-chart-column w-[20px] h-[20px]"></i>
        <p>10 x 10 m</p>  
        </div>
        <div className='flex gap-1.5 items-center'>
          <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/f922/3eca/ba76c64191298924ce2303664286935b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BHM~V3rtrr6DPqQhBWK7oPMP9AHknojFA4Az7bVWAwk2C~FfG4f7VjRKxfwhCHLvLM-k6cA0L6y5Qw6hjl57iDXYLrxR5P7b9k0NPINv6a47ZmgOEQI9p6eqnPTePm0PF4r0d7RluJ8ey6efF2-DabqUWSjCTbDcbFhJlnvPNT8Gy117x9~3ZPIV2GmLl4qRuC6CALaohAtBmPy05Yy2t~7GBuE~0gQ1bepST7~09UuSmBSCxyxafv-UGMZEy2gMhc-u8eWPUuYCkwo1VFgxcLfcp3R5uX~-fNAijKldWMuxAEZLambQ-wWs5HE8Z~Qz0DOd-XAhtfDkKI8UiIsY1w__" alt="" />
          <p>1600 m</p>
        </div>
      </div>
      <div className='flex justify-between font-bold px-3'>
        <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor-pointer '>Book Now</button>
        <p className='text-[#000000]'>{price} {currency}</p>
      </div>
    </Link>
</div>
   </>
  )
}
