$(".project-item a").hover(function(){

  $(".project-item a").not($(this)).removeClass("active");
  $(this).addClass("active");

});
