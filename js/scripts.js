// business logic stuff:
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number3, number4) {
  return number3 - number4;
};

var multiply = function(number5, number6) {
  return number5 * number6;
};

var divide = function(number7, number8) {
  return number7 / number8;
};

// front end logic stuff:
$(document).ready(function() {
  var userNumber1 = parseInt($("#add1").val());
  var userNumber2 = parseInt($("#add2").val());

  alert(add(number1, number2));
});
