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



function App() {
  
  const routes= createBrowserRouter([
    {
      path:"/" , element: <Layout /> ,children:[
        {index:true,element:<Home />},
        {path:'productdetails' ,element:<ProductDetails />},
        {path:'aboutus' ,element:<AboutUs />},
        {path:'favproducts' ,element:<FavProducts/>},
        {path:'products' ,element:<Products />},
    
      ]
    }
  ])
  return (
    <>
    {/* <Navbar />  */}
    <FavProductsProvider>
      <RouterProvider router={routes} ></RouterProvider> 
    </FavProductsProvider>
   
    

      {/* <Home  />
   
     <Footer />  */}
   
    </>
  )
}

export default App
