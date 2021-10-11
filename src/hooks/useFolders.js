import React from 'react';

export default function useFolders(folder) {
  const [folders, setFolders] = React.useState([]);

  React.useEffect(async () => {
    const res = await fetch('/api/media/get-folders', {
      method: 'POST',
      body: JSON.stringify({
        folder,
      }),
    });
    const { data } = await res.json();
    setFolders(data);
  }, []);

  return folders;
}
