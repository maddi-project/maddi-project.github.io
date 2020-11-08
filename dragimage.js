function draw10() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext("2d");
  var img = document.getElementById('output');
  var val = document.getElementById("zoom-value");
  var xs = document.getElementById("x-value");
  var ys = document.getElementById("y-value");
  var zoom = val.value;
  var xp = xs.value/100;
  var yp = ys.value/100;
  var proportion = img.naturalWidth/img.naturalHeight;
  var w = 490*proportion*zoom;
  var h = 490*zoom;
  var x = (744-w)*xp;
  var y = (490-h)*yp;
  ctx.drawImage(img,x,y,w,h);
  
  canvas = document.getElementById('canvas');
  context = canvas.getContext("2d");

  currentX = canvas.width/2;
  currentY = canvas.height/2;

  star_img.src = document.getElementById('output');
  star_img.onload = function() {
    _Go();
  };
};

function _Go() {
  _MouseEvents();

  setInterval(function() {
    _DrawImage();
  }, 1000/30);
}

function _DrawImage() {
  context.drawImage(star_img, currentX-(star_img.width/2), currentY-(star_img.height/2));
}

setInterval(function() {
  _ResetCanvas()
  _DrawImage();
}, 1000/30);

function _ResetCanvas() {
  context.fillStyle = '#fff';
  context.fillRect(0,0, canvas.width, canvas.height);
}

canvas.onmousedown = function(e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;


    if (mouseX >= (currentX - star_img.width/2) &&
        mouseX <= (currentX + star_img.width/2) &&
        mouseY >= (currentY - star_img.height/2) &&
        mouseY <= (currentY + star_img.height/2)) {
      isDraggable = true;
    }
};

canvas.onmouseup = function(e) {
    isDraggable = false;
  };
  
canvas.onmouseout = function(e) {
    isDraggable = false;
  };
  
canvas.onmousemove = function(e) {
   if (isDraggable) {
      currentX = e.pageX - this.offsetLeft;
      currentY = e.pageY - this.offsetTop;
    }
 };
