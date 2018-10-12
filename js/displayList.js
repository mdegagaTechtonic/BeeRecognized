var arr = JSON.parse(localStorage.getItem("db"));
function displayList(arr, page) {
  $(".recognition").html("");
  $.each(arr, function(index, value) {
    var newContent = "<div class='d-flex w-100 justify-content-between'>";
    if (value.avatarSender) {
      if (page === "RR" || page === "SB") {
        newContent += "<div><img src='images/"+value.avatarSender+"' alt='slack user icon' class='userImage' width='100'><br>";
        newContent += "<h5 class='mt-2 mb-2'>"+value.sender+"</h5></div>";
      } else {
        newContent += "<div><img src='images/"+value.avatarReceiver+"' alt='slack user icon' class='userImage' width='100'><br>";
        newContent += "<h5 class='mt-2 mb-2'>"+value.receiver+"</h5></div> ";
      }
      newContent += "<div class='row'><small class='text-muted mr-2'>"+value.date+"</small></div>";
    }
    newContent += "</div>";
    newContent += "<p class='mt-1 mb-1'>"+value.message+"</p>";
    $(".recognition").append(newContent);
  });
}

$(document).ready(function() {
	var showChar = 150;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.recognition p').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink float-right">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less").addClass("float-right");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});
