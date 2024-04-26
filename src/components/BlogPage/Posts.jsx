import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post._id} className="post-box">
          <Link to={`/post/${post._id}`}>
            <img src={post.image} alt="Post Image" />
            <p>{post.previewText}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;