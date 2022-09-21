import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin-top: 10px;
  li {
    margin: 0 10px;
    padding: 5px;
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
