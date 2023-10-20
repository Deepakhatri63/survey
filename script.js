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


  function sendEmail() {
    // Get the user input from the textareas
    const resourceRequest = document.querySelector('#resource-request').value;
    const helpfulInfo = document.querySelector('#helpful-info').value;
    const interestedInContact = document.querySelector('#interested-in-contact').value;

    emailjs.init("PWPCGmT4fMbanb-lI"); 
    // Use the EmailJS API to send the email
    emailjs.send("service_5316j36", "template_yx5jjoi", {
      resource_request: resourceRequest,
      helpful_info: helpfulInfo,
      contact_interest: interestedInContact
    }).then(
      function(response) {
        console.log("Email sent successfully", response);
        // You can display a success message to the user if needed.
      },
      function(error) {
        console.error("Email sending failed", error);
        // You can display an error message to the user if needed.
      }
    );
  }


  