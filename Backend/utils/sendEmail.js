const nodeMailer = require("nodemailer");




const sendEmail = async (options) =>{

    const transporter = nodeMailer.createTransport({

        host: "smtp.mailtrap.io",
        port: 2525,
        secure:true,
        auth: {
          user: "a224b10a151537",
          pass: "bd85ee4d215592",
        },
        
    });



    const mailOptions = {

        from:process.env.SMPT_MAIL,

        to:options.email,

        subject:options.subject,

        text:options.message,

    };

    await transporter.sendMail(mailOptions);

};



module.exports = sendEmail;