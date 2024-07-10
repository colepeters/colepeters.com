import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'

const auth = {
  auth: {
    api_key: process.env.MAILGUN_KEY,
    domain: 'mg.colepeters.com',
  },
}

const transporter = nodemailer.createTransport(mg(auth))

const mailer = async ({ name, email, message }) => {
  const from = `${name} <${email}>`

  // Configure the message
  // https://nodemailer.com/message/
  const mail = {
    from,
    to: 'cole@colepeters.com',
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

export async function post(req) {
  const { name, email, message, e } = req.body

  // if any fields blank, return 403
  if ([name, email, message].includes('')) {
    return {
      statusCode: 400,
    }
  }

  console.log({ e })

  // Honeypot; just redirect to the contact page without sending the email
  if (e) {
    return {
      location: '/contact',
    }
  }

  const mailerRes = await mailer({ name, email, message })

  return {
    location: '/contact',
    session: {
      mailstatus: mailerRes.status,
    },
  }
}
