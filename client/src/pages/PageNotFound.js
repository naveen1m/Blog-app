import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {toast, Toaster} from 'react-hot-toast'
// import {toast, ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

function PageNotFound() {
    useEffect(()=>{
        toast.error('back to home page!',{
            duration: 5000
        })
    },[])
  return (
    <>
        <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
        <Link to={'/'}> <h1 className="ml-2 text-gray-200 md:text-2xl text-xl font-bold hover:text-blue-500 ">MyBlog</h1></Link>
        </div>
        <Toaster position='top-center' />
        {/* <ToastContainer position='top-center' /> */}
        <div className='text-center text-red-500 text-3xl mt-3'>
        404 page not found
        </div>
    </>
    
    
  )
}

export default PageNotFound
