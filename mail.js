var nodemailer = require('nodemailer'); 
var mailTransporter =nodemailer.createTransport({
     service:'gmail',
     auth:{
         user:'kamal939800@gmail.com',
         pass:'********'
        }
    
});

var mailDetails = {
    from: 'kamal939800@gmail.com',
    to: 'k04chouhan@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail '
};

mailTransporter.sendMail(mailDetails,(err,data)=>{
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully'+ data.response);
    }
});