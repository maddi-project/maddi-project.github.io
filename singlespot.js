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
  var w = 71*proportion*zoom;
  var h = 71*zoom;
  var x = (744-w)*xp;
  var y = (71-h)*yp;
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

function crop() {
  	var c = document.getElementById('canvas2');
  	var ctx = c.getContext("2d");
  	var img = document.getElementById('output');
  	var val = document.getElementById("zoom-value");
	var xs = document.getElementById("x-value");
  	var ys = document.getElementById("y-value");
	var dim = document.getElementById("dimension");
  	var zoom = val.value;
  	var xp = xs.value/100;
  	var yp = ys.value/100;
  	var proportion = img.naturalWidth/img.naturalHeight;
  	var w = 71*proportion*zoom;
  	var h = 71*zoom;
  	var x = (744-w)*xp;
  	var y = (71-h)*yp;
	
	var RGB = [];
	var posy = ((-1*y)+0.5*71/1.54)*img.naturalHeight/71/zoom;
	
	var posx = [];
	posx[0] = ((-1*x)+0.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[1] = ((-1*x)+2.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[2] = ((-1*x)+4.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[3] = ((-1*x)+5.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[4] = ((-1*x)+6.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[5] = ((-1*x)+9*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[6] = ((-1*x)+10.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[7] = ((-1*x)+11.5*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[8] = ((-1*x)+14*744/16)*img.naturalWidth/(71*proportion)/zoom;
	posx[9] = ((-1*x)+15.6*744/16)*img.naturalWidth/(71*proportion)/zoom;
	
	for (var i = 0; i < 10; i++) {
  		ctx.drawImage(img,posx[i],posy,dim.value,dim.value,22*(i+1)+50*i,10,50,50);
		RGB[i] = ctx.getImageData(22*(i+1)+50*i,10,50,50);
	}
	return RGB;
};

function get_data1() {
	var imgData = crop();
	var RGB_values = [];
	for (var i = 0; i < 10; i++) {
		var Rp = 0;
		var Gp = 0;
		var Bp = 0;
		for (var j = 0; j < imgData[i].data.length; j+=4) {
  			Rp = Rp + imgData[i].data[j];
  			Gp = Gp + imgData[i].data[j+1]
  			Bp = Bp + imgData[i].data[j+2]
  		}
		RGB_values[i] = Rp/(imgData[i].data.length/4);
		RGB_values[i+10] = Gp/(imgData[i].data.length/4);
		RGB_values[i+20] = Bp/(imgData[i].data.length/4);
	}
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
	for (var i = 0; i < 10; i++) {
		document.getElementById('R' + i).innerHTML = roundTo(RGB[i], 2);
		document.getElementById('G' + i).innerHTML = roundTo(RGB[i+10], 2);
		document.getElementById('B' + i).innerHTML = roundTo(RGB[i+20], 2);
	}
	document.getElementById("separator").scrollIntoView();
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
