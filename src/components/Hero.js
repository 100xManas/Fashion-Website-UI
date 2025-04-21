import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className='flex items-center gap-32 justify-between py-20'>
      <div className='w-1/2'>
        <p className='font-rufina text-6xl w-[450px] tracking-tight leading-snug'>Discover and Find Your Own Fashion!</p>
        <p className='leading-[30px] w-80 font-poppins text-[#267D49]'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
        <div className='mt-10'>
        <Button content={"Explore Now"} bgColor={"bg-green-900"} textColor={"text-white"} py={'py-3'} px={"px-6"} />
        </div>
      </div>
      <div className='w-1/2'>
        <div className='bg-green-400 w-96 h-[450px] overflow-hidden rounded-bl-[30px] rounded-tr-[30px] rounded-br-[90px] rounded-tl-[90px]'>
            <img className='scale-150 transform translate-y-24' src="https://s3-alpha-sig.figma.com/img/380f/4d87/6a6e09212a48c77c3792e100104bc00e?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=STQCF~9UHrotfqxdAtO9UQq6Uvc~OgOYifPNykNotl5Shww1itmEpCK75Azs7nBeY1CDaPAp5SiXn76HaVHFeRD9yU0vL1X2LlSsgOGy-ZqC1nVtG0hR0jUlYssw70ry7TRq~Z8R5vobKX5gEcFa75zjPDNPB5if8I7IQWyFpEhcSvES~VGNU8gbIQW2~BKU4DWFVaRCIYPRGE5bjfTtSvbx5bstDhy3~wyODux2FikhE9lh0UHLsGkDNLqftao5FPLDftB4I7dTYiXhmHgZ03HwdiUI-E~wGgaZFnKZXH4uMNcoDC7MYFcI~aAKHWipOlLWPYUj-Ni2sGHbdweb1A__" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
