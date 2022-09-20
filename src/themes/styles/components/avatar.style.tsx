import { useMediaQuery } from '@components/windowssize/useMediaQuery';
import styled from 'styled-components';

export const area = (value: boolean) => {
  return value ? '120px' : '150px';
};

export const MyAvatar = styled.div`
  width: ${() => area(useMediaQuery(960))};
  height: ${() => area(useMediaQuery(960))};
  border-radius: 50%;
  background-color: #00f78c;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: 0;
  }
`;
