$(document).ready(function() {
  var wins =0
  var losses = 0;
  var randomMatch=0;
  var hiddenValue=0;
  var sum = 0;
  var userClickedVal=0;

  function play() {
    //Generate a random number for my crystals
    randomMatch = Math.floor(Math.random() * 102) + 19;
    //PLACE the match
    $("#matchme").text(randomMatch);
    //Generate the hidden values for the crystals
    (function addHiddenValues() {
      for (i = 1; i < 5; i++) {
        hiddenValue = Math.floor(Math.random() * 12) + 1; //Crystal Random #
        $("#item" + i).attr("hiddenValue", hiddenValue)[0]; //inject random value to each crystal
      }
    })();
  }
   play();

  // //Evaluate each click from the user and add it to a sum
  $(".items").on("click", function() {
    userClickedVal = parseInt($(this).attr("hiddenValue"));
    sum += userClickedVal;
    $("#total").text(sum);
    //Evaluate the total against the match number
    if (sum > randomMatch) {
      losses++;
      $("#lossesholder").text(losses);
      deactivateCrystals();
    } else if (sum === randomMatch) {
      wins++;
      $("#winsholder").text(wins);
      deactivateCrystals();
    }
    function deactivateCrystals() {
      $(".items").addClass("active");
      setTimeout(playAgain, 2000);
    }
  });

  function playAgain() {
    $(".items").removeClass("active");
    $("#total").empty();
    $("#matchme").empty();
    randomMatch =0;
    hiddenValue=0;
    sum=0;
    userClickedVal=0;
    play();
  }
});
