/* Click Event */

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target : ', event.target);
}

/* Mouseover Event */
var $mouseover = document.querySelector('.hover-button');
$mouseover.addEventListener('mouseover', handleMouseover);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target : ', event.target);
}

/* Double-click Event */
var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target : ', event.target);
}
