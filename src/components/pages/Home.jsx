import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import Contact from "./contact";

import "./styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  const open = () => {
    console.log("teste");
    /* navigate('/contact') */
  };

  return (
    <Container className="Home" id="home">
      <Row className="justify-content-center align-items-center">
        <div className="d-flex justify-content-between align-items-center px-5">
          <div className="border-me col-auto px-3">
            <div>
              <h1>Maicon Gabriel Alves</h1>
            </div>
            <div>
              <h2>Developer frontend/ Desing/ Artinst</h2>
            </div>
            <div>
              <button data-toggle="modal" data-target="#exampleModal">
                CONATAT ME
              </button>
            </div>
          </div>
          <div className="col-auto px-5 ">
            <div className="photo-profile"></div>
            <div className="col-12 d-flex justify-content-center">
              <ul className=" d-flex">
                <li>
                  <a href="#">
                    <span className="icon">
                      <AiFillGithub />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <AiOutlineMail />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <AiOutlineInstagram />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Contact />
      </Row>
    </Container>
  );
}
