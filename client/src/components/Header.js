import React from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Header() {
  const token = Cookies.get("token");
  // console.log('token in header: ' + token)
  const navigate = useNavigate();

 async function logoutToast(){
    Cookies.remove('token');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    await axios.post('/api/logout')
            .then(
              toast.success('logged out!',{
                duration:2000
              }),
              navigate('/')
            )
            .catch(err => console.log(`logout err: ${err}`))
    
  }

  return (
    <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
      <h1 className="ml-2 md:text-2xl text-xl text-gray-200 font-bold ">MyBlog</h1>
      {token && (
        <>
        
          <Link
            to="/create"
            className="ml-3 px-1 text-xl rounded-sm hover:bg-slate-300 "
          >
            create new post
          </Link>
          <button
            onClick={logoutToast}
            className="ml-3 px-1 rounded-sm text-xl  hover:bg-slate-300"
          >
            logout
          </button>
          
        </>
      )}
      <Toaster position="top-center"  />
      {!token && (
        <Link
          to="/login"
          className="ml-3 px-1 rounded-sm text-xl   hover:bg-slate-300 duration-300"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
