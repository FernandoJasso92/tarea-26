const express = require('express');
const repairsController = require('./../controllers/repairs.controller');

//MIDDLEWARES
const validationMiddleware = require('./../middlewares/validations.middleware');
const repairMiddleware = require('./../middlewares/repair.middleware');
const authMiddleware = require('./../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router
  .route('/')
  .get(authMiddleware.restrictTo('employee'), repairsController.findRepair)
  .post(validationMiddleware.createRepairValidation, repairsController.create);

router
  .use('/:id', repairMiddleware.existRepair)
  .use(authMiddleware.restrictTo('employee'))
  .route('/:id')
  .get(repairsController.findRepair)
  .patch(validationMiddleware.updateRepairValidation, repairsController.update)
  .delete(repairsController.delete);

module.exports = router;
