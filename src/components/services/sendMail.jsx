import axios from "axios";
import dontenv from "dotenv";
dontenv.config();

const sendMail = axios.create({
  baseURL: process.env.SEND_EMAIL_BASE,
});

export default sendMail;
