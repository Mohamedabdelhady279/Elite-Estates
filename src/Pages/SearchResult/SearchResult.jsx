import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function SearchResult({searchedProducts}) {
    console.log(searchedProducts);
    
  return (
   <>
   <div className='grid grid-cols-12 gap-2 mt-14 w-[1350px] mx-auto'>
        {searchedProducts? searchedProducts.map((product)=>(
         <ProductCard key={product.id} productInfo={product} />
        )
       
        ) : <h2>Loading...</h2>}

    </div> 
   </>
  )
}
