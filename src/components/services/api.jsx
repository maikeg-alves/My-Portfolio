import axios from "axios";

const api = axios.create({
    baseURL: "https://api-center-heroku.herokuapp.com",
  });
  
export default api;