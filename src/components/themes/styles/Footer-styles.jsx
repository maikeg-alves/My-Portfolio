import styled from "styled-components";


export const RowBoxWhite = styled.div`
  background-image: url("/src/img/bg-white-full.svg");
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  width: 100%;
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
  @media (max-device-width: 1440px) {
    padding-top: 10%;
    padding-bottom: 10%;
    }

  @media (min-device-width: 375px) and (max-device-width: 425px) {
    padding-top: 25%;
    padding-bottom: 25%;
  }
  @media (max-device-width: 375px) {
    padding-top: 40%;
    padding-bottom: 40%;
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

export const BoxContact = styled.div`
  width: 100%;
  position: relative;
  .bg_top {
    background-color: #f9161600;
    height: 120px;
  }
  .bg_buttom {
    background-image: url("/src/img/bg-white-full.svg"); 
    height: 120px;
    background-size: cover;
    background-position: center;
  }
  .BoxStyles {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    background: black;
    padding: 19px;
    height: auto;
    border-radius: 20px;
    box-shadow: 15px 17px 33px 0px #0b0b0b;
    color: white;
    position: absolute;
    top: 20%;
    left: 20%;
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
    @media (max-device-width: 1440px) {
      left: 25%;
    }
    @media (max-device-width: 1024px) {
      h2,
      h3 {
        font-size: 1.5rem;
      }
    }
    @media (max-device-width: 768px) {
      top: 25%;
      left: 14%;
      h2,
      h3 {
        font-size: 1.2rem;
      }
    }
    @media (min-device-width: 320px) and (max-device-width: 480px) {
      left: 8%;
    }
  }

`;
