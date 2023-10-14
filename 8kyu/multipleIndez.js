const multipleOfIndex = array =>
  array.filter((element, index) => element % index == 0 || element == 0)