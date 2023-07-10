const express = require('express');
const router = express.Router();

const workerRouter = require('./workerRouter');


router.use('/worker',  workerRouter);

module.exports = router;
