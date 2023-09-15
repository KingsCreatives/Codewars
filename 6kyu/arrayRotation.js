function solve (arr) {
	// Check if the array is in ascending order
  let isAscending = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      isAscending = false;
      break;
    }
  }

  // Check if the array is in descending order
  let isDescending = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isDescending = false;
      break;
    }
  }

  // Check if the array is rotated
  if (isAscending) {
    return "A"; // Ascending
  } else if (isDescending) {
    return "D"; // Descending
  } else {
    // Check if the array is rotated in descending order
    if (arr[0] > arr[arr.length - 1]) {
      return "RA"; // Rotated Descending
    } else {
      return "RD"; // Rotated Ascending
    }
  }
}