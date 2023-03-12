import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import Cookies from "js-cookie";
import axios from "axios";
import Footer from "../components/Footer";

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
function PostPage() {
  const params = useParams();
  const token = localStorage.getItem('token')
  const [userInfo,setUserInfo] = useState()
  const [postInfo, setPostInfo] = useState(null);


  const fetchData = async () => {
   await axios.get(`/api/profile`,{ headers: { Authorization:Cookies.get('token') }})
      .then(async res =>{
        const info = await res.data
        
        setUserInfo(info)
      })
      .catch(err => console.log(err))

   await axios
      .get(`/api/blogpage/${params.id}`)
      .then(async (response) => {
        const info = await response.data
        setPostInfo(info);
        
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
  
  
  useEffect(()=>{
    
    fetchData();
  }, []);

  if (!postInfo) return "";



  return (
    <>
      <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
       <Link to={'/'}> <h1 className="ml-2 md:text-2xl text-xl text-gray-200 font-bold hover:text-blue-500 ">MyBlog</h1></Link>
       
        { token && (postInfo.author._id === userInfo.userId && (
          <div>
            <Link to={`/edit/${postInfo._id}`}>
            <button className="ml-3 px-1 rounded-sm text-xl hover:bg-slate-300 duration-300">Edit Post</button>
            </Link>
            <Link to={`/delete/${params.id}`}>
            <button className="ml-3 px-1 rounded-sm text-xl  hover:bg-slate-300 duration-300">Delete Post</button>
            </Link>
          </div>)
        )}
      </div>
      <main className=" max-[100%] bg-gray-200 ">
        <h3 className="pt-4 text-2xl md:text-3xl text-center font-semibold ">
          {postInfo.title}
        </h3>
        <div className="text-center italic">
          <a href="#" className="author mr-3">
            by {postInfo.author.username}
          </a>
          
          <time>
          
            {format(new Date(postInfo.createdAt), "MMM d yyyy hh:mmaaa")}
          </time>
        </div>
        
        <div>
            
          <img
            src={postInfo.cover.url}
            className="mx-auto h-[60vh] py-4 w-full object-contain "
            alt="cover"
          />
        </div>
        <div className="content md:mx-8 pl-3 pb-5">
          <p className="info text-xs px-4 w-max"></p>
          <p className="mt-3 leading-5 text-xl italic ">{postInfo.summary}</p>
          <div
            className="mt-12  text-xl"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          />
        </div>
      </main>
      <Footer />
       
    </>
  );
}

export default PostPage;
