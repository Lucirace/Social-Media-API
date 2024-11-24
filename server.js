const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const setupSocket = require('./socket');

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);
setupSocket(server);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/posts'));
app.use('/api', require('./routes/comments'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
