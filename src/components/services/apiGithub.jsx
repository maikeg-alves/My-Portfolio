import axios from "axios";

const apiGithub = axios.create({
    baseURL: "https://api.github.com/repos/maikeg-alves",
    });

export default apiGithub;