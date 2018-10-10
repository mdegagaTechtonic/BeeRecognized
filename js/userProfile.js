$(document).ready(function(init){
  // defaultLoadPageRS();
  // defaultLoadPageRR();
  // defaultLoginPage();
  displayUserInfo();
  // getUserNames();
  // updateBeesToGive();
  // getBees();
  // createRecognition();
  getRecentRecognition(recognitionArray);
  // displayList();
});

function Recognition(avatar, username, date, message)
{
  this.avatar = avatar;
  this.username = username;
  this.date = date;
  this.message = message;
};

recognition1 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition2 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition3 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition4 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition5 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition6 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition7 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition8 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition9 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition10 = new Recognition("demoUser1.png", "Shambre SW", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")

var recognitionArray = [recognition1, recognition2, recognition3, recognition4, recognition5, recognition6, recognition7, recognition8, recognition9, recognition10,];

function getRecentRecognition(recognitionArray){
  var count = 0;
  for(var i = 0; i < recognitionArray.length; i++){
    count++;
  }
  if (count > 5) {
    var recentFive = recognitionArray.slice(0,5);
    displayList(recentFive);
  }
  if (count <= 5) {
    displayList(recognitionArray);
  }
};

//user information
var oPerson = JSON.parse(sessionStorage.getItem("currUser"));

function displayUserInfo() {
  $("#username").html(oPerson.username);
  $("#beesToGive").html(oPerson.beesToGive);
}

//called within submit button event
function displayBees(arr){

}

//call within the click submit button event
$("#submit-button").on("click", function(event) {
  displayAlert(event);
});

function displayAlert(event) {
  event.preventDefault();
  //Successfully sent message
  // $("div#alert").append("<p></p>").attr("id", "success");
  // $("#success").addClass("alert alert-success");
  // $("#success").attr("role", "alert");
  // $("#success").html("Thank you. Your recognition was sent.");


  //Error in sending message
  $("div#alert").append("<p></p>").attr("id", "danger");
  $("#danger").addClass("alert alert-danger");
  $("#danger").attr("role", "alert");
  $("#danger").html("There was a problem sending your recognition. Please try again later");
}
