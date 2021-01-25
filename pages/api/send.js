const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

    const { name, email, subject, message } = req.body

    const content = {
        to: 'pkpkelly99@gmail.com',
        from: 'pkpkelly99@gmail.com',
        subject: `${subject}`,
        text: message,
        html: `<p>Name: ${name}, Email: ${email} and Message: ${message}</p>`
    }

    try {
        await sgMail.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}
