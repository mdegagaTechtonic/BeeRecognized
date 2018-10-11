$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  // getUserNames();
  // getDateRange();
  getAllRecognitionSent(recognitionSent);
  displayList(arr);
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

$("#filter").on("click", function(event) {
  filter(event, arr);
});

function filter(event, arr) {
  event.preventDefault();

}

recognition1 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition2 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition3 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition4 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition5 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition6 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition7 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition8 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition9 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition10 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition11 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition12 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition13 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition14 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition15 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition16 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
recognition17 = new Recognition("demoUser3.png", "Jason D", "Egor Y", 9, "2 months ago", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")

var recognitionSent = [recognition1, recognition2, recognition3, recognition4, recognition5, recognition6, recognition7, recognition8, recognition9, recognition10, recognition11, recognition12, recognition13, recognition14, recognition15, recognition16, recognition17];

function getAllRecognitionSent(recognitionSent){
  var numberSent = recognitionSent.length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
  displayList(recognitionSent);
};
