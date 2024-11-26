const $message = document.querySelector('.message');

if (!$message) throw new Error('query failed for $message.');

function helloThere(): void {
  if (!$message) throw new Error('query failed for $message.');
  $message.textContent = 'Hello There';
}
setTimeout(helloThere, 2000);
