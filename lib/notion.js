import removeHyphens from '@utils/removeHyphens';

export async function fetchPageById(pageId) {
  const id = removeHyphens(pageId);
  const page = await notion(`/page/${id}`);

  return page;
}

export async function fetchTableById(tableId) {
  const id = removeHyphens(tableId);
  return await notion(`/table/${id}`);
}

export default async function notion(endpoint) {
  return await fetch(`https://notion-api.splitbee.io/v1/${endpoint}`, {
    headers: {
      method: 'GET',
    },
  }).then((res) => res.json());
}
