import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function Post({_id,title,cover,summary,content,createdAt,author}) {
  
  return (
    <div className="mx-auto md:w-[1550px] text-left  bg-gray-200 mt-5 mb-2 md:grid grid-cols-4 gap-2 rounded hover:shadow-lg hover:translate-y-[0.03rem] sm:pl-1 ">
          <div className="col-span-1 mx-auto my-auto p-1">
            <Link to={`/post/${_id}`}>
            <img className="h-[33vh] " src={'http://localhost:8080/' +cover} alt="image1" />
            </Link>
            
          </div>
          <div className="col-span-3 p-[0.5px] sm:mr-auto ">
            <Link to={`/post/${_id}`} >
            <h3 className="text-xl font-semibold hover:text-blue-700">{title}</h3>
            </Link>
            
            <p className="info italic text-xs px-4 w-max">
              <a href="#" className="author mr-3 ">
                by {author.username}
              </a>
              <time>
                {format(new Date(createdAt), "MMM d yyyy hh:mmaaa")}
              </time>
            </p>
            <p className="leading-5 ">{summary}</p>
          </div>
        </div>
      
  );
}

export default Post;
