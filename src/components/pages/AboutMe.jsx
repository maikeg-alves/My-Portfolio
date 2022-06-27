import { Col } from "react-bootstrap";
import { BoxText, Modaltext, Row_About } from "../themes/styles/About-styles";
import { SizeWin } from "../themes/styles/stylesAll";

export default function AboutMe() {
  return (
    <SizeWin className="About p-3" id="aboutme">
      <Row_About
        className="d-flex align-items-center justify-content-center "
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
          <h1>About Me</h1>
          <p>
            Oi! Eu sou Maicon Gabriel Alves. Um desenvolvedor front-end de São
            Paulo - SP que adora desafios e que está a procura de sempre
            resolver problemas com tecnologia e um apaixonado por ciência e
            astronomia.<br/><br/> Programação nasceu para mim como um hoppy em 2020, em
            meio a um cenário de incertezas, naquele ano eu tive uma certeza,
            que gostaria de tornar aquele hoppy em carreira, e desde então estou
            tralhando para que esse sonho se torne realidade. <br /><br/> Quando não estou
            codando, estou desenhando ou vendo algum documentário, amo aprender
            e descobrir coisas novas, sou dedicado e ágil, e gostaria de ter
            essa primeira oportunidade de emprego. 
          </p>
          <Modaltext onClick={()=> console.log("teste")} >
            ler mais...
          </Modaltext>
        </BoxText>
      </Row_About>
    </SizeWin>
    
  );
}
