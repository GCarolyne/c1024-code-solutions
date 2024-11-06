const $openModal = document.querySelector('.open-modal');
const $disModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal) throw new Error('$openModal does not exist');
if (!$disModal) throw new Error('$disModal');
if (!$dialog) throw new Error('$dialog does not exist');

function handleClick(event: Event): void {
  console.log('event', event);
  console.log('event.target', event.target);
  if (!$dialog) throw new Error('!$dialog does not exist');
  $dialog.showModal();
}

$openModal.addEventListener('click', handleClick);

function dismissClick(event: Event): void {
  console.log('event', event);
  console.log('event.target', event.target);
  if (!$dialog) throw new Error('!$dialog does not exist');
  $dialog.close();
}

$disModal.addEventListener('click', dismissClick);
