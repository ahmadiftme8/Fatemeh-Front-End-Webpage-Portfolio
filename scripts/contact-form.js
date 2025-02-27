document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Show loading state
      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = 'Sending...';
      button.disabled = true;
      
      try {
        // This URL points to your Vercel API endpoint
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, message })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          // Success message
          alert('Thank you! Your message has been sent successfully.');
          form.reset();
        } else {
          // Error message
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        alert('Failed to send message. Please try again later.');
        console.error('Error:', error);
      } finally {
        // Reset button
        button.textContent = originalText;
        button.disabled = false;
      }
    });
  });