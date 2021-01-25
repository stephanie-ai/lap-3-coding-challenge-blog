const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./controllers/posts');

server.use('/posts', postRoutes);

server.get('/', (req,res)=> res.send('Welcome to the BlogSpace'));

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`));