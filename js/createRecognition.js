$("form").submit(function(event) {
  newArr = ($( this ).serializeArray());
  event.preventDefault();
  $.each(newArr,function(i,value) {
    alert(value.value);
  });
  $(this).find("input[type=text],textarea").val("");
});
