const AWS = require('aws-sdk');
const { Client } = require('../utils/config/sanity');

const MAX_TEXT_LENGTH = 3000;

const PostTTS = async (request, response) => {
  try {
    console.log(request.body);
    const { plainText } = request.body;

    if (!plainText) {
      response.status(400).json({ error: 'No text provided' });
      return;
    }

    const polly = new AWS.Polly({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    const textChunks = [];
    for (let i = 0; i < plainText.length; i += MAX_TEXT_LENGTH) {
      textChunks.push(plainText.substring(i, i + MAX_TEXT_LENGTH));
    }

    const audioStreams = [];

    for (const chunk of textChunks) {
      const params = {
        Text: chunk,
        OutputFormat: 'mp3',
        VoiceId: 'Joanna',
      };

      const result = await polly.synthesizeSpeech(params).promise();

      audioStreams.push(result?.AudioStream);
    }

    // Combine the audio streams into a single stream
    const combinedAudioStream = Buffer.concat(audioStreams);

    const sanityAudioURL = await Client.assets.upload(
      'file',
      combinedAudioStream,
      { filename: `audio/mpeg` }
    );
    console.log('sanityAudioURL: ', sanityAudioURL);

    // Upload the combined audio stream to S3
    // const s3 = new AWS.S3();
    // const s3Params = {
    //   Bucket: process.env.S3_BUCKET_NAME,
    //   Key: `tts/${Date.now()}.mp3`,
    //   Body: combinedAudioStream,
    //   ContentType: 'audio/mpeg',
    // };

    // const s3Obj = await s3.upload(s3Params).promise();

    // if (s3Obj.Key && s3Obj.Bucket) {
    //   const s3GetURLParams = {
    //     Bucket: s3Obj.Bucket,
    //     Key: s3Obj.Key,
    //   };

    // const url = await s3.getSignedUrlPromise('getObject', s3GetURLParams);
    const url = sanityAudioURL.url;

    console.log('url: ', url);

    response.json({ url });
    // }
  } catch (error) {
    const msg = 'Internal server error:';
    console.error(msg, error);
    response.status(500).json({ error: msg, success: false });
  }
};

module.exports = { PostTTS };
