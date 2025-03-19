import nodemailer from 'nodemailer';
import { env } from 'process';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASSWORD, 
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { fullname, email, message } = req.body;

  if (!fullname || !email || !message) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const mailOptions = {
    from: email,
    to: env.EMAIL_USER,
    subject: 'Request for Connecting',
    text: `Sender details: \n${fullname}\n ${email}\n\n ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
