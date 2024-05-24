import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const BlogContext = createContext();

export function useBlogContext() {
  return useContext(BlogContext);
}

const initialState = {
  blogs: JSON.parse(localStorage.getItem("posts")) || [],
  blogdetail: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_POST": {
      const postId = uuidv4();
      const newPost = { ...action.payload, id: postId };
      const updatedBlogs = [...state.blogs, newPost];
      localStorage.setItem("posts", JSON.stringify(updatedBlogs));
      return { ...state, blogs: updatedBlogs };
    }
    case "GET_POST_BY_ID": {
      return { ...state, blogdetail: action.payload };
    }
    case "EDIT_POST": {
      const updatedBlogs = state.blogs.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      localStorage.setItem("posts", JSON.stringify(updatedBlogs));
      return { ...state, blogs: updatedBlogs };
    }
    case "DELETE_POST": {
      const updatedBlogs = state.blogs.filter(
        (post) => post.id !== action.payload
      );
      localStorage.setItem("posts", JSON.stringify(updatedBlogs));
      return { ...state, blogs: updatedBlogs };
    }
    case "LIKE_POST": {
      const postId = action.payload;
      const likedPost = state.blogs.find((post) => post.id === postId);
      if (likedPost) {
        likedPost.likes = (likedPost.likes || 0) + 1;
        localStorage.setItem("posts", JSON.stringify(state.blogs));
        return { ...state };
      }
      return state;
    }
    case "UNLIKE_POST": {
      const postId = action.payload;
      const unlikedPost = state.blogs.find((post) => post.id === postId);
      if (unlikedPost && unlikedPost.likes > 0) {
        unlikedPost.likes -= 1;
        localStorage.setItem("posts", JSON.stringify(state.blogs));
        return { ...state };
      }
      return state;
    }
    default:
      return state;
  }
}

export function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}
