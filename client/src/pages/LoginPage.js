import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import { toast, Toaster } from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios.post('/api/login', user,{ headers: { Authorization:localStorage.getItem('token') } })
      .then(res =>{
        const token = res.data.token;
        Cookies.set('token' ,token, { expires: 1/48 })
        
        // localStorage.setItem("token" ,token)
        toast.success('Welcome!',{
          duration:5000
        })
        navigate('/')
        // console.log(`logged in data : ${res.data}`)
      } )
      .catch(err =>{
        toast.error('invalid credentials!')
        console.log('not logged in'+err)})

      

    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 md:h-8 shadow-xl ">
      <Link to={'/'}><h1 className='ml-2 md:text-2xl my:auto  text-xl font-bold text-gray-200 hover:text-blue-500'>MyBlog</h1></Link>
      </div>

      <div className="mx-auto my-auto sm:w-full sm:max-w-md md:w-[600px] md:h-[100%]  ">
        <div className="container sm:w-full sm:max-w-md md:h-[700px] my-auto  min-h-[80vh] flex flex-col  ">
          <div className="flex flex-col mx-auto my-auto gap-3  ">
            <h1 className="text-2xl tracking-wider font-semibold text-center">Hello!</h1>
            <label htmlFor="password">
              <input type="email" className='px-1' placeholder="Email" value={email} onChange={handleEmailChange} />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                className='px-1'
                name="password"
                placeholder="Password"
                id=""
                value={password}
                onChange={handlePasswordChange}
              />
            </label>

            <button
              className="rounded-sm bg-blue-500 hover:bg-blue-700 hover:text-white duration-300"
              type="submit"
            >
              Sign in
            </button>
            <Toaster position="top-center"/>
            <p className="text-center">
              No account?
              <Link to="/register"> <span className="text-[#4c4cd3] hover:text-[blue] hover:underline duration-300">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
