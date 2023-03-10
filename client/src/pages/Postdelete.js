import React, { useEffect, useState  } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Postdelete() {
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);
    const params = useParams()
    useEffect(()=>{
        axios.delete(`/api/deleteblog/${params.id}`)
      .then(res => console.log('post deleted'))
      .catch(err => console.log(err))

      setTimeout(()=>{
        setLoading(false)
        navigate('/')
        
    },600)

    },[])
  return (
    
      <>
    {loading && <h1 className='text-center text-[40px] font-semibold text-red-500 '>deleting...</h1>}
    {!loading && <h1>Post deleted!</h1>}
    </>
    
  )
}

export default Postdelete
