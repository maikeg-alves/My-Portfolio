import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import {  AiOutlineInstagram, AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Contact from "../layout/contact";
import Modal from "@mui/material/Modal"; 
import "./styles/home.css";
import NavBar from "../layout/NavBar";
import { RowStyled, SizeWin } from "../themes/styles/stylesAll";
import { Border_me, HomeStyle, Home_photo, Icon_home, HomeButton} from "../themes/styles/Home-Styles";

export default function Home() {
  const [show, setShow] = useState(false);

  function handleClose(data) {

    console.log(data, "teste de botão");
  }
  return (
    <>
      <SizeWin className="Home" id="home" >
      <NavBar /> 
      {/* <Mobile_menu/> */}
        <RowStyled className="justify-content-center align-items-center">
          <HomeStyle className="d-flex justify-content-between align-items-center px-5">
            <Border_me className=" col-auto px-3">
              <div>
                <h1>Maicon Gabriel Alves</h1>
              </div>
              <div>
                <h2>Developer frontend/ Desing/ Artinst</h2>
              </div>
              <div>
                <HomeButton
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => setShow(true)}
                >
                  CONATAT ME
                </HomeButton>
              </div>
            </Border_me>
            <div className="col-auto px-5 ">
              <Home_photo></Home_photo>
              <div className="col-12 d-flex justify-content-center">
                <ul className=" d-flex">
                    <li>
                      <a href="https://www.linkedin.com/in/maicon-gabriel-7b171421b/">
                        <Icon_home className="icon">
                          <AiFillLinkedin />
                        </Icon_home>
                      </a>
                    </li>
                  <li>
                    <a href="https://github.com/maikeg-alves">
                      <Icon_home className="icon">
                        <AiFillGithub />
                      </Icon_home>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:maicongabrielalves99@gmail.com?subject=Olá Maicon ">
                      <Icon_home className="icon">
                        <AiOutlineMail />
                      </Icon_home>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/m4ike._.sup/">
                      <Icon_home className="icon">
                        <AiOutlineInstagram />
                      </Icon_home>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </HomeStyle>
        </RowStyled>
      </SizeWin>

      <Modal open={show} onClose={() => setShow(false)}>
        <Contact testedefuncion={handleClose} />
      </Modal>
    </>
  );
}
