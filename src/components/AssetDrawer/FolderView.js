import { Flex } from '@chakra-ui/react';
import Folder from './Folder';
import MediaCollection from './MediaCollection';

export default function FolderView({ folders, media, dispatch }) {
  return (
    <Flex direction="column" sx={{ gap: '12px' }}>
      {folders.folders.map((folder) => (
        <Folder dispatch={dispatch} folders={folders} folder={folder} />
      ))}
      <MediaCollection media={media} />
    </Flex>
  );
}
