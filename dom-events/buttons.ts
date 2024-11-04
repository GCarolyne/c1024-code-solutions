const $click1 = document.querySelector('.click-button');
if (!$click1) throw new Error('$click1 does not exist');
console.log('$click1', $click1);

function handleClick(event: Event): void {
  console.log('event', event);
  console.log('event.target', event.target);
}

$click1.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$doubleClick.addEventListener('dblclick', handleDoubleClick);
