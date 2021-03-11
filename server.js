const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get('/', function(req, res){
    res.send(fs.readFileSync('./views/contact.html', 'utf8'));

});

app.post('/contact', function(req, res) {
    if(req.body.name == "" || req.body.email == "" || req.body.subject == "") {
        res.send("Error: Email & Subject should not be Blank");
        return false;
    }

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", 
    secureConnection: true, 
    port: 465, 
        auth: {
            user: '',
            pass: ''
        }
});

var mailOptions = {
    from: req.body.name ['name'],
    to: req.body.email ['email'], 
    subject: req.body.subject['subject'],
    description: req.body.description['message']
}

smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
        res.send("Email could not be sent due to error:" +error);
    }else {
        res.send("Email has been sent successfully");
    }
});
});

console.log('Hi');



// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));