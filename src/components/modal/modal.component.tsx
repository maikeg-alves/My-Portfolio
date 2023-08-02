import { Modal, useModal, Text, Link } from '@nextui-org/react';
import { BsFillChatFill } from 'react-icons/bs';
import { ReactNode } from 'react';

import { ButtonMy } from '@styles';
//icons

//resoisve screen
import { useMediaQuery } from '@utils';

export default function ModalComponent({
  children,
  title,
  button,
  namebtn,
  icon,
  ontitle,
}: {
  children: ReactNode;
  title?: string;
  button?: boolean;
  namebtn?: string;
  icon?: ReactNode;
  ontitle?: boolean;
}) {
  const { setVisible, bindings } = useModal(false);

  return (
    <>
      {button ? (
        <ButtonMy
          auto
          flat
          icon={icon ? icon : <BsFillChatFill />}
          color="success"
          onPress={() => setVisible(true)}
        >
          {namebtn ? namebtn : 'Contato'}
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
        blur
        fullScreen={useMediaQuery(425)} // if true, the modal will be full screen
        closeButton
        aria-labelledby="modal-title"
        {...bindings}
      >
        {ontitle ? (
          <Modal.Header>
            <Text id="modal-title" size={18}>
              {title}
            </Text>
          </Modal.Header>
        ) : null}

        <Modal.Body className="align-items-center justify-content-center">
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
}
