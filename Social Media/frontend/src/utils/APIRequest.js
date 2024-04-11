import axios from "axios";
import { errorToast, successToast } from "./Toast";

//create an instance of Axios
const AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const RegisterUser = async (user) => {
  try {
    const { data } = await AxiosInstance.post("/auth/register", user);
    const { success, message } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return success;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return false;
  }
};

const loginUser = async (formData) => {
  try {
    const { data } = await AxiosInstance.post("/auth/login", formData);
    const { success, message, user } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return user;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

const logoutUser = async (formData) => {
  try {
    const { data } = await AxiosInstance.get("/auth/logout");
    const { success, message } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return success;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return false;
  }
};

const getUser = async () => {
  try {
    const { data } = await AxiosInstance.get("/auth/user");
    const { user } = data;
    return user;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

const createPost = async (formData) => {
  try {
    const { data } = await AxiosInstance.post("/post/create", formData);
    const { success, message, post } = data;
    if (success) {
      successToast(message);
    }
    return post;
  } catch (err) {
    if (err.response) {
      errorToast(err.response?.data.message);
    } else {
      errorToast(err.message ?? "Server Error");
    }
    return null;
  }
};

const fetchAllPosts = async () => {
  try {
    const { data } = await AxiosInstance.get("/post/");
    const { posts } = data;
    return posts;
  } catch (err) {
    if (err.response) {
      errorToast(err.response?.data.message);
    } else {
      errorToast(err.message ?? "Server Error");
    }
    return null;
  }
};

const uploadMedia = async (file) => {
  try {
    //if there is no file choosen
    if (!file) {
      return;
    }
    //if file is choose
    //create a form data object
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Social_Media");
    console.log(formData);
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dycobmjyk/image/upload",
      formData,
      {
        reportProgress: true,
      }
    );
    return data.url;
  } catch (err) {
    if (err.response) {
      errorToast(err.response.data.error.message);
    } else {
      errorToast(err.message ?? "Network Error");
    }
    return null;
  }
};

const likePost = async (postId) => {
  try {
    const { data } = await AxiosInstance.put("/post/like/" + postId);
    const { success, message } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return data;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

const deletePost = async (postId) => {
  try {
    const { data } = await AxiosInstance.delete("/post/delete/" + postId);
    const { message, success } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return success;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return false;
  }
};

const commentPost = async (formData) => {
  try {
    const { data } = await AxiosInstance.post("/post/comment", formData);
    const { message, success } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return success;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return false;
  }
};

const getPostComments = async (postId) => {
  try {
    const { data } = await AxiosInstance.get("/post/comments/" + postId);
    const { comments } = data;
    return comments;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

const likeComment = async (commentId) => {
  try {
    const { data } = await AxiosInstance.put("/comment/like/" + commentId);
    const { success, message } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    return data;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

const repliedComment = async (formData) => {
  try {
    const { data } = await AxiosInstance.post("/comment/add-reply", formData);
    const { success, message } = data;
    if (success) {
      successToast(message);
    } else {
      errorToast(message);
    }
    console.log(data);
    return data;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

const getCommentReplies = async (commentId) => {
  try {
    const { data } = await AxiosInstance.get("/comment/replies/" + commentId);
    const { replies } = data;
    console.log(replies);
    return replies;
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data?.message);
    } else {
      errorToast(error.message ?? "Server Error!");
    }
    return null;
  }
};

export {
  RegisterUser,
  loginUser,
  logoutUser,
  getUser,
  createPost,
  fetchAllPosts,
  uploadMedia,
  likePost,
  deletePost,
  commentPost,
  getPostComments,
  likeComment,
  repliedComment,
  getCommentReplies,
};

//{withCredentials:true} it ensures that user is authorised
