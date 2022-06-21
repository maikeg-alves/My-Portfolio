import "./styles/footer.css";
import {AiOutlineInstagram, AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from "react-icons/ai"
import Modal from '@mui/material/Modal';
import Contact from "../layout/contact";
import { useState } from "react";
import BtnCloseModal from "../layout/buttonCloseModal";
import { SizeWin } from "../themes/styles/stylesAll";
export default function Footer() {
  const [show, setShow] = useState(false);
  return (
    <>
    <SizeWin className="Footer" id="footer">
      <div className="row-box">
        <div className="box-styles">
          <div>
            <h2>Interesado em trabalharmos juntos?</h2>
            <h3>vamos marcar uma reunião? </h3>
          </div>
          <div>
            <button data-toggle="modal" data-target="#exampleModal" onClick={()=> setShow(true)}>
              Vamos trabalhar juntos
            </button>
          </div>
        </div>
      </div>
      <div className="row-box-white col-auto">
        <div className="box-white">
          <div className="col-5">
            <h1 className="text-break">
              Esse é o fim da pagina, mas pode ser o começo de tudo. :)
            </h1>
          </div>
          <div className="p-5 d-flex">
            <ul className="row-redes">
              <li>
                <a href="mailto:maicongabrielalves99@gmail.com?subject=Olá Maicon">
                  <span className="icon-footer"><AiOutlineMail/></span>
                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="https://github.com/maikeg-alves">
                  <span className="icon-footer"><AiFillGithub/></span>
                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="https://www.linkedin.com/in/maicon-gabriel-7b171421b/">
                <span className="icon-footer"><AiFillLinkedin/></span>
                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="https://alvo.chat/1mV">
                <span className="icon-footer"><AiOutlineWhatsApp/></span>

                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="https://www.instagram.com/m4ike._.sup/">
                  <span className="icon-footer"><AiOutlineInstagram/></span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p> todos os rireitos reserlvado a © Maicon Gabriel Alves</p>
          </div>
        </div>
      </div>
    </SizeWin>
    
    <Modal open={show} onClose={() => setShow(false)}>
        <Contact />
      </Modal>
    </>
  );
}
