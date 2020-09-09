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

function draw1(i,j) {
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
  	var w = 490*proportion*zoom;
  	var h = 490*zoom;
  	var x = (744-w)*xp;
  	var y = (490-h)*yp;
	var posx = ((-1*x)+1.1*744/12.3+i*0.9*744/12.3)*img.naturalWidth/(490*proportion)/zoom;
	var posy = ((-1*y)+0.7*490/8.1+j*0.9*490/8.1)*img.naturalHeight/490/zoom;
  	ctx.drawImage(img,posx,posy,dim.value,dim.value,11+i*61,10+j*60,50,50);
	
	var RGB
	RGB = ctx.getImageData(11+i*61,10+j*60,50,50);
	//RGB = ctx.getImageData(1.1*744/12.3+i*0.9*744/12.3,0.7*490/8.1+j*0.9*490/8.1,dim.value,dim.value);
	return RGB;
};
function crop1() {
	var Data = [];
	for (i = 0; i < 12; i++) {
  		for (j = 0; j < 8; j++) {
			Data[j*12+i] = draw1(i,j);
		}
	}
	return Data
};
function crop() {
	crop1();
	window.scrollTo(0,695);
};
function get_data1() {
	var imgData = crop1();
	var RGB_values = [];
	for (var i = 0; i < 96; i++) {
		var Rp = 0;
		var Gp = 0;
		var Bp = 0;
		for (var j = 0; j < imgData[i].data.length; j+=4) {
  			Rp = Rp + imgData[i].data[j];
  			Gp = Gp + imgData[i].data[j+1]
  			Bp = Bp + imgData[i].data[j+2]
  		}
		RGB_values[i] = Rp/(imgData[i].data.length/4);
		RGB_values[i+96] = Gp/(imgData[i].data.length/4);
		RGB_values[i+192] = Bp/(imgData[i].data.length/4);
	}
	return RGB_values	
};
function get_data() {
	RGB = get_data1();
	for (var i = 0; i < 96; i++) {
		var r = 'R' + i;
		document.getElementById(r).innerHTML = RGB[i];
		var g = 'G' + i;
		document.getElementById(g).innerHTML = RGB[i+96];
		var b = 'B' + i;
		document.getElementById(b).innerHTML = RGB[i+192];
	}
	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
	document.getElementById("defaultOpen1").click();
	window.scrollTo(0,1390);
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
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}
function openPage1(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

//Selection table
var corners = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

function boxClick(well) {
	var set = document.getElementById("selectset").value;
	var corner = document.getElementById("selectcorner").value;
	var text = document.getElementById(well).innerHTML;
	
	if (text !== "X") {
		document.getElementById(well).innerHTML = "X";
		document.getElementById(well).style.backgroundColor = '';
		var color;
		if (text == "W") {
			this.corners[0] = 100;
			color = 'grey';
		} else if (text == "w") {
			this.corners[1] = 100;
			color = 'grey';
		} else if (text == "S1") {
			this.corners[2] = 100;
		} else if (text == "s1") {
			this.corners[3] = 100;
		} else if (text == "S2") {
			this.corners[4] = 100;
		} else if (text == "s2") {
			this.corners[5] = 100;
		} else if (text == "S3") {
			this.corners[6] = 100;
		} else if (text == "s3") {
			this.corners[7] = 100;
		} else if (text == "S4") {
			this.corners[8] = 100;
		} else if (text == "s4") {
			this.corners[9] = 100;
		} else if (text == "C") {
			this.corners[10] = 100;
		} else if (text == "C") {
			this.corners[11] = 100;
		}
		for (j = 0; j < 96; j++) {
			if (document.getElementById('c' + j).style.color == color) {
				document.getElementById('c' + j).style.backgroundColor = 'white';
				document.getElementById('c' + j).style.color = 'white';
			}
		}
		return
	}

	if (set == "white set's") {
		if (corner == "top left") {
			text = "W";
		} else if (corner == "bottom right") {
			text = "w";
		}
	} else if (set == "sample set 1's") {
		if (corner == "top left") {
			text = "S1";
		} else if (corner == "bottom right") {
			text = "s1";
		}
	} else if (set == "sample set 2's") {
		if (corner == "top left") {
			text = "S2";
		} else if (corner == "bottom right") {
			text = "s2";
		}
	} else if (set == "sample set 3's") {
		if (corner == "top left") {
			text = "S3";
		} else if (corner == "bottom right") {
			text = "s3";
		}
	} else if (set == "sample set 4's") {
		if (corner == "top left") {
			text = "S4";
		} else if (corner == "bottom right") {
			text = "s4";
		}
	} else if (set == "calibration set's") {
		if (corner == "top left") {
			text = "C";
		} else if (corner == "bottom right") {
			text = "c";
		}
	}
	for (i = 0; i < 96; i++) {
		var pos = 'c' + i
		if (document.getElementById(pos).innerHTML == text) {
			document.getElementById(pos).innerHTML = "X";
			document.getElementById(pos).style.backgroundColor = '';
		}
	}
	document.getElementById(well).style.backgroundColor = 'black';
	document.getElementById(well).innerHTML = text;
	
	for (j = 0; j < 96; j++) {
		if (document.getElementById('c' + j).style.color == 'grey') {
			document.getElementById('c' + j).style.backgroundColor = 'white';
			document.getElementById('c' + j).style.color = 'white';
		}
	}
	boxLocate();
	
	if (this.corners[0] !== 100 && this.corners[1] !== 100) {
		var a = this.corners[0];
		var b = this.corners[1];
		var pas = [0, a, 0, b];
		while (a > 11) {
			pas[0]++
			a -= 12;
			pas[1] = a;
		}
		while (b > 11) {
			pas[2]++
			b -= 12;
			pas[3] = b;
		}
		for (y = pas[0]; y <= pas[2]; y++) {
			for (x = pas[1]; x <= pas[3]; x++) {
				var position = 'c' + (y*12 + x);
				document.getElementById(position).style.backgroundColor = 'grey';
				document.getElementById(position).style.color = 'grey';
			}
		}
		document.getElementById('c' + this.corners[0]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[0]).style.color = 'white';
		document.getElementById('c' + this.corners[1]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[1]).style.color = 'white';
	} 
	if (this.corners[2] !== 100 && this.corners[3] !== 100) {
		var a = this.corners[2];
		var b = this.corners[3];
		var pas = [0, a, 0, b];
		while (a > 11) {
			pas[0]++
			a -= 12;
			pas[1] = a;
		}
		while (b > 11) {
			pas[2]++
			b -= 12;
			pas[3] = b;
		}
		for (y = pas[0]; y <= pas[2]; y++) {
			for (x = pas[1]; x <= pas[3]; x++) {
				var position = 'c' + (y*12 + x);
				document.getElementById(position).style.backgroundColor = 'grey';
				document.getElementById(position).style.color = 'grey';
			}
		}
		document.getElementById('c' + this.corners[2]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[2]).style.color = 'white';
		document.getElementById('c' + this.corners[3]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[3]).style.color = 'white';
	} 
	if (this.corners[4] !== 100 && this.corners[5] !== 100) {
		var a = this.corners[4];
		var b = this.corners[5];
		var pas = [0, a, 0, b];
		while (a > 11) {
			pas[0]++
			a -= 12;
			pas[1] = a;
		}
		while (b > 11) {
			pas[2]++
			b -= 12;
			pas[3] = b;
		}
		for (y = pas[0]; y <= pas[2]; y++) {
			for (x = pas[1]; x <= pas[3]; x++) {
				var position = 'c' + (y*12 + x);
				document.getElementById(position).style.backgroundColor = 'grey';
				document.getElementById(position).style.color = 'grey';
			}
		}
		document.getElementById('c' + this.corners[4]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[4]).style.color = 'white';
		document.getElementById('c' + this.corners[5]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[5]).style.color = 'white';
	} 
	if (this.corners[6] !== 100 && this.corners[7] !== 100) {
		var a = this.corners[6];
		var b = this.corners[7];
		var pas = [0, a, 0, b];
		while (a > 11) {
			pas[0]++
			a -= 12;
			pas[1] = a;
		}
		while (b > 11) {
			pas[2]++
			b -= 12;
			pas[3] = b;
		}
		for (y = pas[0]; y <= pas[2]; y++) {
			for (x = pas[1]; x <= pas[3]; x++) {
				var position = 'c' + (y*12 + x);
				document.getElementById(position).style.backgroundColor = 'grey';
				document.getElementById(position).style.color = 'grey';
			}
		}
		document.getElementById('c' + this.corners[6]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[6]).style.color = 'white';
		document.getElementById('c' + this.corners[7]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[7]).style.color = 'white';
	}
	if (this.corners[8] !== 100 && this.corners[9] !== 100) {
		var a = this.corners[8];
		var b = this.corners[9];
		var pas = [0, a, 0, b];
		while (a > 11) {
			pas[0]++
			a -= 12;
			pas[1] = a;
		}
		while (b > 11) {
			pas[2]++
			b -= 12;
			pas[3] = b;
		}
		for (y = pas[0]; y <= pas[2]; y++) {
			for (x = pas[1]; x <= pas[3]; x++) {
				var position = 'c' + (y*12 + x);
				document.getElementById(position).style.backgroundColor = 'grey';
				document.getElementById(position).style.color = 'grey';
			}
		}
		document.getElementById('c' + this.corners[8]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[8]).style.color = 'white';
		document.getElementById('c' + this.corners[9]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[9]).style.color = 'white';
	}
	if (this.corners[10] !== 100 && this.corners[11] !== 100) {
		var a = this.corners[10];
		var b = this.corners[11];
		var pas = [0, a, 0, b];
		while (a > 11) {
			pas[0]++
			a -= 12;
			pas[1] = a;
		}
		while (b > 11) {
			pas[2]++
			b -= 12;
			pas[3] = b;
		}
		for (y = pas[0]; y <= pas[2]; y++) {
			for (x = pas[1]; x <= pas[3]; x++) {
				var position = 'c' + (y*12 + x);
				document.getElementById(position).style.backgroundColor = 'grey';
				document.getElementById(position).style.color = 'grey';
			}
		}
		document.getElementById('c' + this.corners[10]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[10]).style.color = 'white';
		document.getElementById('c' + this.corners[11]).style.backgroundColor = 'black';
		document.getElementById('c' + this.corners[11]).style.color = 'white';
	} 
		
}

function boxLocate() {
	this.corners = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
	for (i = 0; i < 96; i++) {
		var well = 'c' + i
		if (document.getElementById(well).innerHTML == "W") {
			this.corners[0] = i;
		} else if (document.getElementById(well).innerHTML == "w") {
			this.corners[1] = i;
		} else if (document.getElementById(well).innerHTML == "S1") {
			this.corners[2] = i;
		} else if (document.getElementById(well).innerHTML == "s1") {
			this.corners[3] = i;
		} else if (document.getElementById(well).innerHTML == "S2") {
			this.corners[4] = i;
		} else if (document.getElementById(well).innerHTML == "s2") {
			this.corners[5] = i;
		} else if (document.getElementById(well).innerHTML == "S3") {
			this.corners[6] = i;
		} else if (document.getElementById(well).innerHTML == "s3") {
			this.corners[7] = i;
		} else if (document.getElementById(well).innerHTML == "S4") {
			this.corners[8] = i;
		} else if (document.getElementById(well).innerHTML == "s4") {
			this.corners[9] = i;
		} else if (document.getElementById(well).innerHTML == "C") {
			this.corners[10] = i;
		} else if (document.getElementById(well).innerHTML == "c") {
			this.corners[11] = i;
		}
	}
}
