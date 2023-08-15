const Repair = require('../models/repair.model');
const catchAsync = require('../utils/catchAsync');

exports.findAllRepair = catchAsync(async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: ['pending', 'completed'],
    },
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'email'],
      },
    ],
  });

  return res.status(200).json({
    status: 'success',
    repairs,
  });
});
exports.create = catchAsync(async (req, res) => {
  const { date, userId, description, motorsNumber } = req.body;

  const repair = await Repair.create({
    date,
    userId,
    description,
    motorsNumber,
  });

  return res.status(200).json({
    status: 'success',
    repair,
  });
});

exports.findRepair = catchAsync(async (req, res) => {
  const { repair } = req;
  return res.status(200).json({
    status: 'success',
    repair,
  });
});

exports.update = catchAsync(async (req, res) => {
  const { repair } = req;
  await repair.update({ status });

  return res.status(200).json({
    status: 'success',
    message: 'repair updated!',
  });
});

exports.delete = catchAsync(async (req, res) => {
  const { repair } = req;
  await repair.update({ status: 'canceled' });

  return res.status(200).json({
    status: 'success',
    message: 'repair deleted!',
  });
});
