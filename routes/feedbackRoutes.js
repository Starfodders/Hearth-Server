const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const currentTime = new Date().toLocaleDateString()

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "hearth.feedback@gmail.com", 
    pass: "ernhhexgexhsjlfb"
  },
});


router.post('/', (req, res) => {
    const feedbackInput = req.body.message;
    const mailOptions = {
        from: 'hearth.feedback@gmail.com',
        to: 'hearth.feedback@gmail.com',
        subject: 'App Feedback ' + currentTime,
        text: 'Feedback message: ' + feedbackInput 
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error)
            res.status(500).send('Error sending feedback')
        } else {
            // console.log(`Email sent: ${info.response}`);
            res.status(200).send('Feedback sent');
        }
    })
})

module.exports = router;
