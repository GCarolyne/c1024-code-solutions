const $circle = document.querySelector('.whiteLightButton');
const $body = document.querySelector('body');
if (!$circle) throw new Error('$circle does not exist');

function handleClick(event: Event): void {
  console.log('event', event);
  console.log('event.target', event.target);
  if (!$circle) throw new Error('$circle does not exist');
  if (!$body) throw new Error('$body does not exist');
  if ($circle.className === 'blackDrop') {
    $circle.className = 'whiteLightButton';
    $body.className = 'on';
  } else {
    $circle.className = 'blackDrop';
    $body.className = 'dark';
  }
}
$circle.addEventListener('click', handleClick);
