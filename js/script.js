var isDragging = false;
var offsetX = 0;
var offsetY = 0;

function startDrag(e) {
  var box = document.getElementById('window');
  isDragging = true;
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;
  document.onmousemove = drag;
  document.onmouseup = stopDrag;
}

function drag(e) {
  if (!isDragging) return;
  var box = document.getElementById('window');
  box.style.left = (e.clientX - offsetX) + 'px';
  box.style.top = (e.clientY - offsetY) + 'px';
}

function stopDrag() {
  isDragging = false;
  document.onmousemove = null;
  document.onmouseup = null;
}

function openWindow() {
  document.getElementById('window').style.display = 'block';
}

function closeWindow() {
  document.getElementById('window').style.display = 'none';
}

function selectIcon(el) {
  var icons = document.getElementsByTagName('div');
  for (var i = 0; i < icons.length; i++) {
    if (icons[i].className.indexOf('icon') !== -1) {
      icons[i].className = icons[i].className.replace(' selected', '');
    }
  }
  el.className += ' selected';
}

function updateBackground() {
  var hour = new Date().getHours();
  document.body.style.backgroundImage =
    hour >= 18 || hour < 6
    ? "url('images/maininvert.jpg')"
    : "url('images/main.jpg')";
}

function updateClock() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  document.getElementById('clock').innerText = h + ":" + m;
  updateBackground();
}

window.onload = function () {
  document.querySelector('.titlebar-drag').onmousedown = startDrag;
  document.onmouseleave = stopDrag;
  updateClock();
  setInterval(updateClock, 60000);
};