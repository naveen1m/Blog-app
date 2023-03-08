import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  const token = localStorage.getItem('token');


  return (
    <div className='max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl '>
      <h1 className='ml-2 font-bold '>MyBlog</h1>
      {token && (
        <>
        <Link to='/create' className='ml-3 px-1 rounded-sm hover:bg-slate-300 '>create new post</Link>
        <Link to='/logout' className='ml-3 px-1 rounded-sm  hover:bg-slate-300'>logout</Link>
        </>
      )}
      {!token && <Link to="/login" className='ml-3 px-1 rounded-sm   hover:bg-slate-300 duration-300'>Login</Link>}
      
    </div>
  )
}

export default Header 
