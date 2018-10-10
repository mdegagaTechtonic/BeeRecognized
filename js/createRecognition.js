$("form").submit(function(event) {
  newArr = ($(this).serializeArray());
  event.preventDefault();
  $.each(newArr,function(i,value) {
    alert(value.value);
  });
  $(this).find("input[type=text],textarea").val("");
  updateBeesToGive();
});

function updateBeesToGive() {
  //get existing bees to give
  var beesToGive = 5;
  var updatedBeesToGive = 5-1;
  //put updated bees to give
  console.log(updatedBeesToGive);
}
