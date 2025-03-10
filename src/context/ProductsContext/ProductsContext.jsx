import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext([]);

export default function ProductProvider({children}){
    const [products ,setProducts] = useState([]);
    async function getProducts(){
     try{
         const options={
            url:'http://localhost:3000/listings',
            method:'GET',
        }

    let {data} = await axios.request(options);
    setProducts(data);
    console.log(data);
    
     }catch(error){
        console.log(error);
     }
       
    }

    useEffect(()=>{
        getProducts();
    },[])


    return(
        <>
        <ProductsContext.Provider value={{products ,setProducts}}>
            {children}
        </ProductsContext.Provider>
        </>
    )
}