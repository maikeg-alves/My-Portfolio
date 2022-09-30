import { ITheme } from 'interfaces';
import styled from 'styled-components';

const theme = (props: ITheme) => {
  return {
    color: props.theme.body.color,
    background: props.theme.body.background,
    boxShadow: props.theme.boxShadow.color1,
    boxShadow2: props.theme.boxShadow.color2,
  };
};

console.log(theme);

export const MyAvatar = styled.div`
  width: ${(propss) => propss.accessKey};
  height: ${(propss) => propss.accessKey};
  border-radius: 50%;
  background-color: #00f78c;
  span {
    display: block !important;
  }
`;
