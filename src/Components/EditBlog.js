import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost } from "../Redux/Actions";

const EditBlogPost = ({ postToEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(postToEdit.title);
  const [content, setContent] = useState(postToEdit.content);
  const [author, setAuthor] = useState(postToEdit.author);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: postToEdit.id, 
      title,
      content,
      author,
    };

    dispatch(editPost(updatedPost));

    navigate(`/blog/${postToEdit.id}`);
  };
  return (
    <div className="ui main">
      <h2>Edit Post</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={postToEdit.id} />
        <div className="field">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Content:</label>
          <textarea
            name="content"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Author Name:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="ui button blue">
          Save
        </button>
      </form>
    </div>
  );
};


export default EditBlogPost;