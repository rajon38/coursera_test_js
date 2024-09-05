document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Handle form submission here (e.g., AJAX call to a backend server, or display a message dynamically)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
    // Show the thank you message popup
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
  
    // Hide the thank you message after 3 seconds
    setTimeout(() => {
      thankYouMessage.style.display = 'none';
    }, 3000);
  
    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
  });
  