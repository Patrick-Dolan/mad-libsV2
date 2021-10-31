$(document).ready(function() {
  $("#formOne").SubmitEvent(function() {
    $(".person1").append("blah blah person1");
    $(".person2").append("blah blah person2");
    $(".animal").append("blah blah animal");
    $(".exclamation").append("blah blah exclamation");
    $(".verb").append("blah blah verb");
    $(".noun").append("blah blah noun");
    $("#story").show();
  });
});