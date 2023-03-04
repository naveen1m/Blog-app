import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-gray-400 h-[20%] max-[100%]  '>
      <div className='ml-2'>
        you can read and write blog post here free.
        <h1>contact me</h1>
      </div>
      <div className='flex flex-row  justify-around w-[20%] py-4'>
        <AiOutlineInstagram />
        <AiOutlineLinkedin />
        <AiOutlineTwitter />
      </div>
    </div>
  )
}

export default Footer
