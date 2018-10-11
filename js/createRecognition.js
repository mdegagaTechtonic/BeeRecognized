$("form").submit(function(event) {
  getBees();
  updateForm();
  var msgArr = ($(this).serializeArray());
  updateDB(msgArr);
  $(this).find("input[type=text],textarea").val("");
  event.preventDefault();
});

function updateForm() {
  $("input[name=beesToGive]").val(oPerson.beesToGive);
}

function updateDB(msgArr) {
  setLocalStorage(msgArr);
}

function setLocalStorage(msgArr) {
  var stringifiedArr = JSON.stringify(msgArr);
  console.log(stringifiedArr);
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
