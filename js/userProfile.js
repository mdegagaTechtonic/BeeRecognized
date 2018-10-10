$('document').ready(function(init){
  // defaultLoadPageRS();
  // defaultLoadPageRR();
  // defaultLoginPage();
  displayUserInfo();
  getUserNames();
  updateBeesToGive();
  getBees();
  createRecognition();
  getRecentRecognition();
  displayList();


});

//will display username and number of bees to give
function displayUserInfo() {
  var oPerson =
  JSON.parse(sessionStorage.getItem("currUser"));
  console.log(oPerson.avatar);
  $("strong#username").html(oPerson.username);
  $("img#avatar").attr("src", oPerson.avatar);
  $("#beesToGive").html(oPerson.beesToGive);

  //var totalBeesReceived = call getBees();
  //$("#totalBeesReceived").html(totalBeesReceived);
}
