import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Services() {
  const navigate = useNavigate();
  return (
    <>
    <div className=' px-16  mx-auto pt-10 my-40 relative mb-[400px]'>
    <h2 className='text-[#3E3E3E] uppercase absolute mb-2 -top-10 right-12 font-semibold px-16 '>   Our service</h2>
    <span className='h-[2px] w-[40px] bg-[#3E3E3E] absolute -top-7 right-16'></span>
      

    <div className='grid grid-cols-12 gap-8 mt-2'>
       
        <div className='sm:col-span-12 lg:col-span-6 relative'>
            <img className='h-[507px]' src="https://s3-alpha-sig.figma.com/img/67bd/1670/6ff51a8f9c97ef0e193b54d07c18a86e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CRqp1jqugn~BR55OkVynnMW2Ul1MEuPpgX--hJTnOYjTHDY3wXTVFvGamjB556NuCkTg-RuDU1LUgYcWTFp8mhqgBazd9XPr9tnhAX86fjLBUrU~G1ZsnuDSxCYBg5ugV1amfmBVDcF8MibtKJBb3ETEMiflz7b79-dngI6090YwsSG4~sVSPD6nPJSkMjpM82I9oENxecSOvqWH~j946~LxcA~6hXIoDfLD7p5~eZHEkOkuTb2byg8t7Iq~i6T~eAH8JmeMDtOWvdUknQY3Au~8RP-43DwHmvAQRtet9Vo2fPL1GWm0LAXdKW9CFvbwph~-7wI7Gx59E30OozfkAA__" alt="" />
           <div className='absolute top-[50%] left-[50%]'>
            <img src="https://ibb.co/4g1WJTd5" alt="" />
            </div> 
        </div>

        <div className='sm:col-span-12 lg:col-span-6'>
            <h3 className='text-[#000000] text-5xl mb-8 font-bold leading-16'>Your Dream House Is
            Our Priority</h3>
            <p className='mb-5 text-[#606060] font-bold text-[16px]'>Home tells a unique story, and your dream deserves nothing less than perfection. At [Elite Estates], we specialize in turning visions into reality through innovative design, impeccable craftsmanship, and personalized service. Our expert team is dedicated to creating spaces that not only reflect your lifestyle but also elevate it, ensuring that every detail is crafted with precision and passion.</p>

                <div className='flex justify-between mb-12 w-[70%]'>
                 <div className='flex gap-3'>
                    <img className='w-[25px] h-[25px]' src="https://s3-alpha-sig.figma.com/img/b4d1/7a13/16bd0437842003c661affc9b0ae392a9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SH62pdeUCARv2X~r964gWTTVYtaVkB0XDU7KTHTCJ7Ixpvhef5IlUxnvTUU4mMsUes8SYN7YMKdo2LKeQJFeuQHjYsKbuhBbWSZYSfbrwarXe2hnRe2fi9GmxdjqKDdvIN2C3CmiCuu-5UEp6ORliBvwKaQUiC6UX9ntp3W9bsoPbigOJpJtX4fwX42mXrA2UETgjlaU1JutJI0EwM3dhncazNgbc~uvA-TIQgDlDw7sNyIJtTjwvWMvxqJuvCGFu-vvPo64xlHcFlkpcNKzBH6d51ou5dzjxbUnt9MNzcSQ1MqFYtEoi-YV~DDZkkTqrHVP2OOIFHEbhDkRsnoMxw__" alt="" />
                    <p className='text-[#000000]'>Star Location</p>
                 </div>
                 <div  className='flex gap-3'>
                    <img className='w-[25px] h-[25px]' src="https://s3-alpha-sig.figma.com/img/3b25/b615/16112bb57b62f08f152f0e8d0add078c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BsTy6dODuBILAowaDOntBoXGpPsbBm9uafhKsKCZFRkShUIpr1XHqf-6f9x18x4N9KBkwTO6IWErbUF5c-~GtYLqTuW9JhSyoofNawBQIzL0V-qBpyIoM8tysK61ceys4BmTBhnpy4WlQXTdhocdovcg6hCDVrsRGGyCU6bLTwAZ43oKyiTdNFsgFTp-~we5TEIHm-Xrnr4deCWzQ8833lFz720aHpWKCpmovqE8x4GOc-ZInDIfTkLHHM2fzv~tO-0A~twjOLcc4zwvzVrvhCth0ynaPIEPJK1oPiJfllrYK2632pKgdIpaSmz8OFFj47ZJZklk9tIjQ8xtKDJfuw__" alt="" />
                    <p className='text-[#000000]'>Royal Areas</p>
                 </div>
                </div>
                <button
                onClick={()=>navigate('/properities')}
                className='text-white bg-[#0055CD] rounded-xs w-fit px-4 py-2 cursor-pointer'>Explore Services</button>
        </div>
    </div>
    </div>
    </>
  )
}
