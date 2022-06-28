import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Modal } from "@mui/material";
export const Row_About = styled(Col)`
  transition: all 0.5s ease-in-out;
  .cv{
    color: #ff0000;
    text-decoration: none;
      @media (max-device-width: 425px) {
        font-size: 19px;
      }
      @media (max-device-width: 375px) {
        font-size: 20px;
      }
      @media (max-device-width: 320px) {
        font-size: 1.5rem;
      }
  }
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
    display: none;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
  }
  a{
    @media (max-device-width: 425px) {
        font-size: 19px;
      }
      @media (max-device-width: 375px) {
        font-size: 20px;
      }

  }
`;

export const ModalAboutme = styled(Modal)`
  .modalAboutme {
    width: 85%;
    height: 85%;
    display: flex;
    justify-content: space-between;

    svg {
      font-size: 2rem;
      @media (max-device-width: 768px) {
        font-size: 21px;
      }
    }
    h1 {
      font-size: 2rem;
      font-weight: 700;
    }
    p {
      @media (max-device-width: 768px) {
        font-size: 12px;
      }
      @media (max-device-width: 425px) {
        font-size: 19px;
      }
      @media (max-device-width: 375px) {
        font-size: 20px;
      }
      @media (max-device-width: 320px) {
        font-size: 1.5rem;
      }
    }

    button {
      border: 1px solid #000000;
      padding: 0.5rem;
      background-color: #fff;
      color: #000000;
      margin-bottom: 1rem;
      width: 100%;
      transition: 0.5s ease-in-out;
      a {
        color: #000000;
      }
      &:hover {
        background-color: #000000;
       a{ color: #fff;}
      }
    }
    @media (max-device-width: 768px) {
      width: 50%;
      height: 90%;
      button {
        font-size: 13px;
      }
    }
    @media (max-device-width: 425px) {
      width: 85%;
      height: 90%;
    }
    @media (min-device-width: 320px) and (max-device-width: 375px) {
      width: 85%;
      height: 85%;
      button {
        font-size: 1.5rem;
      }
    }
  }
`;
