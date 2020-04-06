import R from 'ramda'
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

const options = {
  auth: {
    api_key: process.env.SENDGRID_KEY,
  },
}

const transporter = nodemailer.createTransport(sgTransport(options))

const mailer = ({ recipient, name, email, message }) => {
  const from = `${name} <${email}>`

  // Configure the message
  // https://nodemailer.com/message/
  const mail = {
    from,
    to: recipient,
    subject: `[colepeters.com] New message from ${name}`,
    text: message,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default async function(req, res) {
  const { recipient, name, email, message } = req.body

  // if any fields blank, return 403
  if (R.includes('', [recipient, name, email, message])) {
    res.status(403).send('')
    return
  }

  const mailerRes = await mailer({ recipient, name, email, message })
  res.send(mailerRes)
}
