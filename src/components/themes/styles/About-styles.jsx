import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Row_About = styled(Col)`
  transition: all 0.5s ease-in-out;
  img {
    width: 320px;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 426px) {
    flex-direction: column;
    div {
      padding-top: 2rem;
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }

    img {
      width: 393px;
    }
  }
`;

export const BoxText = styled(Col)`
  p {
    transition: 0.5s ease-in-out;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;

    text-overflow: ellipsis;
    font-size: 12px;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (max-device-width: 768px) {
    p {
      -webkit-line-clamp: 17;
    }
  }
  @media (min-width: 320px) and (max-width: 426px) {
    flex: 0 0 auto;
    width: 75%;
    p {
      -webkit-line-clamp: 6;
    }
  }
`;

export const Modaltext = styled.a`
    cursor: pointer;
`;
