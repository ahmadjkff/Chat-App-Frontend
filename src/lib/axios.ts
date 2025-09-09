import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend-cots.onrender.com/api",
  withCredentials: true,
});
