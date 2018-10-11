$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  displayUserInfo();
  // getDateRange();
  getAllRecognitionSent();
  // displayList(arr);
});

// $("#filter").on("click", function(event) {
//   filter(event, arr);
// });
//
// function filter(event, arr) {
//   event.preventDefault();
//
// }

function getAllRecognitionSent(){
  var numberSent = JSON.parse(localStorage.getItem("db"));
  var count = numberSent.length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
  displayList(numberSent, "RS");
  return recognition;
};
