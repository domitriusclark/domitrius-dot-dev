export default async function notion(endpoint) {
  return await fetch(`https://notion-api.splitbee.io/v1/${endpoint}`, {
    headers: {
      method: 'GET',
    },
  }).then((res) => res.json());
}
