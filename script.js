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

  var message = encodeURIComponent("WHAT DO U WANT??? TELL ME! :3"); 

  var whatsappLink = "https://wa.me/6281389602147?text=" + message; 

  window.open(whatsappLink, "_blank");
}
