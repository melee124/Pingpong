function.countup("#usernumber") {
for (var i = 0; i <= number; i += 1) {
  if (i % 15 === 0) {
    firstarray.push("Pingpong");
} else if (i % 3 === 0) {
    firstarray.push("Ping");
} else if (i % 5 === 0) {
  firstarray.push("Pong");
} else {
  firstarray.push(i);
};
};

//Business logic

$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var usernumber = parseInt($("input#usernumber").val());
    var firstarray = [];
    var secondarray = array.from(firstarray);
      if (firstarray.isArray())







    $('#result').text(secondarray);
  });
 });
