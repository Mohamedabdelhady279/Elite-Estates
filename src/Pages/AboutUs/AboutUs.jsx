import React, { useContext, useEffect } from 'react'
import img1 from '../../assets/imgs/Vector.png';
import img2 from '../../assets/imgs/Vector (1).png';
import img3 from '../../assets/imgs/Vector (2).png';
import img4 from '../../assets/imgs/Vector (3).png';
import imgContact1 from '../../assets/imgs/Rectangle 2.png'
import imgContact2 from '../../assets/imgs/Rectangle 2.png'
import imgVision from '../../assets/imgs/Rectangle 4.png'
import city from '../../assets/imgs/City Block.png'
import price from '../../assets/imgs/Dollar Bag.png'
import security from '../../assets/imgs/Security Shield.png'
import { BackgroundContext } from '../../context/BackrgroundContext/BackrgroundContext';
import Navbar from '../../Components/Navbar/Navbar';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
export default function AboutUs() {
    
    



  return (
   <>
   
  <section className='about mt-0 '>

    <section className='about_us sm:mb-16 sm:pb-16'>
    
    <div  className='about_title'>
    <h2 className='text-center '>About Us</h2>
    <p className='text-center sm:mt-2 text-[20px] font-normal'>At [Elite Estates], we blend innovation with integrity to deliver exceptional real estate experiences. Our expertise and passion drive us to create spaces that truly feel like home.
    </p>
    </div>
    <div className='images  sm:invisible lg:visible'>
        <img src={img1} className='w-1/5'  alt="img1" />
        <img src={img2} className='w-1/5'  alt="img2" />
        <img src={img3} className='w-1/5'  alt="img3" />
        <img src={img4} className='w-1/5'  alt="img4" />
    </div>

    </section>


    <section className='about_contact lg:px-16 sm:mt-16'>
    <div className='about-contact-all flex sm:flex-col justify-between sm:flex-wrap md:flex-row px-14'>

    <div className='about_contact-contant sm:w-100 md:w-1/2 pt-16'>
    <h3>ABOUT</h3>
    <h4>
        The Exclusive and 
        Premium Property
    </h4>
    <p>
    We specialize in curating exclusive, high-quality properties that meet the highest standards of luxury and functionality. Our tailored approach ensures that every home is a perfect reflection of your lifestyle and aspirations.
    </p>
    <button onClick={()=>navigate('/')} className="w-fit px-3 py-2 bg-[#0055CD] text-[#FFFFFF] border border-white rounded cursor-pointer">
    Contact Us
      </button>
    </div>

    <div className='about_contact-images flex  gap-2 sm:w-100 h-[400px] md:w-1/2 relative sm:mt-16'>
    <div  className='w-4/9 absolute left-14'>
    <img className='img_contact1' src={imgContact1} alt="" />
    </div>
     <div className='w-4/9 absolute -top-14 sm:right-12 lg:right-0'>
     <img className='img_contact2' src={imgContact2} alt="" />
     </div>
    </div>

    </div>
    </section>







    <section className='about_vision  sm:px-8 lg:px-32'>
    <h2 className='font-semibold mb-8 text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative '> 
    <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> Commitment</h2>
       
        <h4 className='text-2xl font-bold mb-6'>Our Vision</h4>
        <div className=' flex justify-between items-center text-[#606060] my-6 '>
            <p>  Our vision is to revolutionize the real estate market by crafting spaces that blend modern design with timeless elegance.</p>
            <button className='text-white bg-[#0055CD] px-5 py-2'>Learn More</button>
        </div>

        <div className="about_vision-content flex sm:flex-col sm:flex-wrap justify-between md:flex-row mt-12 pb-8">
            <div className="about_vision-image  sm:w-100 lg:w-1/2 align-middle">
                <img src={imgVision} className='w-full' alt="imgVision" />
            </div>
            <div className="about_vision-info sm:w-100 ">
                <div className="about_vision-details mb-4 sm:flex flex-col sm:items-center sm:justify-center " >
                    <img src={city} alt="city" />
                    <h3>House for every one</h3>
                    <p className='sm:text-center'>We offer a diverse range of properties that cater to every taste and budget, ensuring a perfect home for everyone.                    </p>
                </div>
                <div className="about_vision-details mb-4 sm:flex flex-col sm:items-center sm:justify-center" >
                    <img src={price} alt="price" />
                    <h3>All Price</h3>
                    <p className='sm:text-center'>  Our pricing is designed with clarity and honesty, providing you with complete confidence in your investment.</p>
                </div>
                <div className="about_vision-details mb-4 sm:flex flex-col sm:items-center sm:justify-center" >
                    <img src={security} alt="security" />
                    <h3>Secuirty</h3>
                    <p className='sm:text-center'> We prioritize your security and peace of mind, ensuring that every property meets rigorous safety standards.
                    </p>
                </div>
            </div>
        </div>
    </section>
  </section>
  </>



  )
}
