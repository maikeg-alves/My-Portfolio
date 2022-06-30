import { Row } from "react-bootstrap";
import styled from "styled-components";

// Styles for the entire page
export const SizeWin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

   span {
    line-height: 75%;
    display: inline-block;
   }
  @media (max-width: 456px) {
    height: 155vh;
  }
  @media (min-width: 375px) and (max-width: 425px) {
    height: 175vh;
  }
  @media (max-width: 320px) and (max-width: 375px) {
    height: 200vh;
  }
`;

//colocar em todas as pages ⚠️
export const RowStyled = styled(Row)`
  @media (max-width: 768px) {
    --bs-gutter-x: 0;
  }

  @media (max-width: 456px) {
    --bs-gutter-x: 0;
  }
  @media (max-width: 375px) {
    --bs-gutter-x: 0;
  }
  @media (max-width: 320px) {
    --bs-gutter-x: 0;
  }
`;

//App
export const App_ = styled.div`
  max-width: 100%;
  height: 100vh;
  @media (max-width: 426px) {
    max-width: none;
    width: 100vh;
    height: 100vh;
  }
`;
//modal

export const BoxStyledall = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  border: 2px solid #000;
  box-shadow: 24px;
  border-radius: 19px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  border-radius: 17px;
  padding: 15px;
  transition: 0.5s ease;
`

