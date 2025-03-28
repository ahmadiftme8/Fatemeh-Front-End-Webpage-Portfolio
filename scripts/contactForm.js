document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form);
    
    // Send form data using fetch
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        // Show success or error message based on the response
        if (response.ok) {
            document.getElementById("success-message").style.display = "block";
            document.getElementById("error-message").style.display = "none";
            form.reset(); // Reset form fields after success
        } else {
            throw new Error('Form submission failed.');
        }
    } catch (error) {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";
    }
 });