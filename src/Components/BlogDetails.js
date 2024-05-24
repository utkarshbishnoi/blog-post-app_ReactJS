import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {  deletePost,  getPostById,  likePost,  unlikePost} from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useBlogContext } from "../Context/BlogContext";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogdetail } = useSelector((state) => state);
  
  //ContextApi
  
  //const { state, dispatch } = useBlogContext();

  // useEffect(() => {
  //   dispatch({ type: GET_POST_BY_ID, payload: id });
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  if (!blogdetail) {
    return <div>Loading...</div>;
  }

  const { title, author, content, likes } = blogdetail;

  const handleLikeClick = () => {
    dispatch(likePost(id));
    
    //ContextApi
    
    //dispatch({ type: LIKE_POST, payload: id });
  };

  const handleUnlikeClick = () => {
    dispatch(unlikePost(id));
   
   //ContextApi
   
    //dispatch({ type: UNLIKE_POST, payload: id });
  };

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      dispatch(deletePost(id));
      
      //ContextApi

      //dispatch({ type: DELETE_POST, payload: id });
      navigate("/");
    }
  };

  return (
    <div className="main">
      <div className="ui card">
        <div className="content">
          <div className="card button">
            <div>
              <button className="ui button blue" onClick={handleEditClick}>
                Edit
              </button>
            </div>
            <div>
              <button
                className="ui button red"
                style={{ marginLeft: "7px" }}
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="header">{title}</div>
          <div className="description">
            <p>{content}</p>
          </div>
        </div>

        <div className="extra content">
          <div className="likes">
            <button className="ui button icon" onClick={handleLikeClick}>
              Like
            </button>
            <span>{likes || 0}</span>
            <button className="ui button icon" onClick={handleUnlikeClick}>
              Unlike
            </button>
          </div>
          <div className="right floated author">
            <img
              className="ui avatar image"
              src="https://www.temankreasi.com/asset/images/gambar/avatar-3d-gratis-9-1.jpg"
              alt="profile"
            />{" "}
            {author}
          </div>
        </div>
      </div>

      <div className="center-div">
        <Link to="/">
          <button className="ui button blue" style={{ marginTop: "10px" }}>
            Back to Blog List
          </button>
        </Link>
      </div>
    </div>
  );
};
export default BlogDetails;
