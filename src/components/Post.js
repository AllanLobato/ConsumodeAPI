import { useState, useEffect } from 'react';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Head from './Head';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
      setPosts(result.data);
    });
  });

  const Post = ({ posts }) => {
    return (
      <ol className="list-group list-group-numbered">
        {posts.map((post) => (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Title: {post.title}</div>
              Id: {post.id} - {post.body}
            </div>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="animeLeft">
      <Head title="Post" />
      {posts ? <Post posts={posts} /> : <NotFound />}
    </div>
  );
}

export default Post;
