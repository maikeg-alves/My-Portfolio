import { Modal, useModal, Button, Text, Link } from '@nextui-org/react';
//icons
import { BsFillChatFill } from 'react-icons/bs';

export default function ModalComponent({
  children,
  title,
  button,
}: {
  children: JSX.Element;
  title?: string;
  button?: boolean;
}) {
  const { setVisible, bindings } = useModal(false);

  return (
    <div>
      {button ? (
        <Button
          auto
          flat
          icon={<BsFillChatFill />}
          color="success"
          onPress={() => setVisible(true)}
        >
          Contato
        </Button>
      ) : (
        <Link onPress={() => setVisible(true)} style={{ cursor: 'pointer' }}>
          ler mais ...
        </Link>
      )}

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
        <Modal.Body className="align-items-center">{children}</Modal.Body>
      </Modal>
    </div>
  );
}
