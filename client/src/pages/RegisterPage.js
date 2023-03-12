import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast';


// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function RegisterPage() {
  const [username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleUsernameChange(event){
      setUsername(event.target.value);
  }
  function handleEmailChange(event){
      setEmail(event.target.value);
  }
  function handlePasswordChange(event){
    setPassword(event.target.value)
  }

 async function handleSubmit(event){
    event.preventDefault();
    const user = {
      username:username,
      email: email,
      password: password,
    };
   await axios.post('/api/register', user)
      .then(res => {
        toast.success('Registerd!',{
          duration: 5000
        })
        navigate('/login')
        console.log(`mongo data : ${res.data}`)})
      .catch(err => {
        
        toast.error('Could not register!')
        console.log(err)
      })
      
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className='max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl '>
     <Link to={'/'}><h1 className='ml-2 text-gray-200 md:text-2xl my:auto  text-xl font-bold hover:text-blue-500'>MyBlog</h1></Link> 
    </div>
    <Toaster position='top-center' />
    <div className="mx-auto my-auto sm:w-full sm:max-w-md md:w-[600px] md:h-[100%]  ">
        <div className="container sm:w-full sm:max-w-md md:h-[700px] my-auto  min-h-[80vh] flex flex-col  ">
        <div className="flex flex-col mx-auto my-auto gap-3  ">
            <h1 className='text-2xl tracking-wide font-semibold text-center'>Register here!</h1>
          <label  htmlFor="name">
          <input  type="text" className='px-1' placeholder='Username' value={username} onChange={handleUsernameChange} /> </label>
          <label  htmlFor="email"> 
          <input  type="email" className='px-1' placeholder='Email' value={email} onChange={handleEmailChange} /> </label>
          <label  htmlFor="password">  
          <input  type="password" className='px-1' placeholder='Password' value={password} onChange={handlePasswordChange}  id=""  /></label>
          
        <button className="
       rounded-sm bg-blue-500 hover:bg-blue-700 hover:text-white duration-300" type="submit">Sign up</button>
          <p className='text-center'>Already registered? <Link to='/login'> <span className='text-[#4c4cd3] hover:text-[blue] hover:underline'>login</span></Link></p>
        </div>
        
      </div>
    </div>
    </form>
  )
}

export default RegisterPage
