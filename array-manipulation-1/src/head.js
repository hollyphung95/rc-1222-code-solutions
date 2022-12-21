/* exported head */

/* This function will take in any javascript array(any type values and any number of elements).
/* Function will return the first element of the array. We assume that the array is valid. */
/* Meaning the array isnt null or any variables, objects, and etc used have been defined correctly, accessible, and not empty */
/* eg. Say this function was called with an empty array as the argument passed in, the return of the function will be undefined. */
/* To access the first element of the array we use array[0]. */

function head(array) {
  if ((array[0] === null) || (array[0] === '')) {
    return undefined;
  } else {
    return array[0];
  }
}
