import R from 'ramda'
import {
  IoIosArrowForward,
  IoIosCheckmarkCircleOutline,
  IoIosSync,
} from 'react-icons/io'
import { useState } from 'react'

import sendEmail from '../services/sendEmail'
import setTitle from '../utils/setTitle'
import {
  Box,
  Button,
  Container,
  Header,
  Heading,
  Input,
  MotionBox,
  Text,
  Textarea,
} from '../components'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const anyEmpty = R.includes('', [name, email, message])

  const [isPending, setIsPending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const submit = async event => {
    event.preventDefault()
    setIsPending(true)

    const recipient = 'cole@colepeters.com'

    const res = await sendEmail({ recipient, name, email, message })
    setIsPending(false)
    if (res.status < 300) {
      setIsSent(true)
    } else {
      setError(
        'Sorry, something went wrong with sending your message. Please try again in a minute.'
      )
    }
  }

  return (
    <>
      {setTitle('Contact')}
      <Header />
      <Container>
        <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
          Contact
        </Heading>
        <Text>
          I post regular updates to my{' '}
          <a href='https://instagram.com/tiltedspheres'>Instagram</a> and{' '}
          <a href='https://twitter.com/tiltedspheres'>Twitter</a> feeds. If
          you’d like to get in touch, feel free to use the contact form below.
        </Text>

        <Box mt={[4, 5]} width={['100%', 2 / 3, 1 / 2]}>
          <Input
            label='Your name:'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            label='Your email address:'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Textarea
            label='Your message:'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </Box>

        {!isSent && !isPending && (
          <Button type='submit' onClick={submit} disabled={anyEmpty}>
            <Text as='span' textDecoration='none' verticalAlign='middle' pr={2}>
              <IoIosArrowForward />
            </Text>
            Send
          </Button>
        )}

        {isPending && (
          <Text fontWeight='500' py={2}>
            <MotionBox
              as='span'
              size='1rem'
              display='inline-block'
              fontWeight='400'
              position='relative'
              top='2px'
              animate={{ scale: [1, 1.25, 1], rotate: [0, 180, 360] }}
              transition={{
                loop: Infinity,
                ease: 'linear',
                duration: 3,
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
                lineHeight: 1,
              }}
            >
              <IoIosSync />
            </MotionBox>
            <Text as='span' pl={2}>
              Sending…
            </Text>
          </Text>
        )}

        {isSent && (
          <Text fontWeight='500' py={2}>
            <MotionBox
              as='span'
              size='1rem'
              display='inline-block'
              animate={{ scale: [1.5, 1], opacity: [0, 1] }}
              transition={{
                type: 'spring',
                stiffness: 600,
                damping: 10,
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
                lineHeight: 1,
              }}
            >
              <Text as='span' fontWeight='400' verticalAlign='middle'>
                <IoIosCheckmarkCircleOutline />
              </Text>
            </MotionBox>
            <Text as='span' pl={2}>
              Thank you! Your message has been sent.
            </Text>
          </Text>
        )}

        {error && <Text my={4}>{error}</Text>}
      </Container>
    </>
  )
}
