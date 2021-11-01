$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);
    $("#fullFormSection").slideUp();
    //Story choice Logic
    const storyChoice = $("#storyChoice").val();
    const storyNumber = parseInt(storyChoice.charAt(0));    
    //Story Display Logic
    $("#story1,#story2,#story3,#story4,#story5").hide();
    switch(storyNumber) {
      case 1:
        $("#story1").show();
        $("#switchStoryGroup").slideDown(100);
        break;
      case 2:
        $("#story2").show();
        $("#switchStoryGroup").slideDown(100);
        break;
      case 3:
        $("#story3").show();
        $("#switchStoryGroup").slideDown(100);
        break;
      case 4:
        $("#story4").show();
        $("#switchStoryGroup").slideDown(100);
        break;
      case 5:
        $("#story5").show();
        $("#switchStoryGroup").slideDown(100);
        break;
    }
    event.preventDefault();
  });
  // Story Switch Logic
  $("#story1Switch").click(function() {
    $("#story2,#story3,#story4,#story5").hide();
    $("#story1").fadeIn(1000);
  });
  $("#story2Switch").click(function() {
    $("#story1,#story3,#story4,#story5").hide();
    $("#story2").fadeIn(1000);
  });
  $("#story3Switch").click(function() {
    $("#story1,#story2,#story4,#story5").hide();
    $("#story3").fadeIn(1000);
  });
  $("#story4Switch").click(function() {
    $("#story1,#story2,#story3,#story5").hide();
    $("#story4").fadeIn(1000);
  });
  $("#story5Switch").click(function() {
    $("#story1,#story2,#story3,#story4").hide();
    $("#story5").fadeIn(1000);
  });
  //Reload page 
  $("#refreshPageButton").click(function() {
    location.reload(true);
  });
});