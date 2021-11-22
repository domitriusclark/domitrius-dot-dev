import * as React from 'react';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { PauseMenuContext } from './PauseMenuProvider';

export default function PauseMenu({ size, content }) {
  const { isOpen, onClose } = React.useContext(PauseMenuContext);

  return (
    <Modal
      isCentered
      onClose={onClose}
      size={size ? size : 'xl'}
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody minH="400px">{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
