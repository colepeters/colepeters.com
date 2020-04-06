import axios from 'axios'

export default async function sendEmail({ recipient, name, email, message }) {
  try {
    const res = await axios({
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        recipient,
        name,
        email,
        message,
      },
    })
    return res
  } catch (error) {
    return error
  }
}
