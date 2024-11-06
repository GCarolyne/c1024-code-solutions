const $click = document.querySelector('.task-list');
if (!$click) throw new Error('$click does not exist');
console.log('$click', $click);

function handleClick(event: Event): void {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget', eventTarget);
  console.log(eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const $closestOne = eventTarget.closest('.task-list-item');
    console.log('$closestOne', $closestOne);
    $closestOne.remove();
    if (!$closestOne) throw new Error('$closestOne does not exist');
  }
}

$click.addEventListener('click', handleClick);
