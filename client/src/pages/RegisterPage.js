import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleEmailChange(event){
      setEmail(event.target.value);
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios.post('/api/register', user)
      .then(res => {
        navigate('/login')
        console.log(`mongo data : ${res.data}`)})
      .catch(err => console.log(err))
      
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className='max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl '>
      <h1 className='ml-2 font-bold '>MyBlog</h1>
    </div>
    <div className="mx-auto my-auto w-[600px] h-[100%]  ">
      <div className="container h-[700px] my-auto flex flex-col  ">
        <div className="flex flex-col mx-auto my-auto gap-3  ">
            
          <label  htmlFor="email">Email: 
          <input  type="email" value={email} onChange={handleEmailChange} /> </label>
          <label  htmlFor="password">Password :  
          <input  type="password" value={password} onChange={handlePasswordChange}  id=""  /></label>
          
        <button className="bg-blue-500 hover:bg-blue-700" type="submit">Register</button>
          <p className='text-center'>Already registered? <Link to='/login'> <span className='text-blue-500'>login</span></Link></p>
        </div>
        
      </div>
    </div>
    </form>
  )
}

export default RegisterPage
