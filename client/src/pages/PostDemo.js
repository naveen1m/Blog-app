import React from 'react'
import PostContent from '../components/PostContent'
import axios from 'axios'

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function PostDemo() {
 
  return (
    <>
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      
    </> 
  )
}

export default PostDemo
