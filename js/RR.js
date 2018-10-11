$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRS();
  // defaultLoginPage();
  // getName();
  getAllRecognitionReceived();
  displayList();
  updateBeesReceived()
  // logout();
});

function Recognition(avatarSender, avatarReceiver, sender, receiver, beesToGive, date, message)
{
  this.avatarSender = avatarSender;
  this.avatarReceiver = avatarReceiver;
  this.sender = sender;
  this.receiver = receiver;
  this.updateBeesToGive = beesToGive;
  this.date = date;
  this.message = message;
};

function getName(event){
  var username = $('span.username').text().slice(0, -2);//remove 's from username
  return username;
};

function getAllRecognitionReceived(){
  // localStorage = localStorage.getItem("db");//mock db call
  username = getName();
  console.log(username);
  receivedRecognition = [];
  for (var i = 0; i < recognition.length; i++) {
    if (recognition[i].receiver.toLowerCase() === username.toLowerCase()) {//when localstorage works replace var recognition with var localstorage
      receivedRecognition.push(recognition[i]);
    }
  }
  displayList(receivedRecognition);
  return receivedRecognition;
};

function updateBeesReceived(){
  var numberReceived = getAllRecognitionReceived().length;
  beeCount = "Total: " + numberReceived;
  $(".total").attr("title","Total: " + numberReceived);
  $(".total").append(beeCount);
};
