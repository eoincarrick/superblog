const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;

const app = express();
dotenv.config({ path: '.env' });

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
  response.status(200).send('System Good!');
});

app.use('/api/v1/files', require('./routes/files'));

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
