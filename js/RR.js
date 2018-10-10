var arr = getAllRecognitionReceived();

$('document').ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRS();
  // defaultLoginPage();
  //getAllRecognitionReceived();
  displayList(arr);
  logout();

});


$("#filter").on("click", function(event) {
  filter(event, arr);
});

function filter(event, arr) {
  event.preventDefault();

}

function getAllRecognitionReceived() {
  //will return all user objects that received a recognition from the user from the slack db?
}
