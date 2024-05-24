import {createReducer} from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
       blogs: JSON.parse(localStorage.getItem('posts')) || [],
       blogdetail:[],
     };
const reducer =createReducer(initialState,{
  ADD_POST: (state, action) => {
    const postId = v4(); 
    const newPost = { ...action.payload, id: postId };
    state.blogs.push(newPost);
    localStorage.setItem("posts", JSON.stringify(state.blogs));
  },
  GET_POST_BY_ID: (state, action) => {
    state.blogdetail = action.payload;
  },
  EDIT_POST: (state, action) => {
    state.blogs = state.blogs.map((post) =>
      post.id === action.payload.id ? action.payload : post
    );
    localStorage.setItem("posts", JSON.stringify(state.blogs));
  },
  DELETE_POST: (state, action) => {
    state.blogs = state.blogs.filter((post) => post.id !== action.payload);
    localStorage.setItem("posts", JSON.stringify(state.blogs));
  },
  LIKE_POST: (state, action) => {
    const postId = action.payload;
    const likedPost = state.blogs.find((post) => post.id === postId);
    if (likedPost) {
      likedPost.likes = (likedPost.likes || 0) + 1;
      localStorage.setItem("posts", JSON.stringify(state.blogs));
    }
  },

  UNLIKE_POST: (state, action) => {
    const postId = action.payload;
    const unlikedPost = state.blogs.find((post) => post.id === postId);
    if (unlikedPost && unlikedPost.likes > 0) {
      unlikedPost.likes -= 1;
      localStorage.setItem("posts", JSON.stringify(state.blogs));
    }
  },
});
export default reducer;
