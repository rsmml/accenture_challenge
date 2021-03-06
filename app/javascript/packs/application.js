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
import { bannerAnimation } from '../components/banner-animation';
import { mouseAnimation } from '../components/mouse-animation';
import { navBarAnimation } from '../components/navbar-animation';


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  bannerAnimation();
  mouseAnimation();
  navBarAnimation();

  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.4,
    rootMargin: "0px 0px -100px 0px"
  }

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobesrve(entry.target);
      }
    })
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  })
});
