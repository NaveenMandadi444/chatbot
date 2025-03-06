import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Your backend URL
});

export const loginUser = async (email, password) => {
  return api.post("/login", { email, password });
};

export const signupUser = async (email, password) => {
  return api.post("/signup", { email, password });
};

export const sendChatMessage = async (message) => {
  return api.post("/chat", { message });
};
