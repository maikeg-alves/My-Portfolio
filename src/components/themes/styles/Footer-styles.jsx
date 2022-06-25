import styled from "styled-components";

export const RowBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  background: black;
  padding: 19px;
  height: auto;
  width: 100vh;
  border-radius: 20px;
  box-shadow: 15px 17px 33px 0px #0b0b0b;
  position: absolute;
  top: 310%;

  h2,
  h3,
  button {
    text-align: center;
  }

  button {
    background: transparent;
    border: solid 5px white;
    color: white;
    padding: 10px;
    border-radius: 100px;
  }

  @media (max-device-height: 1440px) {
    top: 307%;
    padding: 7px;
    h2,
    h3 {
      font-size: 30px;
    }
    button {
      font-size: 19px!important;
    }
  }

  @media (max-device-height: 1024px) {
    top: 307%;
    padding: 7px;
    h2,
    h3 {
      font-size: 24px;
    }
    button {
      font-size: 11px;
    }
  }
  @media (max-device-width: 768px) {
    top: 308%;
    padding: 5px;
    h2,
    h3 {
      font-size: 1.2rem;
    }
    button {
      font-size: 11px;
    }
  }
  @media (max-device-width: 425px) {
    top: 477%;
  }
  @media (max-device-width: 375px) {
    top: 545%;
  }
  @media (max-device-width: 320px) {
    top: 611%;
  }
`;

export const RowBoxWhite = styled.div`
  background-image: url("/src/img/bg-white-full.svg");
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  padding-bottom: 13%;
  padding-top: 13%;
  width: 100%;
  @media (max-device-height: 1090px) {
    padding-top: 6%;
    padding-bottom: 6%;
  }
  @media (max-device-width: 1440px) {
    padding-bottom: 11%;
    padding-top: 11%;
  }
  @media (max-device-width: 1024px) {
    padding-bottom: 6%;
    padding-top: 6%;
  }
  @media (max-device-width: 768px) {
    padding-bottom: 5%;
    padding-top: 5%;
  }
  @media (max-device-width: 425px) {
    padding-bottom: 30%;
    padding-top: 30%;
  }
  @media (max-device-width: 375px) {
    padding-bottom: 35%;
    padding-top: 35%;
  }
  @media (max-device-width: 320px) {
    padding-bottom: 50%;
    padding-top: 50%;
  }
`;
export const BoxWhite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 55px;

  h1 {
    text-align: center;
  }
`;
export const RowRedes = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const IconFoote = styled.span`
  border-radius: 50%;
  font-size: 40px;
  color: white;
  background: #000000d1;
  padding: 9px;
`;

export const TextTitle = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
    flex: 0 0 auto !important;
    width: auto !important;
    h1 {
      text-align: center;
      font-size: 50px;
    }
  }
`;
