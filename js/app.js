document.addEventListener('DOMContentLoaded', () => {
  //   import sal from 'sal.js';
  sal();
  sal({
    threshold: 1,
    once: false,
  });
  const header = document.getElementById('header'); //declare the header
  const headerHeight = header.clientHeight;
  const scrollThreshold = window.innerHeight;

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > scrollThreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
});

$(document).ready(function () {
  //   Search animation handler - Just to prove that I usually use jQuery
  $('.icon-search').click(function () {
    // $('.input-reactive').toggleClass('input-initial-state');
    $('.input-reactive').toggleClass('input-active-state');
    $('.search-wrapper').toggleClass('active-state');
  });
});
