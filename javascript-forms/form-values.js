var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var $formObject = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };

  console.log($formObject.value);
  $form.reset();
}
