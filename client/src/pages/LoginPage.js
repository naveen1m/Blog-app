import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    axios.post('/api/login', user)
      .then(res =>{
        const token = res.data.token;
        localStorage.setItem('token' ,token)
        navigate('/')
        console.log(`logged in data : ${res.data}`)
      } )
      .catch(err => console.log('not logged in'+err))
      // navigate('/login')
  
    // console.log(event)
    // console.log(`email ${email}`)
    // console.log(`password ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
        <h1 className="ml-2 font-bold ">MyBlog</h1>
      </div>
      <div className="mx-auto my-auto w-[600px] h-[100%]  ">
        <div className="container  h-[700px] my-auto flex flex-col  ">
          <div className="flex flex-col mx-auto my-auto gap-3  ">
            <h1 className="text-2xl tracking-wider font-semibold text-center">Hello!</h1>
            <label htmlFor="password">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            </label>
            <label htmlFor="password">
              <input
                type="password"
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
