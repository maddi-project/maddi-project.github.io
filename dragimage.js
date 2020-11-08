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
  
  this.canvas = document.getElementById('canvas');
  this.context = canvas.getContext("2d");

  this.currentX = canvas.width/2;
  this.currentY = canvas.height/2;

  this.star_img.src = document.getElementById('output');
  this.star_img.onload = function() {
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
  context.drawImage(this.star_img, this.currentX-(this.star_img.width/2), this.currentY-(this.star_img.height/2));
}

setInterval(function() {
  _ResetCanvas()
  _DrawImage();
}, 1000/30);

function _ResetCanvas() {
  this.context.fillStyle = '#fff';
  this.context.fillRect(0,0, this.canvas.width, this.canvas.height);
}

this.canvas.onmousedown = function(e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;


    if (mouseX >= (currentX - star_img.width/2) &&
        mouseX <= (currentX + star_img.width/2) &&
        mouseY >= (currentY - star_img.height/2) &&
        mouseY <= (currentY + star_img.height/2)) {
      this.isDraggable = true;
    }
};

this.canvas.onmouseup = function(e) {
    this.isDraggable = false;
  };
  
this.canvas.onmouseout = function(e) {
    this.isDraggable = false;
  };
  
this.canvas.onmousemove = function(e) {
   if (this.isDraggable) {
      this.currentX = e.pageX - this.offsetLeft;
      this.currentY = e.pageY - this.offsetTop;
    }
 };
