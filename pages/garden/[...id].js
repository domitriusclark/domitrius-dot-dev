import { fetchPageById } from '@lib/notion';
import Notion from '@components/Notion';

export const Garden = ({ blocks }) => {
  return <Notion blocks={blocks} />;
};

export const getServerSideProps = async ({ params }) => {
  const blocks = await fetchPageById(params.id[0]);

  return {
    props: {
      blocks,
    },
  };
};

export default Garden;
