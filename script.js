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

function openEnvelope() {
  var envelope = document.getElementById("envelope");
  envelope.style.visibility = "hidden";

  var gifContainer = document.createElement("div");
  gifContainer.style.position = "fixed";
  gifContainer.style.top = "50%";
  gifContainer.style.left = "50%";
  gifContainer.style.transform = "translate(-50%, -50%)";
  gifContainer.style.zIndex = "9999";

  var gif = document.createElement("img");
  gif.src = "Untitled.gif";
  gif.alt = "Animated GIF";

  var closeButton = document.createElement("button");
  closeButton.innerHTML = "X";
  closeButton.style.position = "fixed";
  closeButton.style.top = "1%";
  closeButton.style.right = "49%";
  closeButton.style.zIndex = "9999";
  closeButton.style.background = "none";
  closeButton.style.border = "none";
  closeButton.style.outline = "none";
  closeButton.style.color = "black";
  closeButton.style.fontFamily = "Arial";
  closeButton.style.fontSize = "20px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", function () {
    gifContainer.remove();
    envelope.style.visibility = "visible";
  });

  gifContainer.appendChild(gif);
  gifContainer.appendChild(closeButton);
  document.body.appendChild(gifContainer);
}

