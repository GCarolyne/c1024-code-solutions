interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;
if (!$form) throw new Error('the $form query failed.');

function submitForm(event: Event): void {
  if (!$form) throw new Error('the $form query failed.');
  const $formElements = $form.elements as FormElements;
  const data1 = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  event.preventDefault();
  console.log('data1', data1);
}

$form.addEventListener('submit', submitForm);
