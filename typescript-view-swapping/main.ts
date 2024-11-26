const $tabContain = document.querySelector('.tab-container');
if (!$tabContain) throw new Error('$tabContain failed query');
const $tabs = document.querySelectorAll('.tab');
if (!$tabs) throw new Error('$tabs failed query');
console.log('$tabs', $tabs);
const $views = document.querySelectorAll('.view');
if (!$views) throw new Error('$views failed query');
console.log('$views', $views);

function contain(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === $eventTarget) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    const dataContain = $eventTarget.getAttribute('data-view');

    for (let index = 0; index < $views.length; index++) {
      if ($views[index].getAttribute('data-view') === dataContain) {
        $views[index].className = 'view';
        console.log('dataContain', dataContain);
      } else {
        $views[index].className = 'view hidden';
      }
    }
  }
}
$tabContain.addEventListener('click', contain);
console.log('$tabs', $tabs);
