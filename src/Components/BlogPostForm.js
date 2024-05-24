import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { addPost, editPost, getPostById } from "../Redux/Actions";

const BlogPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogdetail } = useSelector((state) => state);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getPostById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && blogdetail) {

      setFormData({
        title: blogdetail.title,
        content: blogdetail.content,
        author: blogdetail.author,
      });
    }
  }, [id, blogdetail]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {

      dispatch(editPost({ id, ...formData }));
    } else {

      dispatch(addPost(formData));
    }

    setFormData({
      title: "",
      content: "",
      author: "",
    });
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="ui main">
      <h2>{id ? "Edit Post" : "Add Post"}</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Content:</label>
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Author Name:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="ui button blue">
          {id ? "Save" : "Add"}
        </button>
        <Link to="/">
          <button className="ui button grey">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default BlogPostForm;

