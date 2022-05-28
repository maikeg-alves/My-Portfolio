import { Container, Row } from "react-bootstrap";
import $ from "jquery";

export default function AboutMe() {

  return (
    <div>
      <Container className="About">
        <Row className="About-row justify-content-center align-items-center">
          <div className="About-corpo col-8  text-md-center">
            <div className="About-what col-12">
              <h1>Quem sou eu?</h1>
            </div>
            <div className="About-me col-12">
              <p className="text-break">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                voluptatum modi maiores inventore iste culpa nesciunt ea facilis
                quam ab a impedit harum consequuntur, deleniti fugit. Impedit
                minus omnis dolor. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Voluptatibus assumenda consectetur, dolore ut,
                provident fugit impedit ipsa blanditiis rem perferendis aliquid
                quibusdam numquam temporibus doloremque magni. Corrupti a eos
                dolorum. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam iure tempora suscipit perspiciatis odit
                aspernatur, repellat dolorum adipisci quibusdam blanditiis! Nam
                totam natus obcaecati sunt consequuntur velit aspernatur veniam
                dolorum.
              </p>
            </div>
            <div className="About-curriculo col-12">
              <a href="">Meu curriculo (pdf 109kb)</a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
