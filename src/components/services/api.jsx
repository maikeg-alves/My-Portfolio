import axios from "axios";
import dontenv from "dotenv";
dontenv.config();

const api = axios.create({
    baseURL: process.env.URL_BASE_API,
  });
  
export default api;