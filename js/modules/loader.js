$(document).ready(function(){

  let hithere = new TimelineMax({
    repeat: 15
  });

  hithere.add([
    TweenMax.to(".loader-container", .2, {backgroundColor: "white"})
  ])
  .add([
    TweenMax.to(".loader-container", .2, {backgroundColor: "black"})
  ]);

  setTimeout(function(){

    let hithereOff = new TimelineMax();

    hithereOff.add([
      TweenMax.to(".loader-container .elt-loader", .1, {color: "black", backgroundColor: "black"})
    ]).add(
      TweenMax.to(".loader-container", .2, {display: "none", delay: .5}),
      TweenMax.to("#home .container-brand", .5, {autoAlpha: 1, delay: .5})
    )

  }, 1500);

});
