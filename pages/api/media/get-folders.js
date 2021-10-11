import cloudinary from '@utils/initCloudinary';
import nc from 'next-connect';

const handler = nc({
  onError: (error, req, res, next) => {
    res.status(500).end();
  },
});

const folders = [];

handler.post(async (req, res) => {
  const { folder } = JSON.parse(req.body);

  const data = await cloudinary.api.sub_folders(folder, (err, result) => {
    if (err) res.status(500);
    return result;
  });

  res.json({ data });
});

export default handler;
