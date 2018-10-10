var arr = getAllRecognitionSent();

$('document').ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  getUserNames();
  getDateRange();
  getAllRecognitionSent();
  displayList(arr);
});

$("#filter").on("click", function(event) {
  filter(event, arr);
});

function filter(event, arr) {
  event.preventDefault();

}

function getAllRecognitioSent() {
  //will return all user objects that sent user a recogniton from the slack db?
}
