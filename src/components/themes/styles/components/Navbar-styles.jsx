import styled from 'styled-components';

export const Menu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: white;
    a {
        color: #fff !important;
       @media (max-device-width: 768px) { 
        font-size:10px;
       }
    }
`;

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