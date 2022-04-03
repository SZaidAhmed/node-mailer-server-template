const express = require("express")
const nodemailer = require('nodemailer')

const app = express();
app.use(express.json());

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: '',
        pass: ''
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

app.listen(process.env.PORT || 8001, () => {
    console.log("server started")
})