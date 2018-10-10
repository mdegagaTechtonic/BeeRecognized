$(document).ready(function(init){
  // defaultLoadPageRS();
  // defaultLoadPageRR();
  // defaultLoginPage();
  // getUserInfo();
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
    console.log(count);
  }
  if (count > 5) {
    var recentFive = recognitionArray.slice(0,5);
    displayList(recentFive);
    console.log(recentFive);
  }
  if (count <= 5) {
    displayList(recognitionArray);
    console.log(recognitionArray);
  }
};
