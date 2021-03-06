import { Modal, Stack } from "react-bootstrap";
import styled from "styled-components";

export const ModalProject = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  img{
     width: 100%;
  }
  li{
    height: 22%;
    width: 22%;
  }

  @media (min-device-width: 320px) and (max-device-width: 425px) {
    flex-direction: column;
  align-items: center;
   justify-content: center;
    padding: 30px;
    h1{
      font-size: 40px;
      text-align: center;
    }
    p {
      font-size: 1.5rem;
    }
    div {
      flex: 0 0 auto;
      width: auto;
    }
  }
`;

export const Thechology = styled(Stack)`
@media (min-device-width: 320px) and (max-device-width: 425px) {
    justify-content: center!important;
}
`

export const ModalHeader = styled(Modal.Header)`
    @media (min-device-width: 320px) and (max-device-width: 425px) {
        button {
            font-size : 1.5rem;
        }
    }
`

export const ImgDemostration = styled.div`
    img{
         width: 80%;
         border-radius: 20px;
         border: 3px solid #000000;
         span {
          width: 80%;
          border-radius: 20px;
         }
    }
    @media (max-device-width: 768px) {
      img, span {
        width: 100%;
      }
    }
    @media (min-device-width: 320px) and (max-device-width: 425px) {
        img, span {
            width: 100%;
        }
    }
`