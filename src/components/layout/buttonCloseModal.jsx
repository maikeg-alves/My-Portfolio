import { Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';

export const Div = styled(Col)`
  background-color: black;
  color: white;
  cursor: pointer;
`;

export default function BtnCloseModal({onclick}) {
  return (
    <>
      <Div className="d-flex justify-content-end col-12 px-4 mt-2">
        <AiOutlineClose className="fs-5" onClick={onclick} />
      </Div>
    </>
  );
}
