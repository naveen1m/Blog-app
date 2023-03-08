import React, {useState, useEffect} from 'react'
import Post from '../components/Post';
import axios from 'axios';


// backend url
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get("/api/getblog")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
            <Post {...post} />
        </div>
      ))}
    </>
  )
}

export default BlogPage
