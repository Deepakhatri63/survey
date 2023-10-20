// Listen for the scroll event
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Check the scroll position
    if (window.scrollY > 50) {
      // If scrolled down, change the background color to white
      navbar.style.backgroundColor = 'white';
      navbar.style.color = 'black';
      navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    } else {
      // If at the top, revert to the original color
      navbar.style.backgroundColor = '#030303';
      navbar.style.boxShadow = 'none';
      navbar.style.color = 'whitesmoke';
    }
  });


  document.getElementById('survey-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default jump-to-anchor behavior

    const targetElement = document.getElementById('survey');
    const offset = targetElement.getBoundingClientRect().top;
    const yOffset = -200;

    // Smooth scroll to the target element
    window.scrollTo({
        top: offset + yOffset,
        behavior: 'smooth'
    });
});

  