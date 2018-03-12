//Business logic

$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var number = parseInt($("input#number").val());
    var multiples = [];
    //var multiplelist = multiples.slice();

      for (var i = 0; i <= number; i += 1) {
        if (i % 15 === 0) {
          multiples.push("Pingpong");
      } else if (i % 3 === 0) {
          multiples.push("Ping");
      } else if (i % 5 === 0) {
        multiples.push("Pong");
      } else {
        multiples.push(i);
      };
      };


    $('#result').text("<li>" + multiples + "</li>");
  });
 });
