const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    
    service: 'Gmail',
    auth: {
      user: process.env.gmail,
      pass: process.env.gmailPass
    }
  });


exports.sendWelcomeMail = (user)=>{
    const data = {
        from: 'Holaaa 👻" <myawesome@project.com>',
        to: user.email, 
        subject: 'Prueba',
        text: `Hola ${user.username} Bienvenido a nuestra APP`
        //html: `<b>${message}</b>`
    }
    transporter.sendMail(data)
    .then(info=> console.log(info))
    .catch(error=> console.log(error))

}