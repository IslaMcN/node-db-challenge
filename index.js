const express = require('express');
const db = require('./db-config');
const ProjectRouter = require('./Projects/project-router');
const ResourceRouter = require('./Resources/resource-router');
const TaskRouter = require('./Tasks/task-router');
const server = express();

server.use(express.json());
server.use('/api/project', ProjectRouter);
server.use('/api/Resource', ResourceRouter);
server.use('/api/task', TaskRouter);

server.get('/', (req, res) => {
    res.send('Look at me Im wrangling these tables On my own.')
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Look at me
I'm running on port ${port} --
All alone.`))

module.exports = server;