/* exported isVowel */

/* This function accepts one char parameter.
   Can use if statement to check the char is a or A or e or E ... etc. or use regular expression.
   Regular expressions are patterns used to match character combinations in strings
   Return A Boolean indicating whether or not char is a vowel.
   isVowel should handle both uppercase and lowercase characters. */
function isVowel(character) {
  return /[aeiou]|[AEIOU]/.test(character);
}
