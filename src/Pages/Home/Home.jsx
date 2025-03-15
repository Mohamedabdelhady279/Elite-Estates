import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Popular from '../../Components/Popular/Popular'
import Services from '../../Components/Services/Services'
import Blog from '../../Components/Blog/Blog'
import axios from 'axios'
import Search from '../../Components/Search/Search'

export default function Home() {
    //  const [budget ,setBudget] = useState('');
    //   const [location , setLocation] = useState("");
    //   const [type , setType] = useState('');
    //   const [searchedProducts,setSearcedData] = useState([]);

    //   async function searchProducts(){
         
    //     const options={
    //         url:'http://localhost:3000/listings',
    //         method:'GET',
    //     }
    
    // let {data} = await axios.request(options);
    // let filtered = data.filter((item)=>item.price <budget && item.location === location && item.property_details.type === type);


    // setSearcedData(filtered)
    // console.log(data);
    // console.log(filtered);
    

    // }

    // const handleSearch = () =>{
    //     searchProducts();
    // }

    // const handleSearch = () => {
    //     setBudget(500000);
    //     setLocation("New York");
    //     setType("Apartment");
    //    searchProducts();
    // };

    // console.log(handleSearch);
    
    
    // useEffect(()=>{
    //     searchProducts();
    // },[location,type,budget])

  return (
    <>
    <div className='min-h-screen bg absolute top-0 left-0 right-0 z-5 '>
        <Navbar />
        <div className='text-white w-[1336px] mx-auto mt-20 pt-20  sm:pl-12'>
            <h2 className='text-5xl mb-8  font-bold fs-1 capitalize leading-14'>find a house <br /> that suits you </h2>
            <p className='mb-8  lg:text-left lg:w-full sm:w-3/4 '>want to fin a home? we are ready to help you find one that suits <br /> your lifestyle and needs</p>
            <button className='bg-[#1E1E1E] text-white w-fit px-4 py-1 w-fullmb-8 cursor-pointer '>Get started</button>
            <div className='flex justify-between w-100'>
                <div>
                    <h3 className='font-bold mb-2'>1200 <span> <i className= "text-white ml-2 fa-solid fa-plus"></i></span></h3>
                    <p className='capitalize text-sm'>listed properities</p>
                </div>
                <div>
                    <h3 className='font-bold mb-2'>4500 <span> <i className= "text-white ml-2 fa-solid fa-plus"></i></span></h3>
                    <p className='capitalize text-sm'>happy customers</p>
                </div>
                <div>
                    <h3 className='font-bold mb-2'>100 <span> <i className= "text-white ml-2 fa-solid fa-plus"></i></span> </h3>
                    <p className='capitalize text-sm'>awards</p>
                </div>
            </div>
          
        </div>

    </div>
    {/* <div className='bg-white shadow-2xl w-[70%] mx-auto p-8 absolute mb-16 -bottom-35 left-[15%] z-20'>
        <p className='mb-4'>Search for available properties  </p>
        <div className='grid grid-cols-12 gap-2 w-[80%] mx-auto '>
           <div className='relative sm:col-span-12 lg:col-span-3 '>
           <input 
           value={location}
           onChange={(e)=> setLocation(e.target.value)}
           type="text" placeholder='Location' className='border-1 border-gray-400 p-1 rounded-xs w-full ' />
           <i className="fa-solid fa-location-dot absolute right-3 top-2"></i>
           </div>

           <div className='relative sm:col-span-12 lg:col-span-3 '>
           <input
           value={type}
           onChange={(e)=> setType(e.target.value)}
           type="text" placeholder='Properity Type' className='border-1 border-gray-400 p-1 rounded-xs w-full'  />
           <div className='absolute right-3 top-2'>
           <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/fb31/2501/e614da69aa1eceb394fba9e4fd3c6d6b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZKW7jh8X8cHnQIVos99NawDr-zbv5dDbjPpDiOnupMajlkaXmUaT7WxYlLXdYtQdZLg7~d7bKSkoawE2GOHIuUBpaWAGj7qEPtAb-6P4EnUcoxtD8Cil6ZduCZB7epklj0jbi5FIqgAIyBTtq7AAiLbAqezOiTCXk4I2ZfFrPB~XpLEQ5tNQG6Xf6dzr9W4uac5T8mIrTYq9KBBA3Vu~5DcJdMIZkzTDYAVyBj6998-GmkXpwJzKU0AlKJz2bxRrRmAd23W8-DiymuwIqE70l3p8hhxKr-6FeNjVq6pmlSIwQx1YHpDW7KitYt03YBiRfGRublZu1zri9bdnhxydSw__" alt="" />
          </div>
           </div>

           <div className='relative sm:col-span-12 lg:col-span-3 '>
           <input
           value={budget}
           min={0}
           max={750000}
           onChange={(e)=> setBudget(Number(e.target.value))}
           type="number" placeholder='Budget' className='border-1 border-gray-400 p-1 rounded-xs w-full'  />
           <div className='absolute right-3 top-2'>
          <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/78f9/2b14/62a0a176286cff1e38718ea6ead7020d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=leOLWUcFJd4W5uROK2qZoQgmR-icS-H-tmaqIun3GgCyaN~QNw-F8pUVOis4FDCiaGRO1xR4Ir4J4IYeMZDvf0On5dh62I4~FIl76zuYrx4cj~Aa6nfpVxsLkeJfDHSuqvRlnruPxQAIlEE5MsxAU0oT0YmHAj44AKJENXZ9uSGa14YFrfOgkBPgQJWICj1Wr0myWqtrTMQ4bnNKZN1fqoTH67CFkCasO7VhkRc8Yh6CCKB6ZGEO8MQ4TCOYQFMkz3kZY9~3hxLr2JkO3x1YOmDIuAWL7HCA-NeaLEldalKN3gUyr0ZJ-jyJamKtCvyThWXh3JhzM24O36UXXgyxMA__" alt="" />
           </div>
           </div>
          
            
            <button 
            onClick={handleSearch}
            className='sm:col-span-12 lg:col-span-3  bg-[#1E1E1E] text-white w-fit px-4 py-1 w-fullmb-8 cursor-pointer'>Search Now</button>
        </div>
    </div> */}

    <div className='absolute mb-16 sm:-bottom-65 lg:-bottom-45 left-[15%] z-100 w-[70%]'>
        <Search />
    </div>

      <div className='relative z-30 pt-[600px]'>
        <Popular  />
        </div>  
         <Services />
         <div className='relative'>
         <Blog />
         </div>
    </>
  )
}
