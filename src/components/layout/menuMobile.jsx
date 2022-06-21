import { Container, Nav, Row, Stack } from "react-bootstrap";
import styled from "styled-components";

export default function MenuMobile() {

const Mobile_menu = styled(Container)`
    display: none;
   @media (min-width: 320px) and (max-width: 426px) {
    display: block;
    grid-area: sidenav;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 102%;
    position: fixed;    
    overflow-y: auto;
    z-index: 2;
    background-color: #394263;
    transform: translateX(-245px);
    transition: all 0.6s ease-in-out;
  }
`
  return (
    <>
      <Mobile_menu className="menu mobile">
        <Row>
          <Stack gap={4}>
            <COl>
              <Nav.Link href="">HOME</Nav.Link>
              <Nav.Link href="">PROJETOS</Nav.Link>
              <Nav.Link href="">SOBRE MIM</Nav.Link>
              <Nav.Link href="">CONTATO</Nav.Link>
            </COl>
          </Stack>
        </Row>
      </Mobile_menu>
    </>
  );
}
