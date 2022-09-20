import { Modal, useModal, Text, Link } from '@nextui-org/react';
import { ButtonMy } from '@/themes/styles/components/button.syle';
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
        <ButtonMy
          auto
          flat
          icon={<BsFillChatFill />}
          color="success"
          onPress={() => setVisible(true)}
        >
          Contato
        </ButtonMy>
      ) : (
        <Link
          onPress={() => setVisible(true)}
          style={{ cursor: 'pointer', color: '#00ee87' }}
        >
          ler mais...
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
