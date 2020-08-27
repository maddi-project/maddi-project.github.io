function draw() {
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
};

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
function update_slider() {
	var slider = document.getElementById("zoom");
	var number = document.getElementById("zoom-value");
	number.value = slider.value;
};
function update_number() {
	var slider = document.getElementById("zoom");
	var number = document.getElementById("zoom-value");
	slider.value = number.value;
};
function update_x() {
	var slider = document.getElementById("x");
	var number = document.getElementById("x-value");
	number.value = slider.value;
};
function update_xnumber() {
	var slider = document.getElementById("x");
	var number = document.getElementById("x-value");
	slider.value = number.value;
};
function update_y() {
	var slider = document.getElementById("y");
	var number = document.getElementById("y-value");
	number.value = slider.value;
};
function update_ynumber() {
	var slider = document.getElementById("y");
	var number = document.getElementById("y-value");
	slider.value = number.value;
};

function update_slider1() {
	update_slider();
	draw();
};
function update_number1() {
	update_number();
	draw();
};
function update_x1() {
	update_x();
	draw();
};
function update_xnumber1() {
	update_xnumber();
	draw();
};
function update_y1() {
	update_y();
	draw();
};
function update_ynumber1() {
	update_ynumber();
	draw();
};

function draw1() {
   	var canvas = document.getElementById("canvas");
	var newImg = new Image();
	newImg.src = canvas.toDataURL('image/png');
	var c = document.getElementById('canvas2');
  	var ctx = c.getContext("2d");
  /*var img = document.getElementById('output');
  var val = document.getElementById("zoom-value");
  var xs = document.getElementById("x-value");
  var ys = document.getElementById("y-value");
	var xi = margin + left + i*space;
	var xj = margin + top + j*space;*/

  	ctx.drawImage(newImg,200,200,10,10,20,20,100,100);
};
function draw2(i,j) {
	var img = document.getElementById('output');
	var c = document.getElementById('canvas2');
  	var ctx = c.getContext("2d");
  	var val = document.getElementById("zoom-value");
  	var xs = document.getElementById("x-value");
  	var ys = document.getElementById("y-value");
  var zoom = val.value;
  var xp = xs.value/100;
  var yp = ys.value/100;
  var height = img.naturalHeight;
  var width = img.naturalWidth;
  var w = 490*(width/height)*zoom;
  var h = 490*zoom;
  var x = (744-w)*xp;
  var y = (490-h)*yp;
	
	/*var xmargin = 
	var x = xmargin + left + i*space;
	var y = margin + top + j*space;*/

  	ctx.drawImage(img,0,0,10,10,0,0,100,100);
};
function draw3(i,j) {
  	var c = document.getElementById('canvas2');
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
	var posx = ((-1*x)+1*744/12.3+i*0.9*744/12.3)*img.naturalWidth/(490*proportion)/zoom;
	var posy = ((-1*y)+0.6*490/8.1+j*0.9*490/8.1)*img.naturalHeight/490/zoom;
  	ctx.drawImage(img,posx,posy,20,20,11+i*61,10+j*60,50,50);
};
function crop() {
	for (i = 0; i < 12; i++) {
  		for (j = 0; j < 8; j++) {
			draw3(i,j);
		}
	}
	window.scrollTo(0,785);
};
