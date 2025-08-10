const nodemailer = require("nodemailer");
const emailSchema = require('../Models/Email')

 myemails = "";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Gmail's secure SMTP port
  secure: true, // true for port 465, false for 587
  auth: {
    user: "kingdombusinessf5@gmail.com",
    pass: "bqju cvvy foub opuk", // App Password (looks correct)
  },
});

const mailer = async (req, res) => {
 
  try {
     const emails = await emailSchema.find()
      
      for(let  i =0; i < emails.length; i++){
         myemails = myemails + " " + emails[i].email;
      }
 const  {title,desc} = req.data
      
    console.log("Sending mail...");
    const info = await transporter.sendMail({
      from: '"Kingdombusiness" <kingdombusinessf5@gmail.com>', // Friendly name + email
      to: myemails,
      subject: {title},
      text: {desc}, // Text body
      html: "",     // HTML body
    });
   

    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

module.exports = { mailer };
