/* exported last */

/* This function will take in any javascript array(any type values and any number of elements).
/* Function will return the last element of the array. We assume that the array is valid. */
/* Meaning the array isnt null or any variables, objects, and etc used have been defined correctly, accessible, and not empty */
/* eg. Say this function was called with an empty array as the argument passed in, the return of the function will be undefined. */
/* To access the last element of the array we use the property length of the array object minus 1 (ig. array.length - 1) */
/* we subtract 1 bc arrays start at index 0 but the length starts at 1. */

function last(array) {
  if ((array[array.length - 1] === null) || (array[array.length - 1] === '')) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}
