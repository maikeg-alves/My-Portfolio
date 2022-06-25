import { Col } from "react-bootstrap";
import { BoxText, Row_About } from "../themes/styles/About-styles";
import { SizeWin } from "../themes/styles/stylesAll";

export default function AboutMe() {
  return (
    <SizeWin className="About p-3" id="aboutme">
      <Row_About className="d-flex align-items-center justify-content-center " xs={12}>
          <Col className="px-2 col-auto">
             <img src={"/src/img/aboutme.png"} alt="aboutme" className="img-fluid"></img>
          </Col>
          <BoxText xs={4} className=" px-2">
            <h1>About Me</h1>
            <p>
              My name is <strong>João Victor</strong> and I'm a <strong>Front-End Developer</strong> with a <strong>Master's Degree in Computer Science</strong> from <strong>Universidade de São Paulo</strong>.
            </p>
            <p>
              I'm a <strong>
                <a href="https://www.linkedin.com/in/joaovictor-santos-de-souza-b9a8b8a4/">
                  Full Stack Developer
                </a>
              </strong> with a <strong>
                <a href="https://www.linkedin.com/in/joaovictor-santos-de-souza-b9a8b8a4/">
                  Master's Degree in Computer Science
                </a>
              </strong> from <strong>
                <a href="https://www.linkedin.com/in/joaovictor-santos-de-souza-b9a8b8a4/">
                  Universidade de São Paulo
                </a>
              </strong>.
            </p>
          </BoxText>
      </Row_About>
    </SizeWin>
  );
}