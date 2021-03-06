import { Row } from "react-bootstrap";
import styled from "styled-components";

export const Skills_row = styled(Row)`
  flex: 0 0 auto;
  width: 100%;
  color: #fff;
  span {
    margin: 0.3rem;
  }
  div > h1 {
    text-align: center;
    padding: 10px;
    @media (max-device-width: 320px) {
      font-size: 2.5rem;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 10px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    margin: 38px;
    li {
      margin: 0;
      padding: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      width: auto;
      height: 100%;

      img {
        width: 100%;
        height: 100px;
        padding: 10px;
        @media (min-device-width: 425px) and (max-device-width: 768px) {
          width: 80px;
          height: 80px;
          padding: 10px;
        }
      }

      p {
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        color: #000;
      }
    }
  }
  @media (min-device-width: 1440px) and (max-device-width: 1920px) {
    ul {
      margin-left: 17%;
      margin-right: 17%;
    }
  }
  @media (max-device-width: 320px) {
    div > h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Skills_row_lodding = styled(Row)`
  color: #000000;
  border-color: #fff;

  div > h1 {
    text-align: center;
    padding: 10px;
  }
`;
