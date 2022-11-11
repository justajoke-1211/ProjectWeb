$(document).ready(function () {
  $(".Excercise").click(function () {
    $(".content").append(
      '<svg width="200" height="100">' +
      '<rect width="200" height="100" style="fill:rgb(255,255,255);stroke-width:10;stroke:rgb(0,0,0)" />' +
      '<text x="50" y="50" fill="black" >' + "Hello " + '</text>' +
      '</svg>'
    );
  });
});