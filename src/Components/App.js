import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { BlogProvider } from "../Context/BlogContext.js";

import BlogPostList from "./BlogPostList";
import BlogPostForm from "./BlogPostForm";
import BlogDetails from "./BlogDetails";

import "./App.css";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <BlogProvider>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/add" element={<BlogPostForm />} />
          <Route path="/edit/:id" element={<BlogPostForm />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        </BlogProvider>
      </Router>
    </div>
  );
}

export default App;
