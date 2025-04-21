import React from 'react'
import Button from './Button';
import { BriefcaseBusiness, MoveUpRight } from 'lucide-react';

function NavBar() {
  return (
    <div className='w-full h-16 flex items-center justify-between'>
      <div className='font-rufina font-extrabold text-[27px] tracking-tight'>Rivo</div>
      <div>
        {
            ["Home", "Shop", "Features", "contacts"].map((item, idx)=>(
                <a href="#" 
                key={idx}
                className='font-poppins uppercase text-sm font-[400] leading-tight mx-5 w-fit hover:border-b-2 hover:border-b-sky-600 '
                >{item}</a>
            ))
        }
      </div>
      <div className='flex items-center gap-5'>
        <div> <BriefcaseBusiness  size={22}/></div>
        <Button content='login' border={"border-2"} />
      </div>
    </div>
  )
}

export default NavBar
