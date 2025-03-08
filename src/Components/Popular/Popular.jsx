import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Favorite from '../../assets/imgs/favorite.png';
import { FavProductsContext } from '../../context/FavContext/FavContext';

export default function Popular() {
  const navigate = useNavigate();
    const {favProducts , setFavProducts} = useContext(FavProductsContext);

    function addToFavorites(){
     let newFav = favProducts.puch(item)
    }

  return (
   <>
<div className=' w-[1336px] mx-auto py-18 my-20 relative pt-[750px]'>
   <h2 className='font-semibold mb-4 text-xl relative left-10 top-5 mt-6 text-[#3E3E3E]'> 
    <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> Popular</h2>
  <div className='flex justify-between mb-4'>
    <p className='text-2xl'> Our Popular Homes</p>
    <Link to='/products' className='text-[#606060]'>Explore all <span><i className="fa-solid fa-arrow-right"></i></span> </Link>
  </div>

  <div className= 'grid grid-cols-12 gap-4 '>
    <Link to='' className='col-span-4'>
    <div className='relative'>
     <img className='h-[302px] w-full' src="https://s3-alpha-sig.figma.com/img/92c9/482e/c978c89a04b96f17195587570522e793?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMySW0tgMLBHF7QcGvhbXS6DJkEalNQN5tRx2Q32XsTewCjUMVjr7B8mpanZ4TDdsmGwgoDQPgiyO68emP9oaoGmYdEdv8lPkI7yg2RsHkAjekmDBSxFu86WFiOyREWcl02sb7OtqWCBJgQK1kxmcb4dXYDlZsf1cgCXF~8WLjoIhUpPJUrjVrvx5vxbItMUP3Xmnpk050UD0b6mF8Zj2APDVxovRH0rGSCca~uOY~ebwKsQpyAL271J6UozAzU74IN3-ILOvhFhhBYNFyC608P9VOejk~mlWsafoG0SmDSAg4R-5BMqeIYR3MGt2ad~s-83q0PBqhEYBFC1vO43rQ__" alt="" />
   <div className='absolute top-2 right-2 w-[45px] h-[45px]'><img  src={Favorite} alt="" /></div>
   </div>

      <div className='flex gap-2 items-center'>
         <i className="fa-solid fa-location-dot"></i>
         <h3 className='mb-2'>Banana Island, Lagos</h3>
      </div>
     
      <div className='flex justify-between mb-2 text-[#666666]'>
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
      <div className='flex justify-between font-bold'>
        <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor-pointer '>Book Now</button>
        <p className='text-[#000000]'>1000000$</p>
      </div>
    </Link>

    <Link to='' className='col-span-4'>
    <div className='relative'>
      <img className='h-[302px] w-full' src="https://s3-alpha-sig.figma.com/img/5908/c7cd/d47d0732a187f434f201229cd0b300a1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h9aPYJHrl5Gzr0U8GWDzY32dPH747DTLdcI~mTpeI9ca7lmyGFSX0hPVlMpS4baV3~UfGzbqk8rLOs8R0mp-8OuyqAhCCCNBu5LiWqlZBZS~ykChdiwq4es4habJfFldYNH4NGuBRlLrOf5fc~B2Y5ftmxMKvy7x8bEbOTC7wzgQNnNZT4LwYGjWbBbVnbg6XYIdbFxuMEi347lSxPHFe1N9p28s5rnSfCcvs57NdeNibkCJKla9WtSFytHmLAPByFfh908mydcOxpafA5qUKSB4VR8S1aShPqwJ95M78hio3x-KrjWamsGpP0cQkdKY7L-etvAsC9VJ6bFPhNRAJw__" alt="" />
      <div className='absolute top-2 right-2 w-[45px] h-[45px]'><img  src={Favorite} alt="" /></div>
          </div>
     
      <div className='flex gap-2 items-center' >
      <i className="fa-solid fa-location-dot"></i>
      <h3>Banana Island, Lagos</h3>
      </div>
     
        <div className='flex justify-between mb-2 text-[#666666]'>
        <div className='flex gap-1.5 items-center'>
          <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/a652/0a27/524708a6161976debad1d56ea6151747?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fd88JaBbpPX490XESkcvDK3UwN7tOZVFZaOUo1Cxeb6FLTS5NC~asFH19zz~-hzQOGNfdIL3E7cKtf0Zg~CYwmeVyNCaGkUHiqMMk4S8s7xMAdAUlbbG7TBNXrq2hSuZm7r1er-54SO4SyBdHkC28bEUqF7vnWynv-YHJoEI4vCUIeWfx-FCTg8uX0iCXU8T0-lxjIP8b7e3gAeoCcE~7EmJmyjU4sOYfyblkYUPa1MB0XbGqmgq6vJjDzmfLgPzffME2gCGWvt5TTjW8DFTkSV2VU9c32THMHedwmYkK8KflUGAOrdrGUNgEJtkv6jUnABn7uUMYePeMvcFcNtHrQ__" alt="" />
          <p>4 Bed</p>
        </div>
        <div className='flex gap-1.5 items-center'>
        <i className="fa-solid fa-chart-column w-[20px] h-[20px]"></i>
        <p>10 x 10 m</p>  
        </div>
        <div className='flex gap-1.5 items-center'>
          <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/f922/3eca/ba76c64191298924ce2303664286935b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BHM~V3rtrr6DPqQhBWK7oPMP9AHknojFA4Az7bVWAwk2C~FfG4f7VjRKxfwhCHLvLM-k6cA0L6y5Qw6hjl57iDXYLrxR5P7b9k0NPINv6a47ZmgOEQI9p6eqnPTePm0PF4r0d7RluJ8ey6efF2-DabqUWSjCTbDcbFhJlnvPNT8Gy117x9~3ZPIV2GmLl4qRuC6CALaohAtBmPy05Yy2t~7GBuE~0gQ1bepST7~09UuSmBSCxyxafv-UGMZEy2gMhc-u8eWPUuYCkwo1VFgxcLfcp3R5uX~-fNAijKldWMuxAEZLambQ-wWs5HE8Z~Qz0DOd-XAhtfDkKI8UiIsY1w__" alt="" />
          <p>1600 m</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor-pointer '>Book Now</button>
        <p className='text-[#000000]'>1000000$</p>
      </div>
    </Link>

    <Link to='' className='col-span-4'>
      <div className='relative'>
      <img className='h-[302px]' src="https://s3-alpha-sig.figma.com/img/387a/d33d/400862baf9076eb882091c73f1dd5c1e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qVecz1Iy8~S-x4KtUgv~sjChgQ4O8lT4oM94uJkgkccG86JYsBxlGwHFm-k294LmcimHSC12v-X~nQiw90z3iy9qeCyhMdIDECRjgatT0e~hIgtqng7ofPZ5vXFqJ3xC7-p7qvAOKoNjGcCpDrfBUPCFRtQzqBzvetRRYUDGFuHtxSudBpsoLgYRM~nhe~BhpE2GHc1aLNdA7JIZijIpYUeYvKfK05bzima7ICXETVaaeH~OnrTwPam75NlwjPNb4vQcx7O-faXtuTvQSBKteVafwHMrV4azQGCXPKwgjBlVxRWYY0ZKE~3Pi53a2VzvQ75xGKWN9lgopBKfK8Uy7A__" alt="" />
      <div className='absolute top-2 right-2 w-[45px] h-[45px]'><img  src={Favorite} alt="" /></div>
      </div>
      <div className='flex gap-2'>
      <i className="fa-solid fa-location-dot"></i>
      <h3>Banana Island, Lagos</h3>
      </div>
     
        <div className='flex justify-between mb-2 text-[#666666]'>
        <div className='flex gap-1.5 items-center'>
          <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/a652/0a27/524708a6161976debad1d56ea6151747?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fd88JaBbpPX490XESkcvDK3UwN7tOZVFZaOUo1Cxeb6FLTS5NC~asFH19zz~-hzQOGNfdIL3E7cKtf0Zg~CYwmeVyNCaGkUHiqMMk4S8s7xMAdAUlbbG7TBNXrq2hSuZm7r1er-54SO4SyBdHkC28bEUqF7vnWynv-YHJoEI4vCUIeWfx-FCTg8uX0iCXU8T0-lxjIP8b7e3gAeoCcE~7EmJmyjU4sOYfyblkYUPa1MB0XbGqmgq6vJjDzmfLgPzffME2gCGWvt5TTjW8DFTkSV2VU9c32THMHedwmYkK8KflUGAOrdrGUNgEJtkv6jUnABn7uUMYePeMvcFcNtHrQ__" alt="" />
          <p>4 Bed</p>
        </div>
        <div className='flex gap-1.5 items-center'>
        <i className="fa-solid fa-chart-column w-[20px] h-[20px]"></i>
        <p>10 x 10 m</p>  
        </div>
        <div className='flex gap-1.5 items-center'>
          <img className='w-[20px] h-[20px]' src="https://s3-alpha-sig.figma.com/img/f922/3eca/ba76c64191298924ce2303664286935b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BHM~V3rtrr6DPqQhBWK7oPMP9AHknojFA4Az7bVWAwk2C~FfG4f7VjRKxfwhCHLvLM-k6cA0L6y5Qw6hjl57iDXYLrxR5P7b9k0NPINv6a47ZmgOEQI9p6eqnPTePm0PF4r0d7RluJ8ey6efF2-DabqUWSjCTbDcbFhJlnvPNT8Gy117x9~3ZPIV2GmLl4qRuC6CALaohAtBmPy05Yy2t~7GBuE~0gQ1bepST7~09UuSmBSCxyxafv-UGMZEy2gMhc-u8eWPUuYCkwo1VFgxcLfcp3R5uX~-fNAijKldWMuxAEZLambQ-wWs5HE8Z~Qz0DOd-XAhtfDkKI8UiIsY1w__" alt="" />
          <p>1600 m</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor-pointer '>Book Now</button>
        <p className='text-[#000000]'>1000000$</p>
      </div>
    </Link>
    
  </div>
   </div>
   </>
  )
}
