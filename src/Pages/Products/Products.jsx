import React, { useContext, useEffect } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import {  ProductsContext } from '../../context/ProductsContext/ProductsContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../lib/ProductSlice';

export default function Products() {

let dispatch = useDispatch();
const {products} = useSelector((state)=> state.products);
let y = products.data;
let x = useSelector((state)=>{state.products});
// const {products} = useContext(ProductsContext );
console.log(products);

useEffect(()=>{
   dispatch(fetchProducts())
},[])


  return (

    <>
    <div className='grid grid-cols-12 px-16 pt-14 gap-2'>
        {products.data ? 
        products.data.map((product)=>(
            <ProductCard key={product.id} productInfo={product} />
        )
        ) 
        : <h2>Loading .... </h2>}
    </div>
    </>
  )
}

