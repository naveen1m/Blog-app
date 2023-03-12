import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    await axios
      .post("/api/postblog", data, { headers: { Authorization:Cookies.get('token') }})
      .then((res) =>{ 
        // console.log(`token client : ${Cookies.get('token')}`)
        // console.log('response send')
        navigate('/')

      })
      .catch((err) => {
        toast.error('Something went wrong!')
        console.log(err)});
      }
  return (
    <>
      <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
        <h1 className="ml-2 md:text-2xl text-gray-200 text-xl font-bold ">MyBlog</h1>
      </div>
      {/* {console.log(Cookies.get('token'))} */}
      <Toaster position="top-center" />
      <form onSubmit={createNewPost} className="mx-auto md:w-[800px] mt-2">
        <input
          type="title"
          className="px-1"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={"Summary"}
          
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          className="my-1 px-1 mx-1"
        />
        <input
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
          className="mb-1"
        />
        <Editor value={content} onChange={setContent} />
        <button className="mt-3 bg-green-400 hover:bg-green-500 p-1 rounded ">
          Create post
        </button>
      </form>
    </>
  );
}
