const express = require('express');
const repairsController = require('./../controllers/repairs.controller');

const router = express.Router();

//TODO: DEFINIR ENDPOINTS
router
  .route('/')
  .get(repairsController.findRepair)
  .post(repairsController.create);

  router.route('/:id')
    .get(repairsController.findRepair)
    .patch(repairsController.update)
    .delete(repairsController.delete);

module.exports = router;
