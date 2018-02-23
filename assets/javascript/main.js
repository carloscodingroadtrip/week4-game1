$(document).ready(function() {
  var wins =0
  var losses = 0;
  var randomMatch=0;
  var hiddenValue=0;
  var sum = 0;
  var userClickedVal=0;

  function play() {
    //Generate a random numberfunction randomMatch() {
    randomMatch = Math.floor(Math.random() * 102) + 19;
    $("#matchme").text(randomMatch);
    console.log('random match PC ' + randomMatch);
    //Generate the hidden values for the crystals
    function addHiddenValues() {
      for (i = 1; i < 5; i++) {
        hiddenValue = Math.floor(Math.random() * 12) + 1; //Crystal Random #
        $("#item" + i).attr("hiddenValue", hiddenValue)[0];
      }
    }
    addHiddenValues();
  }
   play();

  // //Evaluate each click from the user and add it to a sum
  $(".items").on("click", function() {
    userClickedVal = parseInt($(this).attr("hiddenValue"));
    console.log('the crystal value was ' + userClickedVal);
    sum += userClickedVal;
    $("#total").text(sum);
    console.log("sum INSIDE :" + sum);
    if (sum > randomMatch) {
      losses++;
      $("#lossesholder").text(losses);
      console.log("YOU LOSS !!!!!! :" + sum);
      deactivateCrystals();
    } else if (sum === randomMatch) {
      wins++;
      $("#winsholder").text(wins);
      console.log("YOU WON !!!!!! :" + sum);
      deactivateCrystals();
    }

    function deactivateCrystals() {
      $(".items").addClass("active");
      setTimeout(playAgain, 5000);
    }
  });

  function playAgain() {
    //console.log("sum after win/loss: " + sum);
    $(".items").removeClass("active");
    $("#total").empty();
    $("#matchme").empty();
    randomMatch =0;
    hiddenValue=0;
    sum=0;
    userClickedVal=0;
    play();
    console.log("-----------------------------");
    console.log("---A NEW GAME JUST STARTED----");
    console.log("-----------------------------");
    console.log("match AFTER WIN/LOSS : " + randomMatch);
  }

});
