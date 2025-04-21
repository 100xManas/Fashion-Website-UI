import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Button from './Button';

function Footer() {
    return (
        <div className='bg-[#224F34] text-white w-full px-32 py-10'>
            <div className='flex items-start justify-between'>
                <div>
                    <div className='font-rufina font-extrabold text-[27px] tracking-tight'>Rivo</div>
                    <div className='pt-5'>
                        <p className='font-rufina'>Social Media</p>
                        <div className='flex items-center gap-3 py-2'>
                            <Instagram size={20} />
                            <Facebook size={20} />
                            <Twitter size={20} />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-rufina text-md uppercase py-3'>Shop</h3>
                    {
                        ["Products", "Overview", "Pricing", "Releases"].map((item, idx) => (
                            <a href="#"
                                key={idx}
                                className='flex items-center py-1 hover:border-b-2 hover:border-b-sky-600'
                            >{item}</a>
                        ))
                    }
                </div>
                <div>
                    <h3 className='font-rufina text-md uppercase py-3'>Company</h3>
                    {
                        ["About us", "Contact", "News", "Support"].map((item, idx) => (
                            <a href="#"
                                key={idx}
                                className='flex items-center py-1 hover:border-b-2 hover:border-b-sky-600'
                            >{item}</a>
                        ))
                    }
                </div>
                <div>
                    <h3 className='font-rufina text-md uppercase py-3'>Stay up to date</h3>
                    <div className='flex'>
                        <input type="text" placeholder='Enter your email' className='bg-transparent  border px-1' />
                        <Button content={"Submit"} bgColor={"bg-white"} textColor={"text-[#224F34]"} />
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-5 pt-20'>
                <div className='w-full h-[2px] bg-zinc-300 my-4'></div>
                <div>
                    {
                        ["Terms", "Privacy", "Cookies"].map((item, idx) => (
                            <a href="" key={idx} className='mr-5'>{item}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
