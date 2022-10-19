const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'abc@gmail.com',
            pass:'**********'
        }
    }
)

const options={
    from:'xyz@gmail.com',
    to:'xyz@gmail.com',
    subject:'Welcome to me',
    text:'abcdefghij'
}

transporter.sendMail(options,(err,info)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('mail sent' + info.response);
    }
})