const navBarAnimation = () => {
  const sections = document.querySelectorAll('section');
  const navElementWrapper = document.querySelector('.nav-element-wrapper');
  const backgroundColor = 'white';

  const options = {
    threshold: 0.7
  }

  let observer = new IntersectionObserver(navCheck, options)

  function navCheck(entries) {
    entries.forEach(entry => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const colorElement = entry.target.getAttribute('data-index');
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left,
      };
      if(entry.isIntersecting){
        navElementWrapper.style.setProperty('left', `${directions.left}px`);
        navElementWrapper.style.setProperty('top', `${directions.top}px`);
        navElementWrapper.style.setProperty('width', `${directions.width}px`);
        navElementWrapper.style.setProperty('height', `${directions.height}px`);
      }

    })
  };

  sections.forEach(section => {
    observer.observe(section);
  });
};

export{ navBarAnimation };
