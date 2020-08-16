//Make line strikethrough and change color on clicking on li
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
})
//Click on X to remove todo item
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
})
//Add new todos
$("input[type=text]").keypress(function(event){
  if(event.which === 13)
  {
    var todovalue = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todovalue + "</li>");
  }
});
$(".fa-plus").click(function(){
  $("input").toggleClass("hideInput");
})