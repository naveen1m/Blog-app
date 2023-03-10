import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast, Toaster } from "react-hot-toast";

function Header() {
  const token = localStorage.getItem("token");
  console.log('token in header: ' + token)
  const navigate = useNavigate();

  function logoutToast(){
    localStorage.removeItem('token');
    toast.success('logged out!',{
      duration:2000
    })
    navigate('/')
  }

  return (
    <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
      <h1 className="ml-2 text-2xl sm:text-xl font-bold ">MyBlog</h1>
      {token && (
        <>
        
          <Link
            to="/create"
            className="ml-3 px-1 rounded-sm hover:bg-slate-300 "
          >
            create new post
          </Link>
          <button
            onClick={logoutToast}
            className="ml-3 px-1 rounded-sm  hover:bg-slate-300"
          >
            logout
          </button>
          
        </>
      )}
      <Toaster position="top-center"  />
      {!token && (
        <Link
          to="/login"
          className="ml-3 px-1 rounded-sm   hover:bg-slate-300 duration-300"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
