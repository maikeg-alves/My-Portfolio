import { Button } from '@nextui-org/react';
import styled from 'styled-components';

export const ButtonMy = styled(Button)`
  background-color: #00ee87;
  color: #fff;
  z-index: 0;
  a {
    color: #fff;
  }
  &:focus {
    background-color: #00ee87;
    color: #fff;
    transform: translateY(-2px);
  }
  &:disabled {
    background-color: #3a3a3a;
    color: #9a9797;
  }
`;
