var beepboop = function(userInput) {
  var resultsArray = [];

  for (var i = 0; i <= userInput; i++) {
    if (i.toString().includes('1')) {
      resultsArray.push("Beep!");
    } else if (i.toString().includes('2')) {
      resultsArray.push('Boop!');
    } else if (i.toString().includes('3')) {
      resultsArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      resultsArray.push(i);
    };
  };
  return resultsArray;
};


$(document).ready(function() {
  $('form#beepboop').submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($('input#userInputNumber').val()); // changes user input from a string to a number, assigns it to var userNumber
    var userOutput = beepboop(userNumber); // calls function on userNumber, assigns it to var userOutput
    $('#userResult').text(userOutput);
  });
});