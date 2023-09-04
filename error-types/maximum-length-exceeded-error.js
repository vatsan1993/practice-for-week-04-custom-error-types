const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength = null, ...params) {
    super(...params);
    // Maintains proper stack trace for where error was thrown (available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MaximumLengthExceededError);
    }
    this.name = 'MaximumLengthExceededError';
    if (excessLength == null) {
      this.message = `Maximum length exceeded`;
    } else {
      this.message = `Maximum length exceeded by ${excessLength}`;
    }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
