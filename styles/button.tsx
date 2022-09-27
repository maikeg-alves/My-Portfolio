import { Button } from "@nextui-org/react";
import styled from "styled-components";

export const ButtonMy = styled(Button)`
  background-color: #00ee87;
  color: #fff;
  a {
    color: #fff;
  }
  &:focus {
    background-color: #00ee87;
    color: #fff;
    transform: translateY(-2px);
  }
`;
