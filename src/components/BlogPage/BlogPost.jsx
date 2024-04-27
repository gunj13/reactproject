import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`/api/blog-posts/${id}`);
        setBlogPost(response.data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      }
    };
  
    fetchBlogPosts();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
      <header>
        <div className="post-header">
          <h1>{blogPost.title}</h1>
          <h5>Authored by: Anoop Siddharth</h5>

        </div>
      </header>
      <main>
        <div
          className="post-content"
          
        />
        <p>{blogPost.content}</p>
        <img src={blogPost.image} style={{width:'70%',}}></img>
      </main>
      <Footer/>
    </div>
  );
};

export default BlogPost;