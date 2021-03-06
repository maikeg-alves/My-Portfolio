import {AiOutlineInstagram, AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from "react-icons/ai"
import Contact from "../layout/contact";
import { useState } from "react";

import { SizeWin } from "../themes/styles/stylesAll";
import { BoxContact, BoxWhite, IconFoote, RowBoxWhite, RowRedes, TextTitle } from "../themes/styles/Footer-styles";
import { ModalContact } from "../themes/styles/components/contact-styles";
import Modallayout from "../layout/Modallayout";

export default function Footer() {
  const [show, setShow] = useState(false);
  return (
    <>
    <SizeWin className="Footer justify-content-end" id="footer">
     
      <BoxContact>
       <div className="bg_top"></div>
        <div className="bg_buttom"></div>
        <div className="BoxStyles">
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
        </BoxContact>

      <RowBoxWhite className="bg-full-white bg col-auto">
        <BoxWhite>
          <TextTitle className="col-5">
            <h1 className="text-break">
              Esse é o fim da pagina, mas pode ser o começo de tudo. :)
            </h1>
          </TextTitle>
          <div className="p-5 d-flex">
            <RowRedes >
              <li>
                <a href="mailto:maicongabrielalves99@gmail.com?subject=Olá Maicon" alt="Email">
                  <IconFoote><AiOutlineMail/></IconFoote>
                </a>
              </li>
            </RowRedes>
            <RowRedes >
              <li>
                <a href="https://github.com/maikeg-alves" alt="Github">
                  <IconFoote><AiFillGithub/></IconFoote>
                </a>
              </li>
            </RowRedes>
            <RowRedes >
              <li>
                <a href="https://www.linkedin.com/in/maicon-gabriel-7b171421b/" alt="Linkedin">
                <IconFoote><AiFillLinkedin/></IconFoote>
                </a>
              </li>
            </RowRedes>
            <RowRedes >
              <li>
                <a href="https://alvo.chat/1mV" alt="Whatsapp">
                <IconFoote><AiOutlineWhatsApp/></IconFoote>
                </a>
              </li>
            </RowRedes>
            <RowRedes >
              <li>
                <a href="https://www.instagram.com/m4ike._.sup/" alt="Instagram">
                  <IconFoote><AiOutlineInstagram/></IconFoote>
                </a>
              </li>
            </RowRedes>
          </div>
          <div>
            <p> todos os rireitos reserlvado a © Maicon Gabriel Alves</p>
          </div>
        </BoxWhite>
      </RowBoxWhite>
    </SizeWin>
    
    <ModalContact open={show} onClose={() => setShow(false)}>
       <Modallayout onClick={()=> setShow(false)} className={"modalContact"}>
         <Contact onClick={()=> setShow(false) }/>
       </Modallayout>  
      </ModalContact>
    </>
  );
}
