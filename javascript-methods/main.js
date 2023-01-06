
var num1 = 5;
var num2 = 10;
var num3 = 12;

var maximumValue = Math.max(num1, num2, num3);
console.log('the value of maximumValue is: ', maximumValue);

var heroes = ['Swampert', 'stunfisk', 'Staraptor', 'Dedene'];

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero: ', randomHero);

var library = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'The Burning God',
    author: 'R.F. Kuang'
  },
  {
    title: 'A Darker Shade of Magic',
    author: 'V.E. Schwab'
  }];

var lastBook = library.pop();
console.log('Name of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('Name of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of Library: ', library);

var fullName = 'Holly Phung';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);
