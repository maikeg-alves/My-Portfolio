import styled from 'styled-components';
import { Text } from '@nextui-org/react';

export const TextUI = styled(Text)`
  color: ${(props) => props.theme.body.color};
`;
