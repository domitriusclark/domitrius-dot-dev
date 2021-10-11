import nc from 'next-connect';
import supabase from '@utils/initSupabase';

const handler = nc({
  onError: (error, req, res, next) => {
    res.status(500).end();
  },
});

handler.post(async (req, res) => {
  const newPost = JSON.parse(req.body);

  const result = await supabase.from('Posts').insert([{ ...newPost }]);
  const post = result.data[0];

  console.log('Successfully created your post!');
  res.send({ post });
});

handler.put(async (req, res) => {
  const { title, description, cover_image, tags, slug, body, id } = JSON.parse(
    req.body,
  );

  const result = await supabase
    .from('Posts')
    .update({
      title,
      description,
      cover_image,
      tags,
      slug,
      body,
    })
    .match({ id });

  const post = result.data[0];

  console.log('Successfully edited your post!');
  res.send({ post });
});

handler.delete(async (req, res) => {
  const { id } = JSON.parse(req.body);

  const result = await supabase.from('Posts').delete().match({ id });

  const post = result.data[0];

  console.log('Successfully deleted your post!');
  res.send({ post });
});

export default handler;
