$("form").submit(function(event) {
  var msgArr = ($(this).serializeArray());
  event.preventDefault();
  $.each(msgArr,function(i,value) {
    // alert(value.value);
  });
  $(this).find("input[type=text],textarea").val("");
  updateBeesToGive();
  updateDB(msgArr);
});

function updateBeesToGive() {
  //get existing bees to give
  var beesToGive = 5;
  var updatedBeesToGive = 5-1;
  //put updated bees to give
  // console.log(updatedBeesToGive);
}

function updateDB(msgArr) {
  setLocalStorage(msgArr);
}

function setLocalStorage(msgArr) {
  var stringifiedArr = JSON.stringify(msgArr);
  localStorage.setItem('msgArr',stringifiedArr);
}

function getLocalStorage() {
  var myArr = JSON.parse(window.localStorage.getItem('msgArr'));
  if (myArr !== null) {
    if (myArr.length > 0) {
      for (var i = 0; i < myArr.length; i++) {
        // new Book(myArr[i].title,myArr[i].author,myArr[i].numPages,myArr[i].pubDate);
      }
    }
    var msgArr = myArr;
  }
  return msgArr;
}

document.addEventListener("DOMContentLoaded", function (e) {
  this.newArr = getLocalStorage();
});
