$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRS();
  // defaultLoginPage();
  getAllRecognitionReceived();
  // displayList();
  // logout();
});

function getAllRecognitionReceived(){
  var numberReceived = recognition.length;
  beeCount = "Total: " + numberReceived;
  $(".total").attr("title","Total: " + numberReceived);
  $(".total").append(beeCount);
  displayList(recognition, "RR");
  // return recognitionReceived;
};
