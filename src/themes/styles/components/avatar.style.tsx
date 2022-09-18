import { useMediaQuery } from '@/components/windowssize/usemediaquery';
import styled from 'styled-components';

const area = (value: boolean) => {
  return value ? '120px' : '150px';
};

export const MyAvatar = styled.div`
  width: ${(props) => area(useMediaQuery(960))};
  height: ${(props) => area(useMediaQuery(960))};
  border-radius: 50%;
  background-color: #00f78c;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: 0;
  }
`;
