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
function boxClick(well) {
	
}
