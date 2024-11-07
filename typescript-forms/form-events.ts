const $input = document.querySelector('input');
if (!$input) throw new Error('the $input query failed');
const $input1 = document.querySelector('input');
if (!$input1) throw new Error('the $input1 query failed');
const $textAr = document.querySelector('textarea');
if (!$textAr) throw new Error('the $textAr query failed');

function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name', eventTarget.name);
}
$input.addEventListener('focus', handleFocus);

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name', eventTarget.name);
}
$input1.addEventListener('blur', handleBlur);

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name', eventTarget.name);
  console.log('eventTarget.value', eventTarget.value);
}

$textAr.addEventListener('input', handleInput);
