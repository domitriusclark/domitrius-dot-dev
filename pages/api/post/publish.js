import supabase from '@utils/initSupabase';

export default async function handler(req, res) {
  const { id, published } = JSON.parse(req.body);

  try {
    await supabase.from('Posts').update({ published }).match({ id });

    res.status(200);
  } catch (e) {
    res.send({ error: e }).status(400);
  }
}
