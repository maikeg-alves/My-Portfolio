import styled from 'styled-components';
import { Card } from '@nextui-org/react';
export const MyCard = styled(Card.Body)`
  background-image: url(${(props) => props.accessKey});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #030303;
  filter: brightness(0.5);
`;
