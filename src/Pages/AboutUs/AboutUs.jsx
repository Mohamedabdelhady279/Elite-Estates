import React from 'react'
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

export default function AboutUs() {
  return (
   <>
   
  <section className='about'>
    <section className='about_us '>
    
    <div  className='about_title'>
    <h2 className='text-center '>About Us</h2>
    <p className='text-center'>Sorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
    </p>
    </div>
    <div className='images '>
        <img src={img1} className='w-75'  alt="img1" />
        <img src={img2} className='w-75'  alt="img2" />
        <img src={img3} className='w-75'  alt="img3" />
        <img src={img4} className='w-75'  alt="img4" />
    </div>

    </section>


    <section className='about_contact'>
    <div className='about-contact-all flex sm:flex-col sm:flex-wrap lg:flex-row '>
    <div className='about_contact-contant sm:w-100 lg:w-50'>
    <h3>ABOUT</h3>
    <h4>
        The Exclusive and 
        Premium Property
    </h4>
    <p>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis Korem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio matti.
    </p>
    <button className='btn'>Contact Us</button>
    </div>

    <div className='about_contact-images sm:w-100 lg:w-50'>
    <img className='img_contact1' src={imgContact1} alt="" />
    <img className='img_contact2' src={imgContact2} alt="" />
    </div>
    </div>
    </section>







    <section className='about_vision'>
        <h3>Commitment</h3>
        <h4>Our Vision</h4>
        <div className=' flex justify-between items-center '>
            <p>Korem ipsum dolor sit amet, consectetur <br /> adipiscing elit.Nunc vulputate libero et velit</p>
            <button className='btn'>Learn More</button>
        </div>
        <div className="about_vision-content flex sm:flex-col sm:flex-wrap lg:flex-row">
            <div className="about_vision-image  sm:w-100 ">
                <img src={imgVision} className='w-full' alt="imgVision" />
            </div>
            <div className="about_vision-info sm:w-100 ">
                <div className="about_vision-details" >
                    <img src={city} alt="city" />
                    <h3>House for every one</h3>
                    <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
                </div>
                <div className="about_vision-details" >
                    <img src={price} alt="price" />
                    <h3>All Price</h3>
                    <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
                </div>
                <div className="about_vision-details" >
                    <img src={security} alt="security" />
                    <h3>secuirty</h3>
                    <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
                </div>
            </div>
        </div>
    </section>
  </section>
  </>



  )
}
