// Import the nodemailer module
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kuldeepcelestial@gmail.com",
      pass: "",
    },
  });

  const mailOptions = {
    from: "kuldeepcelestial@gmail.com",
    to: "saurabhst7898@gmail.com",
    subject: "Hello ",
    text: "This is a test email sent .",
    html:'<h1>Hello I am sending a mail from server .</h1>'
  };




  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });

