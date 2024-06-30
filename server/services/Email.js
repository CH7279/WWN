const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    //ברגיל צריך ליצור אימות דו שלבי לחשבון המייל
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: '36213351232@mby.co.il',
        pass: 'Student@264'
    }
});

function sendEmail(to, subject, body) {
    const mailOptions = {
        from: 'Shar Hashamaim 36213351232@mby.co.il',
        to: to,
        subject:subject,
        text: body
    };

    return transporter.sendMail(mailOptions);
}
//לא יוצא טוב במייל
function ReceiveEmail(from, subject, body) {
    const mailOptions = {
        from: 'Shar Hashamaim 36213351232@mby.co.il',
        to: 'Shar Hashamaim 36213351232@mby.co.il',
        subject:`${from} send you email about ${subject}`,
        text: body
    };

    return transporter.sendMail(mailOptions);
}

async function sendEmailWithAttachment(to,filename,path ) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: '36213351232@mby.co.il',
            pass: 'Student@264'
        }
    });

    let mailOptions = {
        from: '36213351232@mby.co.il',
        to: to,
        subject: 'Email with Attachment',//subject
        text: 'Please see the attached file',//text
        attachments: [
            {
                filename:filename,// 'example.pdf',
                path:path,// '/path/to/example.pdf'
            }
        ]
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
}






module.exports = {
    sendEmail,
    ReceiveEmail,
    sendEmailWithAttachment
};
