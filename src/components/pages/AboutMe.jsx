import { useState } from "react";
import { Col } from "react-bootstrap";
import Modallayout from "../layout/Modallayout";
import {
  BoxText,
  ModalAboutme,
  Modaltext,
  Row_About,
} from "../themes/styles/About-styles";
import { ImgProfile } from "../themes/styles/components/contact-styles";
import { SizeWin } from "../themes/styles/stylesAll";

export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SizeWin className="About  p-3" id="aboutme">
        <Row_About
          className="d-flex align-items-center justify-content-center reveal"
          xs={12}
        >
          <Col className="px-2 col-auto">
            <img
              src={"/src/img/aboutme.png"}
              alt="aboutme"
              className="img-fluid"
            ></img>
          </Col>
          <BoxText xs={4} className=" px-2">
            <h1>Sobre Mim</h1>
            <p>
              Oi! Eu sou Maicon Gabriel Alves. Um desenvolvedor front-end de São
              Paulo - SP que adora desafios e que está a procura de sempre
              resolver problemas com tecnologia e um apaixonado por ciência e
              astronomia.
              <br />
              <br /> Programação nasceu para mim como um hoppy em 2020, em meio
              a um cenário de incertezas, naquele ano eu tive uma certeza, que
              gostaria de tornar aquele hoppy em carreira, e desde então estou
              tralhando para que esse sonho se torne realidade. <br />
              <br /> Quando não estou codando, estou desenhando ou vendo algum
              documentário, amo aprender e descobrir coisas novas, sou dedicado
              e ágil, e gostaria de ter essa primeira oportunidade de emprego.
            </p>

             <a href="" className="cv">Baixar meu curículo (197kbps)</a>
            <Modaltext onClick={() => setOpen(true)}>ler mais...</Modaltext>
          </BoxText>
        </Row_About>
      </SizeWin>
      {/* modal */}
      <ModalAboutme open={open} onClose={() => setOpen(false)}>
        <Modallayout onClick={() => setOpen(false)} className={"modalAboutme"}>
          <Col>
            <ImgProfile src="/src/img/Grupo35.png" />
          </Col>
          <Col>
            <h1>Sobre Mim</h1>
          </Col>
          <Col className="px-4">
            <p>
              Oi! Eu sou Maicon Gabriel Alves. Um desenvolvedor front-end de São
              Paulo - SP que adora desafios e que está a procura de sempre
              resolver problemas com tecnologia e um apaixonado por ciência e
              astronomia.
              <br />
              <br /> Programação nasceu para mim como um hoppy em 2020, em meio
              a um cenário de incertezas, naquele ano eu tive uma certeza, que
              gostaria de tornar aquele hoppy em carreira, e desde então estou
              tralhando para que esse sonho se torne realidade. <br />
              <br /> Quando não estou codando, estou desenhando ou vendo algum
              documentário, amo aprender e descobrir coisas novas, sou dedicado
              e ágil, e gostaria de ter essa primeira oportunidade de emprego.
            </p>
          </Col>
          <Col xs={12}>
            <button>
              <a href="">Baixar CV</a>
            </button>
          </Col>
        </Modallayout>
      </ModalAboutme>
    </>
  );
}
