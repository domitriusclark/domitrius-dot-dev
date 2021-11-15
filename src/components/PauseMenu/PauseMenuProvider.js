import { createContext } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const PauseMenuContext = createContext();

export default function PauseMenuProvider({ children }) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <AssetDrawerContext.Provider value={{ onOpen, onClose, isOpen }}>
      {children}
    </AssetDrawerContext.Provider>
  );
}
