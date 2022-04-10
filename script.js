// 1:
/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not,
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  // Edit between these lines
  // =================================
  result = "a" + "b";
  result = Number(`${a + b}`);
  console.log(result);
  // =================================

  return result;
}

// Do not change this
module.exports = troubleshooting;

// 2:
/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

number = Number(prompt("enter a number"));

function numberChecker() {
  if (number >= 10) {
    return true;
  } else {
    return false;
  }
}
