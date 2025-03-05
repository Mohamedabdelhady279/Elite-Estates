import React, { useContext } from 'react'
import heartIcon from '../../assets/imgs/Heart.png';
import shareIcon from '../../assets/imgs/Share 2.png';
import CheckMark from '../../assets/imgs/Check Mark.png';
import Cube from '../../assets/imgs/Cube.png';
import Frame25 from '../../assets/imgs/Frame 25.png';
import Frame160 from '../../assets/imgs/Frame 160.png';
import PaintRoller from '../../assets/imgs/Paint Roller.png';
import Bath from '../../assets/imgs/Bath.png'
import Popular from '../Popular/Popular';
import map from '../../assets/imgs/Frame 172.png'
import person1 from '../../assets/imgs/Ellipse 1.png';
import person2 from '../../assets/imgs/Ellipse 1 (1).png';
import person3 from '../../assets/imgs/Ellipse 1 (2).png';
import person4 from '../../assets/imgs/Ellipse 1 (3).png';
import star from '../../assets/imgs/Star 1.png'
import { BackgroundContext } from '../../context/BackrgroundContext/BackrgroundContext';
import Navbar from '../Navbar/Navbar';



export default function ProductDetails() {
    const {backgroundColor , setBackgroundColor} = useContext(BackgroundContext);
    // setBackgroundColor('bg-[#25356b]')

  return (
   <>
   <Navbar backgroundColor={backgroundColor} />
<div className='bg-gray-200 pt-14'>
    <div className=' w-[1336px] mx-auto'>
    <h2 className='text-[#000000] mb-3 font-semibold'>St. Crystal</h2>
    <div className='flex justify-between mb-4'>
        <p className='text-[#606060]'>210 Egypt Street , Cairo ,Fl</p>
        <div className='flex gap-4  '>
            <button className='flex gap-1 text-[#0055CD] border-1 border-[#0055CD] rounded-xs w-[155px] h-[35px] items-center'>
                <img className='w-[35px] h-[25px] px-2 py-1 ' src={shareIcon} alt="" />
                <p>Share</p>
            </button>
            <button className='flex gap-1 text-[#0055CD] border-1 border-[#0055CD] rounded-xs w-[155px] h-[35px] items-center'>
                <img className='w-[35px] h-[25px] px-2 py-1 ' src={heartIcon} alt="" />
                <p>Favorite</p>
            </button>
        </div>
    </div>

    
<div className="grid grid-cols-5 grid-rows-6 gap-2 w-3/4 mx-auto h-[600px] mt-12">
    <div className="col-span-3 row-span-6 ">
        <img className='h-full w-full rounded-xl' src="https://s3-alpha-sig.figma.com/img/2a5f/ecfc/aaf5184a12f28c9709da499927871f12?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uY4ZB6EmG~0V1ppl62rQ3Pr92FJj9y5zE35NfcSZPHswqca7hQdamHOAbhIfChRyWMLQtSOku5yGbBriRYoUlnuxV2HdtLBD8mtFBNX8I8eDDSRCRj08oO-J6DcuPvTrCpUDRaD4ezZ8glztn~dzRjKOgeKokDREKFUj1Fm~HU8PszoWYTiQkdhr7BzOYo-Qf-viNcF1tGwiFc6Ke6GaXTqRrgJuM~45Rftceu77dH~oeMshKdyKOhfXox1BgwFFv35LXi9aewTY3Z88Pe8OIRE8tx13USxKFXJaLH2IzAijKcyhowhiKwpM1wK3TSVayLR0hdzS0llyIHV1fvNAKA__" alt="" />
    </div>
    <div className="col-span-2 row-span-3 col-start-4">
       <img className='h-full w-full rounded-xl' src="https://s3-alpha-sig.figma.com/img/d8f3/66f5/dffd0a968a456e6c8a57076b1e6bb596?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZKLtvkfmk5AJUpFJXKlNMrM-0ugpTCTvnMHkCOdpR2CURPiE1BVAPI2tpdmPH8TC41nOMNA5hrOgwDfwGgEte79prjF600Y2PhFB4tFlY1YVdgV1-7ZUxSw99lKWDSLO9KWvWcuuiBQzdYAfwj40ATBhvpGoK7NPh38T1xFqeWpepMYLG0SScFDidk7FCZzFxPfUKNX4CwGvx9Y1M35nL~MY3vbwlYrSw4Eqhw0PZIjJGSRjmOPznB4skCcQdkJZs2aRu3zzzRyBYxM8LwKYPCgHZ1QyZMH8nnhlpFLsu~6vL~ewuxm2GhkmHW1llf1VyjVZ~r-11mzsaDhtO0PJnw__" alt="" />
    </div>
    <div className="col-span-2 row-span-3 col-start-4 row-start-4">
    <img className='h-full w-full rounded-xl' src="https://s3-alpha-sig.figma.com/img/07bf/9f8c/117715897d1303c433c08785bb8091f7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AYgJDosnSaIvTYAsLvxC5l8V9TxO36--Etz~6IQRiQlIVISvpYoHaYQtrrjb9SsbFAJKiEKlsqMWXBtynWnFx7bIdpNjQloSnjGjOIOn2bF5iQVdEzEqtZmuwmpWwhBlz2KF3xdVqD3YFfXL8WFIIznvJULobzwr7vrjshA4CdvF2n-tRjn4WyCRYOWYQ2R21QW2ga6w2~I94TjKN0SfN1DYQQggyJJQ6S681190KvBTEjN1OiOL-FNlP-gIW4tIxwI0t-kGjrghXSIt-DJG5HSDKOlUBKHEHAZuBYDuvBjqfXZG5eWNEN7PUcTBwdJbOF-EzAmhkIy61gPhIX-S7w__" alt="" />
    </div>
</div>
    

    <div className='flex mt-12 w-3/4 mx-auto gap-4'>
         <div className='w-3/4 flex justify-between border-1 border-gray-300 rounded-xl p-4 gap-1 px-6 text-[#666666]'>
         <div>
            <p className='mb-2'>Bedrooms</p>
            <div className='flex gap-1.5 items-center'>
                <img src={Frame25} alt="" />
                <span>4</span>
            </div>
         </div>
         <div>
         <p className='mb-2'>Bathrooms</p>
         <div className='flex gap-1.5 items-center'>
         <img src={Bath} alt="" />
         <span>4</span>
         </div>
         </div>
         <div>
         <p className='mb-2'>Square Area</p>
         <div className='flex gap-1.5 items-center'>
         <img src={Cube} alt="" />
         <span>6*8 m</span>
         </div>
         </div>
         <div>
         <p className='mb-2'>Repair Quality</p>
         <div className='flex gap-1.5 items-center'>
         <img src={PaintRoller} alt="" />
         <span>Modern loft</span>
         </div>
         </div>
         <div>
         <p className='mb-2'>Status</p>
         <div className='flex gap-1.5 items-center'>
         <img src={CheckMark} alt="" />
         <span>Active </span>
         </div>
         </div>
         
         </div>

        <div className='w-1/4 border-1 border-gray-300 rounded-xl p-4'>
        <p className='mb-2'>Rent Price</p>
        <p>$2500 <span>/month</span></p>
        <button className='text-white rounded-md bg-[#0055CD] px-2 py-1 w-full mt-2 cursor-pointer'>Apply Now</button>
        </div>
       
    </div>


    <div className='flex gap-1 mt-12'>
        <div className='w-3/4'>
       <h2 className='font-semibold mb-4 text-xl mt-6 text-[#3E3E3E] uppercase'> 
       <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> About</h2>
       <h2 className='font-bold text-xl'>About the home</h2>
       <p className='w-3/4 mb-6 text-[#606060]'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos 
         ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

         <img src={map} alt="" />
        </div>

        <div className='w-1/4 flex  flex-wrap gap-2 '>
        <div className='bg-white rounded-xl text-center p-x4 flex flex-col items-center w-4/9 py-4'>
        <img src={person1} alt="" />
        <h3 className='flex gap-2 items-center'> 
            <img src={star} alt="" />
            <p>4.75</p></h3>
        <h4>Wade Warren</h4>
        <p className='w-3/4'>Awesome website and funnel for your business</p>
        </div>

        <div className='bg-white rounded-xl text-center p-x4 flex flex-col items-center w-4/9 py-4'>
        <img src={person2} alt="" />
        <h3 className='flex gap-2 items-center'>
        <img src={star} alt="" />
             <p>4.75</p></h3>
        <h4>Wade Warren</h4>
        <p className='w-3/4'>Awesome website and funnel for your business</p>
        </div>

        <div className='bg-white rounded-xl text-center p-x4 flex flex-col items-center w-4/9 py-4'>
        <img src={person3} alt="" />
        <h3 className='flex gap-2 items-center'>
        <img src={star} alt="" />
             <p>4.75</p></h3>
        <h4>Wade Warren</h4>
        <p className='w-3/4'>Awesome website and funnel for your business</p>
        </div>

        <div className='bg-white rounded-xl text-center p-x4 flex flex-col items-center w-4/9 py-4'>
        <img src={person4} alt="" />
        <h3 className='flex gap-2 items-center'>
        <img src={star} alt="" />
             <p>4.75</p></h3>
        <h4>Wade Warren</h4>
        <p className='w-3/4'>Awesome website and funnel for your business</p>
        </div>

        </div>



</div>
    <Popular />
    </div>
    </div>
   </>
  )
}
