var dragWin = null;
var dragOffsetX = 0;
var dragOffsetY = 0;

function startDrag(win, e) {
  dragWin = win;

  var rect = win.getBoundingClientRect();
  dragOffsetX = e.clientX - rect.left;
  dragOffsetY = e.clientY - rect.top;

  bringToFront(win);

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", stopDrag);
}

function dragMove(e) {
  if (!dragWin) return;

  dragWin.style.left = (e.clientX - dragOffsetX) + "px";
  dragWin.style.top  = (e.clientY - dragOffsetY) + "px";
}

function stopDrag() {
  dragWin = null;
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("mouseup", stopDrag);
}

function openWindow(id) {
  var win = document.getElementById(id);
  if (!win) return;

  win.style.display = "block";
  bringToFront(win);
}

function closeWindow(id) {
  var win = document.getElementById(id);
  if (!win) return;

  win.style.display = "none";
}

function initPage() {
  updateClock();
  setInterval(updateClock, 60000);

  openWindow("window");
}

if (window.addEventListener) {
  window.addEventListener("load", initPage, false);
} else {
  window.onload = initPage;
}

var topZ = 100;

function bringToFront(win) {
  topZ++;
  win.style.zIndex = topZ;
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
  document.getElementById('clock-text').innerText = h + ":" + m;
  updateBackground();
}