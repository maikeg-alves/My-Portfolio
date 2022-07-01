import axios from "axios";
import dontenv from "dotenv";
dontenv.config();

const apiGithub = axios.create({
    baseURL: process.env.REACT_APP_API_GITHUB,
    });

export default apiGithub;