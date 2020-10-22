const mouseAnimation = () => {
  let controller = new ScrollMagic.Controller();

  const mouse = document.querySelector('.mouse');
  const mouseEvent = TweenMax.fromTo(mouse, 4, { opacity: 1 }, { opacity: 0 } );


  let mouseScene = new ScrollMagic.Scene({
    triggerElement:  '.banner',
    duration: 500,
    triggerHook: 0,
    offset: 1500,
  })
  .setTween(mouseEvent)
  .addTo(controller);
};

export { mouseAnimation };
