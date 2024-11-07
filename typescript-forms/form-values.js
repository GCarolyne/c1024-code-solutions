'use strict';
const $form = document.querySelector('#contact-form');
if (!$form) throw new Error('the $form query failed.');
function submitForm(event) {
  if (!$form) throw new Error('the $form query failed.');
  const $formElements = $form.elements;
  const data1 = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  event.preventDefault();
  console.log('data1', data1);
}
$form.addEventListener('submit', submitForm);
