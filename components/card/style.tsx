import styled from 'styled-components';
import { Card } from '@nextui-org/react';
export const MyCard = styled(Card)`
  background-image: url(${(props) => props.accessKey});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #030303;
`;
