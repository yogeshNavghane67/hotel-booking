import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 
    text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
        <p>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination  </h1>
        <p className='max-w-130 mt-2 text-sm m:text-base'>Unparalleled luxury and comfort await at the world's most exclusive Hotels and resorts.Start your journey today.</p>
    </div>
  )
}

export default Hero