import styled from "styled-components";


export const HomeStyle = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

export const Home_photo = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-image: url(/src/img/Grupo35.png);
  box-shadow: -20px 19px 20px 0px #0b0b0b, -20px -15px 59px 4px #313131;
  margin-bottom: 5%;
  background-position: center;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position-y: top;
  transition: all 0.5s ease-in-out;
  @media (max-width: 768px) {
    height: 240px;
    width: 240px;
    margin-bottom: 10%;
  }
  @media (min-width: 320px) and (max-width: 426px) {
    height: 400px;
    width: 400px;
    margin-bottom: 10%;
    color: #8e1414;
  }
`;

export const HomeButton = styled.button`
  padding: 5px 22px 5px 22px;
  border: solid white 1px;
  background: none;
  color: white;
  transition: 0.3s;
  &:hover {
    button {
      background: white;
      color: black;
    }
  }
  @media (max-width: 768px) {
    padding: 5px 22px 5px 22px;
    border: solid white 1px;
    background: none;
    color: white;
  }
  @media (min-width: 320px) and (max-width: 426px) {
    padding: 5px 80px 5px 80px;
    font-size: 2.2em;
    margin-top: 20px;
  }
`;

export const Border_me = styled.div`
   transition: all 0.5s ease-in-out;
  .Row {
    --bs-gutter-x: none;
  }
  border-left: solid #e2dede 4px;
  @media (max-width: 768px) {
    .Row {
      --bs-gutter-x: none;
    }
    .px {
      padding: 0px;
    }
    margin-top: 20px;
    border-left: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1,
  h2 {
    @media (max-width: 768px) {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    @media (min-width: 377px) and (max-width: 426px) {
      font-size: 2.2em;
      margin-bottom: 10px;
    }
    @media (min-width: 320px) and (max-width: 376px) {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
  }
`;

export const Icon_home = styled.span`
  border-radius: 50%;
  font-size: 21px;
  color: black;
  background: #ffffffd1;
  padding: 2px;

  span {
    line-height: 75%;
    display: inline-block;
  }
`;

// home - menu

export const Show_menu = styled.div`
  @media (max-width: 426px) {
    display: none;
  }
`;

export const Day_menu = styled.h1`
  @media (max-width: 768px) {
    font-size: 19px !important;
    margin-bottom: 0px !important;
  }
  @media (min-width: 320px) and (max-width: 426px) {
    font-size: 27px !important;
  }
`;
// home - menu - mobile