import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Row_About = styled(Col)`
   
  transition: all 0.5s ease-in-out;
  img {
    width: 320px;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 426px) {
  flex-direction:column;
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
   @media (min-width: 320px) and (max-width: 426px) {
    flex: 0 0 auto;
    width: 75%;
   }
`