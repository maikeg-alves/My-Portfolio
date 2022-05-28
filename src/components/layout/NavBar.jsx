import { Container, Nav, Row } from "react-bootstrap";
import "./all-styles-layout.css";
import $ from "jquery";

export default function NavBar() {
  const menumobile = () => {
    $(".menu-mobile").css("display", "block");
    $(".menu-mobile-hamburge").css("display", "none");
  };

  const closemenu = () => {
    $(".menu-mobile").css("display", "none");
    $(".menu-mobile-hamburge").css("display", "block");
  }

  return (
    <div className="menu">
      <Container>
        <Nav className="menu-web p-4 justify-content-end">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Home</Nav.Link>
        </Nav>
      </Container>

      <Container className="Container-fd menu-mobile-hamburge">
        <Row className="p-4 justify-content-end">
          <div className="img-menu" onClick={menumobile}>
            <img src="./src/img/menu.png" alt="menu" />
          </div>
        </Row>
      </Container>

      <Container className="container-fd menu-mobile">
        <Row className="menu-bg-size justify-content-end">
          <div className="menu-bg">
            <div className="row p-4 justify-content-end">
              <div className="col-12 img-close" onClick={closemenu}>  
                <img src="./src/img/close.png" alt="close" />
              </div>
            </div>
            <Nav className="text-size-menu p-5 align-items-center flex-column">
              <Nav.Link className="py-3">Home</Nav.Link>
              <Nav.Link className="py-3">Home</Nav.Link>
              <Nav.Link className="py-3">Home</Nav.Link>
              <Nav.Link className="py-3">Home</Nav.Link>
              <Nav.Link className="py-3">Home</Nav.Link>
            </Nav>
          </div>
        </Row>
      </Container>
    </div>
  );
}
