const { validationResult, body } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createLoginValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email cannot be null')
    .isEmail()
    .withMessage('Email must be a correct format'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be null')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[A-z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage(
      'La contraseña debe contener al menos un caracter especial (!@#$%^&*(),.?":{}|<>)'
    ),
  validateFields,
];

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name cannot be null'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be null')
    .isEmail()
    .withMessage('Email must be a correct format'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be null')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[A-z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage(
      'La contraseña debe contener al menos un caracter especial (!@#$%^&*(),.?":{}|<>)'
    ),
  validateFields,
];

exports.createRepairValidation = [
  body('date').notEmpty().withMessage('Date cannot be null'),
  body('motorsNumber').notEmpty().withMessage('Motors number cannot be null'),
  body('description').notEmpty().withMessage('Description cannot be null'),
  body('userId').notEmpty().withMessage('User id cannot be null'),
  validateFields,
];

exports.updateRepairValidation = [
  body('date').notEmpty().withMessage('Date cannot be null'),
  body('motorsNumber').notEmpty().withMessage('Motors number cannot be null'),
  body('description').notEmpty().withMessage('Description cannot be null'),
  body('userId').notEmpty().withMessage('User id cannot be null'),
  validateFields,
];
