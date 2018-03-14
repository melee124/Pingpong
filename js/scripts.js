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

return firstarray;

//User interface logic

$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var usernumber = parseInt($("input#userInput").val());
    var result = countUp(usernumber);
    var secondarray = array.from(firstarray);
    var ul = $("#output ul");





    for (var i = 0; i < firstarray; i++)
    {
      $("output-ul").append("<li>" + result[index] + "</li>")
    }
  });
 });
