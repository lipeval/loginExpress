const nodemailer = require('nodemailer');
const hbs = require('hbs');
const fs = require('fs')
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

const welcomeCompile = hbs.compile(fs.readFileSync((__dirname, './views/welcome.hbs'), 'utf8'));

exports.sendTemplate = ()=>{
    const data = {
        from: 'Holaaa 👻" <myawesome@project.com>',
        to: user.email, 
        subject: 'Prueba',
        //text: `Hola ${user.username} Bienvenido a nuestra APP`
        html: welcomeCompile(user)
    }
    transporter.sendMail(data)
    .then(info=> console.log(info))
    .catch(error=> console.log(error))
}