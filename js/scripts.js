//Business logic


$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var number = parseInt($("input#number").val());
    if (number % 3 === 0) {
      $("#ping").show()
    }
    else if (number % 5 === 0) {
      $("#pong").show()
    }
    else if (number % 5 === 0 && number % 3 === 0) {
      $("#pingpong").show()
    }
    else {
      $("#none").show()
    }

 });
});
