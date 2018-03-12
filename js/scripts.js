//Business logic


$(document).ready(function() {
  $("form#countup").submit(function(event) {
    event.preventDefault();
    debugger;
    var number = parseInt($("input#number").val());
    var multiples = [];
    var multiplelist = numbers.map(function(number) {
      if (i % 3 === 0 && i % 5 === 0) {
        return pingpong;
      } else if (i % 3 === 0) {
        return ping;
      }
    };

      for (var i = 0; i <= number; i += 1) {
        if (i % i === 0) {
          multiples.push(i);
    //      multiplelist += "<li>" + multiples + "</li>";
        };

    $('#result').text(multiplelist);



  };
 });
});
