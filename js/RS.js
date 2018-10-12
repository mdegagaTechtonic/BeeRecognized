$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  // displayUserInfo();
  // getDateRange();
  getAllRecognitionSent();
  updateBeesSent();
  // displayList(arr);
  filter('RS');
});

// $("#filter").on("click", function(event) {
//   filter(event, arr);
// });
//
// function filter(event, arr) {
//   event.preventDefault();
//
// }

function getName(event){
  var username = $('span.username').text().slice(0, -2);//remove 's from username
  return username;
};

function getAllRecognitionSent(){
  // localStorage = localStorage.getItem("db");//mock db call
  username = getName();
  sentRecognition = [];
  for (var i = 0; i < recognition.length; i++) {
    if (recognition[i].sender.toLowerCase() === username.toLowerCase()) {//when localstorage works replace var recognition with var localstorage
      sentRecognition.push(recognition[i]);
    }
  }
  displayList(sentRecognition, "RS");
  return sentRecognition;
};

function updateBeesSent(){
  var numberSent = getAllRecognitionSent().length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
};
