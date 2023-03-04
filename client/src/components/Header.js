import React from 'react'
import {Link} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

function Header() {
  return (
    <div className='max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl '>
      <h1 className='ml-2 font-bold '>MyBlog</h1>
      <Link to="/login" className='ml-3'>Login</Link>
      
    </div>
  )
}

export default Header
