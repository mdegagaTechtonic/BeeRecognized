$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  // getUserNames();
  // getDateRange();
  getAllRecognitionSent();
  // displayList(arr);
});

$("#filter").on("click", function(event) {
  filter(event, arr);
});

function filter(event, arr) {
  event.preventDefault();

}

function getAllRecognitionSent(){
  var numberSent = recognition.length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
  displayList(recognition, "RS");
  return recognition;
};
