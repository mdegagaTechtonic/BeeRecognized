$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRS();
  // defaultLoginPage();
  getAllRecognitionReceived(recognitionReceived);
  // displayList();
  // logout();
});

function Recognition(avatar, username, date, message)
{
  this.avatar = avatar;
  this.username = username;
  this.date = date;
  this.message = message;
};

recognition1 = new Recognition("demoUser2.png", "Merry D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition2 = new Recognition("demoUser2.png", "Merry D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition3 = new Recognition("demoUser2.png", "Merry D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition4 = new Recognition("demoUser2.png", "Merry D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition5 = new Recognition("demoUser2.png", "Merry D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")

var recognitionReceived = [recognition1, recognition2, recognition3, recognition4, recognition5];

function getAllRecognitionReceived(recognitionReceived){
  var numberReceived = recognitionReceived.length;
  beeCount = "Total: " + numberReceived;
  $(".total").attr("title","Total: " + numberReceived);
  $(".total").append(beeCount);
  displayList(recognitionReceived);
};
