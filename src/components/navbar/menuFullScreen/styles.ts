import styled from 'styled-components';
/* import { motion } from 'framer-motion';
 */
export const Main = styled.main<{ isOpen: boolean }>`
  position: relative;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.navbar.colapse};
  backdrop-filter: blur(10px);
  z-index: 1;
  transform: translateY(${({ isOpen }) => (isOpen ? '0%' : '-100%')});
  /*  transition: all 0.5s ease-in-out; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fade-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
    width: 100%;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.navbar.color};
      margin: 5%;
      font-size: clamp(1rem, 4.1vw + 0.2rem, 10rem);
    }
  }

  /* Definindo o atraso de transição para cada link */
  .fade-in:nth-child(1) {
    animation-delay: 0s;
  }
  .fade-in:nth-child(2) {
    animation-delay: ${(props) => (props.isOpen ? '0.4s' : '0s')};
  }
  .fade-in:nth-child(3) {
    animation-delay: ${(props) => (props.isOpen ? '0.8s' : '0s')};
  }
  .fade-in:nth-child(4) {
    animation-delay: ${(props) => (props.isOpen ? '1.2s' : '0s')};
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

//a {
//
//  color: #fafafa;
//  font-size: clamp(1rem, 4.1vw + 0.2rem, 10rem);
//  margin: 2%;
//  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
//  transition: opacity 0.3s ease;
//
//  /* Definindo o atraso de transição para cada link */
//  &:nth-child(1) {
//     transition-delay: ${({ isOpen }) => (isOpen ? '0.2s' : '0s')};
//
//
//  }
//  &:nth-child(2) {
//    transition-delay: ${({ isOpen }) => (isOpen ? '0.4s' : '0s')};
//
//  }
//  &:nth-child(3) {
//     transition-delay: ${({ isOpen }) => (isOpen ? '0.6s' : '0s')};
//
//  }
//  &:nth-child(4) {
//     transition-delay: ${({ isOpen }) => (isOpen ? '0.8s' : '0s')};
//
//  }
//}
