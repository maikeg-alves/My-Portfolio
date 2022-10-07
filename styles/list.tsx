import styled from 'styled-components';

export const List = styled.ul`
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 10px 0 !important;
  padding: 0 !important;
  padding-left: 0 !important;
  li {
    margin: 0 10px;
    padding: 5px !important;
    border-radius: 50%;
    background-color: #00ee87;
    a {
      text-decoration: none;
      color: #000000;
      display: flex;
      span {
        font-size: 20px;
        display: inline-flex;
      }
    }
  }
`;
