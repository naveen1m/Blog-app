import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from '../components/Editor'

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    // const response = await fetch('http://localhost:4000/post', {
    //   method: 'POST',
    //   body: data,
    //   credentials: 'include',
    // });
    // if (response.ok) {
    //   setRedirect(true);
    // }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <>
<div className="max-[100%] py-auto  flex flex-row  mx-auto bg-gray-500 h-7 shadow-xl ">
        <h1 className="ml-2 font-bold ">MyBlog</h1>
      </div>
    <form onSubmit={createNewPost} className="mx-auto md:w-[800px] mt-2">
        
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)}
             className="my-1" />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)}
             className="mb-1" />
      <Editor value={content} onChange={setContent}  />
      <button className="mt-3 bg-green-400 hover:bg-green-500 p-1 rounded ">Create post</button>
    </form>
    </>
  );
}
