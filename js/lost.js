var started = false;

function start() {
  if (started) return;
  started = true;

  document.getElementById("content").style.display = "block";
  document.body.className = "revealed";
  document.getElementById("audio").play();
}

document.addEventListener("click", start);
document.addEventListener("keydown", start);