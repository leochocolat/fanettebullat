// SCROLLMAGIC APPEAR
let controller = new ScrollMagic.Controller();


$(".scrollAppear").each(function() {

  let scrollAppear = new TimelineMax();

  scrollAppear.add(
    TweenMax.staggerTo($(this), 1, {autoAlpha: 1, ease:Power1.easeInOut}, .05),
  );

  let myScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: ".9",
  })
  .setTween(scrollAppear)
  .addTo(controller);

});
