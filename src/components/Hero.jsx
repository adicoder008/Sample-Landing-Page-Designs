import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="bg-[url('/image7.png')] flex justify-center items-center bg-cover w-screen h-[90vh] ">
      <div className='flex flex-col gap-4 text-white'>
        <div className='text-6xl text-center md:text-6xl font-arsenal font-[400]'>Your <span className='font-[500] italic '>virtual </span> travel companion</div>
        <div className='text-4xl text-center md:text-3xl'>Plan, Connect and Explore</div>
        <div className='flex justify-center'><button className='items-center w-fit bg-[#F86F0A] rounded-3xl px-4 py-3 text-black'>Plan Your Trip Now</button></div>
      </div>
    </div>
      
    </>
  )
}

export default Hero
