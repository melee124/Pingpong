//Business logic


$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var number = parseInt($("input#number").val());
    var multiples = [];

      for (var i = 0; i <= number; i += 1) {
        if (number % i === 0) {
          multiples.push(i);
        };

    $('#result').text(multiples);



  };
 });
});
