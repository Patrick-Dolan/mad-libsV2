$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").append("blah blah person1");
    $(".person2").append("blah blah person2");
    $(".animal").append("blah blah animal");
    $(".exclamation").append("blah blah exclamation");
    $(".verb").append("blah blah verb");
    $(".noun").append("blah blah noun");
    $("#story").show();

    event.preventDefault();
  });
});