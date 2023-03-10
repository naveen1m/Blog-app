import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import axios from "axios";

// backend domain
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export default function EditPost() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/blogpage/${params.id}`)
      .then((res) => {
        const postInfo = res.data;
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
        // setFiles(postInfo.cover)
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", params.id)
    if(files?.[0]){
        data.set("file", files?.[0]);
    }

    await axios
      .put("/api/editblog", data, { headers: { Authorization:localStorage.getItem('token') }})
      .then((res) =>{
        console.log(res.data + " -done")
        navigate(`/post/${params.id}`)
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
        <h1 className="ml-2 text-2xl sm:text-xl font-bold ">MyBlog</h1>
      </div>
      <form onSubmit={updatePost} className="mx-auto md:w-[800px] mt-2">
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
          Update post
        </button>
      </form>
    </>
  );
}
