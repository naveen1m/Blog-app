import React, { useState } from "react";

function PostContent() {
  const [showText, setShowText] = useState(false)
  function handleMouseOver(){
    setShowText(true)
  }
  function handleMouseOut(){
    setShowText(false)
  }
  if(showText){

  }
  return (
    <div className="mx-auto md:w-[1550px]   bg-gray-200 mt-5 mb-2 md:grid grid-cols-4 gap-2 rounded hover:shadow-lg hover:translate-y-[0.03rem] ">
      <div className="col-span-1 mx-auto my-auto p-1">
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZvR64.img?w=800&h=415&q=60&m=2&f=jpg"
          alt="image1"
        />
      </div>
      <div className="col-span-3 p-[0.5px] text-xl sm:mx-auto ">
        <h3 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="font-semibold hover:text-blue-500">
          Weird things we all did as kids but never talk about
        </h3>
        {showText && <p className="w-max text-xs bg-white text-red-600 hover:block">This is a dummy data, will not show content!</p>}
        <p className="italic text-xs px-4">
            <a href="#" className="author mr-3 ">by Naveen kumar</a>
            <time>2021-03-04 5:37</time>
        </p>
        <p className="leading-5 text-[1.18rem] ">
          The mind of a child works in wonderful and mysterious ways. Their
          imaginations run freely, untethered by the bounds of logic or fact. While habits vary
          greatly between different countries and cultures, there are certain
          experiences that most of us can relate to. Children are children
          wherever they are, and as such, they seem to be drawn to the same
          things. That means that you, your cousin, and that kid in class who
          used to eat erasers, all had many of the same weird, awkward
          experiences.
        </p>
      </div>
    </div>
  );
}

export default PostContent;
