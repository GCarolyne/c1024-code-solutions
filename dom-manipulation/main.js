'use strict';
let clickStore = 0;
const $hotButton = document.querySelector('.hot-button');
const $hotCount = document.querySelector('.click-count');
if (!$hotButton || !$hotCount) {
  throw new Error('The $hotButton or $hotCount query failed');
}
function hotButtonPress(event) {
  if (!$hotButton || !$hotCount) {
    throw new Error('The $hotButton or $hotCount query failed');
  }
  clickStore++;
  console.log('clickStore');
  console.log('event', event);
  console.log('event.target', event.target);
  $hotCount.textContent = `Clicks: ${clickStore}`;
  if (clickStore < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickStore < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickStore < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickStore < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickStore < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', hotButtonPress);
