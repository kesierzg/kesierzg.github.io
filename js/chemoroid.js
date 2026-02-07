var isChromium = window.chrome;
if (isChromium) {
  var redirected = localStorage.getItem('redirected');
  if (!redirected) {
    localStorage.setItem('redirected', 'true');
    window.location.replace('chrome.html');
  }
}