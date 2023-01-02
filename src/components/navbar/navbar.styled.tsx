import { Link, Navbar as NavUI } from '@nextui-org/react';

import styled from 'styled-components';

export const Navbar = styled(NavUI)`
  background: transparent;
  color: ${(props) => props.theme.body.color} !important;

  .nextui-navbar-container {
    background: ${(props) => props.theme.navbar.background} !important;
    box-shadow: -10px 12px 29px ${(props) => props.theme.boxShadow.color1},
      25px -25px 29px ${(props) => props.theme.boxShadow.color2};
    .nextui-navbar-toggle-icon {
      filter: invert(1);
    }
  }
  .nextui-navbar-collapse {
    background: ${(props) => props.theme.navbar.colapse} !important;

    .nextui-navbar-collapse-wrapper {
      background: transparent !important;
    }

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
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
  color: ${(props) => props.theme.navbar.color} !important;
`;
