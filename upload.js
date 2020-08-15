function upload() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("tree3.jpg");
  ctx.drawImage(img, 10, 10);
};
