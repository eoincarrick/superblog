const { Client } = require('../utils/config/sanity');

const PostFile = async (request, response) => {
  try {
    if (!request.file) {
      return response.status(400).json({ error: 'No file uploaded' });
    }
    const fileBuffer = request.file.buffer;
    const postToSanity = await Client.assets.upload('file', fileBuffer, { filename: `${request.file.originalname}` });
    response.json({ url: postToSanity.url });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { PostFile };
