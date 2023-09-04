// Your code here
class ValidationError extends Error {
  constructor(message = 'Invalid input', ...params) {
    super(...params);
    // Maintains proper stack trace for where error was thrown (available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
    this.name = 'ValidationError';
    this.message = message;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
