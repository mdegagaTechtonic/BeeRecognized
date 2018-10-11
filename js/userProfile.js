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
  // updateForm();
});

var recognitionArray = JSON.parse(localStorage.getItem("db"));

function getRecentRecognition(recognitionArray){
  var count = 0;
  for(var i = 0; i < recognitionArray.length; i++){
    count++;
  }
  if (count > 5) {
    var recentFive = recognitionArray.slice(0,5);
    displayList(recentFive, "SB");
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
  $("#avatar").attr("src", oPerson.avatarSender);
  getTotalBeesReceived();
}

//called within submit button event
function getTotalBeesReceived(){
  $("#totalBeesReceived").append((Object.keys(recognitionArray).length)*3);

}

//call within the click submit button event
$("form").submit(function(event) {
  getBees(event);
  updateForm();
  var msgArr = ($(this).serializeArray());
  updateDB(msgArr);
  $(this).find("input[type=text],textarea").val("");
  event.preventDefault();
});


function getBees(event){
        if(oPerson.beesToGive>0){
              var value  = oPerson.beesToGive-1;
              $("#beesToGive").html(value);
              //event.preventDefault();
              oPerson.beesToGive=value;
              localStorage.setItem("currUser",JSON.stringify(oPerson))
              displaySuccess();
          }else{
              displayFailure();
          }
           setTimeout(function(){ makeInvisible(event); }, 3000)
}

function displaySuccess() {
  //event.preventDefault();
  $("#success").removeClass("d-none");
}

function displayFailure() {
  //event.preventDefault();
  $("#danger").removeClass("d-none");
  //oPerson.beesToGive=10;
}

function makeInvisible() {
  //event.preventDefault();
  $("#danger").addClass("d-none");
  $("#success").addClass("d-none");

}
