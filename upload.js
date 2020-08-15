function upload() {
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
};
function upload1() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("finput");
  ctx.drawImage(img, 10, 10);
};
