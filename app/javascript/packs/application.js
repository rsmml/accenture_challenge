// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();


  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline
  .from('.banana_img', 6, {
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
    triggerElement:  '.banana',
    duration: 1500,
    triggerHook: 0,
  })
  .setTween(timeline)
  .setPin('.banana')
  .addTo(controller);

  // Text Subtitle Animation
  const textSubTitle = document.querySelector('.subtitle')
  const subtitle = TweenMax.fromTo(textSubTitle, 4, { opacity: 0 }, { opacity: 1 } );

  let scene2 = new ScrollMagic.Scene({
    triggerElement:  '.banana',
    duration: 400,
    triggerHook: 0,
    offset: '1500',
  })
  .setTween(subtitle)
  .setPin('.banana')
  .addTo(controller);


});
