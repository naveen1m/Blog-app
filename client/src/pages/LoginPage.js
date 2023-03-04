import React from "react";
import { Link,  } from "react-router-dom";

function LoginPage() {

    function handleclick(){
        return console.log('button clicked!')
    }
  return (
    <>
    <div className='max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl '>
      <h1 className='ml-2 font-bold '>MyBlog</h1>
      
    </div>
    <div className="mx-auto my-auto w-[600px] h-[100%]  ">
      <div className="container h-[700px] my-auto flex flex-col  ">
        <div className="flex flex-col mx-auto my-auto gap-3  ">
            
          <label  htmlFor="password">Email: 
          <input  type="email" placeholder="example123"/> </label>
          <label  htmlFor="password">Password :  
          <input  type="password" name="password" id="" placeholder="password" /></label>
          
        <button onClick={handleclick} className="bg-blue-500 hover:bg-blue-700" type="submit">login</button>
        <p>No account? <Link to="/register"> <span className="text-[violet]">Register</span></Link> </p>

        </div>
        
      </div>
    </div>
    </>
  );
}

export default LoginPage;
