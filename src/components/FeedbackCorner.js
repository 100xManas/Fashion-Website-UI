import React from 'react'
import { Quote } from "lucide-react";

function FeedbackCorner() {

    const feedbackData = [
        {
            title:"Emily Wilson", 
            feedback:"The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
        },
        {
            title:"Sarah Thompson", 
            feedback:"I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
        },
        {
            title:"Olivia Martinez", 
            feedback:"I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
        },
    ]

  return (
    <div className='py-16'>
      <h1 className='text-center text-5xl py-5 font-rufina'>Feedback Corner</h1>
      <div className='flex items-center justify-between flex-wrap py-10'>
        {
            feedbackData.map((item, index)=>(
                <div 
                key={index}
                className={`${index == 1 && 'bg-[#C2EFD4]'} w-96 h-60 shadow-lg border p-5 flex flex-col justify-between`}
                >
                    <Quote size={24} />
                    <h2 className='font-rufina text-2xl py-5'>{item.title}</h2>
                    <p className='text-xs font-poppins py-2'>{item.feedback}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default FeedbackCorner
