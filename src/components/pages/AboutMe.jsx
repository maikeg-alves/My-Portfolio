import { Container, Row } from "react-bootstrap";
import "./styles/about.css";

export default function AboutMe() {
  return (
    <Container className="About" id="aboutme">
      <Row className="justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center">
          <div className="col-4 mx-3">
            <img src="/src/img/aboutme.png" className="photo-profile-about" alt="" />
          </div>
          <div className=" col-4 about-text">
            <h1>SOBRE MIM</h1>
             <p className="text-breaks">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.{" "}
              </p>
             <a href="">Meu curriculo (197 bk)</a>
            </div>
        </div>
      </Row>
    </Container>
  );
}
