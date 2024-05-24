import { v4 } from "uuid";

export const ADD_POST = "ADD_POST";
export const GET_POST_BY_ID = "GET_POST_BY_ID";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";


export const addPost = (post) => {
  const postId = v4();
  const newPost = { ...post, id: postId };

  return {
    type: ADD_POST,
    payload: newPost,
  };
};

export const getPostById = (postId) => {
  const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
  const index = existingPosts.findIndex((p) => p.id === postId);
  return {
    type: GET_POST_BY_ID,
    payload:  existingPosts[index],
  };
};

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

export const likePost = (postId) => {
  return {
    type: LIKE_POST,
    payload: postId,
  };
};

export const unlikePost = (postId) => {
  return {
    type: UNLIKE_POST,
    payload: postId,
  };
};


