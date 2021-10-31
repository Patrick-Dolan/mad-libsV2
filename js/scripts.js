$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    //Story choice Logic
    const storyChoice = $("#storyChoice").val();
    const storyNumber = parseInt(storyChoice.charAt(0));
    //alert(storyNumber);
    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);
    //Story Display Logic
    $("#story1,#story2,#story3,#story4,#story5").hide();
    switch(storyNumber) {
      case 1:
        $("#story1").show();
        break;
      case 2:
        $("#story2").show();
        break;
      case 3:
        $("#story3").show();
        break;
      case 4:
        $("#story4").show();
        break;
      case 5:
        $("#story5").show();
        break;
    }
    event.preventDefault();
  });
});