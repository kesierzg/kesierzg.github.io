var started = false;
var audio = document.getElementById("audio");

function start() {
  if (started) return;
  started = true;

  audio.play().catch(function(){});
}

audio.addEventListener("playing", function () {
  document.getElementById("content").style.display = "block";
  document.body.className = "revealed";
});

document.addEventListener("click", start);
document.addEventListener("keydown", start);