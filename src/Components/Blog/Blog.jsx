import React from 'react'
import { Link } from 'react-router-dom'
import likeIcon from '../../assets/imgs/Like.png'


export default function Blog() {
  return (
   <>
   <div className='mt-12 px-16 mx-auto py-12 my-20  relative bottom-20  sm:pt-16 '>
   <h2 className='font-semibold mb-4 text-xl left-10 top-5 mt-6 text-[#3E3E3E] relative '> 
   <span className='h-[2px] w-[30px] bg-[#3E3E3E] absolute top-3.5 -left-10'></span> Our Blog</h2>
     <div className='flex justify-between mb-4'>
    <p className='text-2xl'>Latest Trends</p>
    <Link className='text-[#606060]'>See All <span><i class="fa-solid fa-arrow-right"></i></span> </Link>
    </div>

    <div className='grid grid-cols-12 gap-8'>
    <div className="sm:col-span-12 md:col-span-6 lg:col-span-4   border-1 border-gray-200 rounded-md bg-white">
            <img className='h-[230px] w-full' src="https://s3-alpha-sig.figma.com/img/3910/b1f8/ccef7b999bcf826f2c63259f962bffd9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h-sNnh2jKZ9m6-hGCQX2Q27bpJ4x-xkPZchPe1hzAwVo0CEnbGY7GDNBvXEqMtzWJeYJLxxzVLKpttqO4JmRyAv4pdvpNK2VyV40f3RjoyP-VEvQoe1FriXvwwaCoSPH-YiQ2vHoOKTvJUvFxkLuLt4LZDkS~bc89YylFI0UszKy5hPx0cyuUgbZyHrwHye3ISCsOe5KWDHTuAgmbtp5m78hIiQkLxNc1h1UVZkcjEYQXMPwJHz5S-Da2vRzi-~ABQ-OUHungUdMIQLNfuytnnrVGuX5GekuEntT~0tZXEKT5b36zqyAi5dmKT1YvsbMJC2RJ6E3wyAOv75kZFq3gg__" alt="" />
            <div className='p-3'>
           <p className='mb-3'>Aug 2024 | 4:50 Am</p>
            <h3 className='mb-2'> Horem ipsum dolor sit ame </h3>
            <p className='mb-4'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
            <div className='flex justify-between'>
                <button className='text-white bg-[#0055CD] font-semibold rounded-xs border-1 border-[#0055CD] px-5 py-2'>Read More</button>
               <img src={likeIcon} alt="" />
            </div>
           </div>
        </div>
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-4  border-1 border-gray-200 rounded-md bg-white">
            <img className='h-[230px] w-full' src="https://s3-alpha-sig.figma.com/img/d053/7c08/915cf59541d285888485cc10859023c9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c8ftuEkeIkisC3GrJ90VW1XUE9b8Gp~-AIOvhAJoqHweblSYjtjolpRbmrL~gSERscCjqk1uAal1cap86FZ0HOQrriFe14xISKLuQqktZRRq3AS4QmEnkp3enwX8GKP35SnUQH16Hs4ckbEsREgwq-JoK3ve8ofSu-6rbEp3JzgLENsy0eF10eMXDEtQvorvLcEPt58Az9Tout7ovCm9HHvkjFI1zHqfJyFgiir7wxnLyRTPK1GXEybMMDJbe-81YNcwAaBxNJfLBE9WbAI3Lmk0NAs1i7prORbGznou6YKq6X9pq-tBEuCXk3aFkw32tUjlSiyukL5Z9lVnZsgpQw__" alt="" />
            <div className='p-3'>
           <p className='mb-3'>Aug 2024 | 4:50 Am</p>
            <h3 className='mb-2'> Horem ipsum dolor sit ame </h3>
            <p className='mb-4'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
            <div className='flex justify-between'>
                <button className='text-white bg-[#0055CD] font-semibold rounded-xs border-1 border-[#0055CD] px-5 py-2'>Read More</button>
               <img src={likeIcon} alt="" />
            </div>
           </div>
        </div>
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-4  border-1 border-gray-200 rounded-md bg-white">
            <img className='h-[230px] w-full' src="https://s3-alpha-sig.figma.com/img/3910/b1f8/ccef7b999bcf826f2c63259f962bffd9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h-sNnh2jKZ9m6-hGCQX2Q27bpJ4x-xkPZchPe1hzAwVo0CEnbGY7GDNBvXEqMtzWJeYJLxxzVLKpttqO4JmRyAv4pdvpNK2VyV40f3RjoyP-VEvQoe1FriXvwwaCoSPH-YiQ2vHoOKTvJUvFxkLuLt4LZDkS~bc89YylFI0UszKy5hPx0cyuUgbZyHrwHye3ISCsOe5KWDHTuAgmbtp5m78hIiQkLxNc1h1UVZkcjEYQXMPwJHz5S-Da2vRzi-~ABQ-OUHungUdMIQLNfuytnnrVGuX5GekuEntT~0tZXEKT5b36zqyAi5dmKT1YvsbMJC2RJ6E3wyAOv75kZFq3gg__" alt="" />
            <div className='p-3'>
           <p className='mb-3'>Aug 2024 | 4:50 Am</p>
            <h3 className='mb-2'> Horem ipsum dolor sit ame </h3>
            <p className='mb-4'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent </p>
            <div className='flex justify-between items-center'>
                <button className='text-white bg-[#0055CD] font-semibold rounded-xs border-1 border-[#0055CD] px-5 py-2'>Read More</button>
               <img src={likeIcon} alt="" />
            </div>
           </div>
        </div>
    </div>
  </div>

  
   </>
  )
}
