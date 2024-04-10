import axios from "axios";
import { errorToast, successToast } from "./Toast";
const baseUrl = process.env.REACT_APP_SERVER_URL;
const RegisterUser = async (user) => {
  try {
    const { data } = await axios.post(baseUrl + "/auth/register", user, {
      withCredentials: true,
    });
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
    const { data } = await axios.post(baseUrl + "/auth/login", formData, {
      withCredentials: true,
    });
    const { success, message, user } = data;
    console.log(message);
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
    const { data } = await axios.get(baseUrl + "/auth/logout", {
      withCredentials: true,
    });
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
    const { data } = await axios.get(baseUrl + "/auth/user", {
      withCredentials: true,
    });
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

export { RegisterUser, loginUser, logoutUser, getUser };

//{withCredentials:true} it ensures that user is authorised
