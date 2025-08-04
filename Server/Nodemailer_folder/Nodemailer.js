const nodemailer = require("nodemailer");
const emailSchema = require('../Models/Email')

 myemails = "";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Gmail's secure SMTP port
  secure: true, // true for port 465, false for 587
  auth: {
    user: "gulbetabel@gmail.com",
    pass: "", // App Password (looks correct)
  },
});

const mailer = async () => {
 
  try {
     const emails = await emailSchema.find()
      
      for(let  i =0; i < emails.length; i++){
         myemails = myemails + " " + emails[i].email;
      }
      
    console.log("Sending mail...");
    const info = await transporter.sendMail({
      from: '"Gulbetabel" <gulbetabel@gmail.com>', // Friendly name + email
      to: myemails,
      subject: "Hello ✔",
      text: "Never gonna dance to you", // Text body
      html: "<b>Hello world?</b>",     // HTML body
    });
   

    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

module.exports = { mailer };
