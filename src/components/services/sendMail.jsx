import axios from "axios";


const sendMail = axios.create({
  baseURL: "https://gmail-nodemailer.herokuapp.com" ,
});

export default sendMail;
