import styled from 'styled-components';

export const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
  color: white;
  z-index: 3;
`;

export const Nav = styled.div`
  display: flex;
  position: relative;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.background}; //TODO: mudar com theme
  height: 76px;
  width: 100%;

  padding-left: 1.5rem;
  padding-right: 1.5rem;

  max-width: 1400px;
  /* z-index: var(--nextui-zIndices-5); */

  background: ${(props) =>
    props.theme.background}!important; //TODO: mudar com theme
  box-shadow: ${(props) =>
    `-10px 12px 29px ${props.theme.boxShadow.color1}, 25px -25px 29px ${props.theme.boxShadow.color2}`}; //TODO: mudar com theme

  margin-top: calc(1.5rem * 0.5);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 14px;

  ul {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    align-items: center;
    color: inherit;
    margin: 0px;
    gap: 1.5rem;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0 !important;
  color: ${(props) => props.theme.navbar.color} !important;
  &:hover {
    border-radius: 5px;
    color: #00ee87 !important;
  }
`;

export const SimpleLink = styled.a<{ isHambugerVisible: boolean }>`
  color: ${(props) =>
    props.theme.navbar.color} !important; /* TODO: adiconar cor do theme */

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 30px;
  }

  &:hover {
    font-style: none;
    color: black;
  }
`;

export const Teste = styled.div``;
