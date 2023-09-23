const express = require('express');
const { upload } = require('../utils/services');
const { PostFile } = require('../controller/file');

const router = express.Router();
router.post('/', upload.single('file'), PostFile);

module.exports = router;
