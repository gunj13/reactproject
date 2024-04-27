import React, { useState, useEffect } from "react";
import "./Blog.css";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/api/blog-posts");
        console.log(response)
        setBlogPosts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <div className="home-page">
      <header>
        <div className="header-bg">
          <div className="logo">
            <b style={{ color: "#004aad" }}>Simpli</b>&nbsp;
            <b style={{ color: "#333132" }}>amal's</b>
          </div>
          <br />
          <div className="cursive">
            <h1>Blog</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="sidebar-container">
        <div className="sidebar">
          <p>
            Learn about the exciting concepts that we at Simpli amal apply to
            develop business strategies for you!
          </p>
          <p>Blog posts coming soon...</p>
        </div></div>

        <div className="posts-container">
          {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <div key={post._id} className="post-box">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.previewText}</p>
                <Link to={`/post/${post._id}`}>Read More</Link>
              </div>
            ))
          ) : (
            <p className="errormsg">Coming soon :)</p>
          )}
        </div>

      </main>
      <div className="white-line"></div>
      <Footer />
    </div>
  );
};

export default Blog;
