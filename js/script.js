var beepboop = function(userInput) {
var resultsArray = [];



$(document).ready(function() {
  $('form#beepboop').submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($('input#userInputNumber').val());  // changes user input from a string to a number, assigns it to var userNumber
    var userOutput = numberToOutput(userNumber);    // calls function on userNumber, assigns it to var userOutput
    $('#userResult').show();
  });
});
