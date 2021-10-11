import cloudinary from '@utils/initCloudinary';

export default async function (req, res) {
  const { file, folder, public_id } = JSON.parse(req.body);
  const value = await cloudinary.uploader.upload(file, {
    folder: folder,
    public_id: public_id,
  });

  res.status(200).send(JSON.stringify(value));

  // async function chooseUpload() {
  //   function formatBytes(bytes, decimals = 2) {
  //     if (bytes === 0) return '0 Bytes';
  //     const k = 1024;
  //     const dm = decimals < 0 ? 0 : decimals;
  //     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  //     const i = Math.floor(Math.log(bytes) / Math.log(k));
  //     return [parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), sizes[i]];
  //   }

  //   if (formatBytes(size)[0] > 100 && formatBytes(size)[1] === "MB") {
  //     const value = upload.single("image", (req, {}, async (err) => {
  //       await cloudinary.uploader.upload_large(file, {
  //         folder,
  //         public_id,
  //         resource_type: type,
  //         tags,
  //         eager
  //       })
  //     }))

  //     return value;
  //   } else {
  //     const value = upload.single("image", (req, {}, async (err) => {
  //       await cloudinary.uploader.upload(file, {
  //         folder,
  //         public_id,
  //         resource_type: type,
  //         tags,
  //         eager
  //       })
  //     }))
  //     return value
  //   }
  // }
}
