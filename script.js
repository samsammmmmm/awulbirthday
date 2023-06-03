var light = document.querySelector('.light');

var px = 0;
var py = 0;

var touches = [];

window.addEventListener('mousemove', follow, false);
window.addEventListener('touchmove', follow, false);

function follow(event) {
  
  px = event.pageX;
  py = event.pageY;
  
  if(px == null || py == null) {
    touches = event.touches;
    px = touches[0].pageX;
    py = touches[0].pageY;
  }
  
  for (var i = 0; i < 20; i++) {
    
    light.style.transform = 'translate(' + px + 'px, ' + py + 'px) rotate(25deg)';
    
  }
  
}

setTimeout(function () {
  var envelope = document.getElementById("envelope");
  envelope.style.display = "block";
}, 5000);

setTimeout(function () {
  var envelope = document.getElementById("envelope");
  envelope.style.display = "block";
}, 5000);

function openEnvelope() {
  var envelope = document.getElementById("envelope");
  envelope.style.display = "none";

  var gifContainer = document.createElement("div");
  gifContainer.style.position = "fixed";
  gifContainer.style.top = "0";
  gifContainer.style.left = "0";
  gifContainer.style.width = "100vw";
  gifContainer.style.height = "100vh";
  gifContainer.style.zIndex = "9999";

  var gif = document.createElement("img");
  gif.src = "Untitled.gif";
  gif.alt = "Animated GIF";
  gif.style.width = "100%";
  gif.style.height = "100%";

  gifContainer.appendChild(gif);
  document.body.appendChild(gifContainer);
}
