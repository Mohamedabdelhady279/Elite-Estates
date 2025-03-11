import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import likeIcon from '../../assets/imgs/Like.png'
import Favorite from '../../assets/imgs/favorite.png';
import { ProductsContext } from '../../context/ProductsContext/ProductsContext'
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../lib/ProductSlice';


export default function Blog() {

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


  let blogProducts = products.data? products.data.filter((product)=> product.price < 200000):[];
  // console.log(popularProducts);

  return (
   <>
   <div className='px-16 mx-auto py-12 my-20  absolute z-50 left-0 mt-[400px]  -bottom-80  sm:pt-16 '>
   <h2 className='font-semibold mb-4 text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative '> 
   <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> Our Blog</h2>
     <div className='flex justify-between mb-4'>
    <p className='text-2xl'>Latest Trends</p>
    <Link className='text-[#606060]'>See All <span><i class="fa-solid fa-arrow-right"></i></span> </Link>
    </div>

     <div className='grid grid-cols-12 gap-8'>
     {blogProducts ? blogProducts.map((product)=>(

          <ProductCard productInfo ={product} key={product.id} />
        ))
        
        : <h2>loading... </h2>
        
      }
      </div>
  </div>

  
   </>
  )
}
