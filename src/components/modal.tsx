import { Modal, useModal, Button, Text } from '@nextui-org/react';

//icons
import { BsFillChatFill } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';

export default function ModalComponent({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  const { setVisible, bindings } = useModal(false);

  return (
    <div>
      <Button
        auto
        flat
        icon={<BsFillChatFill />}
        color="success"
        onPress={() => setVisible(true)}
      >
        Contato
      </Button>
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
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {/*         <Modal.Footer justify="space-around">
          <Button
            auto
            color="error"
            icon={<CgClose />}
            onClick={() => setVisible(false)}
          >
            Close
          </Button>
          <Button
            auto
            icon={<AiOutlineSend />}
            onClick={() => setVisible(false)}
          >
            emviar mensagem
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
