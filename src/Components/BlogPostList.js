import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogPostList = () => {
  const posts = useSelector((state) => state.blogs);
  console.log("Posts from Redux:", posts);

  const renderBlogList = posts.map((blog) => {
    return <BlogCard blog={blog} key={blog.id} />;
  });

  if (!posts || posts.length === 0) {
    return (
      <div className="main">
        <div>
          <Link to="/add">
            <button className="ui button grey right">Add Blog</button>
          </Link>
        </div>
        <h2>Blog Posts</h2>
        <p>No blog posts available.</p>
      </div>
    );
  }

  return (
    <div className="main">
      <div>
        <Link to="/add">
          <button className="ui button grey right">Add Blog</button>
        </Link>
      </div>
      <div className="ui cards">{renderBlogList}</div>
    </div>
  );
};

export default BlogPostList;
