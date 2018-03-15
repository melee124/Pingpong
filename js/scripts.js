//Business logic
var firstArray = [];
function countUp(userNumber) {
for (var i = 1; i <= userNumber; i += 1) {
  if (i % 15 === 0) {
    firstArray.push("Pingpong");
} else if (i % 3 === 0) {
    firstArray.push("Ping");
} else if (i % 5 === 0) {
    firstArray.push("Pong");
} else {
    firstArray.push(i);
};
};
  return firstArray;
};

$(document).ready(function() {
  $("form#counting").submit(function(event) {
    event.preventDefault();
    //debugger;
    var userNumber = parseInt($("input#yournum").val());
    var secondArray = countUp(userNumber);
    //var multiplelist = multiples.slice();



  for (var i=0; i<secondArray.length; i++) {
    $("#output-ul").append("<li>" + secondArray[i] + "</li>");
  }
  });
 });
