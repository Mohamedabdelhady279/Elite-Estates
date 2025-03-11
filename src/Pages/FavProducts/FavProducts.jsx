
import React from 'react'; 
import { useSelector} from 'react-redux'; 
  
 
const FavProducts = () => { 
  const favorites = useSelector((state) => state.favorites.favorites); 
   
  
 
  return ( 
    <div className="favorites-container relative p-5"> 
     <h2 className='font-semibold m-5  text-xl relative left-10 top-5 mt-6 text-[#3E3E3E]'>  
     <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10 '></span> 20 ITEMS 
     </h2> 
      <h3 className=' px-5 font-bold text-3xl py-5'>Favorites</h3> 
       
      {favorites.length === 0 ? ( 
        <p className=' px-5  text-center text-3xl py-5'>No favorites added</p> 
      ) : ( 
        <> 
            
           
          <div className='grid grid-cols-12 gap-4 sm:col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4 
2xl:col-span-2'> 
            {favorites.map((item,index) => ( 
               
              <div key={index} className="favorite-item col-span-4  "> 
                 <div className='relative  '> 
                      <img className='h-[302px] w-full' src={item.image} alt="" /> 
                    <div className='absolute top-2 right-2 w-[45px] h-[45px]'></div> 
                    </div> 
                  
                       <div className='flex gap-2 items-center'> 
                          <i className="fa-solid fa-location-dot"></i> 
                          <h3 className='mb-2'>{item.title}</h3> 
                       </div> 
                  
                       <p>Location: {item.location?.city} - {item.location?.state} </p> 
 
                       
                       <div className='flex  justify-between mb-2 text-[#666666]'> 
                         <div className='flex gap-1.5 items-center'> 
                            
                           <img className='w-[20px] h-[20px]' src="https://s3-alpha
sig.figma.com/img/a652/0a27/524708a6161976debad1d56ea6151747?Expires=1742169600&Key-Pair
Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fd88JaBbpPX490XESkcvDK3UwN7tOZVFZaOUo1Cxeb6FLTS5
 NC~asFH19zz~
hzQOGNfdIL3E7cKtf0Zg~CYwmeVyNCaGkUHiqMMk4S8s7xMAdAUlbbG7TBNXrq2hSuZm7r1er
54SO4SyBdHkC28bEUqF7vnWynv-YHJoEI4vCUIeWfx-FCTg8uX0iCXU8T0
lxjIP8b7e3gAeoCcE~7EmJmyjU4sOYfyblkYUPa1MB0XbGqmgq6vJjDzmfLgPzffME2gCGWvt5TTjW8DFTkSV
 2VU9c32THMHedwmYkK8KflUGAOrdrGUNgEJtkv6jUnABn7uUMYePeMvcFcNtHrQ__" alt="" /> 
                           <p>4 Bed</p> 
                         </div> 
                         <div className='flex gap-1.5 items-center'> 
                         <i class="fa-solid fa-chart-column w-[20px] h-[20px]"></i> 
                         <p>10 x 10 m</p>   
                         </div> 
                         <div className='flex gap-1.5 items-center'> 
                           <img className='w-[20px] h-[20px]' src="https://s3-alpha
sig.figma.com/img/f922/3eca/ba76c64191298924ce2303664286935b?Expires=1742169600&Key-Pair
Id=APKAQ4GOSFWCW27IBOMQ&Signature=BHM~V3rtrr6DPqQhBWK7oPMP9AHknojFA4Az7bVWAwk2C
 ~FfG4f7VjRKxfwhCHLvLM
k6cA0L6y5Qw6hjl57iDXYLrxR5P7b9k0NPINv6a47ZmgOEQI9p6eqnPTePm0PF4r0d7RluJ8ey6efF2
DabqUWSjCTbDcbFhJlnvPNT8Gy117x9~3ZPIV2GmLl4qRuC6CALaohAtBmPy05Yy2t~7GBuE~0gQ1bepST7
 ~09UuSmBSCxyxafv-UGMZEy2gMhc-u8eWPUuYCkwo1VFgxcLfcp3R5uX~-fNAijKldWMuxAEZLambQ
wWs5HE8Z~Qz0DOd-XAhtfDkKI8UiIsY1w__" alt="" /> 
                           <p>1600 m</p> 
                         </div> 
                       </div> 
                       <div className='flex justify-between  font-bold'> 
                         <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor
pointer '>Book Now</button> 
                         <p className='text-[#000000]'>{item.price} {item.currency}</p> 
                       </div> 
        
              </div> 
            ))} 
          </div> 
        </> 
      )} 
    </div> 
  ); 
}; 
export default FavProducts;

