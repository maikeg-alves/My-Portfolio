import { Modal, useModal, Button, Text, Link } from "@nextui-org/react";

//icons 
import {BsFillChatFill} from 'react-icons/bs';
import {AiOutlineSend} from 'react-icons/ai';
import {CgClose} from 'react-icons/cg';

export default function Modall({children } : { children : JSX.Element }) {
    
  const { setVisible, bindings } = useModal(false);


  return (
    <div>
      
      <Link onPress={()=> setVisible(true)}> ler mais... </Link>

      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          
          <Text id="modal-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          </Text>

          {children}

        </Modal.Body>
        <Modal.Footer justify="space-around">
          <Button  auto color="error" 
           icon={<CgClose/>}
          onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto icon={<AiOutlineSend/> } 
          onClick={() => setVisible(false)}>
            emviar mensagem
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
