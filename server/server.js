const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.status(200).json("Successful submission");


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.AUTH_ADMIN_EMAIL,
    pass: process.env.AUTH_ADMIN_PASSWORD,
  },
});

const autoReplyMailOptions = {
  from: process.env.AUTH_ADMIN_EMAIL,
  to: email,
  subject: 'Thank You for Your Submission',
  text: `Hello ${name},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nYour Company Name`,
};

await transporter.sendMail(autoReplyMailOptions);

const notificationMailOptions = {
  from: email,
  to: process.env.AUTH_ADMIN_EMAIL,
  subject: 'New Contact Form Submission',
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
};





transporter.sendMail(notificationMailOptions, (err, info) => {
  if (err) {
    console.log(err);
    res.status(500).send("Error sending email");
  } else {
    console.log(`Message sent: ${info.response}`);
    res.status(200).send("Email sent successfully");
  }
});
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
