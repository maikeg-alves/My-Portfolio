import styled from 'styled-components';

export const MyAvatar = styled.div`
  width: ${(propss) => propss.accessKey};
  height: ${(propss) => propss.accessKey};
  border-radius: 50%;
  background-color: #00f78c;
  span {
    display: block !important;
  }
`;
