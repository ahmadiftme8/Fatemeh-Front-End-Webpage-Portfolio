// api/contact.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, message } = req.body;
    
    // Validate inputs
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission from ${email}`,
      text: `
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
};