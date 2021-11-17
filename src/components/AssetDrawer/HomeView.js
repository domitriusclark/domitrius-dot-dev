import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import Folder from './Folder';

export default function HomeView({ baseFolders, state, dispatch }) {
  React.useEffect(() => {
    dispatch({ type: 'HOME_VIEW', baseFolders });
  }, []);

  return (
    <Flex direction="column" sx={{ gap: '12px' }}>
      {baseFolders.folders !== undefined &&
        baseFolders.folders.map((folder) => (
          <Folder folders={state.folders} dispatch={dispatch} folder={folder} />
        ))}
    </Flex>
  );
}
