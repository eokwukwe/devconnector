const Validator = require('validator'),
  isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // The argument for isEmpty from Validator must be a string to work, so we need to convert the value from an empty field to an empty string by using our custom isEmpty function
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
