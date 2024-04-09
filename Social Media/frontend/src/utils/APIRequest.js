import axios from "axios";
import { errorToast, successToast } from "./Toast";
const baseUrl = process.env.REACT_APP_SERVER_URL;
const RegisterUser = async (user) => {
  try {
    const { data } = await axios.post(baseUrl + "/auth/register", user);
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
    const { data } = await axios.post(baseUrl + "/auth/login", formData);
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
const logoutUser = async (formData) => {
  try {
    const { data } = await axios.get(baseUrl + "/auth/logout");
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
export { RegisterUser, loginUser, logoutUser };
