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
		document.getElementById('R' + i).innerHTML = RGB[i];
		document.getElementById('G' + i).innerHTML = RGB[i+96];
		document.getElementById('B' + i).innerHTML = RGB[i+192];
	}
	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();
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
	
	var color;
	var color3;
	if (set == "white set's") {
		color = '#BDBDBD';
		color3 = 'grey';
	} else if (set == "sample set 1's") {
		color = '#F78181';
		color3 = 'red';
	} else if (set == "sample set 2's") {
		color = '#81F781';
		color3 = 'green';
	} else if (set == "sample set 3's") {
		color = '#81BEF7';
		color3 = 'blue';
	} else if (set == "sample set 4's") {
		color = '#F3F781';
		color3 = 'yellow';
	} else if (set == "calibration set's") {
		color = '#DA81F5';
		color3 = '#BF00FF';
	}

	var color2;
	if (text !== "X") {
		document.getElementById(well).innerHTML = "X";
		document.getElementById(well).style.backgroundColor = '';
		if (text == "W") {
			this.corners[0] = 100;
			color2 = '#BDBDBD';
		} else if (text == "w") {
			this.corners[1] = 100;
			color2 = '#BDBDBD';
		} else if (text == "S1") {
			this.corners[2] = 100;
			color2 = '#F78181';
		} else if (text == "s1") {
			this.corners[3] = 100;
			color2 = '#F78181';
		} else if (text == "S2") {
			this.corners[4] = 100;
			color2 = '#81F781';
		} else if (text == "s2") {
			this.corners[5] = 100;
			color2 = '#81F781';
		} else if (text == "S3") {
			this.corners[6] = 100;
			color2 = '#81BEF7';
		} else if (text == "s3") {
			this.corners[7] = 100;
			color2 = '#81BEF7';
		} else if (text == "S4") {
			this.corners[8] = 100;
			color2 = '#F3F781';
		} else if (text == "s4") {
			this.corners[9] = 100;
			color2 = '#F3F781';
		} else if (text == "C") {
			this.corners[10] = 100;
			color2 = '#DA81F5';
		} else if (text == "c") {
			this.corners[11] = 100;
			color2 = '#DA81F5';
		}
		for (j = 0; j < 96; j++) {
			if (document.getElementById('c' + j).style.color == color2) {
				document.getElementById('c' + j).style.backgroundColor = '';
				document.getElementById('c' + j).style.color = 'white';
			}
		}
		//return
	}
	var color1;
	if (set == "white set's") {
		if (corner == "top left") {
			text = "W";
		} else if (corner == "bottom right") {
			text = "w";
		}
		color1 = 'grey';
	} else if (set == "sample set 1's") {
		if (corner == "top left") {
			text = "S1";
		} else if (corner == "bottom right") {
			text = "s1";
		}
		color1 = 'red';
	} else if (set == "sample set 2's") {
		if (corner == "top left") {
			text = "S2";
		} else if (corner == "bottom right") {
			text = "s2";
		}
		color1 = 'green';
	} else if (set == "sample set 3's") {
		if (corner == "top left") {
			text = "S3";
		} else if (corner == "bottom right") {
			text = "s3";
		}
		color1 = 'blue';
	} else if (set == "sample set 4's") {
		if (corner == "top left") {
			text = "S4";
		} else if (corner == "bottom right") {
			text = "s4";
		}
		color1 = 'yellow';
	} else if (set == "calibration set's") {
		if (corner == "top left") {
			text = "C";
		} else if (corner == "bottom right") {
			text = "c";
		}
		color1 = '#BF00FF';
	}
	for (i = 0; i < 96; i++) {
		var pos = 'c' + i
		if (document.getElementById(pos).innerHTML == text) {
			document.getElementById(pos).innerHTML = "X";
			document.getElementById(pos).style.backgroundColor = '';
		}
	}
	document.getElementById(well).style.backgroundColor = color1;
	document.getElementById(well).innerHTML = text;
	
	for (j = 0; j < 96; j++) {
		if (document.getElementById('c' + j).style.color !== '') {
			document.getElementById('c' + j).style.backgroundColor = '';
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
				document.getElementById(position).style.backgroundColor = '#BDBDBD';
				document.getElementById(position).style.color = '#BDBDBD';
			}
		}
		document.getElementById('c' + this.corners[0]).style.backgroundColor = 'grey';
		document.getElementById('c' + this.corners[0]).style.color = 'white';
		document.getElementById('c' + this.corners[1]).style.backgroundColor = 'grey';
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
				document.getElementById(position).style.backgroundColor = '#F78181';
				document.getElementById(position).style.color = '#F78181';
			}
		}
		document.getElementById('c' + this.corners[2]).style.backgroundColor = 'red';
		document.getElementById('c' + this.corners[2]).style.color = 'white';
		document.getElementById('c' + this.corners[3]).style.backgroundColor = 'red';
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
				document.getElementById(position).style.backgroundColor = '#81F781';
				document.getElementById(position).style.color = '#81F781';
			}
		}
		document.getElementById('c' + this.corners[4]).style.backgroundColor = 'green';
		document.getElementById('c' + this.corners[4]).style.color = 'white';
		document.getElementById('c' + this.corners[5]).style.backgroundColor = 'green';
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
				document.getElementById(position).style.backgroundColor = '#81BEF7';
				document.getElementById(position).style.color = '#81BEF7';
			}
		}
		document.getElementById('c' + this.corners[6]).style.backgroundColor = 'blue';
		document.getElementById('c' + this.corners[6]).style.color = 'white';
		document.getElementById('c' + this.corners[7]).style.backgroundColor = 'blue';
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
				document.getElementById(position).style.backgroundColor = '#F3F781';
				document.getElementById(position).style.color = '#F3F781';
			}
		}
		document.getElementById('c' + this.corners[8]).style.backgroundColor = 'yellow';
		document.getElementById('c' + this.corners[8]).style.color = 'white';
		document.getElementById('c' + this.corners[9]).style.backgroundColor = 'yellow';
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
				document.getElementById(position).style.backgroundColor = '#DA81F5';
				document.getElementById(position).style.color = '#DA81F5';
			}
		}
		document.getElementById('c' + this.corners[10]).style.backgroundColor = '#BF00FF';
		document.getElementById('c' + this.corners[10]).style.color = 'white';
		document.getElementById('c' + this.corners[11]).style.backgroundColor = '#BF00FF';
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
function cleartable() {
	this.corners = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
	for (i = 0; i < 96; i++) {
		document.getElementById('c' + i).innerHTML = "X";
		document.getElementById('c' + i).style.backgroundColor = '';
		document.getElementById('c' + i).style.color = '';
	}
}

function show() {
	for (i = 0; i < 96; i++) {
		if (document.getElementById('c' + i).style.backgroundColor == 'grey') {
			document.getElementById('c' + i).style.backgroundColor = '#BDBDBD';
		} else if (document.getElementById('c' + i).style.backgroundColor == 'red') {
			document.getElementById('c' + i).style.backgroundColor = '#F78181';
		} else if (document.getElementById('c' + i).style.backgroundColor == 'green') {
			document.getElementById('c' + i).style.backgroundColor = '#81F781';
		} else if (document.getElementById('c' + i).style.backgroundColor == 'blue') {
			document.getElementById('c' + i).style.backgroundColor = '#81BEF7';
		} else if (document.getElementById('c' + i).style.backgroundColor == 'yellow') {
			document.getElementById('c' + i).style.backgroundColor = '#F3F781';
		} else if (document.getElementById('c' + i).style.backgroundColor == '#BF00FF') {
			document.getElementById('c' + i).style.backgroundColor = '#DA81F5';
		}
	}
	if (this.corners[0] !== 100 && this.corners[1] !== 100) {
		var a = this.corners[0];
		var b = this.corners[1];
		var pas = [0, a, 0, b];
		var count = 1;
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
				document.getElementById(position).innerHTML = count;
				document.getElementById(position).style.color = '';
				count++
			}
		}
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
				document.getElementById(position).innerHTML = x - pas[1] + 1;
				document.getElementById(position).style.color = '';
			}
		}
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
				document.getElementById(position).innerHTML = x - pas[1] + 1;
				document.getElementById(position).style.color = '';
			}
		}
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
				document.getElementById(position).innerHTML = x - pas[1] + 1;
				document.getElementById(position).style.color = '';
			}
		}
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
				document.getElementById(position).innerHTML = x - pas[1] + 1;
				document.getElementById(position).style.color = '';
			}
		}
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
				document.getElementById(position).innerHTML = x - pas[1] + 1;
				document.getElementById(position).style.color = '';
			}
		}
	}
}
function hide() {
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
				document.getElementById(position).style.backgroundColor = '#BDBDBD';
				document.getElementById(position).style.color = '#BDBDBD';
			}
		}
		document.getElementById('c' + this.corners[0]).style.backgroundColor = 'grey';
		document.getElementById('c' + this.corners[0]).style.color = 'white';
		document.getElementById('c' + this.corners[0]).innerHTML = "W";
		document.getElementById('c' + this.corners[1]).style.backgroundColor = 'grey';
		document.getElementById('c' + this.corners[1]).style.color = 'white';
		document.getElementById('c' + this.corners[1]).innerHTML = "w";
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
				document.getElementById(position).style.backgroundColor = '#F78181';
				document.getElementById(position).style.color = '#F78181';
			}
		}
		document.getElementById('c' + this.corners[2]).style.backgroundColor = 'red';
		document.getElementById('c' + this.corners[2]).style.color = 'white';
		document.getElementById('c' + this.corners[2]).innerHTML = "S1";
		document.getElementById('c' + this.corners[3]).style.backgroundColor = 'red';
		document.getElementById('c' + this.corners[3]).style.color = 'white';
		document.getElementById('c' + this.corners[3]).innerHTML = "s1";
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
				document.getElementById(position).style.backgroundColor = '#81F781';
				document.getElementById(position).style.color = '#81F781';
			}
		}
		document.getElementById('c' + this.corners[4]).style.backgroundColor = 'green';
		document.getElementById('c' + this.corners[4]).style.color = 'white';
		document.getElementById('c' + this.corners[4]).innerHTML = "S2";
		document.getElementById('c' + this.corners[5]).style.backgroundColor = 'green';
		document.getElementById('c' + this.corners[5]).style.color = 'white';
		document.getElementById('c' + this.corners[5]).innerHTML = "s2";
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
				document.getElementById(position).style.backgroundColor = '#81BEF7';
				document.getElementById(position).style.color = '#81BEF7';
			}
		}
		document.getElementById('c' + this.corners[6]).style.backgroundColor = 'blue';
		document.getElementById('c' + this.corners[6]).style.color = 'white';
		document.getElementById('c' + this.corners[6]).innerHTML = "S3";
		document.getElementById('c' + this.corners[7]).style.backgroundColor = 'blue';
		document.getElementById('c' + this.corners[7]).style.color = 'white';
		document.getElementById('c' + this.corners[7]).innerHTML = "s3";
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
				document.getElementById(position).style.backgroundColor = '#F3F781';
				document.getElementById(position).style.color = '#F3F781';
			}
		}
		document.getElementById('c' + this.corners[8]).style.backgroundColor = 'yellow';
		document.getElementById('c' + this.corners[8]).style.color = 'white';
		document.getElementById('c' + this.corners[8]).innerHTML = "S4";
		document.getElementById('c' + this.corners[9]).style.backgroundColor = 'yellow';
		document.getElementById('c' + this.corners[9]).style.color = 'white';
		document.getElementById('c' + this.corners[9]).innerHTML = "s4";
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
				document.getElementById(position).style.backgroundColor = '#DA81F5';
				document.getElementById(position).style.color = '#DA81F5';
			}
		}
		document.getElementById('c' + this.corners[10]).style.backgroundColor = '#BF00FF';
		document.getElementById('c' + this.corners[10]).style.color = 'white';
		document.getElementById('c' + this.corners[10]).innerHTML = "C";
		document.getElementById('c' + this.corners[11]).style.backgroundColor = '#BF00FF';
		document.getElementById('c' + this.corners[11]).style.color = 'white';
		document.getElementById('c' + this.corners[11]).innerHTML = "c";
	} 
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function getabsorbances() {
	var RGB = get_data1();
	var whites = 0;
	var set1 = 0;
	var set2 = 0;
	var set3 = 0;
	var set4 = 0;
	var calibration = 0;
	var absW = [0, 0, 0];
	var absS1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var absS2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var absS3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var absS4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var absC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	show();
	for (var i = 0; i < 96; i++) {
		var num = document.getElementById('c' + i).innerHTML - 1;
		if (document.getElementById('c' + i).style.backgroundColor == "rgb(189, 189, 189)") {
			absW[0] += RGB[i];
			absW[1] += RGB[i + 96];
			absW[2] += RGB[i + 192];
			whites++
		} else if (document.getElementById('c' + i).style.backgroundColor == "rgb(247, 129, 129)") {
			absS1[num] += RGB[i];
			absS1[num + 12] += RGB[i + 96];
			absS1[num + 24] += RGB[i + 192];
			if (num == 1) {
				set1++
			}
		} else if (document.getElementById('c' + i).style.backgroundColor == "rgb(129, 247, 129)") {
			absS2[num] += RGB[i];
			absS2[num + 12] += RGB[i + 96];
			absS2[num + 24] += RGB[i + 192];
			if (num == 1) {
				set2++
			}
		} else if (document.getElementById('c' + i).style.backgroundColor == "rgb(129, 190, 247)") {
			absS3[num] += RGB[i];
			absS3[num + 12] += RGB[i + 96];
			absS3[num + 24] += RGB[i + 192];
			if (num == 1) {
				set3++
			}
		} else if (document.getElementById('c' + i).style.backgroundColor == "rgb(243, 247, 129)") {
			absS4[num] += RGB[i];
			absS4[num + 12] += RGB[i + 96];
			absS4[num + 24] += RGB[i + 192];
			if (num == 1) {
				set4++
			}
		} else if (document.getElementById('c' + i).style.backgroundColor == "rgb(218, 129, 245)") {
			absC[num] += RGB[i];
			absC[num + 12] += RGB[i + 96];
			absC[num + 24] += RGB[i + 192];
			if (num == 1) {
				calibration++
			}
		}
	}
	absW[0] = absW[0]/whites;
	absW[1] = absW[1]/whites;
	absW[2] = absW[2]/whites;
	for (var j = 0; j < 12; j++) {
		for  (var k = 0; k < 3; k++) {
			absS1[j + k*12] = absS1[j + k*12]/set1;
			absS2[j + k*12] = absS2[j + k*12]/set2;
			absS3[j + k*12] = absS3[j + k*12]/set3;
			absS4[j + k*12] = absS4[j + k*12]/set3;
			absC[j + k*12] = absC[j + k*12]/calibration;
		}
	}
	for (var j = 0; j < 12; j++) {
		for  (var k = 0; k < 3; k++) {
			absS1[j + k*12] = Math.log10(absW[k]/absS1[j + k*12]);
			absS2[j + k*12] = Math.log10(absW[k]/absS2[j + k*12]);
			absS3[j + k*12] = Math.log10(absW[k]/absS3[j + k*12]);
			absS4[j + k*12] = Math.log10(absW[k]/absS4[j + k*12]);
			absC[j + k*12] = Math.log10(absW[k]/absC[j + k*12]);
		}
	}
	hide();
	var m = 0;
	while (m < 12 && absS1[m] !== Infinity) {
		document.getElementById('1a' + (m+1) + '.2').innerHTML = absS1[m];
		document.getElementById('1a' + (m+1) + '.3').innerHTML = absS1[m + 12];
		document.getElementById('1a' + (m+1) + '.4').innerHTML = absS1[m + 24];
		m++
	}
	m = 0;
	while (m < 12 && absS1[m] !== Infinity) {
		document.getElementById('2a' + (m+1) + '.2').innerHTML = absS2[m];
		document.getElementById('2a' + (m+1) + '.3').innerHTML = absS2[m + 12];
		document.getElementById('2a' + (m+1) + '.4').innerHTML = absS2[m + 24];
		m++
	}
	m = 0;
	while (m < 12 && absS1[m] !== Infinity) {
		document.getElementById('3a' + (m+1) + '.2').innerHTML = absS3[m];
		document.getElementById('3a' + (m+1) + '.3').innerHTML = absS3[m + 12];
		document.getElementById('3a' + (m+1) + '.4').innerHTML = absS3[m + 24];
		m++
	}
	m = 0;
	while (m < 12 && absS1[m] !== Infinity) {
		document.getElementById('4a' + (m+1) + '.2').innerHTML = absS4[m];
		document.getElementById('4a' + (m+1) + '.3').innerHTML = absS4[m + 12];
		document.getElementById('4a' + (m+1) + '.4').innerHTML = absS4[m + 24];
		m++
	}
	document.getElementById("defaultOpen1").click();
	window.scrollTo(0,2085);
}
