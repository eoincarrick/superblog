const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;
const path = require('path');

const server = express();
dotenv.config({ path: '.env' });

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (request, response) => {
  response.status(200).send('System Good!');
});

server.use('/api/v1/files', require('./routes/files'));
server.use('/api/v1/file', require('./routes/file'));
server.use('/api/v1/tts', require('./routes/tts'));

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

module.exports = server;
