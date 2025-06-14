import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const signUp = (userData) => axios.post(`${API_URL}/register`, userData);
export const signIn = (userData) => axios.post(`${API_URL}/login`, userData);
