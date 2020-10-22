const bannerAnimation = () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline
  .from('.logo_img', 6, {
    y: 0,
    x: 2000,
    ease: Power3.easeInOut
  }, '-=4')
  .from('.title', 6, {
    y: 0,
    x: -2000,
    ease: Power3.easeInOut
  }, '-=4')

  let scene = new ScrollMagic.Scene({
    triggerElement:  '.banner',
    duration: 1500,
    triggerHook: 0,
  })
  .setTween(timeline)
  .setPin('.banner')
  .addTo(controller);

  // Text Subtitle Animation
  const textSubTitle = document.querySelector('.subtitle')
  const subtitle = TweenMax.fromTo(textSubTitle, 4, { opacity: 0 }, { opacity: 1 } );

  let scene2 = new ScrollMagic.Scene({
    triggerElement:  '.banner',
    duration: 400,
    triggerHook: 0,
    offset: '1500',
  })
  .setTween(subtitle)
  .setPin('.banner')
  .addTo(controller);
};

export { bannerAnimation };
