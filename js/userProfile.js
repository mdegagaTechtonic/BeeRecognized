$(document).ready(function(init){
  // defaultLoadPageRS();
  // defaultLoadPageRR();
  // defaultLoginPage();
  displayUserInfo();
  // getUserNames();
  // updateBeesToGive();
  getBees();
  // createRecognition();
  getRecentRecognition(recognitionArray);
  // displayList();
});

function Recognition(avatar, sender, receiver, beesToGive, date, message)
{
  this.avatar = avatar;
  this.sender = sender;
  this.receiver = receiver;
  this.updateBeesToGive = beesToGive;
  this.date = date;
  this.message = message;
};

recognition1 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition2 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition3 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition4 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition5 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition6 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition7 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition8 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition9 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition10 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition11 = new Recognition("demoUser1.png", "Shambre SW", "Erik H", 5, "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")

var recognitionArray = [recognition1, recognition2, recognition3, recognition4, recognition5, recognition6, recognition7, recognition8, recognition9, recognition10, recognition11];

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
var oPerson = JSON.parse(localStorage.getItem("currUser"));

function displayUserInfo() {
  $("#username").html(oPerson.sender);
  $("#beesToGive").html(oPerson.beesToGive);
}

//called within submit button event
function displayBees(arr){

}

//call within the click submit button event

function getBees(){
      $("#submit-button").on("click", function(event){
        makeInvisible(event);
        if(oPerson.beesToGive>0){
              var value  = oPerson.beesToGive-1;
              $("#beesToGive").html(value);
              event.preventDefault();
              oPerson.beesToGive=value;
              displaySuccess(event);
          }else{
              //alert("Please, you need to ");
              displayFailure(event);
          }
      });
    $("#totalBeesReceived").append((Object.keys(recognitionArray).length)*3);  
}

function displaySuccess(event) {
  event.preventDefault();
  $("#success").removeClass("invisible");
}

function displayFailure(event) {
  event.preventDefault();
  $("#danger").removeClass("invisible");
  //oPerson.beesToGive=10;
}

function makeInvisible(event) {
  event.preventDefault();
  $("#danger").addClass("invisible");
  $("#success").addClass("invisible");

}
