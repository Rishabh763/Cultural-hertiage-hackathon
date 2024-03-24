import React from 'react'

function UserReview() {
  return (
    <div className='flex items-center flex-col gap-6 py-20 mx-auto'>
        <p className='max-w-3xl text-xl'>We'd love to hear about your experience and thoughts! Could you please take a moment to share a review? Your feedback helps us continue our mission to preserve and promote India's rich cultural heritage. Thank you for your support!</p>
        <a href="https://userreview.vercel.app/"><button className='border-solid border-[#1A76D1] border-2 bg-transparent text-[#1A76D1] text-xl capitalize px-8 py-2 rounded-full hover:bg-[#1A76D1] hover:text-white transition-colors duration-300 font-bold'>Review</button></a>
    </div>
  )
}

export default UserReview