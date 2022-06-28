import { Row } from "react-bootstrap";
import styled from "styled-components";

export const Navbools = styled(Row)`
  position: fixed;
  top: 42%;
  left: 95%;
  transition: all 0.5s ease-in-out;
  li {
    cursor: pointer;
    color: #ffffff75;
    &:focus {
      color: white;
    }
    a {
      color: rgba(255, 255, 255, 0.527);
      line-height: 75%;
      display: inline-block;
      border: solid 1px black;
      border-radius: 50%;
      &:hover{
        color: rgba(255, 255, 255, 0.789);
      }
      &:focus {
        color: rgb(255, 255, 255);
      }
    }
  }
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
  }
`;
