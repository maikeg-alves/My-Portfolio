import styled from "styled-components";
import { Modal } from "@mui/material";

export const Enviar = styled.button`
  padding: 10px 44% 10px 45% !important;
  background-color: transparent;
  border-radius: 10px;
  color: #000000;
  /* margin-top: 10px; */
  &:hover {
    background-color: #000000;
    color: #ffffff;
    transition: 0.5s ease;
  }
`;

export const ImgProfile = styled.img`
  height: 80pt;
  width: 80pt;
  @media (min-device-width: 320px) and (max-device-width: 425px) {
    height: 180pt;
    width: 180pt;
  }
`;

export const ModalContact = styled(Modal)`
  .modalContact {
    display: flex;
    justify-content: space-evenly;
    svg {
      cursor: pointer;
    }
    button {
      padding: 15px 25px;
      border: unset;
      z-index: 1;
      position: relative;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
      overflow: hidden;
    }

    button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background-color: #212121;
      z-index: -1;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
    }

    button:hover {
      color: #e8e8e8;
    }

    button:hover::before {
      width: 100%;
    }

    @media (max-device-width: 768px) {
      label {
        margin-bottom: -0.5rem;
        font-size: 15px;
      }
    }

    @media (max-device-width: 425px) {
      width: 525px;
      height: auto;
      padding: 20px;
      img {
        height: 135pt;
        width: 135pt;
      }
      p {
        font-size: 23px;
      }
      label {
        margin-bottom: 0.5rem;
        font-size: 19px;
      }
      input {
        height: 53px;
        margin-bottom: 29px;
      }

      button {
        height: 74px;
        font-size: 23px;
      }
    }

    @media (min-device-width: 320px) and (max-device-width: 375px) {
      width: 585px;
      height: auto;
      padding: 20px;
      border-radius: 33px;
      svg {
        font-size: 30px;
      }
      label {
        margin-bottom: 1.5rem;
        font-size: 24px;
      }
      input {
        height: 68px;
        font-size: 23px;
      }
      button {
        height: 74px;
        font-size: 23px;
      }
      p {
        font-size: 26px;
      }
    }
  }
`;
