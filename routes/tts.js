const express = require('express');
const { PostTTS } = require('../controller/tts');

const router = express.Router();
router.post('/', PostTTS);

module.exports = router;
