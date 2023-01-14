
var $inputName = document.querySelector('#user-name');
$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('changed', handleInput);

var $inputEmail = document.querySelector('#user-email');
$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('changed', handleInput);

var $inputMessage = document.querySelector('#user-message');
$inputMessage.addEventListener('focus', handleFocus);
$inputMessage.addEventListener('blur', handleBlur);
$inputMessage.addEventListener('changed', handleInput);

/* handleFocus(event)
logs a message that the 'focus' event was fired.
logs the event.target.name */
function handleFocus(event) {
  console.log('\'focus\' event was fired.');
  console.log('event.target.name: ', event.target.name);
}

/* handleBlur(event)
logs a message that the 'blur' event was fired.
logs the event.target.name */
function handleBlur(event) {
  console.log('\'blur\' event was fired.');
  console.log('event.target.name: ', event.target.name);
}

/* handleInput(event)
logs the event.target.name and logs the event.target.value */
function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}
