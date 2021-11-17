import Draft from '@components/Draft';
import supabase from '@utils/initSupabase';

export default function DraftPost({ post }) {
  return <Draft post={post} />;
}

export async function getServerSideProps(context) {
  // Check for an ID in the route so we can know if we're editing or creating a post
  if (context.query.hasOwnProperty('id')) {
    const res = await supabase
      .from('Posts')
      .select()
      .match({ id: context.query.id });

    const post = res.data[0];

    return {
      props: {
        post,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
