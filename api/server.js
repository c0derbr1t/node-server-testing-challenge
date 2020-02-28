const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const adminsRouter = require("../admins/router.js");
const employeesRouter = require("../employees/router.js");
const productsRouter = require("../products/router.js");

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use('/api/admins', adminsRouter);
server.use('/api/employees', employeesRouter);
server.use('/api/products', productsRouter);

server.get('/', (req, res) => {
    res.json({ api: 'Running!' });
});


module.exports = server;