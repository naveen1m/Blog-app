import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            localStorage.removeItem('token');
            setLoading(false)
            navigate('/')
        },1000)
        
    },[])
    
  return(
    <>
    {loading && <h1 className='text-center text-[40px] font-semibold text-red-500 '>Logging out ....</h1>}
    {!loading && <h1>Loged out</h1>}
    </>
  
  )  
  
}

export default LogoutPage
