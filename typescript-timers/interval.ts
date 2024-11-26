const $countDisplay = document.querySelector('.countdown-display');
if (!$countDisplay) throw new Error('query for $countDisplay failed');

let count = 4;

function headCount(): void {
  if (!$countDisplay) throw new Error('query for $countDisplay failed');
  count--;

  if (count >= 0) {
    $countDisplay.textContent = count.toString();
  } else {
    $countDisplay.textContent = '~Earth Beeeloowww Us~';
    clearInterval(countdownID);
  }
}
const countdownID = setInterval(headCount, 1000);
