import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  LinkBox,
  LinkOverlay,
  IconButton,
} from '@chakra-ui/react';

import { FaEllipsisV, FaFolder } from 'react-icons/fa';

export default function Folder({ folder, folders, dispatch }) {
  async function getMediaFromFolder(path) {
    const res = await fetch('/api/media/search', {
      method: 'POST',
      body: JSON.stringify({
        expression: `folder=${path}`,
      }),
    });
    const data = await res.json();
    return data.resources;
  }

  async function getSubFolders(path) {
    const res = await fetch('/api/media/get-folders', {
      method: 'POST',
      body: JSON.stringify({
        folder: path,
      }),
    });
    const { data } = await res.json();

    return data;
  }

  async function changeFolderView(folder, folders) {
    const media = await getMediaFromFolder(folder.path);
    const subFolders = await getSubFolders(folder.path);

    dispatch({
      type: 'CHANGE_VIEW',
      previousFolders: folders,
      currentFolder: folder,
      folders: subFolders,
      media,
    });
  }

  return (
    <LinkBox
      display="flex"
      justifyContent="space-between"
      _hover={{ cursor: 'pointer' }}
      alignItems="center"
      px={4}
      w="400px"
      h="80px"
      borderRadius="4px"
      boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      key={folder.path}
    >
      <Flex align="center" justify="center" sx={{ gap: '4px' }}>
        <Icon size="lg" as={FaFolder} />
        <LinkOverlay onClick={() => changeFolderView(folder, folders)}>
          <Text>{folder.name}</Text>
        </LinkOverlay>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaEllipsisV />}
          variant="outline"
        />
        <MenuList>
          <MenuItem command="⌘T">New Tab</MenuItem>
          <MenuItem command="⌘N">New Window</MenuItem>
          <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
          <MenuItem command="⌘O">Open File...</MenuItem>
        </MenuList>
      </Menu>
    </LinkBox>
  );
}
