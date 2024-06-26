/**
 * Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
 */

// solution
function isToday(date) {
  const inputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return inputDate.getTime() === today.getTime();
}
