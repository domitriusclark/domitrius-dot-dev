import React from 'react';

import {
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Flex,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';

import { FaHome, FaArrowAltCircleLeft } from 'react-icons/fa';

import HomeView from './HomeView';
import FolderView from './FolderView';
import UploadView from './UploadView';

import useFolders from '@hooks/useFolders';
import usePrevious from '@hooks/usePrevious';

const initState = {
  // the folders we display will need a variable -- the initial state will be the baseFolders
  view: 'home',
  folders: [],
  previousFolders: [],
  currentFolder: '',
  media: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'PREVIOUS_VIEW':
      return {
        view: action.view,
        folders: action.folders,
        previousFolders: action.previousFolders,
        media: action.media,
        currentFolder: action.currentFolder,
      };
    case 'UPLOAD_VIEW':
      return {
        ...state,
        view: 'upload',
      };
    case 'CHANGE_VIEW':
      return {
        view: 'folder',
        folders: action.folders,
        previousFolders: action.previousFolders,
        media: action.media,
        currentFolder: action.currentFolder,
      };
    // When a user opens the drawer or hits home -- we'll use this to reset the state for the base folders
    case 'HOME_VIEW':
      return {
        view: 'home',
        folders: action.baseFolders,
        previousFolders: [],
        media: [],
        currentFolder: '',
      };
    default:
      return state;
  }
}

export const AssetDrawerContext = React.createContext();

export const AssetDrawerProvider = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <AssetDrawerContext.Provider value={{ onOpen, onClose, isOpen }}>
      {children}
    </AssetDrawerContext.Provider>
  );
};

export default function AssetDrawer() {
  const { isOpen, onClose } = React.useContext(AssetDrawerContext);
  const [state, dispatch] = React.useReducer(reducer, initState);

  const prevState = usePrevious(state);

  const baseFolders = useFolders('mdnext-v2');

  function renderDrawerBody() {
    if (state.view === 'home') {
      return (
        <HomeView state={state} baseFolders={baseFolders} dispatch={dispatch} />
      );
    } else if (state.view === 'folder') {
      return (
        <FolderView
          folders={state.folders}
          media={state.media}
          dispatch={dispatch}
        />
      );
    } else if (state.view === 'upload') {
      return <UploadView state={state} dispatch={dispatch} />;
    }
  }

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="sm" placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <Flex justify="space-between">
            <IconButton
              icon={<FaHome />}
              onClick={() => dispatch({ type: 'HOME_VIEW', baseFolders })}
            />
            {state.currentFolder ? (
              <Heading alignSelf="center" size="md">
                {state.currentFolder.name}
              </Heading>
            ) : (
              ''
            )}
            <IconButton
              disabled={state.previousFolders.length === 0}
              icon={<FaArrowAltCircleLeft />}
              onClick={() => dispatch({ type: 'PREVIOUS_VIEW', ...prevState })}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody overflowY="scroll">{renderDrawerBody()}</DrawerBody>
        <DrawerFooter as={Flex} align="center" justify="center">
          <Button w="100%" onClick={() => dispatch({ type: 'UPLOAD_VIEW' })}>
            Upload
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

/*

We still need:
  - Create / Edit / Delete folders
  - Delete Images
  - Add modal for images
    - Transformation editor
    - Edit metadata
  - Add switch case for clicking the Video folder
  - Upload form for videos
    - How do we create a course (a collection of videos)
  - Video component

*/
