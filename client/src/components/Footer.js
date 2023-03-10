import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-gray-400 h-[20%] max-[100%]  '>
      <div className='ml-2 text-xl'>
        you can read and write blog post here free.
        <h1 >Reach me via</h1>
      </div>
      <div className='flex flex-row  justify-around w-[20%] py-4'>
        <Link to={`https://github.com/stupiddint`}><AiOutlineGithub /></Link>
        <Link to={`https://www.linkedin.com/in/naveen-kumar-814903228/`} ><AiOutlineLinkedin className='text-blue-700' /></Link>
        <Link to={`https://twitter.com/stupiddint`}><AiOutlineTwitter className='text-blue-800' /></Link>
        <Link to={`https://www.instagram.com/navstr10/`} ><AiOutlineInstagram className='text-red-800'/></Link> 
      </div>
    </div>
  )
}

export default Footer
