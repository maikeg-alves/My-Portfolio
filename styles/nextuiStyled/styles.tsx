import styled from 'styled-components';
import { Text, Button } from '@nextui-org/react';
import { Col } from 'react-bootstrap';

export const TextUI = styled(Text)`
  color: ${(props) => props.theme.body.color};
`;

export const ConatinerUIH1 = styled(Col)`
  display: flex !important;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  .nextui-c-PJLV-iwNYPs-css {
    color: #ececec;
    text-transform: none;
    background: linear-gradient(90deg, #551fdd 0%, #8900fa 100%);
    padding: 10px 0;
    margin: 0 4px;
    border-radius: 9px;
  }
`;

export const ButtonUI = styled(Button)`
  background: #fff !important;
  color: #000 !important;
`;
