const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;
  
  // Validate inputs
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another service like SendGrid, AWS SES, etc.
      auth: {
        user: 'YOUR_EMAIL@gmail.com', // your email
        pass: 'YOUR_APP_PASSWORD'     // use app password for Gmail
      }
    });

    // Email content
    const mailOptions = {
      from: 'YOUR_EMAIL@gmail.com',
      to: 'YOUR_EMAIL@gmail.com', // where you want to receive messages
      subject: `New contact form submission from ${email}`,
      text: `
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});