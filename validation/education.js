const Validator = require('validator'),
  isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  // The argument for isEmpty from Validator must be a string to work, so we need to convert the value from an empty field to an empty string by using our custom isEmpty function
  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'Shcool name is required';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree title is required';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
