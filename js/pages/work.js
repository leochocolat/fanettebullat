$(".project-item a").hover(function(){

  $(".project-item a").not($(this)).removeClass("active");
  $(this).addClass("active");

  let tabClass = []
  tabClass = $(this)[0].className.split(/\s+/);
  let classImg = tabClass[0] + "-img";

  $(".project-apercu").not($(classImg)).removeClass("active");
  $("." + classImg).addClass("active");

  // let linkName = $(this)[0].innerHTML.replace(/[^0-9a-z]/gi, '')
  // console.log(linkName);

});


$(".project-item").click(function(){

  // console.log($(this).innerHTML.replace(/[^0-9a-z]/gi, ''));

});
