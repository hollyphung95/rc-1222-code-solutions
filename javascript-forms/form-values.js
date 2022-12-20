var $container = document.querySelector('#contact-form');
$container.addEventListener('submit', handleSubmit);

var $name = $container.elements.name.value;
var $email = $container.elements.email.value;
var $message = $container.elements.message.value;
var $formObject = {};

function handleSubmit(event) {
  $container.preventDefault();
  $formObject.name = $name;
  $formObject.email = $email;
  $formObject.message = $message;
  console.log($formObject);
  $container.reset();
}
