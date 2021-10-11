import cloudinary from '@utils/initCloudinary';

export default async function (req, res) {
  const body = JSON.parse(req.body);

  const value = await cloudinary.search
    .expression(body.expression)
    .execute()
    .then((result) => result);

  return res.status(200).send(JSON.stringify(value));
}
