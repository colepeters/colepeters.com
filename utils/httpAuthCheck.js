import initializeBasicAuth from 'nextjs-basic-auth'

const users = [
  {
    user: process.env.PRIVATE_USER_ID,
    password: process.env.PRIVATE_USER_PASSWORD,
  },
]

export default initializeBasicAuth({
  users,
})
