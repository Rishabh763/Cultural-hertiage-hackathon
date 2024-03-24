import React from 'react'

function CrowFunding() {
  return (
    <div className='flex items-center flex-col gap-6 py-20 mx-auto'>
        <p className='max-w-3xl text-xl'>Join us in preserving the vibrant legacy of India's heritage sites with your generous donation, ensuring their timeless beauty continues to inspire for years to come!</p>
        <a href="https://crowdfunding-aditya-chapeles-projects.vercel.app/"><button className='border-solid border-[#1A76D1] border-2 bg-transparent text-[#1A76D1] text-xl capitalize px-8 py-2 rounded-full hover:bg-[#1A76D1] hover:text-white transition-colors duration-300 font-bold'>Donate </button></a>
    </div>
  )
}

export default CrowFunding