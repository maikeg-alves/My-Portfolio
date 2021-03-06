import { useState } from "react";

import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Contact from "../layout/contact";
import NavBar from "../layout/NavBar";
import { RowStyled, SizeWin } from "../themes/styles/stylesAll";
import {
  Border_me,
  HomeStyle,
  Home_photo,
  Icon_home,
  HomeButton,
} from "../themes/styles/Home-Styles";
import Modallayout from "../layout/Modallayout";
import { ModalContact } from "../themes/styles/components/contact-styles";


export default function Home() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <SizeWin className="Home" id="home">
        <NavBar />
        {/* <Mobile_menu/> */}
        <RowStyled className="col-12 justify-content-center align-items-center ">
          <HomeStyle className="d-flex justify-content-around align-items-center px-5">
            <Border_me className=" col-auto px-3">
              <div>
                <h1>Maicon Gabriel Alves</h1>
              </div>
              <div>
                <h2>Front-end Web Development/ UI Design </h2>
              </div>
              <div>
                <HomeButton
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => setShow(true)}
                >
                  CONTATO
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
                    <a href="mailto:maicongabrielalves99@gmail.com?subject=Ol?? Maicon ">
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

      <ModalContact open={show} onClose={() => setShow(false)}>
        <Modallayout onClick={() => setShow(false)} className={"modalContact"}>
          <Contact onClick={() => setShow(false) } />
        </Modallayout>
      </ModalContact>
    </>
  );
}
