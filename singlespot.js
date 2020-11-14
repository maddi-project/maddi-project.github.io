function onload() {
	alert("WARNING\nIf you continue you accept to cite any results obtained using this website. MADDI by Jokin Ezenarro.");
	//document.getElementById("defaultOpen").click();
	//document.getElementById("defaultOpen1").click();
}

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
  var w = 250*proportion*zoom;
  var h = 250*zoom;
  var x = (250-w)*xp;
  var y = (250-h)*yp;
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

function get_data1() {
	var c = document.getElementById('canvas');
  	var ctx = c.getContext("2d");
	var imgData = ctx.getImageData(0,0,250,250);
	var RGB_values = [];
		var Rp = 0;
		var Gp = 0;
		var Bp = 0;
		for (var j = 0; j < imgData.data.length; j+=4) {
  			Rp = Rp + imgData.data[j];
  			Gp = Gp + imgData.data[j+1]
  			Bp = Bp + imgData.data[j+2]
  		}
		RGB_values[0] = Rp/(imgData.data.length/4);
		RGB_values[1] = Gp/(imgData.data.length/4);
		RGB_values[2] = Bp/(imgData.data.length/4);
	return RGB_values	
};
function roundTo(n, digits) {
	if (digits === undefined) {
       	digits = 0;
     	}

     	var multiplicator = Math.pow(10, digits);
     	n = parseFloat((n * multiplicator).toFixed(11));
     	var test =(Math.round(n) / multiplicator);
     	return +(test.toFixed(digits));
}
function get_data() {
	RGB = get_data1();
	document.getElementById('R0').innerHTML = roundTo(RGB[0], 2);
	document.getElementById('G0').innerHTML = roundTo(RGB[1], 2);
	document.getElementById('B0').innerHTML = roundTo(RGB[2], 2);
};
function table_to_array(table_id) {
        var myData = document.getElementById(table_id).rows
        //console.log(myData)
        var my_liste = []
        for (var i = 0; i < myData.length; i++) {
        	var el = myData[i].children
                var my_el = []
                for (var j = 0; j < el.length; j++) {
                	my_el.push(el[j].innerText);
                }
                my_liste.push(my_el)

        }
        return my_liste
};
