import React from "react";

function PostContent() {
  return (
    <div className="mx-auto md:w-[1550px]  bg-gray-200 mt-5 mb-2 md:grid grid-cols-4 gap-2 rounded hover:shadow-lg hover:translate-y-[0.03rem] ">
      <div className="col-span-1 mx-auto my-auto p-1">
        <img
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZvR64.img?w=800&h=415&q=60&m=2&f=jpg"
          alt="image1"
        />
      </div>
      <div className="col-span-3 p-[0.5px] sm:mx-auto ">
        <h3 className="font-semibold">
          Weird things we all did as kids but never talk about
        </h3>
        <p className="info text-xs px-4">
            <a href="#" className="author mr-3">Naveen kumar</a>
            <time>2021-03-04 5:37</time>
        </p>
        <p className="leading-5 ">
          The mind of a child works in wonderful and mysterious ways. Their
          imaginations run freely, untethered by the bounds of logic or fact. A
          simple cardboard box can become a fantasy world in another dimension,
          and a bottle of Coke can become a glass of Pinot. While habits vary
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
