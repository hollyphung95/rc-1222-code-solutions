var clickCount = 0;

var $hotButton = document.querySelector('.hot-button', 'cold');
var $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', handleClick);
$clickCount.addEventListener('click', handleClick);

function handleClick(event) {
  clickCount++;
  $clickCount.textContent = 'Clicks : ' + clickCount;

  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
/*   console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target :', event.target); */
}
