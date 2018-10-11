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
  $("#avatar").attr("src", oPerson.avatar);
  getTotalBeesReceived();
}

//called within submit button event
function getTotalBeesReceived(){
  $("#totalBeesReceived").append((Object.keys(recognitionArray).length)*3);

}

//call within the click submit button event

function getBees(event){
      // $("#submit-button").on("click", function(event){
        //makeInvisible(event);
        if(oPerson.beesToGive>0){
              var value  = oPerson.beesToGive-1;
              $("#beesToGive").html(value);
              event.preventDefault();
              oPerson.beesToGive=value;
              localStorage.setItem("currUser",JSON.stringify(oPerson))
              displaySuccess(event);
          }else{
              displayFailure(event);
          }
           setTimeout(function(){ makeInvisible(event); }, 3000)
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
