import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';

export default function Search() {
  const [budget ,setBudget] = useState(0);
  const [location , setLocation] = useState('');
  const [type , setType] = useState('');


  const [searchedProducts,setSearcedData] = useState([]);
  async function searchProducts(){
    try{
         const options={
        url:'http://localhost:3000/listings',
        method:'GET',
    }

let {data} = await axios.request(options);
let filtered = data.filter((item)=> Number(budget)>=item.price && item.location.city === String(location)  && item.property_details.type === String(type))
setSearcedData(filtered)
console.log(data);
console.log(filtered);
console.log(888888888888888888);
    }catch(error){
        console.log(error);
        
    }
     
   


}

console.log("Budget:", budget);
console.log("Location:", location);
console.log("Type:", type);
    
const handleSearch = () => {
// setBudget({budget});
//     setLocation({location});
//     setType({type});
   searchProducts();
};




  return (
    <>

    <div className='bg-white shadow-2xl w-full mx-auto p-8 '>
        <p className='mb-4'>Search for available properties</p>
        <div className='grid grid-cols-12 gap-2 w-[80%] mx-auto '>
           <div className='relative col-span-3 '>

           <input
           value={location}
           onChange={(e)=> {setLocation(e.target.value)}}
           type="text" placeholder='Location' className='border-1 border-gray-400 p-1 rounded-xs ' />

           <i className="fa-solid fa-location-dot absolute right-3 top-2"></i>
           </div>

           <div className='relative col-span-3 '>

           <input
           value={type}
           onChange={(e)=>setType(e.target.value)}
           type="text" placeholder='Properity Type' className='border-1 border-gray-400 p-1 rounded-xs'  />

           <div className='absolute right-3 top-2'>
           <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/fb31/2501/e614da69aa1eceb394fba9e4fd3c6d6b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZKW7jh8X8cHnQIVos99NawDr-zbv5dDbjPpDiOnupMajlkaXmUaT7WxYlLXdYtQdZLg7~d7bKSkoawE2GOHIuUBpaWAGj7qEPtAb-6P4EnUcoxtD8Cil6ZduCZB7epklj0jbi5FIqgAIyBTtq7AAiLbAqezOiTCXk4I2ZfFrPB~XpLEQ5tNQG6Xf6dzr9W4uac5T8mIrTYq9KBBA3Vu~5DcJdMIZkzTDYAVyBj6998-GmkXpwJzKU0AlKJz2bxRrRmAd23W8-DiymuwIqE70l3p8hhxKr-6FeNjVq6pmlSIwQx1YHpDW7KitYt03YBiRfGRublZu1zri9bdnhxydSw__" alt="" />
          </div>
           </div>

           <div className='relative col-span-3 '>

           <input
           value={budget}
           min={0}
           max={750000}
           onChange={(e)=>setBudget(Number(e.target.value))}
           type="number" placeholder='Budget' className='border-1 border-gray-400 p-1 rounded-xs'  />

           <div className='absolute right-3 top-2'>
          <img className='w-[15px] h-[15px]' src="https://s3-alpha-sig.figma.com/img/78f9/2b14/62a0a176286cff1e38718ea6ead7020d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=leOLWUcFJd4W5uROK2qZoQgmR-icS-H-tmaqIun3GgCyaN~QNw-F8pUVOis4FDCiaGRO1xR4Ir4J4IYeMZDvf0On5dh62I4~FIl76zuYrx4cj~Aa6nfpVxsLkeJfDHSuqvRlnruPxQAIlEE5MsxAU0oT0YmHAj44AKJENXZ9uSGa14YFrfOgkBPgQJWICj1Wr0myWqtrTMQ4bnNKZN1fqoTH67CFkCasO7VhkRc8Yh6CCKB6ZGEO8MQ4TCOYQFMkz3kZY9~3hxLr2JkO3x1YOmDIuAWL7HCA-NeaLEldalKN3gUyr0ZJ-jyJamKtCvyThWXh3JhzM24O36UXXgyxMA__" alt="" />
           </div>
           </div>
            
            <button
            onClick={handleSearch}
            className='col-span-3  bg-[#1E1E1E] text-white w-fit px-4 py-1 rounded-xs mb-8 cursor-pointer'>Search Now</button>
        </div>
    </div>

    <div className='grid grid-cols-12 gap-2 mt-14 w-[1350px] mx-auto'>
        {searchedProducts? searchedProducts.map((product)=>(
         <ProductCard key={product.id} productInfo={product} />
        )
       
        ) : <h2>Loading...</h2>}

    </div>
    
    </>
  )
}
