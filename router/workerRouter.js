const express = require('express');
const router = express.Router();
const WorkerController = require('../controllers/workerControllers');

router.get('/', WorkerController.getWorkers);
router.post('/', WorkerController.createWorker);
router.get('/:id', WorkerController.getWorker);
// router.put('/:id', WorkerController.updateWorker);
// router.delete('/:id', WorkerController.deleteWorker);

module.exports = router;