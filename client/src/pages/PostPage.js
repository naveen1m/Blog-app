import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import axios from "axios";
import Footer from "../components/Footer";
import UserContext from "../components/UserContext";

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
function PostPage() {
  const params = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext)
  useEffect(() => {
    axios
      .get(`/api/blogpage/${params.id}`)
      .then((response) => {
        setPostInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!postInfo) return "";

  return (
    <>
      <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
        <h1 className="ml-2 font-bold ">MyBlog</h1>
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
            {userInfo.id}
          <img
            src={"http://localhost:8080/" + postInfo.cover}
            className="mx-auto h-[60vh] py-4 w-full object-contain "
            alt="cover image"
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
