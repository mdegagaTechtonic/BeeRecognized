function getList() {
  arr = [{avatar:"demoUser1.png", username:"Shambre SW", date:"1 day ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},{avatar:"demoUser1.png", username:"Erik H", date:"4 days ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},{avatar:"demoUser1.png", username:"Jason D", date:"2 weeks ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},{avatar:"demoUser1.png", username:"Yahor N", date:"2 months ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},{avatar:"demoUser1.png", username:"Merry D", date:"3 months ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}];
  displayList(arr);
}
function displayList(arr) {
  $.each(arr, function(index, value) {
    var newContent = "<div class='d-flex w-100 justify-content-between'><div class='item'>";
    newContent += "<img src='images/"+value.avatar+"' alt='slack user icon'>";
    newContent += "<h5 class='mt-2 mb-2'>"+value.username+"</h5>";
    newContent += "</div><div class='row'>";
    newContent += "<small class='text-muted mr-2'>"+value.date+"</small>";
    newContent += "</div></div>";
    newContent += "<p class='mt-1 mb-1'>"+value.message+"</p>";
    $(".recognition").append(newContent);
  });
}
$(document).ready(function() {
  // co nsole.log('ready');
  getList();
});
