var $container = document.querySelector('.container');
var $box = document.querySelector('.box');

var index = 0;
var bgColors = ['#fdf9f2', '#111'];
var colors = ['#f7eb92', '#222224'];
var shadows = ['0 -10px 15px 4px #faec84', '0 -15px 10px 5px rgb(0 0 0 /75%)'];

$box.addEventListener('click', function onClick() {
  $container.style.backgroundColor = bgColors[index];
  $box.style.backgroundColor = colors[index];
  $box.style.boxShadow = shadows[index];
  $box.style.backgroundColor = colors[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
});
