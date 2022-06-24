import { Row } from "react-bootstrap";
import styled from "styled-components";

export const Navbools = styled(Row)`
  position: fixed;
  top: 42%;
  left: 95%;
  transition : all 0.5s ease-in-out;
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
  }
`;
