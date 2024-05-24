import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const BlogCard = ({ blog }) => {
  const { id, title, author, content } = blog;
  const truncatedContent = content ? content.substring(0, 100) : "";

  return (
    <div className="cards">
      <div className="ui card">
        <div className="content">
          <Link to={`/blog/${id}`} state={{ blog }} style={{textDecoration: "none"}}>
            <div className="header" style={{ color: "black" }}>
              <h3>{title}</h3>
            </div>
            <div className="description"><p>{truncatedContent}</p></div>
          </Link>
        </div>
        <div className="extra content">
                    <div className="right floated author">
                        <img className="ui avatar image" src="https://www.temankreasi.com/asset/images/gambar/avatar-3d-gratis-9-1.jpg" alt="Profile"/> {author}
                    </div>
                </div>
      </div>
    </div>
  )
}

export default BlogCard;
