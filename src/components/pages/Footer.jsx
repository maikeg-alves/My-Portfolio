import "./styles/footer.css";
import {AiOutlineInstagram, AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from "react-icons/ai"
export default function Footer() {
  return (
    <div className="Footer" id="footer">
      <div className="row-box">
        <div className="box-styles">
          <div>
            <h2>Interesado em trabalharmos juntos?</h2>
            <h3>vamos marcar uma reunião? </h3>
          </div>
          <div>
            <button data-toggle="modal" data-target="#exampleModal">
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
                <a href="#">
                  <span className="icon-footer"><AiOutlineMail/></span>
                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="#">
                  <span className="icon-footer"><AiFillGithub/></span>
                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="#">
                <span className="icon-footer"><AiFillLinkedin/></span>
                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="#">
                <span className="icon-footer"><AiOutlineWhatsApp/></span>

                </a>
              </li>
            </ul>
            <ul className="row-redes">
              <li>
                <a href="home">
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
    </div>
  );
}
