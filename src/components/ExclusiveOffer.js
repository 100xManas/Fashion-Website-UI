import React from 'react'
import Button from './Button'

function ExclusiveOffer() {
    return (
        <div >
            <div className='flex items-center bg-[#C2EFD4] overflow-hidden'>
                <div className='w-1/2'>
                    <img
                        className='scale-125'
                        src="https://s3-alpha-sig.figma.com/img/d34b/7f54/e58a0cde770131dda958359103394f74?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AXXhDYNnw97X-xLkcaeup3zmCuY~lvs7z2wp7QuUZefkAO53gVHeFmH0u4vE3V9ojc5xfA7J-NVg5-9RqPjLjxYjBlnuJV5okC0M3mkf4-ObxsL2jjn95~lm3j9YA5hBFJyeRhWYFB8QkA9cGUcqnUnt8UrX-YNN22esUgx53Y8F2jDlVyb6TY6tH4ZZZYz~731dvpVABAVU1chIRQY~3yzN3jd5FjqhypvbSh9q1XSLXxqrUMNf-3GtCmEK6I9MSFYorVJsu8jFpfkBkMuRQPluxHAh0-WNtYVHLkdzf9-jOtDcaVMAdqQ1u4Q8ElJFbKoSA2CMNQt3znR6-DXMCQ__" alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-5xl font-rufina'>Exclusive offer</h1>
                    <p className='text-[#224F34] py-3 w-96'>Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals.</p>
                    <div className='py-5 pb-9 flex items-center gap-5'>
                        <div className='w-20 h-20 rounded-sm flex items-center justify-center bg-white p-4'>
                            <div>
                            <p className='font-bold text-3xl'>06</p> 
                            <p className='font-light'>Days</p>
                            </div>
                        </div>
                        <div className='w-20 h-20 rounded-sm flex items-center justify-center bg-white p-4'>
                            <div>
                            <p className='font-bold text-3xl'>18</p> 
                            <p className='font-light'>Hours</p>
                            </div>
                        </div>
                        <div className='w-20 h-20 rounded-sm flex items-center justify-center bg-white p-4'>
                            <div>
                            <p className='font-bold text-3xl'>48</p> 
                            <p className='font-light'>Minutes</p>
                            </div>
                        </div>
                    </div>

                    <Button content={"Buy Now"} bgColor={"bg-green-900"} py={"py-3"} px={'px-8'} textColor={"text-white"} />
                </div>
            </div>
        </div>
    )
}

export default ExclusiveOffer
