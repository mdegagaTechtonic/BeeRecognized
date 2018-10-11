var arr = JSON.parse(localStorage.getItem("db"));
function displayList(arr, page) {
  $.each(arr, function(index, value) {
    var newContent = "<div class='d-flex w-100 justify-content-between'><div class='item'>";
    if (page === "RR" || page === "SB") {
      newContent += "<img src='images/"+value.avatarSender+"' alt='slack user icon' class='userImage' width='100'>";
      newContent += "<h5 class='mt-2 mb-2'>"+value.sender+"</h5>";
    } else {
      newContent += "<img src='images/"+value.avatarReceiver+"' alt='slack user icon' class='userImage' width='100'>";
      newContent += "<h5 class='mt-2 mb-2'>"+value.receiver+"</h5>";
    }
    newContent += "</div><div class='row'>";
    newContent += "<small class='text-muted mr-2'>"+value.date+"</small>";
    newContent += "</div></div>";
    newContent += "<p class='mt-1 mb-1'>"+value.message+"</p>";
    $(".recognition").append(newContent);
  });
}
