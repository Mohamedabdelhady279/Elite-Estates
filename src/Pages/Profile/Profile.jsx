import React from 'react';
import profile from '../../assets/imgs/edit.png';
import email from '../../assets/imgs/Vector (4).png'
import phone from '../../assets/imgs/Vector (5).png'
import { Link } from 'react-router-dom';
import Favorite from '../../assets/imgs/favorite.png';


export default function Profile() {

  
  return (
    <>

 
    <div className="profile relative top-0 left-0 bg-[#AEC6E8] h-[656px]  mb-8 rounded-bl-[-50px]">
     <div className='sm:w-[250px] lg:w-[394px] sm:h-[250px] md:h-[300px] md:w-[300px] md:-bottom-[150px] md:left-[300px] lg:h-[394px] rounded-md absolute sm:-bottom-[125px] lg:-bottom-[98px] sm:left-[130px] lg:left-[559px] border-3 border-blue-600'>
        <div className='text-center mb-6' >
            <img className='w-full h-full rounded-md' src='https://s3-alpha-sig.figma.com/img/833b/fcf2/fbdf822af730dc5a309217c373e76ab9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fIhHhX1B~92nfteVTN~VwXvdcyoI~On7ZqEA48OiQkAJJ9wW4ni-Bly5UOYH-bkUg2MHAuLPqU2jl3fDfBhN1qKgZwB1yCOWZehF4nAI6YQY~cRufYj47GvPOr3FBCsP-kTIYNpMVjb8HNLzxiQ-GlM2XHP6nF78pXQkXsM9gfbsgcGJwBuV9Ndw078SZtyBqIqWzgpwJjbhHDQLz3r0wXT7Xwl-qAFe6i98BcDm0gmGVt5XtNbpbJ0M-2u-wTYKMjx0KTPKEHNgFI9XEyH4lbHJS~9wSbCsuftK4173Q-IgLIOFCtoK5-78Rh6R7ZEwzIHzfMf8yxP4y5dgx1xtxg__' alt="" />
            <img className='absolute top-5 right-5 cursor-pointer' src={profile} alt="" />
            </div>
        <h3 className='text-center text-[#000000] text-2xl font-bold'>Jocelyn Figueroa</h3>
     </div>
    </div>

    <div className='grid grid-cols-12 gap-2 mt-[300px] px-16 mb-8'>
   <div className='sm:col-span-12 md:col-span-8 l:col-span-9 '>
   <h2 className='font-semibold text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative mb-8'> 
    <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10 text-uppercase'></span> About me</h2>

    <p className='sm:w-100 sm:mb-6 lg:w-2/3'>
    Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    </div>

    <div className='sm:col-span-12 md:col-span-4 lg:col-span-3 bg-[#66666624] text-[#000000] px-2 py-3 rounded-xl'>
        <h2 className='text-xl font-bold mb-4'>Contact Info</h2>
        <div className='flex gap-2 items-center mb-2'>
            <div className='text-white bg-[#0055CD] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <img className='w-[25px] h-[25px]' src={email} />
            </div>
            <p>@Mail.com</p>
        </div>
        <div className='flex gap-2 items-center'>
        <div className='text-white bg-[#0055CD] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <img className='w-[25px] h-[25px] ' src={phone} />
            </div>
            <p>0023838383</p>
        </div>

    </div>

    </div>

    <div className='px-16'>
    <h2 className='font-semibold text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative mb-8'> 
    <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10 text-uppercase '></span> your reservation</h2>


    <div className='grid grid-cols-12 gap-14 mb-8'>
        <div className='sm:col-span-12 md:col-span-6 lg:col-span-4'>
            <img src="https://s3-alpha-sig.figma.com/img/92c9/482e/c978c89a04b96f17195587570522e793?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oQ3Kkf~pih-j1PiL66WqSlwVhbVfDhs7qARkDz0t8yXmtgiF4odwvejpeqthe17ZcGt0J1HI4rAteAh98N19QJgQ8STo-IrWRBUjnP2hkatHlCoNkfHqMoVxerQ6UKI~Qsxdru2T3NXtbwZZYl4WBZVI4LtEykFeM9DEvLpCmNn7yzTdi4wbWPMycgGRw9lZ3b14blfESzhZUSyucopVv-9vItD3mwWTKn8AmgV1~fOYde1oBMvbca5QaaTFgdvvm8TyTBZMKS~jWuLo0mK2o8HhftTO5dHpbZaWILmnt5Fr-snGI8kSbPAKmptX0F3IseiAajhXvPCOpRUIvHsYLw__" className='w-full h-[302px]' alt="" />
        </div>
        <div className='sm:col-span-12 md:col-span-6 lg:col-span-8 pt-12'>
            <div className='flex gap-2 items-center mb-3'>
                <i className="fa-solid fa-location-dot"></i>
                <p>Banana Island, Lagos</p>
            </div>
            <p className='mb-8 w-1/3'>Your reservation on 7 May at 3 Pm in 
            a place</p>
            <div className='flex items-center gap-12'>
                <button className='bg-[#1E1E1E94] text-white px-3 py-2 w-[177px] rounded-md cursor-pointer'>Booked</button>
                <p className='text-[#000000] font-bold'> $ 100,000,000</p>
            </div>
        </div>
    </div>
    </div>


    <div className='px-16'>
    <h2 className='font-semibold text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative mb-8'> 
    <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10 text-uppercase '></span> My listing</h2>
     
    <div className= 'grid grid-cols-12 gap-4 '>
    <Link to='' className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
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

    <Link to='' className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
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

    <Link to='' className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
      <div className='relative'>
      <img className='h-[302px] w-full' src="https://s3-alpha-sig.figma.com/img/387a/d33d/400862baf9076eb882091c73f1dd5c1e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qVecz1Iy8~S-x4KtUgv~sjChgQ4O8lT4oM94uJkgkccG86JYsBxlGwHFm-k294LmcimHSC12v-X~nQiw90z3iy9qeCyhMdIDECRjgatT0e~hIgtqng7ofPZ5vXFqJ3xC7-p7qvAOKoNjGcCpDrfBUPCFRtQzqBzvetRRYUDGFuHtxSudBpsoLgYRM~nhe~BhpE2GHc1aLNdA7JIZijIpYUeYvKfK05bzima7ICXETVaaeH~OnrTwPam75NlwjPNb4vQcx7O-faXtuTvQSBKteVafwHMrV4azQGCXPKwgjBlVxRWYY0ZKE~3Pi53a2VzvQ75xGKWN9lgopBKfK8Uy7A__" alt="" />
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
    
    <Link to='' className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
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

    <Link to='' className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
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

    <Link to='' className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4'>
      <div className='relative'>
      <img className='h-[302px] w-full' src="https://s3-alpha-sig.figma.com/img/387a/d33d/400862baf9076eb882091c73f1dd5c1e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qVecz1Iy8~S-x4KtUgv~sjChgQ4O8lT4oM94uJkgkccG86JYsBxlGwHFm-k294LmcimHSC12v-X~nQiw90z3iy9qeCyhMdIDECRjgatT0e~hIgtqng7ofPZ5vXFqJ3xC7-p7qvAOKoNjGcCpDrfBUPCFRtQzqBzvetRRYUDGFuHtxSudBpsoLgYRM~nhe~BhpE2GHc1aLNdA7JIZijIpYUeYvKfK05bzima7ICXETVaaeH~OnrTwPam75NlwjPNb4vQcx7O-faXtuTvQSBKteVafwHMrV4azQGCXPKwgjBlVxRWYY0ZKE~3Pi53a2VzvQ75xGKWN9lgopBKfK8Uy7A__" alt="" />
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
