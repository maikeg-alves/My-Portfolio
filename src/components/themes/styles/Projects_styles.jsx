import styled from "styled-components";

export const Buttun = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 27px;
  height: 383px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    cursor: pointer;
    background-color: #f4f4f43e;
  }
`;

export const RowBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  height: 400px;
  width: 250px;
  margin-left: 10px;
  cursor: pointer;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
  &:hover {
    background-size: 405%;
    transition: background-size 2s ease-in;
    transition: 10s ease-in-out;
  }

  @media (max-width: 426px) {
    height: 840px;
    width: 535px;
    margin-left: 12px;
  }
`;

export const ItemCover = styled.div`
  background-color: #0000004f;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  font-size: 12px;
  &:hover {
    background-color: #00000087;
    transition: 0.5s ease-in-out;
  }
`;

export const Carousel = styled.div`
  background-color: transparent;
  padding: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Text_item = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-overflow: ellipsis;
  font-size: 12px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
    @media (max-width: 768px) {
    text-align: center;
    padding-bottom: 30px;
    }
    @media (max-width: 426px) {
        h1 {
        font-size: 35px;
      }
    }
    @media (max-width: 320px) and (max-width: 375px) {
        h1 {
        font-size: 45px;
      }
    }


`
