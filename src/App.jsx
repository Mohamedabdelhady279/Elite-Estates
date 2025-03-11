import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import Services from './Components/Services/Services'
import Home from './Pages/Home/Home'
import Layout from './Components/Layout'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import AboutUs from './Pages/AboutUs/AboutUs'
import FavProducts from './Pages/FavProducts/FavProducts'
import Products from './Pages/Products/Products'
import FavProductsProvider from './context/FavContext/FavContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FilteredProducts from './Pages/FilteredProducts/FilteredProducts'
import Properities from './Pages/Properities/Properities'
import Profile from './Pages/Profile/Profile'
import ProductProvider from './context/ProductsContext/ProductsContext'
import BackgroundProvider from './context/BackrgroundContext/BackrgroundContext'



function App() {
 

  
  const routes= createBrowserRouter([
    {
      path:"/" , element: <Layout /> ,children:[
        {index:true,element:<Home />},
        {path:'productdetails' ,element:<ProductDetails />},
        {path:'aboutus' ,element:<AboutUs />},
        {path:'favproducts' ,element:<FavProducts/>},
        {path:'products' ,element:<Products />},
        {path:'services' ,element:<Services />},
        {path:'filteredproducts' ,element:<FilteredProducts />},
        {path:'products/:id' ,element:<ProductDetails />},
        {path:'properities' ,element:<Properities/>},
        {path:'profile' ,element:<Profile/>},
    
      ]
    }
  ])
  return (
    <>
    {/* <Navbar />  */}
    <ProductProvider>
      <BackgroundProvider>
    <FavProductsProvider>
      <RouterProvider router={routes} ></RouterProvider> 
    </FavProductsProvider>
    </BackgroundProvider>
   </ProductProvider>
    

      {/* <Home  />
   
     <Footer />  */}
   
    </>
  )
}

export default App
