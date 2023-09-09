const express = require('express');
const { upload } = require('../utils/services');
const { PostFile } = require('../controller/files');

const router = express.Router();
router.post('/', upload.single('file'), PostFile);

module.exports = router;
