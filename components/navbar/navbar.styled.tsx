import { Link, Navbar } from '@nextui-org/react';
import { ITheme } from 'interfaces';
import styled from 'styled-components';

export const Nav = styled(Navbar)`
  background: transparent;
  color: ${(props: ITheme) => props.theme.navbar.color} !important;

  .nextui-navbar-container {
    background: ${(props: ITheme) => props.theme.navbar.background} !important;
    box-shadow: -25px 25px 29px
        ${(props: ITheme) => props.theme.boxShadow.color1},
      25px -25px 29px ${(props: ITheme) => props.theme.boxShadow.color2};
    .nextui-navbar-toggle-icon {
      filter: invert(1);
    }
  }
  .nextui-navbar-collapse {
    background: ${(props: ITheme) => props.theme.navbar.colapse} !important;

    .nextui-navbar-collapse-wrapper {
      background: transparent !important;
    }
  }
  a {
    padding: 0px !important;
  }
  .nav-link:focus,
  .nav-link:hover {
    color: #00ee87 !important;
  }
  a:hover {
    color: #00ee87 !important;
  }
`;

export const LinkText = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  color: ${(props: ITheme) => props.theme.navbar.color} !important;
`;
