const Validator = require('validator'),
  isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  // The argument for isEmpty from Validator must be a string to work, so we need to convert the value from an empty field to an empty string by using our custom isEmpty function
  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
