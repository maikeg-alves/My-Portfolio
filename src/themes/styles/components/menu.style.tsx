import { Navbar, Text } from '@nextui-org/react';
import styled from 'styled-components';

export const Nav = styled(Navbar)`
  /* position: absolute; */
  background: transparent;
  color: #fff !important;

  .nextui-navbar-container {
    background: #000 !important;
    .nextui-navbar-toggle-icon {
      filter: invert(1);
    }
  }
  .nextui-navbar-collapse {
    background: #000000ae !important;
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
