import fetchPageById from '@lib/notion/fetchPageById';
import fetchTableById from '@lib/notion/fetchTableById';
import Notion from '@components/Notion';

export const Garden = ({ blocks, post }) => {
  return <Notion post={post} blocks={blocks} />;
};

export const getServerSideProps = async ({ params }) => {
  const blocks = await fetchPageById(params.id[0]);
  const posts = await fetchTableById(process.env.NOTION_DATABASE_ID);

  const post = posts.find((post) => post.id === params.id[0]);

  return {
    props: {
      post,
      blocks,
    },
  };
};

export default Garden;
