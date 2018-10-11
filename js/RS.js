$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  // getUserNames();
  // getDateRange();
  // displayList();
  getAllRecognitionSent(recognitionSent);
  // displayList();
});

function Recognition(avatar, username, date, message)
{
  this.avatar = avatar;
  this.username = username;
  this.date = date;
  this.message = message;
};

recognition1 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition2 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition3 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition4 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition5 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition6 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition7 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition8 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition9 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition10 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition11 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition12 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition13 = new Recognition("demoUser3.png", "Jason D", "1 day ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")

var recognitionSent = [recognition1, recognition2, recognition3, recognition4, recognition5, recognition6, recognition7, recognition8, recognition9, recognition10, recognition11, recognition12, recognition13];

function getAllRecognitionSent(recognitionSent){
  var numberSent = recognitionSent.length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
  displayList(recognitionSent);
};
