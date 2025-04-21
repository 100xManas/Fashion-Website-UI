import React from 'react'
import { Star } from 'lucide-react';


function Product({ img, title, price, rating, des = "" }) {
    return (
        <div className='w-72 p-4'>
            <div className='h-96 w-64 bg-zinc-200 rounded-sm overflow-hidden'>
                <img src={img} alt="" className='object-cover transform translate-y-10 transition duration-300 ease-in-out scale-150' />
            </div>
            <h4 className='font-poppins font-semibold py-2 text-center'>{title}</h4>
            {
                des ? (
                    <p className='text-center'>{des}</p>
                ) : (
                    <div>
                        <div className='flex items-center justify-between'>
                            <p className='w-1/2 flex items-center justify-center border-r border-r-zinc-950'>$ {price}</p>
                            <p className='w-1/2 flex items-center justify-center'>{rating} <Star fill='#F5D426' size={16} className='ml-1' />                    </p>
                        </div >
                    </div >
                )
            }
        </div >
    )
}

export default Product
