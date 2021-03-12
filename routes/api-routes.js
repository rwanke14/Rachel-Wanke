const nodemailer = require('nodemailer')

module.exports = (app) => {


app.post('/contact', (req, res) => {

    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'',
            pass: ''
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'rkhorne09@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response)
            res.send(('success'));
        }
    })

})




}