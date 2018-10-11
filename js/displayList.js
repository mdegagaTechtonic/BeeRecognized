var arr = JSON.parse(localStorage.getItem("db"));
function displayList(arr) {
  $.each(arr, function(index, value) {
    var newContent = "<div class='d-flex w-100 justify-content-between'><div class='item'>";
    newContent += "<img src='images/"+value.avatarSender+"' alt='slack user icon'> class='userImage'";
    newContent += "<h5 class='mt-2 mb-2'>"+value.sender+"</h5>";
    newContent += "</div><div class='row'>";
    newContent += "<small class='text-muted mr-2'>"+value.date+"</small>";
    newContent += "</div></div>";
    newContent += "<p class='mt-1 mb-1'>"+value.message+"</p>";
    $(".recognition").append(newContent);
  });
}
$(document).ready(function() {
  // co nsole.log('ready');
  // getList();
});
